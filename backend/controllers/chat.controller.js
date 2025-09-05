import cloudinary from "../config/cloudinary-config.js";
import Chat from "../models/chat.model.js";
import Notification from "../models/notification.model.js";
import User from "../models/user.model.js";
import { getReceiverSocketId, io } from "../socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { content, image } = req.body;
    const senderId = req.user.id;
    if (!receiverId || !content) {
      return res
        .status(400)
        .json({ message: "Receiver ID and content are required" });
    }

    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ message: "Cannot send message to yourself" });
    }

    let imageurl = null;
    if (image) {
      try {
        const uploadResponse = await cloudinary.uploader.upload(image, {
          folder: "chat-images",
        });
        imageurl = uploadResponse.secure_url;
      } catch (err) {
        console.error("Cloudinary upload error:", err);
        return res.status(500).json({ message: "Image upload failed" });
      }
    }

    const newMessage = await Chat.create({
      senderId,
      receiverId,
      content,
      image: imageurl,
    });

    if (!newMessage) {
      return res.status(500).json({ message: "Failed to send message" });
    }

    const newNotification = await Notification.create({
      senderId,
      receiverId,
      chat: newMessage._id,
    });

    if (!newNotification) {
      return res.status(500).json({ message: "Failed to create notification" });
    }

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    return res
      .status(201)
      .json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    if (!receiverId) {
      return res.status(400).json({ message: "Receiver ID is required" });
    }

    const messages = await Chat.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 });

    if (!messages) {
      return res.status(404).json({ message: "No messages found" });
    }

    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSideBarUsers = async (req, res) => {
  try {
    const userId = req.user.id;

    const users = await User.find({
      _id: {
        $ne: userId,
      },
    }).select("-password");

    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching sidebar users:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

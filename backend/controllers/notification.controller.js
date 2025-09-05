import Notification from "../models/notification.model.js";

export const getAllNotifications = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const notifications = await Notification.find({
      receiverId: userId,
      unread: true,
    })
      .populate("senderId", "name email")
      .populate("receiverId", "name email")
      .populate("chat")
      .sort({ createdAt: -1 });

    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: "No notifications found" });
    }

    return res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const markReadById = async (req, res) => {
  try {
    const notificationId = req.params.id;
    const userId = req.user.id;

    if (!notificationId || !userId) {
      return res
        .status(400)
        .json({ message: "Notification ID and User ID are required" });
    }

    const notification = await Notification.findOneAndUpdate(
      { _id: notificationId, receiverId: userId, unread: true },
      { $set: { unread: false } },
      { new: true }
    );

    if (!notification) {
      return res
        .status(404)
        .json({ message: "Notification not found or already read" });
    }

    return res.status(200).json({
      message: "Notification marked as read",
    });
  } catch (error) {
    console.error("Error marking notification as read:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const markAllRead = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    await Notification.updateMany(
      { receiverId: userId, unread: true },
      { $set: { unread: false } }
    );
    return res.status(200).json({
      message: "All notifications marked as read",
    });
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

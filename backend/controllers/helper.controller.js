import Help from "../models/help.model.js";
import User from "../models/user.model.js";

export const addHelps = async (req, res) => {
  const { title, description, location, isEmergency } = req.body;
  try {
    if (!title || !description || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const help = await Help.create({
      title,
      description,
      location,
      userId: req.user.id,
      isEmergency: isEmergency || false,
    });

    const userId = req.user.id;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    const user = await User.findById(userId);
    user.ReportedHelps.push(help._id);
    await user.save();

    return res.status(201).json({
      message: "Help added successfully",
    });
  } catch (error) {
    console.error("Error adding help:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const resolveHelps = async (req, res) => {
  try {
    const helpId = req.params.id;
    if (!helpId) {
      return res.status(400).json({ message: "Help ID is required" });
    }
    const help = await Help.findById(helpId);
    if (!help) {
      return res.status(404).json({ message: "Help not found" });
    }
    if (help.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to resolve this help" });
    }
    help.status = "closed";
    await help.save();
    return res.status(200).json({
      message: "Help resolved successfully",
    });
  } catch (error) {}
};

export const getAllHelps = async (req, res) => {
  try {
    const helps = await Help.find({
      status: "open",
    })
      .populate("userId")
      .sort({ createdAt: -1 });

    return res.status(200).json(helps);
  } catch (error) {
    console.error("Error fetching helps:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getHelp = async (req, res) => {
  try {
    const helpId = req.params.id;
    if (!helpId) {
      return res.status(400).json({ message: "Help ID is required" });
    }
    const help = await Help.findById(helpId).populate("userId");
    if (!help) {
      return res.status(404).json({ message: "Help not found" });
    }
    return res.status(200).json(help);
  } catch (error) {
    console.error("Error fetching help:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getLimitedHelps = async (req, res) => {
  try {
    const helps = await Help.find({
      status: "open",
    })
      .populate("userId")
      .sort({ createdAt: -1 })
      .limit(10);

    return res.status(200).json(helps);
  } catch (error) {
    console.error("Error fetching helps:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getEmergencyHelps = async (req, res) => {
  try {
    const helps = await Help.find({
      isEmergency: true,
      status: "open",
    })
      .populate("userId")
      .sort({ createdAt: -1 });

    return res.status(200).json(helps);
  } catch (error) {
    console.error("Error fetching emergency helps:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

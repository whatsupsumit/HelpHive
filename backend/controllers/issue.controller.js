import cloudinary from "../config/cloudinary-config.js";
import Issue from "../models/issue.model.js";
import User from "../models/user.model.js";

export const addIssue = async (req, res) => {
  try {
    const { title, description, location, image } = req.body;
    if (!title || !description || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const imageurl = null;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageurl = uploadResponse.secure_url;
    }

    const issue = await Issue.create({
      title,
      description,
      location,
      userId: req.user.id,
      image: imageurl,
    });

    const userId = req.user.id;
    const user = await User.findById(userId);
    user.ReportedIssues.push(issue._id);
    await user.save();

    issue.users.push(userId);
    await issue.save();

    return res.status(201).json({
      message: "Issue added successfully",
    });
  } catch (error) {
    console.error("Error adding issue:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addingIssue = async (req, res) => {
  try {
    const issueId = req.params.id;
    if (!issueId) {
      return res.status(400).json({ message: "Issue ID is required" });
    }
    const issue = await Issue.findById(issueId);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }
    const user = await User.findById(req.user.id);
    const isAdded = issue.users.find((user) => user.toString() === req.user.id);
    if (isAdded) {
      issue.users.splice(issue.users.indexOf(req.user.id), 1);
      await issue.save();
      user.ReportedIssues.splice(user.ReportedIssues.indexOf(issue._id), 1);
      await user.save();
    } else {
      issue.users.push(req.user.id);
      await issue.save();
      user.ReportedIssues.push(issue._id);
      await user.save();
    }
    return res.status(200).json({
      message: "Issue updated successfully",
    });
  } catch (error) {
    console.error("Error adding to issue:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const resolveIssue = async (req, res) => {
  try {
    const issueId = req.params.id;
    if (!issueId) {
      return res.status(400).json({ message: "Issue ID is required" });
    }
    const issue = await Issue.findById(issueId);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }
    if (issue.userId.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to resolve this issue" });
    }
    issue.isResolved = true;
    await issue.save();
    return res.status(200).json({
      message: "Issue resolved successfully",
    });
  } catch (error) {
    console.error("Error resolving issue:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllIssue = async (req, res) => {
  try {
    const issues = await Issue.find({
      isResolved: false,
    })
      .populate("userId")
      .populate("users")
      .sort({ createdAt: -1 });
    return res.status(200).json(issues);
  } catch (error) {
    console.error("Error fetching issues:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getIssue = async (req, res) => {
  try {
    const issueId = req.params.id;
    if (!issueId) {
      return res.status(400).json({ message: "Issue ID is required" });
    }
    const issue = await Issue.findById(issueId)
      .populate("userId")
      .populate("users");
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }
    return res.status(200).json(issue);
  } catch (error) {
    console.error("Error fetching issue:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getlimitedissues = async (req, res) => {
  try {
    const issues = await Issue.find({
      isResolved: false,
    })
      .populate("userId")
      .populate("users")
      .sort({ createdAt: -1 })
      .limit(10);
    return res.status(200).json(issues);
  } catch (error) {
    console.error("Error fetching issues:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

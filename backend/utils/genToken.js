import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const generateToken = async (user_id, res) => {
  try {
    const user = await User.findById(user_id);
    if (!user) {
      return null;
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Only send cookie over HTTPS
      sameSite: "none", // Allow cross-site cookies (for frontend-backend on different domains)
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
  } catch (error) {
    console.error("Error generating token:", error);
    return null;
  }
};

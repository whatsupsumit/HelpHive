import jwt from "jsonwebtoken";

export const authToken = async (req, res, next) => {
  try {
    const { token } = await req.cookies;
    if (!token) {
      return res
        .status(400)
        .json({ message: "Unauthorized-Token not provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: "Authentication Failed" });
    console.log("Error in get authToken component", error);
  }
};

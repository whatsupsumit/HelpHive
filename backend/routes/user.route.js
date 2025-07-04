import express from "express";
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { authToken } from "../middlewares/authToken.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/getUser", authToken, getUser);

export default router;

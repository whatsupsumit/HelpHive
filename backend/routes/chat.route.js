import express from "express";
import {
  getMessages,
  getUsers,
  sendMessage,
} from "../controllers/chat.controller.js";
import { authToken } from "../middlewares/authToken.js";
const router = express.Router();

router.post("/sendMessage/:id", authToken, sendMessage);
router.get("/getMessages/:id", authToken, getMessages);
router.get("/getUsers", authToken, getUsers);

export default router;

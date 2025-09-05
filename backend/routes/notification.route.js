import express from "express";
import { authToken } from "../middlewares/authToken.js";
import {
  getAllNotifications,
  markAllRead,
  markReadById,
} from "../controllers/notification.controller.js";
const router = express.Router();

router.get("/get-notifications", authToken, getAllNotifications);
router.post("/mark-as-read/:id", authToken, markReadById);
router.post("/mark-all-as-read", authToken, markAllRead);

export default router;

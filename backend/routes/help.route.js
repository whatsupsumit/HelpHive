import express from "express";
import { authToken } from "../middlewares/authToken.js";
import {
  addHelps,
  getAllHelps,
  getHelp,
  resolveHelps,
} from "../controllers/helper.controller.js";

const router = express.Router();

router.post("/addhelp", authToken, addHelps);
router.patch("/resolvehelp/:id", authToken, resolveHelps);
router.get("/getallhelps", authToken, getAllHelps);
router.get("/gethelp/:id", authToken, getHelp);

export default router;

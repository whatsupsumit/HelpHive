import express from "express";
import { authToken } from "../middlewares/authToken.js";
import {
  addHelps,
  getAllHelps,
  getEmergencyHelps,
  getHelp,
  getLimitedHelps,
  getMyHelps,
  resolveHelps,
} from "../controllers/helper.controller.js";

const router = express.Router();

router.post("/addhelp", authToken, addHelps);
router.patch("/resolvehelp/:id", authToken, resolveHelps);
router.get("/getlimitedhelps", getLimitedHelps);
router.get("/getemergencyhelps", getEmergencyHelps);
router.get("/getmyhelps", authToken, getMyHelps);
router.get("/getallhelps", getAllHelps);
router.get("/gethelp/:id", authToken, getHelp);

export default router;

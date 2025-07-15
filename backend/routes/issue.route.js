import express from "express";
import { authToken } from "../middlewares/authToken.js";
import {
  addIssue,
  addingIssue,
  resolveIssue,
  getAllIssue,
  getIssue,
  getlimitedissues,
  getMyIssues,
} from "../controllers/issue.controller.js";
const router = express.Router();

router.post("/addissue", authToken, addIssue);
router.put("/addingissue/:id", authToken, addingIssue);
router.patch("/resolveissue/:id", authToken, resolveIssue);
router.get("/getlimitedissues", authToken, getlimitedissues);
router.get("/getallissues", authToken, getAllIssue);
router.get("/getissue/:id", authToken, getIssue);
router.get("/getmyissues", authToken, getMyIssues);

export default router;

import dotenv from "dotenv";
import express from "express";
dotenv.config();
import connectDB from "./config/mongoose-connection.js";
import cors from "cors";

import userRouter from "./routes/user.route.js";
import helpRouter from "./routes/help.route.js";
import issueRouter from "./routes/issue.route.js";
import chatRouter from "./routes/chat.route.js";
import notificationRouter from "./routes/notification.route.js";
import cookieParser from "cookie-parser";

import { app, server } from "./socket.js";

app.use(
  cors({
    origin: ["https://help-hivee.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Help Hive!");
});

app.get("/api", (req, res) => {
  res.send("This is Help Hive API!");
});

app.use(cookieParser());

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use(
  express.raw({
    limit: "50mb",
  })
);

app.use(
  express.text({
    limit: "5mb",
  })
);

app.use("/api/users", userRouter);
app.use("/api/helps", helpRouter);
app.use("/api/issues", issueRouter);
app.use("/api/chats", chatRouter);
app.use("/api/notifications", notificationRouter);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

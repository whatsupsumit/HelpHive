import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/mongoose-connection.js";

import userRouter from "./routes/user.route.js";
import helpRouter from "./routes/help.route.js";
import issueRouter from "./routes/issue.route.js";
import chatRouter from "./routes/chat.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("Help Hive API!");
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});

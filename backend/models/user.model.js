import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    ReportedIssues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],
    ReportedHelps: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Help",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
export default User;

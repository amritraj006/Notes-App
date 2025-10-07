import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  noteId: { type: mongoose.Schema.Types.ObjectId, ref: "Note", required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: null }, // null if main comment
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);

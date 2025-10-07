import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  profileImage: { type: String },
}, { timestamps: true });

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  education: { type: String },
  projects: { type: Array },
  skills: { type: Array }
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile; // ✅ Correct export for ES Modules
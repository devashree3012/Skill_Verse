import UserProfile from "../models/UserProfile.js"; // ✅ Use ES Module import

// Get Profile by User ID
export const getProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update or Create Profile
export const updateProfile = async (req, res) => {
  const { userId, name, email, education, projects, skills } = req.body;
  try {
    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      { name, email, education, projects, skills },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Profile update failed" });
  }
};
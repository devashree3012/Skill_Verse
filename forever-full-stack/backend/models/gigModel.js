const mongoose = require("mongoose");

const GigSchema = new mongoose.Schema({
  title: String,
  description: String,
  stipend: Number,
  skillsRequired: [String],
  registrationDeadline: Date,
  courseDuration: String,
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to client who posted the gig
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // List of applicants
});

module.exports = mongoose.model("Gig", GigSchema);

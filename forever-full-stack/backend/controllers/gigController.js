const Gig = require("../models/Gig");
const User = require("../models/User");

// Post a new gig
exports.addGig = async (req, res) => {
  try {
    const { title, description, skills, stipend, deadline, duration } = req.body;
    const newGig = new Gig({ title, description, skills, stipend, deadline, duration, applicants: [], approvedApplicants: [] });
    await newGig.save();
    res.status(201).json({ success: true, message: "Gig posted successfully", gig: newGig });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Fetch all gigs
exports.getAllGigs = async (req, res) => {
  try {
    const gigs = await Gig.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, gigs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Fetch a single gig by ID
exports.getGigById = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id).populate("applicants");
    if (!gig) return res.status(404).json({ success: false, message: "Gig not found" });
    res.status(200).json({ success: true, gig });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Approve or reject an applicant
exports.manageApplicant = async (req, res) => {
  try {
    const { gigId, applicantId, action } = req.body;
    const gig = await Gig.findById(gigId);
    if (!gig) return res.status(404).json({ success: false, message: "Gig not found" });
    
    if (action === "approve") {
      gig.approvedApplicants.push(applicantId);
      gig.applicants = gig.applicants.filter(id => id.toString() !== applicantId);
    } else if (action === "reject") {
      gig.applicants = gig.applicants.filter(id => id.toString() !== applicantId);
    }
    
    await gig.save();
    res.status(200).json({ success: true, message: `Applicant ${action}ed successfully` });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

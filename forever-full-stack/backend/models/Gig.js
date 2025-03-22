import mongoose from 'mongoose';

const gigSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: { type: [String], required: true },
    stipend: { type: Number, required: true },
    registrationDeadline: { type: Date, required: true },
    courseDuration: { type: String, required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    selectedStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    status: { type: String, default: 'Open' }
});

// ✅ Correct Export
const Gig = mongoose.models.Gig || mongoose.model('Gig', gigSchema);
export default Gig;

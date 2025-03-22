import mongoose from 'mongoose';

const GigSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: [{ type: String, required: true }],
    stipend: { type: Number, required: true },
    registrationDeadline: { type: Date, required: true },
    courseDuration: { type: Number, required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

const Gig = mongoose.model('Gig', GigSchema);
export default Gig;

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import authRoutes from './routes/authRoutes.js';
import gigRoutes from './routes/gigRoutes.js';
import userRouter from './routes/userRoute.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
const mongoURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET || "greatstack";

global.activeTokens = global.activeTokens || [];
console.log("Active Tokens:", global.activeTokens.length ? global.activeTokens : "No tokens found.");

if (!mongoURI) {
    console.error("❌ MONGODB_URI is missing in .env file");
    process.exit(1);
}

console.log("✅ JWT_SECRET:", jwtSecret ? "Loaded" : "Not Found");
console.log("✅ Mongo URI:", mongoURI ? "Loaded" : "Not Found");

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Error:", error.message);
        process.exit(1);
    }
};

connectDB();

// Generate JWT Token for a User (For Debugging)
app.get('/api/generate-token/:userId', (req, res) => {
    const { userId } = req.params;
    const token = jwt.sign({ id: userId }, jwtSecret, { expiresIn: '1h' });
    global.activeTokens.push(token);
    res.json({ success: true, token });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/gigs', gigRoutes);
app.use('/api/user', userRouter);

// Default Route
app.get('/', (req, res) => {
    res.send("🚀 Skill Marketplace Backend Running");
});

// Server Listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));

// ✅ Handle unexpected errors (Prevents crashes)
process.on('unhandledRejection', (err) => {
    console.error("🚨 Unhandled Promise Rejection:", err.message);
    process.exit(1);
});

app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

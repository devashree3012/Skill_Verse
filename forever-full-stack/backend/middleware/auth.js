import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    console.log("Received Token:", req.headers.authorization);
    console.log("🛑 Authorization Header:", authHeader); // Debugging

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log("❌ No valid Authorization header found!");
        return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
    }

    const token = authHeader.split(' ')[1];
    console.log("✅ Extracted Token:", token); // Debugging

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("🔑 Decoded Token:", verified); // Debugging

        req.user = verified;

        if (!req.user) {
            console.log("❌ req.user is undefined after verification!");
            return res.status(401).json({ success: false, message: "Access Denied: Token verification failed" });
        }

        console.log("✅ req.user successfully set:", req.user);
        next();
    } catch (error) {
        console.error("🔥 Token Verification Error:", error.message);
        res.status(403).json({ success: false, message: "Invalid Token" });
    }
};

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import TeamMember from '../models/TeamMember.js';

const router = express.Router();

// POST /api/auth/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user exists
        const user = await TeamMember.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 2. Compare entered password with hashed password in database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user._id, access: user.access },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        // 4. Send response (excluding the password)
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                access: user.access
            }
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
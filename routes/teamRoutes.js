import express from 'express';
import TeamMember from '../models/TeamMember.js';

const router = express.Router();

// GET all team members
router.get('/', async (req, res) => {
    try {
        const team = await TeamMember.find();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new team member
router.post('/', async (req, res) => {
    const newMember = new TeamMember(req.body);
    try {
        const savedMember = await newMember.save();
        res.status(201).json(savedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
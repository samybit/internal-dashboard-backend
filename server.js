import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import teamRoutes from './routes/teamRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Public Route
app.use('/api/auth', authRoutes);

// Protected Routes (Notice the `protect` function inserted before the router)
app.use('/api/team', protect, teamRoutes);
app.use('/api/invoices', protect, invoiceRoutes);

// MongoDB Connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
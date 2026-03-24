import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TeamMember from './models/TeamMember.js';
import Invoice from './models/Invoice.js';

dotenv.config();

const mockTeamData = [
    { name: 'Samy Barsoum', email: 'samy@corporate.com', age: 24, phone: '(555) 123-4567', access: 'admin' },
    { name: 'Amiya Rhodes', email: 'amiya@corporate.com', age: 27, phone: '(555) 234-5678', access: 'manager' },
    { name: 'Preston Garvey', email: 'preston@corporate.com', age: 35, phone: '(555) 345-6789', access: 'user' },
    { name: 'Kal\'tsit', email: 'kaltsit@corporate.com', age: 42, phone: '(555) 456-7890', access: 'admin' },
    { name: 'John Smith', email: 'john.smith@corporate.com', age: 28, phone: '(555) 567-8901', access: 'user' },
    { name: 'Sarah Connor', email: 'sarah@corporate.com', age: 31, phone: '(555) 678-9012', access: 'manager' },
    { name: 'Arthur Maxson', email: 'arthur@corporate.com', age: 29, phone: '(555) 789-0123', access: 'user' },
    { name: 'Elena Fisher', email: 'elena@corporate.com', age: 26, phone: '(555) 890-1234', access: 'user' },
];

const mockInvoices = [
    { name: 'Samy Barsoum', email: 'samy@corporate.com', cost: 21.24, phone: '(555) 123-4567', date: '2026-03-15' },
    { name: 'Amiya Rhodes', email: 'amiya@corporate.com', cost: 124.50, phone: '(555) 234-5678', date: '2026-03-18' },
    { name: 'Preston Garvey', email: 'preston@corporate.com', cost: 10900.00, phone: '(555) 345-6789', date: '2026-03-19' },
    { name: 'Kal\'tsit', email: 'kaltsit@corporate.com', cost: 34.00, phone: '(555) 456-7890', date: '2026-03-20' },
    { name: 'John Smith', email: 'john.smith@corporate.com', cost: 15.99, phone: '(555) 567-8901', date: '2026-03-21' },
    { name: 'Sarah Connor', email: 'sarah@corporate.com', cost: 450.50, phone: '(555) 678-9012', date: '2026-03-22' },
    { name: 'Arthur Maxson', email: 'arthur@corporate.com', cost: 87.20, phone: '(555) 789-0123', date: '2026-03-23' },
    { name: 'Elena Fisher', email: 'elena@corporate.com', cost: 235.00, phone: '(555) 890-1234', date: '2026-03-24' },
];

const seedDatabase = async () => {
    try {
        // 1. Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB for seeding...');

        // 2. Clear existing data to prevent duplicates
        await TeamMember.deleteMany({});
        await Invoice.deleteMany({});
        console.log('Cleared existing database collections.');

        // 3. Insert the mock data
        await TeamMember.insertMany(mockTeamData);
        await Invoice.insertMany(mockInvoices);
        console.log('Successfully seeded database with mock data.');

        // 4. Exit the process
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
import express from 'express';
import Invoice from '../models/Invoice.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const newInvoice = new Invoice(req.body);
    try {
        const savedInvoice = await newInvoice.save();
        res.status(201).json(savedInvoice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
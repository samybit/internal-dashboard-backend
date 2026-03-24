import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cost: { type: Number, required: true },
    phone: { type: String, required: true },
    date: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Invoice', invoiceSchema);
import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    access: {
        type: String,
        required: true,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    }
}, { timestamps: true });

export default mongoose.model('TeamMember', teamMemberSchema);
const mongoose = require('mongoose');

const simCardSchema = new mongoose.Schema({
    sim_number: { type: String, required: true, unique: true },
    phone_number: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
    activation_date: { type: Date, default: null },
});

const SimCard = mongoose.model('SimCard', simCardSchema);

module.exports = SimCard;

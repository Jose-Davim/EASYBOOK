const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, enum: ['restaurant', 'hairdresser', 'gym'], required: true },
    description: String,
    duration: Number, // Duração do serviço em minutos
    location: String,
    image: String,
    ratings: { type: Number, default: 0 },
});

module.exports = mongoose.model('Service', ServiceSchema);
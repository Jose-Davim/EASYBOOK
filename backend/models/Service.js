const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: { type: String, enum: ['restaurant', 'gym', 'hairdresser'] },
    duration: Number,
    price: Number,
    location: String,
    images: [String]
});

module.exports = mongoose.model('Service', ServiceSchema);

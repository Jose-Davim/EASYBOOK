const mongoose = require('mongoose');

const GymSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    ratings: { type: Number, default: 0 },
    images: [String]
});

module.exports = mongoose.model('Gym', GymSchema);

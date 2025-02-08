const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    ratings: { type: Number, default: 0 },
    images: [String]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);

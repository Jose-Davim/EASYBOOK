const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('service user');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createReview = async (req, res) => {
    try {
        const { service, rating, comment } = req.body;
        const review = new Review({ user: req.user.id, service, rating, comment });
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

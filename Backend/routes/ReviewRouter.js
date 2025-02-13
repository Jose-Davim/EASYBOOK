const express = require('express');
const { getReviews, createReview } = require('../Controllers/ReviewController');
const auth = require('../Middlewares/auth');
const router = express.Router();

// Obter todas as avaliações
router.get('/', getReviews);

// Criar uma avaliação
router.post('/', auth, createReview);

module.exports = router;
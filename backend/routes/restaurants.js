const express = require('express');
const { getRestaurants, createRestaurant } = require('../controllers/restaurantController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getRestaurants);
router.post('/', auth, createRestaurant);

module.exports = router;

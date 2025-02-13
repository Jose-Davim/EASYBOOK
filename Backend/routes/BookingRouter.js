const express = require('express');
const { getBookings, createBooking, cancelBooking } = require('../Controllers/BookingController');
const auth = require('../Middlewares/auth');

const router = express.Router();

router.get('/', auth, getBookings);
router.post('/', auth, createBooking);
router.delete('/:id', auth, cancelBooking);

module.exports = router;

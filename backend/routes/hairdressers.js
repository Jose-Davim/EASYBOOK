const express = require('express');
const { getHairdressers, createHairdresser } = require('../controllers/hairdresserController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getHairdressers);
router.post('/', auth, createHairdresser);

module.exports = router;

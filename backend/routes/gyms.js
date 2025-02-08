const express = require('express');
const { getGyms, createGym } = require('../controllers/gymController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getGyms);
router.post('/', auth, createGym);

module.exports = router;

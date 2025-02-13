const express = require('express');
const { register, login } = require('../Controllers/UserController');
const router = express.Router();

// Rota de registro
router.post('/register', register);

// Rota de login
router.post('/login', login);

module.exports = router;
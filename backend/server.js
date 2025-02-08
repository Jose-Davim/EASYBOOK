require('dotenv').config();
const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const morgan = require('morgan');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Rotas
app.use('/api/users', require('./routes/users'));
app.use('/api/restaurants', require('./routes/restaurants'));
app.use('/api/gyms', require('./routes/gyms'));
app.use('/api/hairdressers', require('./routes/hairdressers'));
app.use('/api/services', require('./routes/services'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/reviews', require('./routes/reviews'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

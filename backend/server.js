const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const logger = require('./Middlewares/logger');

dotenv.config();

const app = express();

require('./db');

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(logger);

app.use("/api/users", require('./routes/UserRouter'));
app.use('/api/bookings', require('./routes/BookingRouter'));
app.use('/api/services', require('./routes/ServiceRouter'));
app.use('/api/reviews', require('./routes/ReviewRouter'));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
});

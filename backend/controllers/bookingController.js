const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('service user');
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const { service, date, time } = req.body;
        const booking = new Booking({ user: req.user.id, service, date, time });
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Reserva cancelada' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

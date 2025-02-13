const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    minutes: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);

const Booking = require('../Models/Booking');
const Service = require('../Models/Service'); // Certifique-se de importar o modelo de Serviço

// Obter todas as reservas do usuário com o serviço populado
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id })
            .populate({
                path: "serviceId",
                select: "name", // Traz apenas o nome do serviço
            });

        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar uma reserva
exports.createBooking = async (req, res) => {
    try {
        const { serviceId, date, time, minutes } = req.body;
        if (!serviceId || !date || !time || !minutes) {
            return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
        }

        // Verifica se o serviço existe antes de criar a reserva
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado!" });
        }

        const booking = new Booking({ serviceId, userId: req.user.id, date, time, minutes });
        await booking.save();

        res.status(201).json(booking);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
};

// Cancelar uma reserva
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ error: "Reserva não encontrada!" });
        }

        // Garante que o usuário só pode cancelar a própria reserva
        if (booking.userId.toString() !== req.user.id) {
            return res.status(403).json({ error: "Acesso negado!" });
        }

        await booking.deleteOne();
        res.json({ message: "Reserva cancelada com sucesso!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

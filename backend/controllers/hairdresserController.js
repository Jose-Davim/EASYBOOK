const Hairdresser = require('../models/Hairdresser');

// Listar todos os cabeleireiros
exports.getHairdressers = async (req, res) => {
    try {
        const hairdressers = await Hairdresser.find();
        res.json(hairdressers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar um novo cabeleireiro
exports.createHairdresser = async (req, res) => {
    try {
        const hairdresser = new Hairdresser(req.body);
        await hairdresser.save();
        res.status(201).json(hairdresser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar um cabeleireiro
exports.updateHairdresser = async (req, res) => {
    try {
        const hairdresser = await Hairdresser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(hairdresser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Deletar um cabeleireiro
exports.deleteHairdresser = async (req, res) => {
    try {
        await Hairdresser.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Cabeleireiro deletado com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

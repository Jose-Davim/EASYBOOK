const Gym = require('../models/Gym');

// Listar todos os ginásios
exports.getGyms = async (req, res) => {
    try {
        const gyms = await Gym.find();
        res.json(gyms);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar um novo ginásio
exports.createGym = async (req, res) => {
    try {
        const gym = new Gym(req.body);
        await gym.save();
        res.status(201).json(gym);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar um ginásio
exports.updateGym = async (req, res) => {
    try {
        const gym = await Gym.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(gym);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Deletar um ginásio
exports.deleteGym = async (req, res) => {
    try {
        await Gym.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Ginásio deletado com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

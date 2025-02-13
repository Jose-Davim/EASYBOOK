const Service = require('../Models/Service');
const mongoose = require("mongoose"); 

// Buscar um serviço pelo ID
exports.getServiceById = async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica se o ID é válido no MongoDB
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }

        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ error: "Serviço não encontrado" });
        }

        res.json(service);
    } catch (err) {
        console.error("Erro ao buscar serviço:", err);
        res.status(500).json({ error: "Erro interno do servidor" });
    }
};



// Obter todos os serviços
exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar um serviço
exports.createService = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ error: "Acesso negado! Apenas administradores podem criar serviços." });
        }

        const { name, category, description, duration, location, image, ratings } = req.body;

        if (!name || !category) {
            return res.status(400).json({ error: "Nome e categoria são obrigatórios!" });
        }

        const service = new Service({ name, category, description, duration, location, image, ratings });
        await service.save();
        res.status(201).json(service);
    } catch (err) {
        console.error("Erro ao criar serviço:", err);
        res.status(400).json({ error: err.message });
    }
};
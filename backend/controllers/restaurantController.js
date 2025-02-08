const Restaurant = require('../models/Restaurant');

// Listar todos os restaurantes
exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Criar um novo restaurante
exports.createRestaurant = async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar um restaurante
exports.updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(restaurant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Deletar um restaurante
exports.deleteRestaurant = async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Restaurante deletado com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

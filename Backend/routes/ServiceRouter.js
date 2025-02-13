const express = require("express");
const { getServices, createService, getServiceById } = require("../Controllers/ServiceController");
const auth = require("../Middlewares/auth"); // Middleware de autenticação
const router = express.Router();

router.get("/", getServices); // Retorna todos os serviços
router.get("/:id", getServiceById); // Retorna um serviço específico pelo ID
router.post("/", auth, createService); // Cria um serviço (precisa de autenticação)

module.exports = router;

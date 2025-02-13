const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/users');

// Registro de usuário
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Este email já está registrado!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ 
            name, 
            email, 
            password: hashedPassword, 
            role: role || "user" // Define como "user" se não for especificado
        });

        await user.save();
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Login de usuário
exports.login = async (req, res) => {
    try {
        console.log("Recebendo login:", req.body);

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log("Usuário não encontrado!");
            return res.status(401).json({ error: "Usuário não encontrado!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("Senha incorreta!");
            return res.status(401).json({ error: "Senha incorreta!" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        console.log("Login bem-sucedido! Token gerado:", token);
        res.json({ 
            token, 
            userData: { name: user.name, email: user.email, role: user.role } // Retorna a role
        });
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
};
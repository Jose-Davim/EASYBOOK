import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', { name, email, password });
            alert('Usuário registrado com sucesso!');
        } catch (err) {
            alert('Erro ao registrar: ' + err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleRegister} style={styles.form}>
            <h2>Registrar</h2>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" style={styles.button}>Registrar</button>
        </form>
    );
}

const styles = {
    form: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' },
    button: { backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' },
};

export default Register;

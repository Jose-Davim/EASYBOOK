import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/');
        } catch (err) {
            alert('Erro ao fazer login: ' + err.response.data.msg);
        }
    };

    return (
        <form onSubmit={handleLogin} style={styles.form}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" style={styles.button}>Entrar</button>
        </form>
    );
}

const styles = {
    form: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' },
    button: { backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' },
};

export default Login;

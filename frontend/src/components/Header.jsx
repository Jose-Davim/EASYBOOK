import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <header style={styles.header}>
            <h1>EasyBook</h1>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Início</Link>
                <Link to="/services" style={styles.link}>Serviços</Link>
                {user ? (
                    <>
                        <Link to="/profile" style={styles.link}>Perfil</Link>
                        <button onClick={handleLogout} style={styles.button}>Logout</button>
                    </>
                ) : (
                    <Link to="/login" style={styles.link}>Login</Link>
                )}
            </nav>
        </header>
    );
}

const styles = {
    header: { display: 'flex', justifyContent: 'space-between', padding: '15px 20px', backgroundColor: '#444', color: 'white' },
    nav: { display: 'flex', gap: '15px' },
    link: { color: 'white', textDecoration: 'none', fontSize: '18px' },
    button: { backgroundColor: 'red', border: 'none', padding: '8px', color: 'white', cursor: 'pointer' }
};

export default Header;

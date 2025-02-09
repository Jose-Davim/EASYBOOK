import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
    return (
        <div style={styles.container}>
            <h1>Bem-vindo ao EasyBook!</h1>
            <p>Encontre e reserve serviços como restaurantes, ginásios e cabeleireiros.</p>
            <SearchBar />
            <Link to="/services">
                <button style={styles.button}>Ver Todos os Serviços</button>
            </Link>
        </div>
    );
}

const styles = {
    container: { textAlign: 'center', padding: '50px' },
    button: { backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer', marginTop: '20px' },
};

export default Home;

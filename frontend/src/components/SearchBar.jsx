import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/services?search=${query}`);
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                placeholder="Buscar serviços..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleSearch} style={styles.button}>Buscar</button>
        </div>
    );
}

const styles = {
    container: { display: 'flex', gap: '10px', marginBottom: '20px' },
    input: { padding: '8px', width: '200px' },
    button: { backgroundColor: 'blue', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }
};

export default SearchBar;

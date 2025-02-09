import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
    return (
        <div style={styles.card}>
            <img src={service.images[0]} alt={service.name} style={styles.image} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <Link to={`/booking/${service._id}`}>
                <button style={styles.button}>Reservar</button>
            </Link>
        </div>
    );
}

const styles = {
    card: { border: '1px solid #ddd', padding: '15px', margin: '10px', backgroundColor: '#f9f9f9', textAlign: 'center' },
    image: { width: '100%', height: '150px', objectFit: 'cover' },
    button: { backgroundColor: 'green', color: 'white', padding: '8px', border: 'none', cursor: 'pointer' }
};

export default ServiceCard;

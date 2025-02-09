import { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/services')
            .then((res) => setServices(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div style={styles.container}>
            <h2>Lista de Serviços</h2>
            <div style={styles.grid}>
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: { padding: '20px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
};

export default Services;

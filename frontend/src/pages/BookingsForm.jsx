import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookingForm() {
    const { id } = useParams(); // ID do serviço
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:5000/api/bookings',
                { service: id, date, time },
                { headers: { Authorization: localStorage.getItem('token') } }
            );
            alert('Reserva criada com sucesso!');
        } catch (err) {
            alert('Erro ao criar reserva: ' + err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleBooking} style={styles.form}>
            <h2>Fazer Reserva</h2>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <button type="submit" style={styles.button}>Reservar</button>
        </form>
    );
}

const styles = {
    form: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' },
    button: { backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' },
};

export default BookingForm;

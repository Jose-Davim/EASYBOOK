import { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
    const [bookings, setBookings] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/bookings', {
            headers: { Authorization: localStorage.getItem('token') }
        }).then((res) => setBookings(res.data))
          .catch((err) => console.error(err));

        axios.get('http://localhost:5000/api/reviews', {
            headers: { Authorization: localStorage.getItem('token') }
        }).then((res) => setReviews(res.data))
          .catch((err) => console.error(err));
    }, []);

    return (
        <div style={styles.container}>
            <h2>Meu Perfil</h2>
            <h3>Minhas Reservas</h3>
            {bookings.map((booking) => (
                <div key={booking._id} style={styles.card}>
                    <p><strong>Serviço:</strong> {booking.service.name}</p>
                    <p><strong>Data:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                    <p><strong>Hora:</strong> {booking.time}</p>
                </div>
            ))}
            <h3>Minhas Avaliações</h3>
            {reviews.map((review) => (
                <div key={review._id} style={styles.card}>
                    <p><strong>Serviço:</strong> {review.service.name}</p>
                    <p><strong>Nota:</strong> {review.rating} ⭐</p>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
}

const styles = {
    container: { padding: '20px' },
    card: { border: '1px solid #ddd', padding: '10px', marginBottom: '10px' },
};

export default UserProfile;

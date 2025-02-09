import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Reviews() {
    const { serviceId } = useParams(); // ID do serviço
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/reviews?service=${serviceId}`)
            .then((res) => setReviews(res.data))
            .catch((err) => console.error(err));
    }, [serviceId]);

    const handleReview = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                'http://localhost:5000/api/reviews',
                { service: serviceId, rating, comment },
                { headers: { Authorization: localStorage.getItem('token') } }
            );
            alert('Avaliação enviada com sucesso!');
        } catch (err) {
            alert('Erro ao enviar avaliação: ' + err.response.data.error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Avaliações</h2>
            {reviews.map((review) => (
                <div key={review._id} style={styles.card}>
                    <p><strong>Usuário:</strong> {review.user.name}</p>
                    <p><strong>Nota:</strong> {review.rating} ⭐</p>
                    <p>{review.comment}</p>
                </div>
            ))}
            <form onSubmit={handleReview} style={styles.form}>
                <h3>Deixar uma Avaliação</h3>
                <input type="number" placeholder="Nota (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <textarea placeholder="Comentário" value={comment} onChange={(e) => setComment(e.target.value)} required />
                <button type="submit" style={styles.button}>Enviar Avaliação</button>
            </form>
        </div>
    );
}

const styles = {
    container: { padding: '20px' },
    card: { border: '1px solid #ddd', padding: '10px', marginBottom: '10px' },
    form: { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' },
    button: { backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' },
};

export default Reviews;

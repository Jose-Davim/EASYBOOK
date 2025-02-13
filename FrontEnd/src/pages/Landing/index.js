import { useRouter } from 'next/router';

export default function Landpage() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Home');
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <img src="/images/barber.png" alt="Barbeiro" style={styles.image} />
        </div>
        <div style={styles.imageWrapper}>
          <img src="/images/gym.jpeg" alt="Ginásio" style={styles.image} />
        </div>
        <div style={styles.imageWrapper}>
          <img src="/images/restaurant.jpg" alt="Restaurante" style={styles.image} />
        </div>
      </div>
      <div style={styles.content}>
        <h1 style={styles.heading}>Bem-vindo ao EasyBook</h1>
        <p style={styles.subheading}>Reserve restaurantes, ginásios e barbeiros com facilidade</p>
        <button
          style={styles.button}
          onClick={handleButtonClick}
          onMouseOver={e => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={e => e.target.style.backgroundColor = 'white'}
          onMouseDown={e => e.target.style.transform = styles.buttonActive.transform}
          onMouseUp={e => e.target.style.transform = 'scale(1)'}
        >
          Começar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #000, #333)',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  imageContainer: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    width: '80%',
    height: '60%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex: '0',
    transform: 'translateY(-50%)',
  },
  imageWrapper: {
    width: '33%',
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.3)',
  },
  content: {
    zIndex: 1,
  },
  heading: {
    fontSize: '4rem',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '40px',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: 'white',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#ddd',
  },
  buttonActive: {
    transform: 'scale(0.95)',
  },
};
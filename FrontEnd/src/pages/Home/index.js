import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/Services");  // Redireciona para a página de serviços
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>Bem-vindo ao EasyBook</h1>
            <p style={styles.heroDescription}>
              Faça marcações facilmente restaurantes, ginásios e barbearias com apenas alguns cliques.
            </p>
            <a href="/Services">
            <button style={styles.heroButton} href="/Services">Escolher serviço </button>
            </a>
          </div>
          <div style={styles.heroImage}>
            <img src="/images/hero.png" alt="Hero" style={styles.image} />
          </div>
        </section>
        <section style={styles.about}>
          <h2 style={styles.sectionTitle}>Sobre Nós</h2>
          <p style={styles.sectionDescription}>
            No EasyBook, acreditamos em facilitar a vida dos nossos usuários. Com a nossa plataforma, pode reservar facilmente o seu tempo em restaurantes, ginásios, e barbearias favoritos.
          </p>
        </section>
        <section style={styles.services}>
          <h2 style={styles.sectionTitle}>Serviços</h2>
          <div style={styles.serviceItems}>
            <div style={styles.serviceItem}>
              <img src="/images/restaurant.jpg" alt="Restaurante" style={styles.secImage} />
              <h3 style={styles.serviceTitle}>Restaurantes</h3>
              <p style={styles.serviceDescription}>
                Reserve a sua mesa em segundos.
              </p>
            </div>
            <div style={styles.serviceItem}>
              <img src="/images/gym.jpeg" alt="Ginásio" style={styles.secImage} />
              <h3 style={styles.serviceTitle}>Ginásios</h3>
              <p style={styles.serviceDescription}>
                Agende o seu treino com antecedência.
              </p>
            </div>
            <div style={styles.serviceItem}>
              <img src="/images/barber.png" alt="Barbeiro" style={styles.secImage} />
              <h3 style={styles.serviceTitle}>Barbearias</h3>
              <p style={styles.serviceDescription}>
                Marque o seu corte de cabelo com facilidade.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    overflowY: "auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f7f9fc",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#2c3e50",
    color: "white",
    gap: "20px",
  },
  heroText: {
    flex: 1,
    paddingRight: "20px",
    textAlign: "left",
  },
  heroTitle: {
    fontSize: "3.5rem",
    marginBottom: "20px",
  },
  heroDescription: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  heroButton: {
    padding: "15px 40px",
    fontSize: "18px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "25px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
  heroButtonHover: {
    backgroundColor: "#2980b9",
  },
  heroImage: {
    flex: 1,
    textAlign: "right",
  },
  image: {
    width: "80%",
    borderRadius: "10px",
  },
  about: {
    padding: "50px 20px",
    backgroundColor: "white",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  sectionDescription: {
    fontSize: "1.2rem",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#555",
  },
  services: {
    padding: "50px 20px",
    backgroundColor: "#ecf0f1",
    textAlign: "center",
  },
  serviceItems: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  serviceItem: {
    width: "30%",
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  serviceItemHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  secImage: {
    height: "200px",
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "10px",
  },
  serviceTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#555",
  },
};
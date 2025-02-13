import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { api } from "../../services/api";

export default function Services() {
  const [services, setServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    api.get("/api/services")
      .then((response) => setServices(response.data))
      .catch((error) => console.error("Erro ao buscar serviços:", error));
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <h1>Serviços</h1>
        <div style={styles.services}>
          {services.length === 0 ? (
            <p>Carregando serviços...</p>
          ) : (
            services.map((service) => (
              <div key={service._id} style={styles.service}>
                <h2 
                  style={styles.title} 
                  onClick={() => router.push(`/ServiceDetails?id=${service._id}`)}
                >
                  {service.name}
                </h2>
                <p>{service.description}</p>
                <button 
                  style={styles.reserveButton} 
                  onClick={() => router.push(`/BookService?id=${service._id}`)}
                >
                  Reservar
                </button>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", height: "100vh" },
  mainContent: { flexGrow: 1, padding: "20px", textAlign: "center" },
  services: { display: "flex", flexDirection: "column", gap: "30px" },
  service: { padding: "20px", borderRadius: "10px", backgroundColor: "#ecf0f1", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" },
  title: { cursor: "pointer", color: "#007bff", textDecoration: "underline" },
  reserveButton: { padding: "10px 20px", fontSize: "16px", backgroundColor: "#2980b9", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
};

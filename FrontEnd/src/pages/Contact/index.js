import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  useEffect(() => {
    const button = document.querySelector("button[type='submit']");
    if (button) {
      const handleMouseOver = () => {
        button.style.backgroundColor = "#0056b3";
      };

      const handleMouseOut = () => {
        button.style.backgroundColor = "#007bff";
      };

      button.addEventListener("mouseover", handleMouseOver);
      button.addEventListener("mouseout", handleMouseOut);

      // Cleanup listeners on unmount
      return () => {
        button.removeEventListener("mouseover", handleMouseOver);
        button.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <form style={styles.form}>
          <h1 style={styles.heading}>Envia-nos uma mensagem!</h1>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Digite seu nome"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="lastName" style={styles.label}>
              Sobrenome:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Digite seu sobrenome"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="issue" style={styles.label}>
              Descreva o problema:
            </label>
            <textarea
              id="issue"
              name="issue"
              placeholder="Explique brevemente o problema..."
              style={styles.textarea}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" style={styles.button}>
            Enviar Mensagem
          </button>
        </form>
        <h1 style={styles.heading}>Entre em Contato</h1>
        <p style={styles.email}>📧 Email: contato@easybook.com</p>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  mainContent: {
    flexGrow: 1,
    padding: "40px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  email: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
    fontStyle: "italic",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  textarea: {
    width: "100%",
    padding: "12px 15px",
    fontSize: "14px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    magin: "0 auto",
    
  },
};
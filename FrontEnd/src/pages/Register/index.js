import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("As passwords não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError("");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setTimeout(() => {
          router.push("/Login");
        }, 2000);
      } else {
        setError(data.message || "Erro ao registrar.");
      }
    } catch (error) {
      console.error("Erro ao conectar ao backend:", error);
      setError("Erro no servidor. Tenta novamente.");
    }
  };

  return (
    <div style={styles.container}>
      <Header isLoginPage={true} />
      <main style={styles.mainContent}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Criar Conta</h2>
          {error && <div style={styles.error}>{error}</div>}
          {success && <div style={styles.success}>Conta criada com sucesso! Redirecionando...</div>}
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="name">Nome</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="confirmPassword">Confirmar Password</label>
              <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={styles.input} required />
            </div>
            <button type="submit" style={styles.button}>Criar Conta</button>
            <p style={styles.signupText}>Já tens conta? <a href="/Login" style={styles.link}>Inicia sessão aqui</a></p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f5f5f5" },
  mainContent: { flex: 1, padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(to bottom, #1a1a1a, #2d2d2d)" },
  loginBox: { backgroundColor: "#ffffff", padding: "40px", borderRadius: "10px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", width: "100%", maxWidth: "450px", margin: "20px" },
  heading: { fontSize: "2rem", marginBottom: "30px", color: "#333", textAlign: "center", fontWeight: "600" },
  inputGroup: { marginBottom: "25px" },
  label: { display: "block", fontSize: "1rem", marginBottom: "8px", color: "#444", fontWeight: "500" },
  input: { width: "100%", padding: "12px 15px", fontSize: "1rem", borderRadius: "6px", border: "1px solid #ddd", boxSizing: "border-box" },
  button: { width: "100%", padding: "14px", backgroundColor: "#2d2d2d", color: "white", fontSize: "1.1rem", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "600", marginTop: "15px" },
  signupText: { marginTop: "25px", textAlign: "center", color: "#666", fontSize: "0.95rem" },
  link: { color: "#2d2d2d", textDecoration: "none", fontWeight: "600" },
  error: { color: "#dc3545", backgroundColor: "#f8d7da", padding: "12px", borderRadius: "6px", marginBottom: "20px", border: "1px solid #f5c6cb", textAlign: "center" },
  success: { color: "#28a745", backgroundColor: "#d4edda", padding: "12px", borderRadius: "6px", marginBottom: "20px", border: "1px solid #c3e6cb", textAlign: "center" },
};
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await login(email, password);
    } catch (err) {
      setError("Email ou senha incorretos!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <Header isLoginPage={true} />
      <main style={styles.mainContent}>
        <div style={styles.loginBox}>
          <h2 style={styles.heading}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label} htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            <button type="submit" style={styles.button} disabled={isLoading}>
              {isLoading ? "Carregando..." : "Login"}
            </button>
            {error && <p style={styles.errorText}>{error}</p>}
            <p style={styles.signupText}>
              Não tens conta? <a href="/Register" style={styles.link}>Cria uma aqui</a>
            </p>
          </form>
        </div>
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
  },
  mainContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #000, #333)",
  },
  loginBox: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#2c3e50",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "1rem",
    marginBottom: "5px",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    fontSize: "1.2rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  signupText: {
    marginTop: "20px",
    textAlign: "center",
    color: "#7f8c8d",
  },
  link: {
    color: "black",
    textDecoration: "none",
  },
  errorText: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
}
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // Verifica se está na página de Login ou Registro
  const isAuthPage = router.pathname === "/Login" || router.pathname === "/Register";

  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.title} onClick={() => router.push("/Home")}>EASYBOOK</h1>
      </div>

      {/* Só mostra os links se NÃO estiver em Login/Register */}
      {!isAuthPage && (
        <nav style={styles.center}>
          <a style={styles.link} onClick={() => router.push("/Services")}>Serviços</a>
          <a style={styles.link} onClick={() => router.push("/Contact")}>Contato</a>
        </nav>
      )}

      <div style={styles.right}>
        {user ? (
          !isAuthPage && ( // Também esconde em Login/Register
            <>
              {user.role === "admin" && ( // Mostra Admin apenas para administradores
                <a style={styles.link} onClick={() => router.push("/AdminPage")}>Admin</a>
              )}
              <a style={styles.link} onClick={() => router.push("/Profile")}>Perfil</a>
              <a style={styles.link} onClick={() => router.push("/MyBookings")}>Minhas Reservas</a>
              <button style={styles.button} onClick={logout}>Logout</button>
            </>
          )
        ) : (
          !isAuthPage && ( // Só mostra Login se NÃO estiver em Login/Register
            <button style={styles.button} onClick={() => router.push("/Login")}>Login</button>
          )
        )}
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: "100vw", // Ocupa toda a largura da tela
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    position: "fixed", // Mantém o header fixo no topo
    top: 0,
    left: 0, // Garante que começa do canto esquerdo
    zIndex: 1000, // Mantém o header acima de outros elementos
  },
  title: {
    cursor: "pointer",
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  link: {
    margin: "10px",
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s",
  },
};

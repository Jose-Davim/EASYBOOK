export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.left}>
          <p style={styles.copy}>&copy; 2025 EasyBook. Todos os direitos reservados.</p>
        </div>
        <div style={styles.right}>
          <a href="/Contact" style={styles.link}>Contactos</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: "100vw", // Ocupa toda a largura da tela
    padding: "20px",
    background: "linear-gradient(to bottom, #333, #000)",
    color: "#ecf0f1",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Ou "fixed" para ficar sempre fixo na parte inferior
    bottom: 0,
    left: 0, // Garante que começa do canto esquerdo
  },
  footerContent: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  copy: {
    margin: 0,
    fontSize: "14px",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "16px",
    margin: "0 10px",
    transition: "color 0.3s ease",
  },
  separator: {
    color: "#ecf0f1",
    margin: "0 10px",
  },
  linkHover: {
    color: "#3498db",
  },
};

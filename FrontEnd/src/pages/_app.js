import '../styles/globals.css';
import { AuthProvider } from "@/contexts/AuthContext"; // Importa o contexto

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

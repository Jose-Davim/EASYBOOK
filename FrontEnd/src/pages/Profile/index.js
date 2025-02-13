import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";

export default function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/Login");
    }
  }, [user]);

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <h1>Perfil</h1>
        {user ? <p>Email: {user.email}</p> : <p>Redirecionando...</p>}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", height: "100vh" },
  mainContent: { flexGrow: 1, padding: "20px", textAlign: "center" },
};
import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: "", category: "", description: "", duration: "", location: "", image: "" });

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/");
    } else {
      fetchServices();
    }
  }, [user]);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.get("/api/services", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setServices(response.data);
    } catch (error) {
      console.error("Erro ao buscar serviços", error);
    }
  };

  const handleCreateService = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("❌ Nenhum token encontrado. O usuário está autenticado?");
            alert("Erro: Token de autenticação não encontrado. Faça login novamente.");
            return;
        }

        console.log("📌 Enviando token:", token); // Verifica se o token está correto

        const response = await api.post("/api/services", newService, {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("✅ Serviço criado com sucesso!", response.data);
        setServices([...services, response.data]);
        setNewService({ name: "", category: "", description: "", duration: "", location: "", image: "" });
    } catch (error) {
        console.error("❌ Erro ao criar serviço", error);
        if (error.response) {
            console.error("🔴 Resposta do servidor:", error.response.data);
        }
    }
};
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <h1>Painel Administrativo</h1>
        <form onSubmit={handleCreateService} style={styles.form}>
          <input type="text" placeholder="Nome do serviço" value={newService.name} onChange={(e) => setNewService({ ...newService, name: e.target.value })} required style={styles.input} />
          <select value={newService.category} onChange={(e) => setNewService({ ...newService, category: e.target.value })} required style={styles.input}>
            <option value="">Selecione a categoria</option>
            <option value="restaurant">Restaurante</option>
            <option value="hairdresser">Cabeleireiro</option>
            <option value="gym">Ginásio</option>
          </select>
          <input type="text" placeholder="Descrição" value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} required style={styles.input} />
          <input type="number" placeholder="Duração (min)" value={newService.duration} onChange={(e) => setNewService({ ...newService, duration: e.target.value })} required style={styles.input} />
          <input type="text" placeholder="Localização" value={newService.location} onChange={(e) => setNewService({ ...newService, location: e.target.value })} required style={styles.input} />
          <input type="text" placeholder="URL da Imagem" value={newService.image} onChange={(e) => setNewService({ ...newService, image: e.target.value })} required style={styles.input} />
          <button type="submit" style={styles.button}>Criar Serviço</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center", height: "100vh", display: "flex", flexDirection: "column" },
  main: {padding: "20px", maxWidth: "600px", margin: "auto", textAlign: "center", height: "100vh", display: "flex", flexDirection: "column" },
  form: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" },
  input: { padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" },
  button: { padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
};
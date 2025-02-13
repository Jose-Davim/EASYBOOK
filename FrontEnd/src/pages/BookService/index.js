import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookService() {
    const router = useRouter();
    const { user } = useAuth();
    const [serviceId, setServiceId] = useState(null);
    const [service, setService] = useState(null); // Estado para armazenar os detalhes do serviço
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [minutes, setMinutes] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Extrai o ID do serviço da URL
    useEffect(() => {
        if (router.isReady) {
            const { id } = router.query;
            if (id) {
                console.log("✅ ID do serviço encontrado:", id);
                setServiceId(id);
            } else {
                console.error("❌ Nenhum ID encontrado na URL!");
                setError("ID do serviço não encontrado.");
            }
        }
    }, [router.isReady, router.query]);

    // Redireciona se o usuário não estiver autenticado
    useEffect(() => {
        if (!user) {
            router.push("/Login");
        }
    }, [user]);

    // Busca os detalhes do serviço
    useEffect(() => {
        if (serviceId) {
            const fetchService = async () => {
                try {
                    console.log("📡 Buscando serviço do backend...");
                    const response = await api.get(`/api/services/${serviceId}`);
                    setService(response.data);
                } catch (err) {
                    console.error("❌ Erro ao buscar serviço:", err.response?.data || err.message);
                    setError("Serviço não encontrado.");
                }
            };
            fetchService();
        }
    }, [serviceId]);

    const handleBooking = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!serviceId || !date || !time || !minutes) {
            console.error("❌ Todos os campos são obrigatórios!");
            setLoading(false);
            return;
        }

        const token = localStorage.getItem("authToken");
        if (!token) {
            console.error("❌ Usuário não autenticado!");
            setLoading(false);
            return;
        }

        try {
            const bookingData = { serviceId, userId: user._id, date, time, minutes };
            console.log("📡 Enviando requisição:", bookingData);
            
            const response = await api.post("/api/bookings", bookingData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("✅ Reserva criada com sucesso!", response.data);
            router.push("/MyBookings"); // Redireciona para a página de reservas
        } catch (error) {
            console.error("❌ Erro ao criar reserva:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Header />
            <main style={{ padding: "20px", textAlign: "center" }}>
                <h1>Reservar Serviço</h1>
                {error ? (
                    <p style={{ color: "red" }}>{error}</p>
                ) : !service ? (
                    <p>Carregando informações do serviço...</p>
                ) : (
                    <div>
                        <h2>{service.name}</h2>
                        <p><strong>Categoria:</strong> {service.category}</p>
                        <p><strong>Descrição:</strong> {service.description}</p>
                        <form onSubmit={handleBooking} style={{ maxWidth: "400px", margin: "auto" }}>
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                            <input type="number" placeholder="Minutos desejados" value={minutes} onChange={(e) => setMinutes(e.target.value)} required />
                            <button type="submit" disabled={loading}>{loading ? "Processando..." : "Confirmar Reserva"}</button>
                        </form>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}

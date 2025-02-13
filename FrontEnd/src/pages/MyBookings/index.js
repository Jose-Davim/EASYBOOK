import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "../../services/api";

export default function MyBookings() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      api.get("/api/bookings")
        .then((response) => setBookings(response.data))
        .catch((error) => console.error("Erro ao buscar reservas:", error));
    }
  }, [user]);

  const handleCancelBooking = async (bookingId) => {
    try {
      await api.delete(`/api/bookings/${bookingId}`);
      setBookings((prevBookings) => prevBookings.filter(booking => booking._id !== bookingId));
    } catch (error) {
      console.error("Erro ao cancelar reserva:", error);
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.mainContent}>
        <h1>Minhas Reservas</h1>
        {bookings.length === 0 ? (
          <p>Sem reservas no momento.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} style={styles.booking}>
              <p><strong>Serviço:</strong> {booking.serviceId ? booking.serviceId.name : "Serviço não encontrado"}</p>
              <p><strong>Data:</strong> {new Date(booking.date).toLocaleDateString()}</p>
              <p><strong>Hora:</strong> {booking.time}</p>
              <button 
                onClick={() => handleCancelBooking(booking._id)} 
                style={styles.cancelButton}
              >
                Cancelar Reserva
              </button>
            </div>
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: { display: "flex", flexDirection: "column", height: "100vh" },
  mainContent: { flexGrow: 1, padding: "20px", textAlign: "center" },
  booking: { padding: "10px", margin: "10px 0", border: "1px solid #ccc", borderRadius: "5px" },
  cancelButton: { 
    backgroundColor: "#ff4d4d", 
    color: "white", 
    border: "none", 
    padding: "8px 12px", 
    borderRadius: "5px", 
    cursor: "pointer" 
  }
};

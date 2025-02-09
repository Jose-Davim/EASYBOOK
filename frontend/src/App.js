import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Services from './pages/Services';
import Restaurants from './pages/Restaurants';
import Gyms from './pages/Gyms';
import Hairdressers from './pages/Hairdressers';
import BookingForm from './pages/BookingForm';
import Reviews from './pages/Reviews';
import Header from './components/Header';
import Footer from './components/Footer';

function PrivateRoute({ children }) {
    return localStorage.getItem('token') ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/restaurants" element={<Restaurants />} />
                <Route path="/services/gyms" element={<Gyms />} />
                <Route path="/services/hairdressers" element={<Hairdressers />} />
                <Route path="/booking/:id" element={<PrivateRoute><BookingForm /></PrivateRoute>} />
                <Route path="/reviews/:serviceId" element={<PrivateRoute><Reviews /></PrivateRoute>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import About from './pages/About';
import ProviderDetail from './pages/ProviderDetail';
import BookAppointment from './pages/BookAppointment';
import ConfirmAppointment from './pages/ConfirmAppointment';
import BookingSuccess from './pages/BookingSuccess';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafbfc]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/provider-detail" element={<ProviderDetail />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

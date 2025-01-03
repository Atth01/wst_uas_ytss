import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Halaman Home
import Schedule from "./pages/Schedule"; // Halaman Jadwal
import Registration from "./pages/Registration"; // Halaman Pendaftaran
import Contact from "./pages/Contact"; // Halaman Kontak
// import Login from "./pages/Login"; // Halaman Login

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Navbar tetap di atas */}
        <Navbar />
        
        {/* Konten utama */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </Router>

      {/* Footer yang tetap di bawah */}
      <Footer />
    </div>
  );
};

export default App;

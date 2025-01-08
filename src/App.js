import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Bread"; // Import Breadcrumb
import Home from "./pages/Home"; // Halaman Home
import Schedule from "./pages/Schedule"; // Halaman Jadwal
import Registration from "./pages/Registration"; // Halaman Pendaftaran
import Contact from "./pages/Contact"; // Halaman Kontak
import NewsSection from "./components/NewsSection"; // Halaman Berita
import NewsDetail from "./components/NewsDetail"; // Halaman Detail Berita

const App = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Router>
        {/* Navbar tetap di atas */}
        <Navbar />

        {/* Breadcrumb di bawah Navbar */}
        <Breadcrumb />

        {/* Konten utama */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<NewsSection />} />
            <Route path="/news/:newsId" element={<NewsDetail />} /> {/* Tambahkan ini */}
          </Routes>
        </div>
      </Router>

      {/* Footer yang tetap di bawah */}
      <Footer />
    </div>
  );
};

export default App;

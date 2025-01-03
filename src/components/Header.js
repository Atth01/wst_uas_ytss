import React from "react";

const Navbar = ({ bgColor = "bg-blue-600" }) => {
  return (
    <nav className={`${bgColor} text-white p-4`}>
      <div className="flex justify-between items-center">
        {/* Logo di kiri dengan font Bebas Neue */}
        <h1 className="text-3xl font-bold font-sport">Youth Tiger Soccer School</h1>

        {/* Menu navigasi di kanan dengan font Bebas Neue */}
        <ul className="flex gap-4 font-sport">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/schedule" className="hover:underline">Jadwal</a></li>
          <li><a href="/registration" className="hover:underline">Pendaftaran</a></li>
          <li><a href="/contact" className="hover:underline">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

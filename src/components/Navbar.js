import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4 overflow-x-hidden">
      <div className="flex justify-between items-center">
        {/* Logo di kiri */}
        <div className="flex items-center gap-2">
          <img
            src="/favicon.png" // Gantilah dengan path ke logo Anda
            alt="Logo"
            className="h-14 w-14 ml-10" // Ukuran logo, sesuaikan dengan kebutuhan
          />
          <span
            className="inline-block align-middle text-xl mx-2"
            style={{ lineHeight: "2" }}
          >
            |
          </span>
          <h1 className="text-3xl font-bold font-sport">
            Youth Tiger Soccer School
          </h1>
        </div>

        {/* Tombol Hamburger untuk layar kecil */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Menu Navigasi + Login */}
        <div className="hidden md:flex items-center gap-6">
          {/* Menu navigasi */}
          <ul className="flex gap-4 font-sport">
            <li>
              <a
                href="/"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-home mr-2"></i>Home
              </a>
            </li>
            <li>
              <a
                href="/schedule"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-calendar-alt mr-2"></i>Schedule
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-user-plus mr-2"></i>Registration
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-phone-alt mr-2"></i>Contact
              </a>
            </li>
          </ul>

          {/* Pemisah dan tombol Login */}
          <span>|</span>
          <a
            href="/login"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-sport mr-8"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>Login
          </a>
        </div>
      </div>

      {/* Dropdown menu hanya untuk layar kecil */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-2 font-sport">
            <li>
              <a
                href="/"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-home mr-2"></i>Home
              </a>
            </li>
            <li>
              <a
                href="/schedule"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-calendar-alt mr-2"></i>Schedule
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-user-plus mr-2"></i>Registration
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                <i className="fas fa-phone-alt mr-2"></i>Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-sport mr-5"
              >
                <i className="fas fa-sign-in-alt mr-2"></i>Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

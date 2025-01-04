import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white p-4">
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
          <h1 className="text-3xl font-bold font-sport">Youth Tiger Soccer School</h1>
        </div>

        {/* Tombol Hamburger untuk layar kecil */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
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
                Home
              </a>
            </li>
            <li>
              <a
                href="/schedule"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Registration
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Pemisah dan tombol Login */}
          <span>|</span>
          <a
            href="/login"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-sport mr-8"
          >
            Login
          </a>
        </div>
      </div>

      {/* Dropdown menu hanya untuk layar kecil */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-2 mt-4 font-sport">
            <li>
              <a
                href="/"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/schedule"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Schedule
              </a>
            </li>
            <li>
              <a
                href="/registration"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Registration
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:border-b-2 hover:border-white transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-sport mr-5"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

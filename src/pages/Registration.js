import React from "react";

const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-md w-full mx-auto bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-6 tracking-wide">
          Formulir Pendaftaran
        </h1>
        
        <form className="flex flex-col gap-6">
          {/* Input Nama Lengkap */}
          <div className="relative">
            <i className="fas fa-user absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>

          {/* Input Usia */}
          <div className="relative">
            <i className="fas fa-calendar-alt absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="number"
              placeholder="Usia"
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>

          {/* Input Nomor Telepon */}
          <div className="relative">
            <i className="fas fa-phone-alt absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
          </div>
          
          {/* Tombol Daftar */}
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow-lg transform hover:-translate-y-1">
            <i className="fas fa-paper-plane mr-2"></i>Daftar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

const Contact = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 tracking-wide">
          Our Contact
        </h1>
        
        {/* Informasi Kontak */}
        <div className="space-y-6">
          <div className="flex items-center gap-6 p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-all">
            <i className="fas fa-map-marker-alt text-blue-600 text-3xl"></i>
            <p className="text-lg font-medium">
              Lokasi: <span className="text-gray-700">Stadion Elang Bondol, Bogor</span>
            </p>
          </div>

          <div className="flex items-center gap-6 p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-all">
            <i className="fas fa-phone-alt text-blue-600 text-3xl"></i>
            <p className="text-lg font-medium">
              Telepon: <span className="text-gray-700">0812-3456-7890</span>
            </p>
          </div>

          <div className="flex items-center gap-6 p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition-all">
            <i className="fas fa-envelope text-blue-600 text-3xl"></i>
            <p className="text-lg font-medium">
              Email: <span className="text-gray-700">info@youthtigerschool.com</span>
            </p>
          </div>
        </div>
        
        {/* Sosial Media */}
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Ikuti Kami di Sosial Media
          </h3>
          <p className="text-gray-600 mt-2">Dapatkan informasi terbaru melalui platform kami</p>
          <div className="flex gap-8 mt-6 justify-center">
            <a href="https://facebook.com" className="text-blue-700 hover:text-blue-900 text-3xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 text-3xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/youthtiger.ss/" className="text-pink-600 hover:text-pink-800 text-3xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

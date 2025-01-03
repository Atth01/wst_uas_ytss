const Contact = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Kontak Kami</h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <i className="fas fa-map-marker-alt text-blue-600 text-2xl"></i>
            <p className="text-lg font-medium">Lokasi: <span className="text-gray-700">Stadion Elang Bondol, Bogor</span></p>
          </div>

          <div className="flex items-center gap-4">
            <i className="fas fa-phone-alt text-blue-600 text-2xl"></i>
            <p className="text-lg font-medium">Telepon: <span className="text-gray-700">0812-3456-7890</span></p>
          </div>

          <div className="flex items-center gap-4">
            <i className="fas fa-envelope text-blue-600 text-2xl"></i>
            <p className="text-lg font-medium">Email: <span className="text-gray-700">info@youthtigerschool.com</span></p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Ikuti Kami di Sosial Media</h3>
          <div className="flex gap-6 mt-4 justify-center">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-800 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

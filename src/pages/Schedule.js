const Schedule = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row gap-20"> {/* Jarak antar kolom diperbesar */}
        {/* Kolom Kiri - Jadwal Latihan */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Jadwal Latihan</h2>
          
          <div className="space-y-8">
            <div className="w-full flex items-center gap-4 p-4 bg-blue-50 rounded-lg shadow-md">
              <i className="fas fa-calendar-alt text-blue-600 text-3xl"></i>
              <p className="text-lg font-medium text-gray-700">Selasa & Kamis: <span className="text-blue-500">16.00 - 18.00 WIB</span></p>
            </div>

            <div className="w-full flex items-center gap-4 p-4 bg-blue-50 rounded-lg shadow-md">
              <i className="fas fa-calendar-alt text-blue-600 text-3xl"></i>
              <p className="text-lg font-medium text-gray-700">Minggu: <span className="text-blue-500">08.00 - 10.00 WIB</span></p>
            </div>
          </div>
        </div>

        {/* Kolom Kanan - Jadwal Pertandingan */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6">Jadwal Pertandingan Selanjutnya</h3>

          <div className="space-y-6">
            {/* Pertandingan 1 */}
            <div className="w-full flex items-center gap-6 p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition-all">
              <img src="/favicon.png" alt="Logo Pertandingan" className="w-16 h-16 rounded-full shadow-md" />
              <div className="text-lg font-medium text-gray-700">
                <p className="text-blue-600">Sabtu, 10 Januari 2025</p>
                <p className="font-bold text-gray-800">16.00 WIB - YTSS vs Team A</p>
              </div>
            </div>

            {/* Pertandingan 2 */}
            <div className="w-full flex items-center gap-6 p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition-all">
              <img src="/favicon.png" alt="Logo Pertandingan" className="w-16 h-16 rounded-full shadow-md" />
              <div className="text-lg font-medium text-gray-700">
                <p className="text-blue-600">Senin, 12 Januari 2025</p>
                <p className="font-bold text-gray-800">18.00 WIB - YTSS vs Team B</p>
              </div>
            </div>

            {/* Pertandingan 3 */}
            <div className="w-full flex items-center gap-6 p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition-all">
              <img src="/favicon.png" alt="Logo Pertandingan" className="w-16 h-16 rounded-full shadow-md" />
              <div className="text-lg font-medium text-gray-700">
                <p className="text-blue-600">Rabu, 15 Januari 2025</p>
                <p className="font-bold text-gray-800">19.00 WIB - YTSS vs Team C</p>
              </div>
            </div>

            {/* Pertandingan 4 */}
            <div className="w-full flex items-center gap-6 p-6 bg-blue-100 rounded-lg shadow-lg hover:bg-blue-200 transition-all">
              <img src="/favicon.png" alt="Logo Pertandingan" className="w-16 h-16 rounded-full shadow-md" />
              <div className="text-lg font-medium text-gray-700">
                <p className="text-blue-600">Jumat, 17 Januari 2025</p>
                <p className="font-bold text-gray-800">20.00 WIB - YTSS vs Team D</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8 text-center">
        <p className="text-gray-600 text-lg font-medium">Jangan lewatkan latihan untuk meningkatkan kemampuanmu!</p>
      </div> */}
    </div>
  );
};

export default Schedule;

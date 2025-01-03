const Schedule = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Jadwal Latihan</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <i className="fas fa-calendar-alt text-blue-600 text-3xl"></i>
            <p className="text-lg font-medium text-gray-700">Selasa & Kamis: <span className="text-blue-500">16.00 - 18.00 WIB</span></p>
          </div>

          <div className="flex items-center gap-4">
            <i className="fas fa-calendar-alt text-blue-600 text-3xl"></i>
            <p className="text-lg font-medium text-gray-700">Minggu: <span className="text-blue-500">08.00 - 10.00 WIB</span></p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">Jangan lewatkan latihan untuk meningkatkan kemampuanmu!</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

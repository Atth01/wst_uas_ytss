import React from "react";

const NewsSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hot News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="img/ytt.jpg" alt="Berita 1" className="w-full h-48 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold mt-4">H</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat berita 1...</p>
            <a href="/berita-1" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read more...</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="img/ytt1.jpg" alt="Berita 2" className="w-full h-48 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold mt-4">Judul Berita 2</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat berita 2...</p>
            <a href="/berita-2" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read more...</a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="img/ytt2.jpg" alt="Berita 3" className="w-full h-48 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold mt-4">Judul Berita 3</h3>
            <p className="text-gray-600 mt-2">Deskripsi singkat berita 3...</p>
            <a href="/berita-3" className="text-blue-500 hover:text-blue-700 mt-4 inline-block">Read more...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

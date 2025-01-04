import React from "react";
import { Helmet } from "react-helmet";

const ProfileSection = () => {
  return (
    <div>
      <Helmet>
        <title>Akademi Sepak Bola Terdekat di Bogor - Youth Tiger Soccer School</title>
        <meta 
          name="description" 
          content="Youth Tiger Soccer School adalah akademi sepak bola terdekat di Bogor yang menawarkan pelatihan berkualitas untuk pemain muda." 
        />
      </Helmet>
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-700">
            Akademi Sepak Bola Terdekat di Bogor - Youth Tiger Soccer School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Youth Tiger Soccer School adalah akademi sepak bola terdekat di Bogor yang 
            berfokus pada pengembangan pemain muda. Dengan pelatih berpengalaman dan program 
            pelatihan yang terstruktur, kami membantu anak-anak mencapai potensi terbaik mereka.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-[300px]">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Misi Kami</h3>
              <p className="text-gray-600">
                Membantu pemain muda mencapai potensi terbaik mereka melalui pelatihan berkualitas.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-[300px]">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi akademi sepak bola terbaik di Bogor yang melahirkan pemain profesional.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md w-[300px]">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Program Kami</h3>
              <p className="text-gray-600">
                Latihan intensif, pengembangan taktik, dan pembinaan mental pemain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileSection;

import React from "react";
import Carousel from "./Carousel"; 
import NewsSection from "../components/NewsSection"; 
import ProfileSection from "../components/ProfileSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Membuat container dengan min-height full */}
      <Carousel /> 
      <NewsSection /> 
      <ProfileSection />

      {/* Menambahkan peta lokasi menggunakan iframe */}
      <section id="map-section" className="py-12 bg-gray-100 mt-auto">
        <h2 className="text-3xl text-center text-blue-600 font-bold mb-6">Location YTTS</h2>
        <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.849484316999!2d106.76078679999999!3d-6.5406838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c30068d16a6b%3A0x62dc60370020f5bc!2sYouth%20Tiger%20Soccer%20School!5e0!3m2!1sid!2sid!4v1736205387008!5m2!1sid!2sid"
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Youth Tiger Soccer School Location"
          />
        </div>
        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/itWEfCRxNV7hyiFt9"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

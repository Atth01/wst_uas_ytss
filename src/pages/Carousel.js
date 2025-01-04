import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // Menampilkan indikator titik
    infinite: true, // Loop terus-menerus
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Jumlah slide yang ditampilkan
    slidesToScroll: 1, // Jumlah slide yang di-scroll
    autoplay: true, // Berjalan otomatis
    autoplaySpeed: 3000, // Interval 3 detik
  };

  return (
    <div className="carousel-container relative">
      <Slider {...settings}>
        <div>
          <img
            src="/img/ytt.jpg"
            alt="Gambar 1"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/img/ytt1.jpg"
            alt="Gambar 2"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/img/ytt2.jpg"
            alt="Gambar 3"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Slider>

      {/* Overlay hitam dengan blur */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Logo dan Tulisan Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
        {/* Logo */}
        <img
          src="/favicon.png" // Gantilah dengan path logo Anda
          alt="Logo"
          className="h-20 w-20 mb-4 drop-shadow-lg" // Ukuran logo
        />

        {/* Tulisan */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Welcome to Youth Tiger Soccer School Website
          </h1>
          <p className="text-xl drop-shadow-md">
            Increase your footbal skill and join with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

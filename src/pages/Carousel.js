import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src="/img/ytt.jpg" alt="Gambar 1" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black opacity-5"></div> {/* Overlay hitam */}
        </div>
        <div>
          <img src="/img/ytt1.jpg" alt="Gambar 2" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black opacity-5"></div> {/* Overlay hitam */}
        </div>
        <div>
          <img src="/img/ytt2.jpg" alt="Gambar 3" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 bg-black opacity-5"></div> {/* Overlay hitam */}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

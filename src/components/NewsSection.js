import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NewsSection = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hot News</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg group">
          <Link to="/news/news1">
              <LazyLoadImage
                src="img/ytt1.jpg"
                alt="YTSS had won Bogor City Championship - Youth Tiger Soccer School"
                className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                delayTime={1000}
              />
              <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-500 transition duration-500">
                YTSS had win Bogor City Championship
              </h3>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg group">
          <Link to="/news/news2">
              <LazyLoadImage
                src="img/ytt2.jpg"
                alt="YTSS made great history in 2025 - Youth Tiger Soccer School"
                className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                delayTime={1000}
              />
              <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-500 transition duration-500">
                YTSS made great history in 2025
              </h3>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg group">
          <Link to="/news/news3">
              <LazyLoadImage
                src="img/ytt2.jpg"
                alt="YTSS represent Bogor in National League - Youth Tiger Soccer School"
                className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                delayTime={1000}
              />
              <h3 className="text-xl font-semibold mt-4 group-hover:text-blue-500 transition duration-500">
                YTSS represent Bogor in National League
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  // Data dummy untuk contoh (nanti bisa diambil dari API atau state global)
  const newsData = {
    news1: {
      id: "news1", // Tambahkan id untuk memastikan sinkronisasi
      title: "YTSS had win Bogor City Championship",
      image: "/img/ytt1.jpg", // Pastikan path benar
      description:
        "Youth Tiger Soccer School (YTSS) telah memenangkan kejuaraan kota Bogor dengan semangat juang yang luar biasa.",
    },
    news2: {
      id: "news2",
      title: "YTSS made great history in 2025",
      image: "/img/ytt2.jpg",
      description:
        "Sejarah tercipta! Pada tahun 2025, YTSS berhasil mencatatkan rekor sebagai tim muda paling berprestasi di Bogor.",
    },
    news3: {
      id: "news3",
      title: "YTSS represent Bogor in National League",
      image: "/img/ytt2.jpg",
      description:
        "YTSS dengan bangga mewakili Bogor dalam liga nasional dan berkompetisi di tingkat tertinggi.",
    },
  };

  // Ambil parameter URL
  const { newsId } = useParams();

  // Ambil data berdasarkan parameter
  const news = newsData[newsId]; // Sinkronisasi berdasarkan `newsId`

  if (!news) {
    return <p className="text-center text-red-500">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">{news.title}</h1>
      <div className="flex flex-col items-center">
        <img
          src={news.image}
          alt={news.title}
          className="w-full max-w-lg rounded-lg mb-4"
          onError={(e) => {
            e.target.src = "/img/placeholder.jpg"; // Fallback jika gambar tidak ditemukan
          }}
        />
        <p className="text-lg text-gray-700 text-center">{news.description}</p>
      </div>
    </div>
  );
};

export default NewsDetail;

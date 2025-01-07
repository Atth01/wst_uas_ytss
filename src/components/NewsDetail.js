import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { newsId } = useParams(); // Mengambil parameter newsId dari URL

  // Menyesuaikan dengan newsId yang berupa 'news1', 'news2', 'news3'
  const newsData = {
    news1: {
      title: "YTSS had win Bogor City Championship",
      content: "Detail berita tentang kemenangan YTSS di Kejuaraan Kota Bogor...",
    },
    news2: {
      title: "YTSS made great history in 2025",
      content: "Detail berita tentang sejarah besar yang dibuat YTSS di tahun 2025...",
    },
    news3: {
      title: "YTSS represent Bogor in National League",
      content: "Detail berita tentang YTSS yang mewakili Bogor di Liga Nasional...",
    },
  };

  // Mengambil data berita berdasarkan newsId
  const newsItem = newsData[newsId];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{newsItem.title}</h2>
        <p>{newsItem.content}</p>
      </div>
    </section>
  );
};

export default NewsDetail;

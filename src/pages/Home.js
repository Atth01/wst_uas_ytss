import React from "react";
import Carousel from "./Carousel"; // Pastikan Carousel hanya ada di sini
import NewsSection from "../components/NewsSection"; 
import ProfileSection from "../components/ProfileSection";

const Home = () => {
  return (
    <div>
      <Carousel /> 
      <NewsSection /> 
      <ProfileSection />
    </div>
  );
};

export default Home;

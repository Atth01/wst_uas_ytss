import React from "react";
import Carousel from "./Carousel"; // Pastikan Carousel hanya ada di sini
import NewsSection from "../components/NewsSection"; 
const Home = () => {
  return (
    <div>
      <Carousel /> 
      <NewsSection /> 
    </div>
  );
};

export default Home;

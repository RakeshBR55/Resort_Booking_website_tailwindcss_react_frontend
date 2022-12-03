import Carousel from "../../components/carousel/Carousel";
import React from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import Hero from "../../components/hero/Hero";
import Attractiion from "../../components/attraction/Attractiion";
import Reviews from "../../components/Review/Review"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      
        <Navbar2 />
        <Carousel />
      
      <Hero />
      <Attractiion />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

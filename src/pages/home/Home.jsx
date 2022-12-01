import Carousel from "../../components/carousel/Carousel";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Attractiion from "../../components/attraction/Attractiion";
import Reviews from "../../components/Review/Review"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
      </div>
      <Hero />
      <Attractiion />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

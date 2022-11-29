import Carousel from "../../components/carousel/Carousel";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";

import Attractiion from "../../components/attraction/Attractiion";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
      </div>
      <Hero />
      <Attractiion />
    </div>
  );
};

export default Home

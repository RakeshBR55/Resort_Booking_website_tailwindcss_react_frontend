import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar2 from "../../components/navbar/Navbar2";

const Home2 = () => {
  return (
    <div>
      <div>
        <Navbar2 />
        <Outlet/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home2;

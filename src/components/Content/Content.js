import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import Hero2 from "../Hero2";
import "./content.css";
import Features from "../Features";
import Attractions from "../attraction/Attractions";
import Review from "../Review";
import logo from "../../assets/logo_homestay.png";

const Content = () => {
  return (
    <div>
      <div
        className="h-64 sm:h-64 xl:h-screen w-full overflow-x-hidden bg-cover mt-16 "
        style={{ backgroundImage: "url(/jog.jpg" }}
      >
        <div className="flex hidden lg:block z-0 mx-auto z-0 w-1/4 h-1/4 ">
          <img
            alt="profile-pic"
            src={logo}
            className="w-96 h-96 ml-10 rounded-md"
          />
        </div>
        <div className="h-56 sm:h-64 xl:h-screen lg:z-40 lg:-mt-64 w-full moving-image">
          <img src="/fog2.png" alt="animated" />
        </div>
        <div className="relative">
          <BookingForm />
          <Hero2 />
        </div>
      </div>
    </div>
  );
};

export default Content;

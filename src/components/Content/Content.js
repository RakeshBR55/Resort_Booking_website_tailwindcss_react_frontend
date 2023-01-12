import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import Hero2 from "../Hero2";
import "./content.css";

const Content = () => {
  return (
    <div>
      <div
        className="lg:h-screen h-64 w-full bg-cover mt-16 overflow-x-hidden"
        style={{ backgroundImage: "url(/jog.jpg" }}
      >
        <div className="h-56 sm:h-64 xl:h-screen w-full moving-image">
          <img src="/fog2.png" alt="animated" />
        </div>
      </div>
      <div className="">
        <Hero2 />
      </div>
    </div>
  );
};

export default Content;

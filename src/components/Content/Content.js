import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import Hero2 from "../Hero2";
import "./content.css";

const Content = () => {
  return (
    <div className="absolute top-0">
      <div
        className="h-64 sm:h-64 xl:h-screen w-full overflow-x-hidden bg-cover mt-16 "
        style={{ backgroundImage: "url(/jog.jpg" }}
      >
        <div className="h-56 sm:h-64 xl:h-screen w-full moving-image">
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

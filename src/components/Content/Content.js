import React from "react";
import BookingForm from "../bookingForm/BookingForm";
import Hero2 from "../hero/Hero2";
import "./content.css"

const Content = () => {
  return (
    <div
      className="h-56 sm:h-64 xl:h-screen w-full bg-cover mt-16 "
      style={{ backgroundImage: "url(/jog.jpg" }}
    >
      <div className="h-56  sm:h-64 xl:h-screen w-full  mt-16 moving-image">
        <img src="/fog2.png" alt="animated" />
      </div>
      <BookingForm />
      <Hero2 />
    </div>
  );
};

export default Content;

// style={{background: "url(/fog2.png)",backgroundRepeat:"repeat-x",backgroundPosition:"center", animation: "60s", animationTimingFunction: "linear", animationIterationCount:"infinite"}}


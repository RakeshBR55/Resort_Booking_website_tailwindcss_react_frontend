import React from "react";
import Attractions from "../attraction/Attractions";
import Features from "../features/Features";
import Footer from "../footer/Footer";
import Review from "../Review/Review";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
const Hero2 = () => {
  const navigate =useNavigate();
  const navigateToBookingForm =() =>{
    navigate('/BookingForm')
  }

  return (
    <div className="absolute md:-mt-44  -mt-72 w-full px-6 mx-auto">
      <section className="mb-32">
        <div
          className="relative flex overflow-hidden mt-10 bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url(/map.png)",
            height: "500px",
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center text-gray-800">
            <div
              className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: "hsla(0, 0%, 100%, 0.7)",
                backdropFilter: "blur(30px)",
              }}
            >
              <h1 className="text-3xl md:text-4xl text-center xl:text-7xl font-bold tracking-tight mb-4">
                Welcome to Madhu Homestay{" "}
              </h1>
              <p className="mb-10">The delicacy of the comfort redefined</p>
              <button>
              <a
                className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
                onClick={navigateToBookingForm}
              >
                Book Now
              </a>
              </button>
            </div>
          </div>
        </div>
        <Features />
        <h1 className='md:text-5xl text-xl font-Rubik text-center p-4 text-green-800'>Tourist places and Attractions</h1>
        <Attractions />
        
      </section>
      <Review />
      <Footer />
    </div>
  );
};

export default Hero2;

import React from "react";
import BookingForm from "./bookingForm/BookingForm";
import Hero2 from "./Hero2";

const jog = require("../assets/venkat-sudheer-reddy-KhZ6UUsC_c8-unsplash (1).jpg");
const Content = () => {
  return (
    <div className="w-full sm:h-64 xl:h-screen bg-[url('https://images.unsplash.com/photo-1553679813-b437b57c08f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')] bg-center bg-no-repeat w-full">
      <div className="h-56 sm:h-64 xl:h-screen w-full mt-16">
        
      </div>
      <BookingForm />
      <Hero2 />
    </div>
  );
};

export default Content;

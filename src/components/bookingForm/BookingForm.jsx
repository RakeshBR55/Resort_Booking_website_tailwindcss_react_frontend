import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { CheckOutContext } from "../../context/amountContext";

const BookingForm = () => {
  const { checkIn,setCheckIn,checkOut,setCheckOut } = React.useContext(CheckOutContext);
  return (
    <div className="flex-column lg:z-10 w-[40%] lg:-mt-56  mx-auto">
    <div className="text-sm  mx-auto my-auto w-24 visible lg:invisible lg:p-2 backdrop-blur-xl focus:outline-none flex justify-center items-center rounded font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100 
         
        text-white 
        border duration-200 ease-in-out 
        border-teal-600 transition">
            <Link to="checkout">Book now</Link>
          </div>
      <div className=" border hidden lg:block lg:backdrop-blur-xl  w-full mx-auto  md:-mt-36 md:bg-transparent rounded-2xl lg:-mt-10 flex flex-col items-center">
        <div>
          <div className="my-2 lg:p-1  flex rounded">
            <h1 className="text-2xl md:text-4xl text-center mx-auto font-Rubik text-white">
              Check Room availability
            </h1>
          </div>
        </div>
        <div className="relative flex lg:mx-10 justify-between items-center">
          <div className="flex flex-col md:flex-row justify-center items-center pt-6">
            <div className="my-2 p-1 bg-transparent flex  rounded">
              <p className="p-2 lg:ml-4 text-white">From:</p>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To"
                className="bg-transparent text-white border-white rounded-xl "
              />
            </div>
            <div className="my-2 p-1 bg-transparent flex  rounded">
              <p className="p-2 lg:ml-4 text-white">To: </p>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="To"
                className="bg-transparent text-white border-white rounded-xl "
              />
            </div>
          </div>
          
        </div>
        <div className="text-sm my-2 mx-auto w-24 lg:p-2 focus:outline-none flex justify-center items-center rounded font-bold cursor-pointer  hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100  
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">
            <Link to="checkout">GO</Link>
          </div>
      </div>
      
    </div>
  );
};

export default BookingForm;

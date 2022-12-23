import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, Routes, Route, } from "react-router-dom";
import Checkout from "../../pages/roomSelection/Checkout";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate =useNavigate();
  const navigateToCheckout =() =>{
    navigate('/Checkout')
  }

  return (
    <div className=" relative flex z-10 ">
      <div className="md:backdrop-blur border   backdrop-blur-xl md:-mt-36 md:bg-transparent relative mx-auto rounded-2xl -mt-10 flex-col">
        <div className="w-full flex-1">
          <div className="my-2 p-1  flex rounded">
            <h1 className="text-2xl md:text-4xl text-center mx-auto font-Rubik text-white">
              Check Room availability
            </h1>
          </div>
        </div>
        <div className="flex relative flex-row md:flex-row pb-4 mb-4">
          <div className="flex-1">
            <div className="flex flex-row md:flex-row">
              <div className="w-full flex-1 mx-2">
                <div className="my-2 p-1  flex border border-white rounded-xl">
                  <input
                    placeholder="Rooms"
                    type="number"
                    className="p-1 px-2 appearance-none bg-transparent outline-none w-full md:placeholder:text-white md:text-white border-none"
                  />{" "}
                </div>
              </div>

              <div className="w-full flex-1 mx-2">
                <div className="my-2 p-1 flex border border-white rounded-xl">
                  <input
                    placeholder="Adults"
                    type="number"
                    className="p-1 px-2 appearance-none bg-transparent outline-none w-full md:placeholder:text-white md:text-white border-none "
                  />{" "}
                </div>
              </div>
              <div className="w-full flex-1 mx-2">
                <div className="my-2 p-1 flex border border-white rounded-xl">
                  <input
                    placeholder="children"
                    type="number"
                    className="p-1 px-2 appearance-none bg-transparent outline-none w-full md:placeholder:text-white md:text-white border-none"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  pt-6">
              <div className="w-full flex-1 mx-2">
                <div className="my-2 p-1 bg-transparent flex  rounded">
                  <p className="p-2 ml-4 text-white">From:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    className="bg-transparent text-white border-white rounded-xl "
                    
                    
                  />{" "}
                </div>
              </div>

              <div className="w-full flex-1 mx-2">
                <div className="my-2 p-1 bg-transparent flex rounded">
                  <p className="p-2 ml-4 text-white mr-4">To:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="To"
                    className="bg-transparent text-white border-white rounded-xl "
                    
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" flex flex-col md:flex-row mx-auto">
            <button
            onClick={navigateToCheckout}
              className="text-sm mb-4 mx-auto w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100  
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >GO
            </button>
          </div>
          <Routes>
          <Route path="/Checkout" element={<Checkout />} />
          
        </Routes>
          
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

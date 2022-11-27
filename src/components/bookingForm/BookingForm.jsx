import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const BookingForm = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <form className="-my-16 z-50 h-60 relative w-3/4 flex flex-wrap bg-green-300 md:h-12 items-center rounded-md ustify-center mx-auto">
      <div className="w-full px-2 md:w-1/5">
        <input
          className="w-full flex h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="number"
          placeholder="Rooms"
          id="formGridCode_month"
        />
      </div>
      <div className="w-full px-2 md:w-1/5">
        <input
          className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="number"
          placeholder="Adults"
          id="formGridCode_year"
        />
      </div>
      <div className="w-full px-2 md:w-1/5">
        <input
          className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="number"
          placeholder="Childrens"
          id="formGridCode_cvc"
        />
      </div>
      <div className="w-full h-10 px-3 md:w-1/5">
        <Datepicker
          value={value}
          onChange={handleValueChange}
          className="placeholder:hello"
        />
      </div>
      <button
        type="submit"
        className="w-full h-10 text-center py-3 rounded bg-green-500 text-white hover:bg-yellow-800 focus:outline-none my-1 md:w-20 placeholder:hello"
      >
        GO
      </button>
    </form>
  );
};

export default BookingForm;

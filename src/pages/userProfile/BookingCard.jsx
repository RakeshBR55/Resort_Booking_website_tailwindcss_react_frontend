import React from "react";

const BookingCard = () => {
  return (
    <div className=" bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md">
      <div className="flex justify-between py-2 border-b-[1px]">
        Date<span>23/12/2022</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Rooms<span>1bhk-2</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Amount<span>344</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Staus<span>Booked</span>
      </div>
    </div>
  );
};

export default BookingCard;

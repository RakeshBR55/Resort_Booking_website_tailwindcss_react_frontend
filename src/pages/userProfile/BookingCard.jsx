import React from "react";

const BookingCard = ({checkIn="",checkOut="",roomType="",rooms="",amount=""}) => {
  return (
    <div className=" bg-white flex flex-1 flex-col justify-around p-5 rounded-md shadow-md">
      <div className="flex justify-between py-2 border-b-[1px]">
        Check-In<span>23/12/2022</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Check-Out<span>1bhk-2</span>
      </div>
      
      <div className="flex justify-between py-2 border-b-[1px]">
        Room Type<span>Booked</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Rooms<span>Booked</span>
      </div>
      <div className="flex justify-between py-2 border-b-[1px]">
        Amount<span>344</span>
      </div>
    </div>
  );
};

export default BookingCard;

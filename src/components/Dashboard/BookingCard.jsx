import React from "react";

const BookingCard = ({ orderId, date,rooms,amount }) => {
  return (
    <div>
      <ul className="flex justify-between border-b-[1px] flex-wrap">
        <li>Date</li>
        <li>Payment Status</li>
        <li>Rooms</li>
      </ul>
    </div>
  );
};

export default BookingCard;

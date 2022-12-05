import React from "react";
import CheckOutComponent from "../../components/checkout/CheckOutComponent";
import RoomCard from "../../components/Dashboard/RoomCard";

const Rooms = () => {
  return (
    <div className="bg-white px-5 flex-1">
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <form className="flex w-full  justify-between items-center my-10">
        Edit Room Values
        <div>
          <label htmlFor="roomType">Choose a car:</label>
          <select name="roomType" id="roomTypes" className="border-none">
            <option value="1BHk">Volvo</option>
            <option value="2BHk">Saab</option>
            <option value="Luxury Night">Mercedes</option>
          </select>
        </div>
        <div>
          <label htmlFor="amount">Enter a amount</label>
          <input name="amount" type="text" placeholder="Amout" className="border-none outline-0 focus"/>
        </div>
      </form>
    </div>
  );
};

export default Rooms;

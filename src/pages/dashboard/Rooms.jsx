import React from "react";
import RoomCard from "../../components/Dashboard/RoomCard";

const Rooms = () => {
  return (
    <div className="bg-white px-5 flex-1">
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <RoomCard width={"w-1/2"} roomType={"1BHk"} amount={900} capacity={4} />
      <form className="w-full space-y-5 lg:space-y-10 py-8 flex flex-col flex-wrap justify-center items-center">
        <h2 className="w-full mx-auto lg:text-center text-2xl">Edit Room Values</h2>
        <div className="flex flex-wrap w-full justify-start lg:justify-between items-center space-y-5 lg:space-y-0">
          <div>
            <label htmlFor="roomType">Choose a Room:</label>
            <select name="roomType" id="roomTypes" className="border-none">
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="Luxuary Room">Luxuary Room</option>
            </select>
          </div>
          <div>
            <label htmlFor="amount">Enter a amount</label>
            <input
              name="amount"
              type="text"
              placeholder="Amout"
              className="border-none outline-0 focus"
            />
          </div>
          <div>
            <label htmlFor="amount">Available Rooms</label>
            <input
              name="rooms"
              type="text"
              placeholder="Rooms"
              className="border-none outline-0 focus"
            />
          </div>
        </div>
        <button className="bg-gray-800 text-white px-5 py-2 rounded-lg mt-5">
          Update
        </button>
      </form>
    </div>
  );
};

export default Rooms;

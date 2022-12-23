import { React, useContext, useState } from "react";
import roomImg from "../assets/room1.jpg";
import { AmountContext } from "../context/amountContext";

const CheckOutComponent = ({ width = "w-1/4", roomType, capacity }) => {
  const { setAmount, amount, dispatch} = useContext(AmountContext);
  const [roomCounts, setroomCounts] = useState(0);

  const incrementer = (e) => {
    e.preventDefault();
    if (roomCounts === 4) {
      return;
    }
    setroomCounts(roomCounts + 1);
    dispatch({
      type: "ADD_ROOM",
      room: { roomType: roomType, count: roomCounts },
    });
    setAmount(amount + 800);
  };

  const decrementer = (e) => {
    e.preventDefault();
    if (roomCounts === 0) return;
    setroomCounts(roomCounts - 1);
    dispatch({
      type: "REMOVE_ROOM",
      room: { roomType: roomType, count: roomCounts },
    });
    setAmount(amount - 800);
  };
  // const roomCost = roomState[roomType]['roomCost']

  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200 lg:space-x-5 space-y-5">
      <div>
        <img
          src={roomImg}
          alt="..."
          className="w-full h-full rounded-sm shadow-2xl object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-3/4 md:flex md:flex-col md:justify-between space-y-5">
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-3xl font-black leading-none text-red-900">
            {roomType}
          </p>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Capacity:{capacity}
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <p className="text-3xl font-black leading-none text-gray-800 w-full">
          800
        </p>

        <div className="flex text-2xl space-x-10">
          <button
            className="w-20 border-blue-500 border rounded-md"
            onClick={decrementer}
          >
            -
          </button>
          <p>{roomCounts}</p>
          <button
            className="w-20 border-blue-500 border rounded-md"
            onClick={incrementer}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutComponent;

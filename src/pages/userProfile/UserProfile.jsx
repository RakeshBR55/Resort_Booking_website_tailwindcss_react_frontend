import React, { useContext, useEffect } from "react";
import BookingCard from "./BookingCard";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import useFetch from "../../hooks/useFetch";
import { authContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const { decodedToken, isMyTokenExpired } = useContext(authContext);
  const navigate = useNavigate();
  
  const { data, loading } = useFetch(
    `http://127.0.0.1:8800/api/user/${decodedToken.userId}`
  );
  const { user, booking } = data;

  
  return loading || data.length === 0 ? (
    <div className="flex justify-center items-center h-screen">Loading</div>
  ) : (
    <div className="mt-24 w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex space-y-5 flex-wrap bg-gray-400">
      <div className="w-full flex flex-col lg:flex-row flex-wrap space-x-0 space-y-5 lg:space-x-5 ">
        <ProfileCard name={user.fullName} email={user.email} width="w-96" />
        <ProfileDetails
          name={user.fullName}
          email={user.email}
          contact={user.contact}
        />
      </div>
      <div className="w-full  bg-white shadow-lg rounded-lg p-5 space-y-3">
        <h2 className="text-center text-2xl">Booking Details </h2>
        <div>
          {booking.map((item, index) => {
            return (
              <BookingCard
                checkIn={item.checkIn.substring(0, 10)}
                checkOut={item.checkOut.substring(0, 10)}
                roomDetails={item.roomDetails}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BookingDetails from "./BookingDetails";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex space-y-5 flex-wrap">
        <div className="w-full flex flex-wrap md:space-x-5 space-y-5  ">
          <ProfileCard />
          <ProfileDetails />
        </div>
        <div className="w-full">
          <BookingDetails/>
        </div>
      </div>
    </>
  );
};

export default UserProfile;

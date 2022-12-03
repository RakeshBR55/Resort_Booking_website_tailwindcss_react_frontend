import React from "react";
import Navbar2 from "../../components/navbar/Navbar2";
import BookingDetails from "./BookingDetails";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

const UserProfile = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex space-y-5 flex-wrap">
        <div className="w-full flex flex-wrap md:space-x-5 space-y-5  ">
          <ProfileCard width={'w-96'}/>
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

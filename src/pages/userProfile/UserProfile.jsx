import React, { useState, useEffect } from "react";
import BookingDetails from "./BookingDetails";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";
import useFetch from "../../hooks/useFetch";

const UserProfile = () => {
  const { data, error, loading } = useFetch(
    "http://127.0.0.1:8800/api/user/639adf2c21dc80dfbba6f71e"
  );
  console.log(loading)
  const { user, booking } = data;
  console.log(user);
  return (
    loading ||  data.length === 0 ? <div className="flex justify-center items-center h-screen"> 
    Loading 
    </div> : <div className="mt-24 w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex space-y-5 flex-wrap">
        <div className="w-full flex flex-wrap space-x-0 lg:space-x-5  space-y-5  ">
          <ProfileCard name={user.fullName} email={user.email} />
          <ProfileDetails
            name={user.fullName}
            email={user.email}
            contact={user.contact}
          />
        </div>
        <div className="w-full">
          <BookingDetails />
        </div>
      </div>
  );
};

export default UserProfile;

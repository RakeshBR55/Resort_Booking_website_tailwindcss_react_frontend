import React from "react";
import Navbar  from "../../components/navbar/Navbar";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";

const UserProfile = () => {
  return <><Navbar/>
  <div className="w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex justify-center  md:space-x-5 space-y-5 flex-wrap">
    <ProfileCard/>
    <ProfileDetails/>
  </div>
  </>;


};

export default UserProfile;

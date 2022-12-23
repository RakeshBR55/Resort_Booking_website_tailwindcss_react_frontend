import React,{useState,useEffect} from "react";
import BookingDetails from "./BookingDetails";
import ProfileCard from "./ProfileCard";
import ProfileDetails from "./ProfileDetails";


const UserProfile = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://127.0.0.1:8800/api/user/639adf2c21dc80dfbba6f71e')
    setData(await res.json());
   }
  
  useEffect(() => {
    console.log('useEffect')
    fetchData();
  });

  console.log(data)
  const {user} = data;

  return (
    <>
      <div className="mt-24 w-full md:w-[80vw] p-5 bg-slate-100 mx-auto flex space-y-5 flex-wrap">
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
    </>
  );
};

export default UserProfile;

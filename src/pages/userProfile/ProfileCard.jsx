import React from "react";
import user from "../../assets/User.jpg";
const ProfileCard = ({ width='w-96',name='Manoj Bhat',email='bhatmanoj@gmail.com'}) => {
  return (
    <div
      className={`sm:w-[95%] md:${width} bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700`}
    >
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg"
          src={user}
          alt="user"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;

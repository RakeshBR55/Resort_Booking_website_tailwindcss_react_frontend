import React from "react";

const ProfileCard = () => {
  return (
    <div className="">
      <div className="w-[95vw] md:w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-28 h-28 mb-3 rounded-full shadow-lg"
            src="/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            email
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

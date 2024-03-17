import React from "react";
import { useLocation } from "react-router-dom";

const UserInfoPage = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-slate-100 to-red-600 srelative">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none"></div>

      <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-md w-full mx-4 md:mx-auto transform hover:scale-105 transition duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          User Info
        </h2>
        <div className="text-center">
          <p className="text-lg md:text-xl text-gray-700">
            Hello: {userData?.username}
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Qualification: {userData?.subject}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;

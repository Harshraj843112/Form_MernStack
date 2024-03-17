import React, { useState } from "react";
import axios from "axios";
import SignUpPart from "../components/SignUpPart";
import PersonalInfoPart from "../components/PersonalInfoPart";
import UserInfoPage from "./UserInfoPage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    dob: "",
    qualification: "",
    stream: "",
    subject: "",
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/register", data);
      navigate("/userinfo", { state: { userData: data } });
      toast.success("Registration successful");
    } catch (error) {
      toast.error("Registration failed");
      console.log(error);
    }
  };

  const titles = ["User Info", "Personal Info", "More Info"];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <SignUpPart data={data} setData={setData} />;
      case 1:
        return <PersonalInfoPart data={data} setData={setData} />;
      case 2:
        return <UserInfoPage data={data} setData={setData} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gradient-to-r from-slate-100 to-red-600 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h1 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {titles[page]}
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>{PageDisplay()}</div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-8">
            <button
              disabled={page === 0}
              onClick={() => setPage((prevPage) => prevPage - 1)}
              className="flex-1 cursor-pointer justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Prev
            </button>
            <button
              onClick={(e) => {
                if (page === titles.length - 2) {
                  RegisterUser(e);
                } else {
                  setPage((prevPage) => prevPage + 1);
                }
              }}
              className="flex-1 cursor-pointer justify-center py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {page === titles.length - 2 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

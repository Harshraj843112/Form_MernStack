import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="shadow-md w-full fixed top-0 left-0 bg-gray-900 z-50"
    >
      <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center justify-between md:justify-start gap-1">
          <NavLink to="/" className="link">
            <img
              src="https://i.pinimg.com/originals/ce/56/99/ce5699233cbc0f142250b520d967dff7.png"
              className="h-16 md:h-20 w-auto max-w-full transition duration-300 transform hover:scale-110"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-white"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 md:my-0 my-7 font-semibold mt-24">
            <NavLink
              to="/"
              className="text-white hover:text-blue-400 duration-500 hover:underline"
              activeClassName="text-blue-400"
            >
              HOME
            </NavLink>
          </li>

          <NavLink to="/form">
            <li className="md:ml-8 md:my-0 my-7 font-semibold transition duration-300 ease-in-out transform hover:scale-105">
              <Button
                className="text-lg px-5 py-1 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Form
              </Button>
            </li>
          </NavLink>

          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <NavLink
              to="/leave-details"
              className="text-white hover:text-blue-400 duration-500 hover:underline"
              activeClassName="active"
            ></NavLink>
          </li>
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <NavLink
              to="/myprofil"
              className="flex items-center text-white hover:text-blue-400 duration-500 hover:underline"
              activeClassName="text-blue-400"
            >
              <div className="h-8 w-8 flex items-center justify-center bg-white rounded-full mr-2">
                <FiUser className="text-blue-500" />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;

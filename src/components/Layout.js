import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

import Man from "../components/assets/logo192.png";
import Typewriter from "./Typewriter";

const Layout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="featured bg-gray-800 text-white py-16"
    >
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between py-14">
        <div className="left max-w-lg mb-8 md:mb-0 w-full md:w-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-2xl md:text-5xl mb-6 text-gray-300 text-center md:text-left"
          >
            <Typewriter />
            <span className="italic">
              <span className="text-green-500 hover:underline">freelance</span>
            </span>{" "}
            <span className="text-green-500 hover:text-green-600 underline transition-colors duration-300">
              Hustle for Work
            </span>
          </motion.h1>

          <div className="search flex flex-col md:flex-row items-center mb-4 gap-x-5 justify-center md:justify-start">
            <div className="searchInput bg-white flex items-center rounded-md p-3 px-9 transition duration-300 hover:shadow-md">
              <FontAwesomeIcon icon={faSearch} className="text-gray-700" />
              <input
                type="text"
                placeholder="Search for any Kind of Service..."
                className="ml-2 focus:outline-none bg-transparent placeholder-gray-500"
              />
            </div>

            <NavLink to="/search" as="button">
              <Button
                className="text-base md:text-lg px-5 py-1 mt-3 rounded-md font-medium text-white transform hover:scale-105 bg-blue-500 hover:bg-blue-600 border-2 transition-all duration-300"
                activeClassName="bg-blue-600"
              >
                Search
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="right flex justify-center mt-6 md:mt-0 w-full md:w-auto">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={Man}
            alt="man"
            className="h-72 md:h-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Layout;

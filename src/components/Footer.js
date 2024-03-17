import { NavLink } from "react-router-dom";
import { useState } from "react";

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapClick = () => {
    setShowMap(true);
  };

  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex flex-col justify-start items-start">
          <div className="ml-4 mt-2 sm:ml-0 sm:mt-4">
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <NavLink to="/" className="block hover:text-gray-400">
                  <FaHome className="inline mr-2" />
                  Home
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/contact" className="block hover:text-gray-400">
                  <FaPhone className="inline mr-2" />
                  Contact Us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/privacy" className="block hover:text-gray-400">
                  <FaEnvelope className="inline mr-2" />
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="block hover:text-gray-400">
                  <FaEnvelope className="inline mr-2" />
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 ml-4">
          <div>
            <h2 className="text-lg font-bold mb-2">Social Links</h2>
            <ul className="space-y-2">
              <li className="mb-2">
                <a href="/" className="block hover:text-gray-400">
                  <AiOutlineWhatsApp className="inline mr-2" />
                  WhatsApp
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block hover:text-gray-400">
                  <FaInstagram className="inline mr-2" />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block hover:text-gray-400">
                  <FaTwitter className="inline mr-2" />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="/" className="block hover:text-gray-400">
                  <FaLinkedin className="inline mr-2" />
                  Linkedin
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.youtube.com/channel/UCxY3-LNpPUET4v6NlbjTVWg"
                  className="block hover:text-gray-400"
                >
                  <FaYoutube className="inline mr-2" />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 ml-4">
          <div>
            <h2 className="text-lg font-bold mb-2">Get In Touch</h2>
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="mailto:harshraj20031@gmail.com.com"
                  className="block hover:text-gray-400"
                >
                  <FaEnvelope className="inline mr-2" />
                  harshraj20031@gmail.com
                </NavLink>
              </li>
              <li>
                <p className="block hover:text-gray-400">
                  <FaPhone className="inline mr-2" />
                  <a href="tel:7322907656">7322907656</a>
                </p>
              </li>
              <li>
                <FaMapMarkerAlt className="inline mr-2" />
                Noida
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

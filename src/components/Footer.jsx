import React from "react";
import logo from "../assets/logo.png";
import { HiMiniPhone, HiMiniEnvelope, HiMiniMapPin } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="bg-white border shadow-2xs mt-10 ">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-[6rem] w-[6rem] md:h-[9rem] md:w-[9rem] mix-blend-multiply"
          />
          <p className="text-gray-600 text-[1.4rem] md:text-[1.6rem]">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-gray-700 text-[1.4rem] md:text-[1.6rem]">
          <div className="flex items-center gap-2">
            <HiMiniPhone className="text-primary h-[2rem] w-[2rem]" />
            <span>+92 345 9698777</span>
          </div>
          <div className="flex items-center gap-2">
            <HiMiniEnvelope className="text-primary h-[2rem] w-[2rem]" />
            <span>msaadzeb18@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <HiMiniMapPin className="text-primary h-[2rem] w-[2rem]" />
            <span>Peshawar, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

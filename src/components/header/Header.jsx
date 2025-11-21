import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMiniUser, HiMiniSun } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const darkhandler = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white  shadow-2xs border z-999">
      <div className="container flex items-center justify-between ">
        <Link to={"/"}>
          <img
            src={logo}
            className="h-[6rem] w-[6rem] md:h-[9rem] md:w-[9rem] mix-blend-multiply"
          />
        </Link>

        <ul className="flex items-center gap-2 sm:gap-6">
          <li className="p-2 border-secondary cursor-pointer border rounded-full">
            <HiMiniSun className="text-primary h-[2rem] w-[2rem]  sm:h-[3rem] sm:w-[3rem]" />
          </li>
          <li className="p-2 border-secondary cursor-pointer border rounded-full">
            <HiMiniUser className="text-primary h-[2rem] w-[2rem]  sm:h-[3rem] sm:w-[3rem]" />
          </li>
        </ul>

        {/* <button
          onClick={darkhandler}
          className="flex gap-3 items-center cursor-pointer"
        >
          {isDark ? (
            <IoMdMoon className=" h-[2rem] w-[2rem]  sm:h-[3rem] sm:w-[3rem]" />
          ) : (
            <IoIosSunny className=" h-[2rem] w-[2rem]  sm:h-[3rem] sm:w-[3rem]" />
          )}
          {isDark ? <p>Dark Mode</p> : <p>Light Mode</p>}
        </button> */}
      </div>
    </header>
  );
};

export default Header;

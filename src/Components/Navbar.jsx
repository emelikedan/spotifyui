import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CgArrowDownO } from "react-icons/cg";
import Hambur from "./Hambur";

function Navbar({ className }) {
  return (
    <nav className={`${className} fixed top-0 left-0 w-full h-[64px] bg-black z-50 flex items-center justify-between px-4`}>
  <div className="flex items-center gap-4 flex-1 max-w-2xl min-w-[150px]">
    <div className="flex items-center justify-center h-[50px] w-[50px] bg-[#1F1F1F] rounded-full hover:bg-[#2A2A2A] transition-transform hover:scale-105 shrink-0">
      <AiFillHome className="h-6 w-6 text-white" />
    </div>

    <div className="relative flex-1 h-[50px] bg-[#1F1F1F] rounded-full flex items-center hover:bg-[#2A2A2A] transition">
      <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
      <input
        type="text"
        placeholder="What do you want to play?"
        className="flex-1 pl-[60px] h-full bg-transparent outline-none text-white placeholder-gray-400"
      />
    </div>
  </div>

  <ul className="hidden md:flex items-center text-[#B3B3B3] text-sm font-medium ml-6">
    <li className="mr-4 hover:text-white cursor-pointer hidden lg:block">Premium</li>
    <li className="mr-4 hover:text-white cursor-pointer hidden lg:block">Support</li>
    <li className="mr-4 hover:text-white cursor-pointer hidden lg:block">Download</li>
    <li className="mr-4 text-white hidden lg:block">|</li>
    <li className="mr-6 items-center hover:text-white cursor-pointer hidden md:flex">
      <CgArrowDownO className="h-5 w-5 mr-2" />
      Install App
    </li>
    <li className="mr-4 hover:text-white cursor-pointer hidden md:block">Sign Up</li>
    <li className="px-4 py-2 bg-white text-black rounded-full hover:scale-105 transition cursor-pointer">
      Login
    </li>
  </ul>

  <div className="md:hidden">
    <Hambur />
  </div>
</nav>

  );
}

export default Navbar;

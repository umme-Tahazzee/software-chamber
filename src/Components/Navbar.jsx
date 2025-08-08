"use client";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import MobileNav from '../material-ui/MobileNav.';
import GradientButton from '../material-ui/Gradient-btn';

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center px-6  ">
      {/* Logo */}
      <div className="w-32 h-20">
        <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4 ">
        <GradientButton/>
        <button className="w-12 h-12 rounded-full border border-gray-500 
        flex items-center justify-center mt-6">
          ☰
        </button>
      </div>

     
    </nav>
  );
}

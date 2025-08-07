'use client'

import { useState } from "react";



const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 rounded-full border border-gray-500 flex
                   items-center justify-center"
                >
                  ☰
                </button>
              </div>
        
              {/* Mobile Menu */}
              {isOpen && (
                <div className="absolute top-20 right-6 bg-gray-800 border border-gray-700 rounded-xl shadow-md p-4 space-y-4 z-50 md:hidden">
                  <button className="flex w-full gap-2 items-center font-outfit bg-gradient-to-r from-gray-500 to-zinc-50 text-black px-4 py-2 rounded-2xl hover:scale-105 transition">
                    <span>Contact Us</span>
                    <FaRegArrowAltCircleRight className="size-5 pt-1" />
                  </button>
                  <button className="w-full h-10 rounded-full border border-gray-500 flex items-center justify-center text-white">
                    ☰ Menu
                  </button>
                </div>
           )}

    </div>
  )
}

export default MobileNav
'use client'

import Image from "next/image"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa"

const Footer = () => {
  return (
   <footer className="relative hero max-w-full p-4 sm:p-6 md:p-10 overflow-hidden
    text-[#E9E9E9] flex flex-col">

      <h1 className="max-w-7xl mx-auto my-10 text-5xl font-bricolage text-center">
        LET&rsquo;S TALK
      </h1>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2
       md:grid-cols-3 gap-10 p-10 font-medium">
        {/* Column 1 */}
        <div>
          <p className="text-md text-[#A6A6A6]">
            A new era of energy, elegance, and elite competition begins here.
            Where passion meets performance on the court like never before.
          </p>

          <div className="mt-10">
            <h3 className="text-xl mb-4">Social media</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[#A6A6A6] text-md">
              {[
                "Instagram",
                "Twitter",
                "TikTok",
                "Facebook",
                "LinkedIn",
                "YouTube",
              ].map((platform) => (
                <h3 key={platform} className="flex items-center gap-2">
                  <Link href="#" className="hover:underline">
                    {platform}
                  </Link>
                  <FaArrowUp className="rotate-[16deg] w-4 h-4 p-1" />
                </h3>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center text-center space-y-10">
          <div>
            <h2 className="text-2xl font-semibold">ADDRESS</h2>
            <p className="text-[#A6A6A6] text-xl mt-5">
              1901 Thornridge Cir, <br />
              Shiloh, Hawaii 81063
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">PHONE</h2>
            <p className="text-[#A6A6A6] mt-5">[+1] 872-298-3989</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">EMAIL</h2>
            <p className="text-[#A6A6A6] mt-5">hello@gmail.com</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex justify-center">
          <Image
            src="/images/footer.jpg"
            alt="footer image"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>
        
      </div>

      {/* Bottom copyright */}
      <div className="w-full  mx-auto border-t border-[#444] border-dashed
       mt-10 pt-5 text-center text-[#888] text-sm select-none">
        <div className="md:flex md:justify-between">
           <h2> © 2024 Software Chamber All Rights Reserved.</h2>
           <div className="flex gap-4 justify-between">
              <h3>Privacy Policy</h3>
              <h3>Terms & Conditions</h3>
           </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

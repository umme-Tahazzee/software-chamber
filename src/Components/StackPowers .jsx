'use client'
import { AiFillSpotify } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaDropbox } from "react-icons/fa6";
import { LiaSlackHash } from "react-icons/lia";
import GradientButton, { MainBtn } from "@/material-ui/Gradient-btn";
import Image from "next/image";
import ToolBoxITem from "@/material-ui/ToolBoxITem";

const StackPowers = () => {
  const btns = [
    { id: 1, icon: <AiFillSpotify className="size:4 md:size-7 text-green-500" />, name: "Spotify" },
    { id: 2, icon: <AiFillSpotify className="size:4 md:size-7 text-green-500" />, name: "TalentQl" },
    { id: 3, icon: <FaDropbox className="size:4 md:size-7 text-blue-600" />, name: "DropBox" },
    { id: 4, icon: <AiFillSpotify className="size:4 md:size-7 text-[#FC199B]" />, name: "Fliqpay" },
    { id: 5, icon: <LiaSlackHash className="size:4 md:size-7 text-purple-500" />, name: "Slack" }
  ];

  const categories = [
    { id: 1, title: "Health Care", image: "/images/item/image.png" },
    { id: 2, title: "Developers", image: "/images/item/img1.png" },
    { id: 3, title: "Software", image: "/images/item/img1.png" },
    { id: 4, title: "Entertainment", image: "/images/item/img3.png" },
    { id: 5, title: "Hospitality", image: "/images/item/img4.png" },
    { id: 6, title: "Hospitality", image: "/images/item/img5.png" },
    { id: 7, title: "Manufacturing", image: "/images/item/img6.png" },
    { id: 8, title: "Energy", image: "/images/item/img7.png" },
    { id: 9, title: "Auto", image: "/images/item/img8.png" },
  ];

  return (
    <section className="relative hero  p-4 sm:p-6 lg:p-10 overflow-hidden">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row md:justify-between mt-16 max-w-7xl mx-auto font-bricolage gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-wide leading-snug">
          Our Stack Powers of <br />
          the <span className="text-[#A5A5A5]">World&apos;s</span> Most <br />
          <span className="text-[#A5A5A5]">Beloved Companies</span>
        </h1>

        {/* Buttons */}
        <div className="grid 
        grid-cols-2 gap-4 p-4 sm:p-6 max-w-md">
        
              {btns.map(({id,name,icon}, index )=>{
                 let extraClass = "";
               if (index === 2) extraClass = "md:-left-10 relative"; 
          if (index === 3) extraClass = "md:-left-10 relative"; 

                return (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              className={`flex items-center gap-3 bg-gradient-to-t
               from-teal-600 to-white/50 px-3 py-4 md:px-4 md:py-3 rounded-full 
               font-medium cursor-pointer  ${extraClass} `}
            >
              <span className="flex items-center justify-center
               bg-white p-2 rounded-full">
                {icon}
              </span>
              <span className="text-md md:text-2xl" >  {name} </span>
            </motion.div>
          )
              })}
  
        </div>


      </div>

      {/* Card Section */}
      <div className="relative w-full max-w-5xl mx-auto 
      min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]
       rounded-2xl overflow-hidden border border-[#22C1AD]/30 mt-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,193,173,0.15)_0%,transparent_80%)]"></div>

        <div className="relative z-10 flex flex-col mt-5
        items-center justify-center h-full text-center px-4 sm:px-6">
          <MainBtn title="Smarter Ideas, Instant Solutions" />

          <div className="mt-6 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center">
            <Image src="/images/LogoIconWrapper.png" alt="wrapper" width={100} height={100} />
          </div>

          <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Uncover the Design and Development <br className="hidden sm:block" />
            <span className="text-gray-300">Projects That Set Us Apart</span>
          </h2>

          <GradientButton />
        </div>
      </div>

      {/* Scrolling Categories */}
      <div className="items-center justify-center text-center mx-4 md:mx-20 my-10">
        <MainBtn title="Smarter Ideas, Instant Solutions" />

        <div className="overflow-hidden w-full mt-8">
          <div className="flex gap-6 sm:gap-10 px-4 min-w-max animate-scrollLeft">
            {[...categories, ...categories].map((cat, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 sm:w-40 md:w-48">
                <ToolBoxITem {...cat} />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden w-full mt-8">
          <div className="flex gap-6 sm:gap-10 px-4 min-w-max animate-scrollRight">
            {[...categories, ...categories].map((cat, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 sm:w-40 md:w-48">
                <ToolBoxITem {...cat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackPowers;

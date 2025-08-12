
"use client";

import { FaArrowUp } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdSunny } from "react-icons/md";
import { IoFlower } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

const services = [
 {
  title: "Efficiency",
  icon: <FaSun className="text-white size-5 hover:animate-ping" />,
  desc: `Software Chamber specializes in creating powerful, 
    scalable, and secure e-commerce solutions tailored to business needs.`,
 },
 {
  title: "Adaptability",
  icon: <FaCloud className="text-white size-5 hover:animate-ping"/>,
  desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",

 },
 {
  title: "Scalability",
  icon: <MdSunny className="text-white size-5 hover:animate-ping" />,

  desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
 },
 {
  title: "Precision",
  icon: <IoFlower className="text-white size-5 hover:animate-ping"  />,

  desc: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",

 },

];

const cardVariants = {
 hidden: { opacity: 0, y: 30 },
 visible: (i) => ({
  opacity: 1,
  y: 0,
  transition: {
   delay: i * 0.1,
   duration: 0.5,
   ease: "easeOut",
  },
 }),
};

const ChooseCard = () => {
 return (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto md:mt-20 p-6">
   {services.map((service, index) => {
    let extraClass = "";
    if (index === 1) extraClass = "md:top-10 relative"; 
    if (index === 3) extraClass = "md:top-10 relative"; 


    return (
     <motion.div
      key={index}
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{
       y: -8,
       boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
       transition: { duration: 0.18 },
      }}
      className={`rounded-3xl p-8 relative transition-all duration-300
            ease-in-out cursor-pointer bg-gray-100 text-black ${extraClass}`}
     >
      <div className="flex justify-between items-center">
       <h2 className="text-3xl font-bold leading-snug mb-4">
        {service.title}
       </h2>
       {/* Icon container */}
       <div className="flex items-center justify-center bg-[#2CCEBA] px-4 mb-2 
       rounded-full w-12 h-12  ">
        {service.icon}
       </div>
      </div>



      <div className="border-b border-gray-300"></div>

      <p className="text-sm mt-6 mb-6 text-[#494949]">{service.desc}</p>

      {/* Icon with motion effect */}
      <motion.div
       whileHover={{ y: -6 }}
       transition={{ duration: 0.18 }}
       className="left-6"
      >
       <motion.div
        whileHover={{ x: 6 }}
        transition={{ duration: 0.18 }}
        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-md"
       >

        <FaArrowUp className="-rotate-45" />

       </motion.div>
      </motion.div>
     </motion.div>
    )
   })}
  </div>
 );
};

export default ChooseCard;

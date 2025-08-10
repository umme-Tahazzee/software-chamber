
"use client";

import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web & Mobile App Development",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e",
  },
  {
    title: "Application Software Services",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e",
    active: true,
  },
  {
    title: "Software Coding & Optimuation",
    desc: "Software Chamber specializes in creating powerful, scalable, and secure e",
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

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-6"> 
      {services.map((service, index) => (
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
          className={`rounded-3xl p-8 relative transition-all duration-300 ease-in-out cursor-pointer ${
            service.active
              ? "bg-[#1DC9A0] text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          <h2 className="text-2xl font-bold leading-snug mb-4">
            {service.title}
          </h2>
          <p className="text-sm mb-6">{service.desc}</p>

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
      ))}
    </div>
  );
};

export default ServiceCards;

import { motion } from "framer-motion";
import { FaStar, FaArrowUp, FaRegArrowAltCircleRight } from "react-icons/fa";

// Main (Badge chips pop in with scale from 0.9 to 1 over 220ms)
export function MainBtn({ title }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.22 }}
      className="inline-block px-5 py-2 rounded-full text-sm mb-4
        text-white font-inter bg-[radial-gradient(circle,_black_20%,_#2CCEBA_100%)]"
    >
      <div className="flex gap-2 items-center justify-center">
        <FaStar />
        <span>{title}</span>
      </div>
    </motion.div>
  );
}

// Gradient button with arrow up
export function Discuss({ title }) {
  return (
    <button
      className="flex items-center justify-center gap-4 mt-8 font-outfit bg-gradient-to-l
        from-[#2CCEBA] to-[#16AD71] text-white px-5 py-3 rounded-3xl 
        hover:scale-105 transition cursor-pointer"
    >
      <span className="flex items-center">{title}</span>
      <div className="flex items-center justify-center bg-white p-1 rounded-full">
        <FaArrowUp className="text-[#494949] rotate-16 size-5 " />
      </div>
    </button>
  );
}

// Contact button with right arrow
export default function GradientButton() {
  return (
    <button
      className="flex items-center justify-center gap-2 mt-8 font-outfit bg-gradient-to-r
        from-gray-500 to-zinc-50 text-white px-5 py-3 rounded-3xl 
        hover:scale-105 transition cursor-pointer"
    >
      <span className="flex items-center">Contact Us</span>
      <div className="flex items-center justify-center bg-white p-1 rounded-full">
        <FaRegArrowAltCircleRight className="text-black size-5" />
      </div>
    </button>
  );
}

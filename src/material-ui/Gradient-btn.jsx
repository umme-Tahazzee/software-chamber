import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";




export function MainBtn({title}){
   return(
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
   )

}



export default function GradientButton() {
  return (

    <button className="flex items-center justify-center gap-2 mt-8 font-outfit bg-gradient-to-r
    from-gray-500 to-zinc-50 text-white px-5 py-3 rounded-3xl 
     hover:scale-105 transition cursor-pointer">

      <span className="flex  items-center">Contact Us</span>

      <div className="flex items-center justify-center bg-white p-1 rounded-full">
        <FaRegArrowAltCircleRight className="text-black size-5" />
      </div>
    </button>


  );
}
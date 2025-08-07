import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function GradientButton({ children, onClick, className }) {
  return (
    <>
     <button className="flex gap-2 items-center font-outfit bg-gradient-to-r
         from-gray-500 to-zinc-50 text-black px-5 py-3 rounded-3xl 
          hover:scale-105 transition">
          <span>Contact Us</span>
          <div className=" bg-white px-1.5 py-1
          rounded-full ">
           
          <FaRegArrowAltCircleRight className="size-5 items-center text-black " />
          </div>
        </button>
    </>
      
  );
}
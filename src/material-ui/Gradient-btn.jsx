import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function GradientButton({ children, onClick, className }) {
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
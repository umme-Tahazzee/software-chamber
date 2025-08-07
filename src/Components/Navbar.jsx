import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div className='w-30 h-24'>
         <img src="/images/logo.png" alt="logo"  />
      </div>
      <div className='flex items-center gap-4 cursor-pointer'>
              
          <button className="flex gap-2 font-outfit bg-gradient-to-r from-gray-500 to-zinc-50
           px-5 py-3
           rounded-3xl hover:scale-105 transition 
          "> 
             <span>Contact Us</span>
             <FaRegArrowAltCircleRight className="size-6 text-black pt-1"/> 
          </button>
          
          <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar
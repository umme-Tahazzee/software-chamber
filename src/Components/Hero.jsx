import CardSection from '../material-ui/CardSection';
import GradientButton from '../material-ui/Gradient-btn';
import Navbar from './Navbar'
import { FaStar } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="hero min-h-screen max-w-full p-4 sm:p-6 md:p-10 ">
      <Navbar />

      <section className="text-center py-20 font-bricolage">
      
        <div
          className="inline-block px-5 py-2 rounded-full text-sm mb-4
          text-white font-inter bg-[radial-gradient(circle,_black_20%,_#2CCEBA_100%)]"
        >
          <div className="flex gap-2 items-center justify-center">
            <FaStar />
            <span>Smarter Idea, instant solutions</span>
          </div>
        </div>

      
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest" >
          <span className="text-[#00FFE0]"> We are your Software</span>
          <br />
          Development Team in The Cloud
        </h1>

      
        <div className="flex justify-center m-6">
          <GradientButton />
        </div>
        
        {/* card section  */}
        <CardSection />

      </section>
    </div>
  )
}

export default Hero
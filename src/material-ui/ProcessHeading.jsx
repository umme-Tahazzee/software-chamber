'use client'
import GradientButton from "./Gradient-btn"
import Squares from "./Squares"
import Image from 'next/image';

const ProcessHeading = () => {
 return (
<div className="relative w-full bg-transparent text-white overflow-hidden">
  {/* Left grid */}
   <div className="absolute top-0 left-0 w-1/4 h-full ">
       <Image src="/images/BannerGlow.png" alt="z" width={500} height={300} />
       
  </div> 

  {/* Right grid */}
   <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none">
       <Image src="/images/BannerGlow.png" alt="x" width={500} height={300} />
  </div> 

 
  {/* Text section */}
<div className="relative z-10 text-center justify-center items-center py-10 font-bricolage">
  <div className="space-y-3">
    <h1 className="text-4xl md:text-5xl font-bold tracking-widest">
      Our Software <br />
      <span className="text-[#A5A5A5]">
        Development Process
      </span>
    </h1>
    <p className="text-[#808080] text-xl font-outfit">
      Deliver personalized experiences to your
      customers with AI-powered recommendation <br />
      engines and dynamic content generation.
    </p>
  </div>
     <div className="flex justify-center m-3">
              <GradientButton />
            </div>
</div>




</div>


 )
}

export default ProcessHeading
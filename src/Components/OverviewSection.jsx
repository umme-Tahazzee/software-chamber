'use client'
import State from "@/material-ui/State"
import Image from "next/image"
import { motion } from 'framer-motion';
import ServiceCards from "./Service";
import { FaRegArrowAltCircleRight } from "react-icons/fa";




const OverviewSection = () => {
  const features = [
    { id: 1, title: 'Your Team in the cloud', desc: 'We hire best and brightest talents to build world class technology' },
    { id: 2, title: 'Grow more with less', desc: 'We have a competitive pricing structure' },
    { id: 3, title: 'Weekly sprint and reviews', desc: 'Fast review and feedback loop to keep you in the driver seat' },
    { id: 4, title: 'Communication First', desc: 'Modern tools and services to collaborate' }
  ]


  return (
    <section className="max-w-full p-6 md:p-30  
    font-bricolage ">
      {/* heading  */}
      <div className="text-center mx-auto mb-12  ">
        <h1
          className="text-xl md:text-6xl font-bold 
    items-center justify-center gap-2 text-balance tracking-tighter leading-normal cursor-pointer"
        >
          <Image
            src="/images/star.png"
            alt="Star Icon"
            width={45}
            height={45}
            className="hidden md:inline-block mr-3 animate-pulse "
          />
          <span className="text-gray-800">At Software Chamber,</span>{" "}
          <span className="text-[#A5A5A5]">we specialize</span>{" "}
          in turning complex challenges into elegant
          <br />
          <span className="text-[#A5A5A5]">digital solutions</span>
          <Image
            src="/images/upaarrow.png"
            alt="uparrow"
            width={40}
            height={40}
            className="inline-block ml-5 hover:animate-ping duration-200 "
          />

        </h1>
      </div>

      {/* content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">

        {/* Stats section */}
        <div className="">
          <State />
        </div>

        {/* Image section */}
        <div className="">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/overviewImg.png"
              alt="overviewing"
              width={450}
              height={450}
              className="w-full h-auto"
            />
          </motion.div>

        </div>

        {/* Features section */}
        <div className=" space-y-6 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-center p-4 ${feature.id !== 4 ? "border-b border-gray-200" : ""}`}
            >
              <div className="mr-4  ">
                <button className="bg-[#27B4A3] size-8  md:size-16 rounded-full text-black flex items-center justify-center">
                  <h1 className="bg-white size-4  md:size-8 rounded-full flex items-center justify-center
                   text-sm font-bold animate-pulse">
                    {feature.id}
                  </h1>
                </button>
              </div>

              <div>
                <h1 className="text-xl font-bold mb-1">{feature.title}</h1>
                <p className="text-[#666D80] font-outfit text-xs sm:text-lg">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* feature grid  */}
      
      {/* heading */}
      <div className="flex justify-between mt-3 ">
        <div className="flex gap-3">
          <h1 className="text-4xl md:text-6xl  font-semibold">Services</h1>
          <Image
            src="/images/star.png"
            alt="Star Icon"
            width={45}
            height={45}
            className="hidden md:inline-block animate-pulse mt-3"
          />
        </div>

        <div className="flex gap-3 items-center">
          <button className="font-outfit text-sm">All Submit</button>
          <div className="flex items-center justify-center">
            <FaRegArrowAltCircleRight className="text-white size-6
             bg-gray-500 rounded-full" />
          </div>
        </div>

      </div>

      
      <ServiceCards/>


    </section>
  )
}

export default OverviewSection
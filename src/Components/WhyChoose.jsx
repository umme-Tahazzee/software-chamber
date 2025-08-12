'use client'
import { Discuss } from '@/material-ui/Gradient-btn'
import React from 'react'
import ChooseCard from './ChooseCard'

const WhyChoose = () => {
  return (
    <section className='relative mt-20 max-w-full p-4 sm:p-6 md:p-10 
    overflow-hidden'>
      {/* first section  */}
      <div className=' bg-white'>
        <div className="text-center justify-center items-center space-y-5">
          <h1 className='text-3xl md:text-6xl font-bold 
          tracking-widest font-bricolage'>Why Choose <br /> Softwarechamber</h1>
          <p className='text-[#494949] font-outfit tracking-widest '>Deliver personalized experiences to your
            customers with AI-powered <br />
            recommendation engines and dynamic content generation.</p>
          <div className="flex justify-center m-6 md:mt-10 ">
            < Discuss title="Lets Disscus" />
          </div>

        </div>

        {/* card div  */}
        <ChooseCard />
      </div>
      {/* second section  */}
    
    </section>
  )
}

export default WhyChoose
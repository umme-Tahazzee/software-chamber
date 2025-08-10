'use client'
import { Discuss } from '@/material-ui/Gradient-btn'
import React from 'react'
import ChooseCard from './ChooseCard'

const WhyChoose = () => {
  return (
    <section className='relative  min-h-screen max-w-full p-4 sm:p-6 md:p-10 
    overflow-hidden bg-white'>
         <div className="text-center justify-center items-center space-y-3">
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest font-bricolage'>Why Choose <br/> Softwarechamber</h1>
          <p className='text-[#494949] font-outfit tracking-widest '>Deliver personalized experiences to your
            customers with AI-powered <br/> 
            recommendation engines and dynamic content generation.</p>
            <div className="flex justify-center m-6">
             < Discuss title="Lets Disscus" />
          </div>
       
         </div>

         {/* card section  */}
          <ChooseCard/>
      

    </section>
  )
}

export default WhyChoose
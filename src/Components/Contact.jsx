'use client'
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  countryCode: '+880',
  phone: '',
  jobTitle: '',
  message: '',
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  // Submit logic here
 };

 return (
  <section
   className="relative  max-w-7xl mx-auto p-4 sm:p-6 md:p-10 overflow-hidden font-bricolage"
   aria-label="Get in touch with our team"
  >
   {/* Heading */}
   <div className="text-center space-y-6 mb-10">
    <h1
     className="text-xl md:text-5xl font-bold gap-2 text-balance -tracking-wider leading-tight cursor-pointer"
     tabIndex={0}
    >
     <span className="text-gray-800">Let&rsquo;s talk about your next</span>{' '}
     <span className="text-gray-800">project</span> <br />
     <span className="text-[#A5A5A5]">We&rsquo;re here to help.</span>
    </h1>
    <p className="text-[#494949] font-outfit text-[20px]">
     Deliver personalized experiences to your customers <br /> with
     AI-powered recommendation engines and dynamic content generation.
    </p>
   </div>

   {/* Content Section */}
   <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Image */}
    <div className="flex-shrink-0">
     <Image
      src="/images/contact-img.png"
      alt="profile"
      width={400}
      height={400}
      className="rounded-lg"
     />
    </div>

    {/* Form */}
    <div className="flex-1 w-full">
     <form
      onSubmit={handleSubmit}
      className="w-full  p-6 rounded-lg shadow-md space-y-4"
     >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className="  border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        required
       />
       <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className="  border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        required
       />
      </div>

      <input
       type="email"
       name="email"
       placeholder="Email"
       value={formData.email}
       onChange={handleChange}
       className="w-full  border-none bg-[#F3F3F3]  p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
       required
      />

      <div className="grid grid-cols-3 gap-2">
       <input
        type="text"
        name="countryCode"
        value={formData.countryCode}
        onChange={handleChange}
        className=" border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        required
       />
       <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="col-span-2 border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2
                 focus:ring-teal-500"
        required
       />
      </div>

      <input
       type="text"
       name="jobTitle"
       placeholder="Job Title"
       value={formData.jobTitle}
       onChange={handleChange}
       className="w-full  border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
       required
      />

      <textarea
       name="message"
       placeholder="Your message..."
       rows={4}
       value={formData.message}
       onChange={handleChange}
       className="w-full  border-none bg-[#F3F3F3] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
       required
      />
      <div className="flex justify-between">
       <button
        type="submit"
        className="w-full md:w-1/3 bg-teal-600 text-white py-2  rounded-full flex items-center justify-center gap-3 hover:bg-teal-700 transition"
       >
        <span>Submit</span>
        <motion.div
         whileHover={{ x: 6 }}
         transition={{ duration: 0.18 }}
         className="w-8 h-8 rounded-full bg-white/50
          text-black flex items-center justify-center shadow-md"
        >
         <FaArrowUp className="rotate-45" />
        </motion.div>
       </button>
      </div>
     </form>
    </div>

    
   </div>
  </section>
 );
};

export default Contact;

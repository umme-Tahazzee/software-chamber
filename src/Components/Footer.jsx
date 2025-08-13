'use client'

import Image from "next/image"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const containerStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <footer className="relative hero max-w-full p-4 sm:p-6 md:p-10 overflow-hidden
      text-[#E9E9E9] flex flex-col">

      {/* Heading */}
      <motion.h1
        className="max-w-7xl mx-auto my-10 text-5xl font-bricolage text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        LET&rsquo;S TALK
      </motion.h1>

      {/* Footer Columns */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 p-10 font-medium"
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Column 1 */}
        <motion.div className="order-3 md:order-1" variants={fadeUp}>
          <p className="text-md text-[#A6A6A6]">
            A new era of energy, elegance, and elite competition begins here.
            Where passion meets performance on the court like never before.
          </p>

          <div className="mt-10">
            <h3 className="text-xl mb-4">Social media</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[#A6A6A6] text-md">
              {["Instagram", "Twitter", "TikTok", "Facebook", "LinkedIn", "YouTube"].map((platform, i) => (
                <motion.h3
                  key={platform}
                  className="flex items-center gap-2"
                  variants={fadeUp}
                >
                  <Link href="#" className="hover:underline">
                    {platform}
                  </Link>
                  <FaArrowUp className="rotate-[16deg] w-4 h-4 p-1" />
                </motion.h3>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="order-2 md:order-2 flex flex-col items-center text-center space-y-10"
          variants={fadeUp}
        >
          <div>
            <h2 className="text-2xl font-semibold">ADDRESS</h2>
            <p className="text-[#A6A6A6] text-xl mt-5">
              1901 Thornridge Cir, <br />
              Shiloh, Hawaii 81063
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">PHONE</h2>
            <p className="text-[#A6A6A6] mt-5">[+1] 872-298-3989</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">EMAIL</h2>
            <p className="text-[#A6A6A6] mt-5">hello@gmail.com</p>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="order-1 md:order-3 flex justify-center"
          variants={fadeUp}
        >
          <Image
            src="/images/footer.jpg"
            alt="footer image"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Bottom copyright */}
      <motion.div
        className="w-full mx-auto border-t border-[#444] border-dashed mt-10 pt-5 text-[#888] text-sm select-none"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:gap-0 text-center md:text-left">
          <h2>© 2024 Software Chamber. All Rights Reserved.</h2>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <h3 className="cursor-pointer hover:text-green-600">Privacy Policy</h3>
            <h3 className="cursor-pointer hover:text-green-600">Terms & Conditions</h3>
          </div>
        </div>
      </motion.div>

    </footer>
  )
}

export default Footer

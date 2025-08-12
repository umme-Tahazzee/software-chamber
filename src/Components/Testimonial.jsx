'use client'
import Image from 'next/image';
import { MainBtn } from './../material-ui/Gradient-btn';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';


const testimonials = [
  {
    text: `"Sed sit varius neque turpis enim ut metus consectetur. Tortor urna
    risus phasellus nec. In facilisis pulvinar sagittis odio nibh
    condimentum aliquet commodo."`,
    name: "Alex Larkins",
    role: "Art director at Airbnb",
    avatar: "/images/Base.png",
    logo: "/images/mono.png",
    brand: "mono"
  },
  {
    text: `"This company transformed our workflow. The UI is intuitive and the support is outstanding."`,
    name: "Maria Lopez",
    role: "Product Manager at Spotify",
    avatar: "/images/Base.png",
    logo: "/images/mono.png",
    brand: "spotify"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <section className="relative hero p-4 sm:p-6 lg:p-10 overflow-hidden md:mb-20">
  {/* Heading */}

  <div className="text-center justify-center font-bricolage mt-20">
    <MainBtn title="Smarter Idea, instant solutions" />
    <h1
      className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-widest mt-5"
    >
      Do not just take our word for it. Hear <br />
      What <span className="text-gray-500">our clients say</span>
    </h1>
  </div>

  {/* Slider */}
  <div
    className="relative w-full md:max-w-5xl md:mx-auto mt-20 rounded-xl p-[2px]
     bg-gradient-to-br from-[#2CCEBA] to-[#000000]"
    style={{ minHeight: "320px" }} 
  >
    <div className="relative rounded-xl bg-black text-white p-12 overflow-hidden 
    flex flex-col justify-center h-full">
      {/* Radial gradient shadow */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "radial-gradient(circle, #2CCEBA, #000000 70%)",
          filter: "blur(30px)",
          zIndex: -1,
        }}
      ></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Quote mark with shine animation */}
          <motion.div
            className="text-[#2CCEBA] mb-4"
            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {/* <FaQuoteLeft size={40} opacity={0.4} /> */}
          </motion.div>

          {/* Testimonial text */}
          <h1 className="text-md w-full md:text-2xl mb-4 md:w-3/5">
            {testimonials[index].text}
          </h1>

          {/* Profile & Logo */}
          <div className="mt-5 flex justify-between items-center">
            <motion.div
              className="flex gap-3 mt-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.06 },
                },
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Image
                  src={testimonials[index].avatar}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <h3 className="text-sm">{testimonials[index].name}</h3>
                <p className="text-sm text-[#A5A5A5]">{testimonials[index].role}</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 mt-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
            >
              <Image
                src={testimonials[index].logo}
                alt="mono"
                width={24}
                height={24}
              />
              <h2 className="text-lg text-[#A5A5A5]">{testimonials[index].brand}</h2>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  
</section>

  );
};

export default Testimonial;

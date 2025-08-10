'use client'
import CardSection from '../material-ui/CardSection';
import GradientButton from '../material-ui/Gradient-btn';
import Navbar from './Navbar';
import Particles from '../material-ui/Particles';
import Image from 'next/image';
import { motion } from "framer-motion";
import { MainBtn } from '../material-ui/Gradient-btn';


const Hero = () => {
  return (
    <div className="relative hero min-h-screen max-w-full p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />

        <section className="text-center py-20 font-bricolage">
          {/* badge */}
          <MainBtn title="Smarter Idea, instant solutions" />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <span className="text-[#00FFE0]"> We are your Software</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <span
                className="text-transparent bg-clip-text bg-gradient-to-b
                 from-[#00FFE0] to-white"
              >
                Development{' '}
                <span>
                  <Image
                    src="/images/heroBtn1.png"
                    alt="heroBtn1"
                    width={48}
                    height={48}
                    className="relative inline-block mr-3"
                  />
                  <Image
                    src="/images/heroBtn1.png"
                    alt="heroBtn2"
                    width={48}
                    height={48}
                    className="relative inline-block mr-3"
                  />
                </span>
                Team in
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <span>The Cloud</span>
            </motion.div>
          </h1>


          {/* Button */}
          <div className="flex justify-center m-6">
            <GradientButton />
          </div>

          {/* Card Section */}
          <CardSection />
        </section>
      </div>
    </div>
  );
};

export default Hero;

'use client'
import StackPowers from '@/Components/StackPowers ';
import Hero from '../Components/Hero';
import OverviewSection from '../Components/OverviewSection';
import Process from '../Components/Process';
import WhyChoose from "@/Components/WhyChoose";
import FAQ from '@/Components/FAQ';
import Testimonial from '@/Components/Testimonial';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';
import { motion } from "framer-motion";


export default function Page() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <Hero />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <OverviewSection />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <Process />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <WhyChoose />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <StackPowers />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <FAQ />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <Testimonial />
      </motion.div>

      <motion.div variants={fadeInUp} initial="hidden" whileInView="show">
        <Contact />
      </motion.div>

      <Footer />
    </main>
  );
}
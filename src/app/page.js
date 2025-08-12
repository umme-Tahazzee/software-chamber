
import StackPowers from '@/Components/StackPowers ';
import Hero from '../Components/Hero';
import OverviewSection from '../Components/OverviewSection';
import Process from '../Components/Process';
import WhyChoose from "@/Components/WhyChoose";
import FAQ from '@/Components/FAQ';
import Testimonial from '@/Components/Testimonial';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';


export default function Home() {
  return (
      <main className="" >    
         <Hero/>
         <OverviewSection/>
         <Process/>
         <WhyChoose/>
         <StackPowers />
         <FAQ/>
         <Testimonial/>
         <Contact/>
         <Footer />
      </main>

  );
}

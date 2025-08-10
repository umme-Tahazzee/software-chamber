import Navbar from "@/components/Navbar";
import Hero from '../components/Hero';
import OverviewSection from '../components/OverviewSection';
import Process from '../components/Process';
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
      <main className="" >    
        <Hero/>
        <OverviewSection/>
         <Process/>
         <WhyChoose/>
      </main>

  );
}

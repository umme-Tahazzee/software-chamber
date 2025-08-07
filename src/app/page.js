import Navbar from "@/Components/Navbar";
import Hero from './../Components/Hero';


export default function Home() {
  return (
      <main >    
         {/* <Hero/> */}
         <div class="relative w-96 h-64">
  {/* <!-- Card 1 (Bottom) --> */}
  <div class="absolute inset-0 bg-blue-500 rounded-lg shadow-lg z-10">
    <div class="p-4 text-white">
      <h3 class="text-xl font-bold">Card One</h3>
      <p>This is the first card, positioned at the bottom.</p>
    </div>
  </div>

  {/* <!-- Card 2 (Top, overlapping) --> */}
  <div class="absolute top-52 left-8 bg-green-500 rounded-lg shadow-lg z-20">
    <div class="p-4 text-white">
      <h3 class="text-xl font-bold">Card Two</h3>
      <p>This card overlaps the first one.</p>
    </div>
  </div>
</div>
      </main>
  );
}

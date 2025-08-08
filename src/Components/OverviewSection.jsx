import State from "@/material-ui/State"
import Image from "next/image"



const OverviewSection = () => {
 

 const features = [
  { id: 1, title: 'Your Team in the cloud', desc: 'We hire best and brightest talents to build world class technology' },
  { id: 2, title: 'Grow more with less', desc: 'We have a competitive pricing structure' },
  { id: 3, title: 'Weekly sprint and reviews', desc: 'Fast review and feedback loop to keep you in the driver seat' },
  { id: 4, title: 'Communication First', desc: 'Modern tools and services to collaborate' }
 ]
 return (
  <section className="min-h-screen max-w-full p-4 sm:p-6 md:p-30 font-bricolage">
   {/* heading  */}
   <div className="text-center mx-auto mb-12 ">
    <h1
     className="text-xl md:text-6xl font-bold 
    items-center justify-center gap-2 text-balance tracking-tighter leading-normal cursor-pointer"
    >
     <Image
      src="/images/star.png"
      alt="Star Icon"
      width={45}
      height={45}
      className="hidden md:inline-block  mr-3"
     />
     <span className="text-gray-800">At Software Chamber,</span>{" "}
     <span className="text-[#A5A5A5]">we specialize</span>{" "}
     in turning complex challenges into elegant
     <br />
     <span className="text-[#A5A5A5]">digital solutions</span>
     <Image
      src="/images/upaarrow.png"
      alt="Star Icon"
      width={40}
      height={40}
      className="inline-block ml-5"
     />

    </h1>
   </div>

    {/* content grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
    
    {/* Stats section */}
    <div className="">
          <State />
        </div>

    {/* Image section */}
    <div className="flex items-center justify-center">
      <Image
        src="/images/overviewImg.png"
        alt="overviewing"
        width={450}
        height={450}
        className=""
      />
    </div>

    {/* Features section */}
    <div className=" space-y-6 ">
      {features.map((feature) => (
        <div
          key={feature.id}
          className={`flex items-center p-4 ${feature.id !== 4 ? "border-b border-gray-200" : ""}`}
        >
          <div className="mr-4">
            <button className="bg-[#27B4A3] size-8  md:size-16 rounded-full text-black flex items-center justify-center">
              <h1 className="bg-white size-4  md:size-8 rounded-full flex items-center justify-center text-sm font-bold">
                {feature.id}
              </h1>
            </button>
          </div>
          
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1">{feature.title}</h1>
            <p className="text-[#666D80] font-outfit text-base sm:text-lg">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </section>
 )
}

export default OverviewSection
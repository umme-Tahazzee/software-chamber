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









   <div>
    {/* Heading 1 */}
    <div>

    </div>
    {/* img section  */}
    <div>

    </div>

    {/* features section  */}

   </div>
  </section>
 )
}

export default OverviewSection
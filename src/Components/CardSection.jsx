

const CardSection = () => {
 return (
  <div className="p-4">
 {/* <!-- Your Top Card --> */}
  <div class="relative z-20 bg-[#7DFDE31A] flex flex-col md:flex-row items-center 
              w-full max-w-3xl mx-auto mt-4 rounded-2xl p-4 backdrop-blur-md shadow-2xl">
    {/* <!-- Image section --> */}
    <div class="w-full md:w-1/2 p-4 md:p-6">
      <img
        src="images/card.png"
        alt="card"
        class="w-full h-auto object-contain"
      />
    </div>
    {/* <!-- Text section --> */}
    <div class="w-full md:w-1/2 flex flex-col justify-center h-full px-4 md:px-6 py-4">
      <div class="text-start">
        <h3 class="text-white text-lg md:text-xl font-semibold mb-2">
          Software Service <br /> Solutions
        </h3>
        <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-5 max-w-[260px]">
          Plan, track, and <br /> manage projects with <br /> precision tools.
        </p>
      </div>
      <button class="bg-[#20242C] hover:bg-[#2A2F3A] transition-colors px-5 py-2 
                     rounded-full text-sm font-semibold text-white shadow w-fit mx-auto md:mx-0">
        Discover
      </button>
    </div>
  </div>
     
   
      {/* Overlapping Empty Card 1 */}
      <div className="bg-[#7DFDE31A]  relative -mt-28 z-10 
                      max-w-2xl mx-auto h-40 rounded-2xl backdrop-blur-md shadow-xl">
      </div>

       {/* Overlapping Empty Card 2 */}
      <div className="bg-[#7DFDE31A]  relative -mt-28 z-0
                      max-w-xl mx-auto h-40 rounded-2xl backdrop-blur-md shadow-xl">
      </div>

   </div>
    


   
  
 );

}

export default CardSection
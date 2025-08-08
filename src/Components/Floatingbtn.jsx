import React from 'react'

const Floatingbtn = () => {
  return (
<div className="hidden md:block absolute top-20 left-0 right-0 max-w-5xl mx-auto z-30">
  {[
    {
      label: "Website Development",
      position: "left-[-9.5rem] top-[13.5rem]",
      line: {
        src: "/images/Vector177.svg",
        className: "left-[3.75rem] top-[10rem]"
      }
    },
    {
      label: "Mobile App Development",
      position: "left-[-12.75rem] bottom-[1rem]",
      line: {
        src: "/images/line1.svg",
        className: "left-[1.75rem] -top-[2.5rem]"
      }
    },
    {
      label: "UX/UI Engineering",
      position: "right-[-10rem] top-[10rem]",
      line: {
        src: "/images/line2.svg",
        className: "right-[1.5rem] top-[5rem]"
      }
    },
    {
      label: "Software Services",
      position: "right-[-10rem] bottom-[1rem]",
      line: {
        src: "/images/line3.svg",
        className: "right-[1.5rem] -top-[2.5rem] scale-x-[-1]"
      }
    }
  ].map((service, idx) => (
    <div key={idx}>
      {/* Button */}
      <div className={`absolute ${service.position} flex flex-col items-center`}>
        <div className="bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,rgba(44,206,186,0.2)_100%)] backdrop-blur-sm text-white px-6 py-3 rounded-md text-md border border-white/20">
          {service.label}
        </div>
      </div>

      {/* Line */}
      <div className="relative">
        <img
          src={service.line.src}
          alt={`line-${idx}`}
          className={`absolute ${service.line.className}`}
        />
      </div>
    </div>
  ))}

    </div>
  )
}

export default Floatingbtn
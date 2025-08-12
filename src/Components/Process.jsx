import ProcessHeading from "@/material-ui/ProcessHeading"
import WorkflowArc from "@/material-ui/WorkflowArc"
import Image from "next/image"


const Process = () => {
  return (
   <div className="relative hero  max-w-full p-4 sm:p-6 md:p-10
    overflow-hidden bg-[#041b1c]" 
   >
       <ProcessHeading/>

       {/* Globe section  */}
         {/* Globe and points */}
      <div className="relative flex justify-center items-center">
        {/* Globe */}
        <Image src="/images/globe.png" alt="globe" width={600} height={600} />

{/* Dotted arc */}
<svg
  className="absolute w-[660px] h-[750px] top-[-220px]"
  viewBox="0 0 360 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    id="arcPath"
    d="M 40 180 A 140 140 0 0 1 320 180"
    stroke="#6FC3B1"
    strokeWidth="1"
    strokeDasharray="6 8"
    fill="none"
  />
</svg>

{/* Points on curve */}
{/* <ul
  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[460px] h-[300px] list-none p-0 m-0"
>
  {(() => {
    const points = [];
    const cx = 230; // center of arc (half of 460)
    const cy = 230; // center below arc (to make top visible)
    const r = 140;  // radius to match your arc path
    const startDeg = 210; // first point
    const stepDeg = 30;   // spacing between points
    const labels = [
      'Code',
      'Build',
      'Test',
      'Release',
      'Deploy',
      'Monitor',
      'Build',
    ];

    labels.forEach((text, idx) => {
      const angleRad = ((startDeg - stepDeg * idx) * Math.PI) / 180;
      const px = cx + r * Math.cos(angleRad);
      const py = cy + r * Math.sin(angleRad);
      points.push({ text, x: px, y: py });
    });

    return points.map(({ text, x, y }, idx) => (
      <li
        key={idx}
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs select-none"
          style={{ filter: 'drop-shadow(0 0 2px #000)' }}
        >
          {idx + 1}
        </div>
        <span
          className="block mt-1 text-xs font-light text-[#6FC3B1]"
          style={{ whiteSpace: 'nowrap' }}
        >
          {text}
        </span>
      </li>
    ));
  })()}
</ul> */}




      </div>
     
    </div>
  )
}

export default Process
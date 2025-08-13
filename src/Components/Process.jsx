import ProcessHeading from "@/material-ui/ProcessHeading";
import Image from "next/image";

const Process = () => {
  const steps = [
    { id: 1, label: "Code", color: "#2DD4BF" },
    { id: 2, label: "Build", color: "#FFFFFF" },
    { id: 3, label: "Test", color: "#2DD4BF" },
    { id: 4, label: "Release", color: "#FFFFFF" },
    { id: 5, label: "Deploy", color: "#2DD4BF" },
    { id: 6, label: "Monitor", color: "#FFFFFF" },
    { id: 7, label: "Build", color: "#2DD4BF" },
  ];

  const cx = 180; // center in viewBox units
  const cy = 180;
  const r = 140;

  return (
    <div className="relative hero max-w-full overflow-hidden bg-[#041b1c] h-auto px-4">
      <ProcessHeading />

      <div className="relative flex justify-center items-center mt-10 w-full max-w-[700px] mx-auto">
        {/* Globe */}
        <Image
          src="/images/globe.png"
          alt="globe"
          width={600}
          height={600}
          className="w-full h-auto"
        />

        {/* Arc with nodes */}
        <svg
          className="absolute w-full h-auto top-0"
          viewBox="0 0 360 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Dotted Arc */}
          <path
            d="M 40 180 A 140 140 0 0 1 320 180"
            stroke="#6FC3B1"
            strokeWidth="1"
            strokeDasharray="6 8"
            fill="none"
          />

          {/* Steps */}
          {steps.map((step, i) => {
            const angle = Math.PI - (i / (steps.length - 1)) * Math.PI; // radians
            const x = cx + r * Math.cos(angle);
            const y = cy - r * Math.sin(angle);

            return (
              <g key={i} className="group cursor-pointer">
                {/* Circle */}
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="#3D3D3D"
                  stroke={step.color}
                  strokeWidth="2"
                />
                {/* Number */}
                <text
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#fff"
                  fontFamily="sans-serif"
                >
                  {step.id}
                </text>
                {/* Label - hidden until hover */}
                <text
                  x={x}
                  y={y - 18}
                  textAnchor="middle"
                  fontSize="8"
                  fill={step.color}
                  fontFamily="sans-serif"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {step.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Process;

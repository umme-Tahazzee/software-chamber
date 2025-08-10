"use client";
import Image from "next/image";

export default function WorkflowArc() {
  const steps = [
    { id: 1, label: "Code", color: "#2DD4BF" },
    { id: 2, label: "Build", color: "#FFFFFF" },
    { id: 3, label: "Test", color: "#2DD4BF" },
    { id: 4, label: "Release", color: "#FFFFFF" },
    { id: 5, label: "Deploy", color: "#2DD4BF" },
    { id: 6, label: "Monitor", color: "#FFFFFF" },
    { id: 7, label: "Build", color: "#2DD4BF" },
  ];

  // SVG and arc settings
  const svgWidth = 850;
  const svgHeight = 450;
  const arcRadius = 350;
  const centerX = svgWidth / 2; // 425
  const centerY = 350;

  // Custom angles in degrees (matches your image spacing)
  const anglesDeg = [180, 150, 120, 90, 60, 30, 0];
  const anglesRad = anglesDeg.map((a) => (a * Math.PI) / 180);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      style={{ maxHeight: "500px" }}
    >
      {/* SVG arc on top */}
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="relative w-full h-auto z-10"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dotted Arc Path */}
        <path
          d={`M ${centerX - arcRadius} ${centerY} A ${arcRadius} ${arcRadius} 0 0 1 ${
            centerX + arcRadius
          } ${centerY}`}
          stroke="#A5A5A5"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* Steps */}
        {steps.map((step, i) => {
          const angle = anglesRad[i];
          const x = centerX + arcRadius * Math.cos(angle);
          const y = centerY + arcRadius * Math.sin(angle);

          // Default label positioning
          let labelX = x;
          let labelY = y - 40;
          let textAnchor = "middle";

          // Adjust based on arc position
          if (anglesDeg[i] > 150) {
            labelX = x - 20;
            textAnchor = "end";
          } else if (anglesDeg[i] < 30) {
            labelX = x + 20;
            textAnchor = "start";
          }

          if (anglesDeg[i] === 90) {
            labelY = y - 50; // Top point
          }

          return (
            <g key={step.id}>
              {/* Number circle */}
              <circle cx={x} cy={y} r="20" fill="#4B5563" />
              <text
                x={x}
                y={y + 6}
                textAnchor="middle"
                fontSize="14"
                fill="white"
                fontWeight="bold"
                pointerEvents="none"
              >
                {step.id}
              </text>
              {/* Label */}
              <text
                x={labelX}
                y={labelY}
                textAnchor={textAnchor}
                fontSize="14"
                fill={step.color}
                pointerEvents="none"
                fontWeight="600"
              >
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Globe image behind arc */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none">
        <Image
          src="/images/globe.png"
          alt="Globe"
          width={850}
          height={850}
          priority
        />
      </div>
    </div>
  );
}

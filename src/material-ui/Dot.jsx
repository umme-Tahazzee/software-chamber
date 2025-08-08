export const Dot = () => {
  // Generate 12 dots with a smooth curve on right side
  const rightSpots = Array.from({ length: 12 }).map((_, i) => {
    const top = 30 + i * 5; // vertical spacing from 30% to 85%
    // horizontal left in % making a gentle curve (arc)
    const left = 90 + 4 * Math.sin((i / 11) * Math.PI);
    // opacity varies smoothly between 0.4 and 0.7
    const opacity = 0.4 + 0.3 * Math.cos((i / 11) * Math.PI * 2);
    return { top, left, opacity };
  });

  // Generate 12 dots with a smooth curve on left side (mirrored)
  const leftSpots = Array.from({ length: 12 }).map((_, i) => {
    const top = 30 + i * 5; // vertical spacing from 30% to 85%
    // horizontal left in % with inverse curve for left side
    const left = 10 - 4 * Math.sin((i / 11) * Math.PI);
    // opacity varies smoothly
    const opacity = 0.4 + 0.3 * Math.cos((i / 11) * Math.PI * 2);
    return { top, left, opacity };
  });

  return (
    <div>
      {/* dotted background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* dots on right side */}
      <div className="absolute inset-0 pointer-events-none">
        {rightSpots.map((spot, index) => (
          <span
            key={`right-${index}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${spot.top}%`,
              left: `${spot.left}%`,
              opacity: spot.opacity,
              filter: `blur(${(1 - spot.opacity) * 1}px)`, // subtle blur for depth
            }}
          ></span>
        ))}
      </div>

      {/* dots on left side */}
      <div className="absolute inset-0 pointer-events-none">
        {leftSpots.map((spot, index) => (
          <span
            key={`left-${index}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${spot.top}%`,
              left: `${spot.left}%`,
              opacity: spot.opacity,
              filter: `blur(${(1 - spot.opacity) * 1}px)`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

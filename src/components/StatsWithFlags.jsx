import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const StatsWithFlags = () => {
  const stats = React.useMemo(
    () => [
      { value: 3000, text: "5 star reviews" },
      { value: 10000, text: "active users" },
      { value: 100, text: "improved learners" },
    ],
    []
  );

  const flags = [
    assets.flag,
    assets.flage2,
    assets.flag3,
    assets.flag4,
    assets.flag5,
    assets.flag6,
    assets.flag7,
    assets.flag8,
    assets.flag9,
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 4000; // Increased duration for slower animation (4 seconds)
    const startTimes = stats.map(() => Date.now());

    const animationFrame = requestAnimationFrame(function animate() {
      const now = Date.now();
      const newValues = stats.map((stat, index) => {
        const elapsedTime = now - startTimes[index];
        const progress = Math.min(elapsedTime / duration, 1);
        return Math.floor(progress * stat.value);
      });

      setAnimatedValues(newValues);

      if (newValues.some((value, index) => value < stats[index].value)) {
        requestAnimationFrame(animate);
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [stats]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 py-10">
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-gray-800">
            <p className="text-2xl font-bold text-[#9c50e2]">
              {animatedValues[index].toLocaleString()}+
            </p>
            <p className="text-sm">{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Flags Section */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 px-6 py-3 justify-center overflow-x-auto scrollbar-hide">
          {flags.map((flag, index) => (
            <img
              key={index}
              src={flag}
              alt={`Flag ${index}`}
              className="w-20 h-12 md:w-24 md:h-16 lg:w-28 lg:h-20 rounded-md shadow-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsWithFlags;
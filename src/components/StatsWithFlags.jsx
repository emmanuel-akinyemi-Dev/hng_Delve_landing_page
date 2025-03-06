import React from "react";
import { assets } from "../assets/assets";

const StatsWithFlags = () => {
  const stats = [
    { value: "3,000+", text: "5 star reviews" },
    { value: "10,000+", text: "active users" },
    { value: "100%", text: "improved learners" },
  ];

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

  return (
    <div className="w-full flex flex-col items-center gap-8 py-10">
      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-gray-800">
            <p className="text-2xl font-bold text-[#9c50e2]">{stat.value}</p>
            <p className="text-sm">{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Flags Section */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 px-6 py-3 overflow-x-auto scrollbar-hide">
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

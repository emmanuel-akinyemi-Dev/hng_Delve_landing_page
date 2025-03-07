// import React from "react";
// import { assets } from "../assets/assets";

// const WhyDelve = () => {
//   const features = [
//     {
//       icon: assets.cap,
//       title: "Learn by Speaking",
//       description:
//         "Jump straight into interactive dialogues that challenge you to respond naturally, helping you think and speak in your target language.",
//     },
//     {
//       icon: assets.shoot,
//       title: "Quest-Based Learning",
//       description:
//         "Every lesson is a mission! Complete real-life challenges like booking a hotel or bargaining at a market to improve fluency.",
//     },
//     {
//       icon: assets.ai,
//       title: "AI-Powered Feedback",
//       description:
//         "Get instant feedback on pronunciation, grammar, and fluency to refine your skills and track progress effortlessly.",
//     },
//   ];

//   return (
//     <section className="w-full py-12 bg-white flex flex-col items-center text-center">
//       {/* Heading */}
//       <div className="bg-[#f3e9fb] text-black rounded-full px-4 py-1 mb-4">
//         <p className="text-sm text-[#605d63]font-semibold">Why Delve?</p>
//       </div>
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
//         Immerse Yourself in Real-World Challenges
//       </h2>
//       <p className="text-gray-600 max-w-2xl mt-3">
//         Ditch the drills—Delve immerses you in real-world quests where speaking
//         drives progress, building confidence through practical, engaging
//         challenges.
//       </p>

//       {/* Features Grid */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
//           >
//             <img src={feature.icon} alt="" />
//             <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
//             <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyDelve;

import React from "react";
import { assets } from "../assets/assets";

const WhyDelve = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
      {/* Image Section */}
      <div className="flex flex-col justify-center mb-8 md:mb-0">
        <img
          src={assets.rectangle}
          alt="Matching pairs game screen"
          className="w-full max-w-xs md:max-w-md relative rounded-lg shadow-lg"
        />
        <img className="absolute translate-y-48" src={assets.rec} alt="" />
      </div>

      {/* Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl text-black font-bold mb-4">
          No More Tedious Memorization
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Make learning feel like a game with{" "}
          <span className="text-orange-500 font-semibold">
            engaging word matches
          </span>{" "}
          that stick in your memory longer.
        </p>
        <button className="bg-purple-600 text-white text-lg py-3 px-8 rounded-lg shadow-md hover:bg-purple-700">
          Start Matching
        </button>
      </div>
    </section>
  );
};

export default WhyDelve;

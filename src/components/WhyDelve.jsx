import React from "react";
import { assets } from "../assets/assets";

const WhyDelve = () => {
  const features = [
    {
      icon: assets.cap,
      title: "Learn by Speaking",
      description:
        "Jump straight into interactive dialogues that challenge you to respond naturally, helping you think and speak in your target language.",
    },
    {
      icon: assets.shoot,
      title: "Quest-Based Learning",
      description:
        "Every lesson is a mission! Complete real-life challenges like booking a hotel or bargaining at a market to improve fluency.",
    },
    {
      icon: assets.ai,
      title: "AI-Powered Feedback",
      description:
        "Get instant feedback on pronunciation, grammar, and fluency to refine your skills and track progress effortlessly.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white flex flex-col items-center text-center">
      {/* Heading */}
      <div className="bg-[#f3e9fb] text-black rounded-full px-4 py-1 mb-4">
        <p className="text-sm text-[#605d63]font-semibold">Why Delve?</p>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
        Immerse Yourself in Real-World Challenges
      </h2>
      <p className="text-gray-600 max-w-2xl mt-3">
        Ditch the drills—Delve immerses you in real-world quests where speaking
        drives progress, building confidence through practical, engaging
        challenges.
      </p>

      {/* Features Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
          >
            <img src={feature.icon} alt="" />
            <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDelve;

import React from "react";
import { FaComments, FaTasks, FaBrain } from "react-icons/fa";

const WhyDelve = () => {
  const features = [
    {
      icon: <FaComments className="text-purple-600 text-3xl" />,
      title: "Learn by Speaking",
      description:
        "Jump straight into interactive dialogues that challenge you to respond naturally, helping you think and speak in your target language.",
    },
    {
      icon: <FaTasks className="text-purple-600 text-3xl" />,
      title: "Quest-Based Learning",
      description:
        "Every lesson is a mission! Complete real-life challenges like booking a hotel or bargaining at a market to improve fluency.",
    },
    {
      icon: <FaBrain className="text-purple-600 text-3xl" />,
      title: "AI-Powered Feedback",
      description:
        "Get instant feedback on pronunciation, grammar, and fluency to refine your skills and track progress effortlessly.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white flex flex-col items-center text-center">
      {/* Heading */}
      <p className="text-sm text-purple-500 font-semibold">Why Delve?</p>
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
            {feature.icon}
            <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDelve;

import React from "react";
import { assets } from "../assets/assets";

const UnlockPremium = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24">
      {/* Left Side - Phone Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={assets.unlock}
          alt="Delve App"
          className="w-[250px] md:w-[300px] object-contain"
        />
      </div>

      {/* Right Side - Text & CTA */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-900">
          Start Free, Unlock More!
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Want more? Unlock premium quests, extra retries, and exclusive
          challenges to push your fluency further. Stay free or level up—your
          language journey is in your hand.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition">
          Go Premium
        </button>
      </div>
    </section>
  );
};

export default UnlockPremium;

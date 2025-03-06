import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:justify-between px-4 md:px-16 bg-white min-h-screen pt-24 overflow-x-hidden">
      {/* Left Side - Text & Buttons */}
      <div className="md:w-1/2 text-center py-10 md:py-0 md:text-left w-full">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight text-black px-2">
          <span className="text-[#8324db]">Immerse Yourself in</span>{" "}
          <span className="text-[#8324db]">3D Quests</span> & Speak with
          Confidence
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
          Embark on exciting quests, conquer daily challenges, and speak
          confidently in any situation.
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center md:justify-start gap-4 mt-6">
          {/* Apple Store Button */}
          <a className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-800 transition w-full max-w-[140px] sm:max-w-[160px] md:max-w-[140px] lg:max-w-[160px]">
            <AiFillApple size={20} className="shrink-0 w-5 h-5" />
            <div className="text-center">
              <span className="text-[10px] text-Left">Download on the</span>
              <span className="block text-sm font-bold">App Store</span>
            </div>
          </a>

          {/* Google Play Button */}
          <a className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-900 transition w-full max-w-[140px] sm:max-w-[160px] md:max-w-[140px] lg:max-w-[160px]">
            <img
              src={assets.googleplayicon}
              alt="Google Play"
              className="w-5 h-5 shrink-0"
            />
            <div className="text-Left">
              <span className="text-[10px]">Get it on</span>
              <span className="block text-sm font-bold">Google Play</span>
            </div>
          </a>
        </div>
      </div>

      {/* Right Side - Image Container */}
      <div className="md:w-1/2 flex justify-center mt-16 md:justify-end  md:mt-0 w-full">
        <img src={assets.hero_img} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;

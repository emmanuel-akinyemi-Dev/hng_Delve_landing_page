import {
  FaApple,
  FaGooglePlay,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#4B0082] text-white py-10">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Logo and Download Buttons */}
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.delvelogo} alt="Delve Logo" className="h-10" />
              <h2 className="text-2xl font-bold">Delve</h2>
            </div>
            <div className="flex gap-3 mt-3">
              <a
                 
                className="bg-[#7D23E0] hover:bg-[#6B1DBA] px-5 py-2 rounded-lg flex items-center gap-2 shadow-md text-white cursor-pointer"
              >
                <FaGooglePlay /> Download
              </a>
              <a
                
                className="bg-[#7D23E0] hover:bg-[#6B1DBA] px-5 py-2 rounded-lg flex items-center gap-2 shadow-md text-white cursor-pointer"
              >
                <FaApple /> Download
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-semibold">About</h3>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>Courses</li>
                <li>Quests</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Help and Support</h3>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>Delve FAQs</li>
                <li>School FAQs</li>
                <li>Disclosure</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Privacy and Terms</h3>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>Community Guidelines</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <ul className="text-gray-300 mt-2 space-y-1">
                <li>+234 912 296 4215</li>
                <li>+234 803 971 5532</li>
                <li>hello@delve.fun</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full max-w-sm">
            <h3 className="font-semibold">Stay Up to Date</h3>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 p-2 rounded-l bg-white text-black outline-none"
              />
              <button className="bg-[#7D23E0] hover:bg-[#6B1DBA] px-5 py-2 rounded-r shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-600 mt-6 pt-4 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            ©2025 Delve. All rights reserved.
          </div>
          <div className="flex gap-4 text-gray-300 text-lg">
            <FaLinkedin className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

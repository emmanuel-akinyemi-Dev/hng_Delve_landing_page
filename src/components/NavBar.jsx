// import React, { useState } from "react";
// import { Link } from "react-router";
// import "animate.css";
// import { assets } from "../assets/assets";

// const Navbar = ({ scrollToHome, scrollToPricing, scrollToFaq, scrollToContactUs }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="w-full border-b shadow-sm fixed top-0 left-0 right-0 bg-white z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-black focus:outline-none transition-transform duration-300 ease-in-out"
//           >
//             <svg
//               className={`w-6 h-6 transform transition-transform duration-300 ${
//                 isOpen ? "rotate-90" : "rotate-0"
//               }`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               ></path>
//             </svg>
//           </button>
//         </div>

//         {/* Logo */}
//         <div className="flex-shrink-0 flex items-center">
//           <img className="h-8 w-auto" src={assets.delvelogo} alt="Delve Logo" />
//           <span className="ml-2 text-lg text-[#3D1166] font-semibold">
//             Delve
//           </span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
//           <button onClick={scrollToHome} className="text-black font-medium hover:text-[#3D1166]">
//             Home
//           </button>
//           <button onClick={scrollToPricing} className="text-black font-medium hover:text-[#3D1166]">
//             Pricing
//           </button>
//           <button onClick={scrollToFaq} className="text-black font-medium hover:text-[#3D1166]">
//             FAQ
//           </button>
//           <button onClick={scrollToContactUs} className="text-black font-medium hover:text-[#3D1166]">
//             Contact Us
//           </button>
//         </div>

//         {/* Desktop Try Delve Button */}
//         <div className="hidden md:block">
//           <Link
//             to="/try-delve"
//             className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
//           >
//             Try Delve
//           </Link>
//         </div>

//         {/* Mobile Try Delve Button */}
//         <div className="md:hidden">
//           <Link
//             to="/try-delve"
//             className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
//           >
//             Try Delve
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div
//         className={`md:hidden ${
//           isOpen ? "block" : "hidden"
//         } fixed top-16 left-0 right-0 bg-white shadow-lg z-40`}
//       >
//         <button
//           onClick={() => { closeMenu(); scrollToHome(); }}
//           className="block w-full px-4 py-3 text-left text-black hover:bg-gray-100"
//         >
//           Home
//         </button>
//         <button
//           onClick={() => { closeMenu(); scrollToPricing(); }}
//           className="block w-full px-4 py-3 text-left text-black hover:bg-gray-100"
//         >
//           Pricing
//         </button>
//         <button
//           onClick={() => { closeMenu(); scrollToFaq(); }}
//           className="block w-full px-4 py-3 text-left text-black hover:bg-gray-100"
//         >
//           FAQ
//         </button>
//         <button
//           onClick={() => { closeMenu(); scrollToContactUs(); }}
//           className="block w-full px-4 py-3 text-left text-black hover:bg-gray-100"
//         >
//           Contact Us
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-600">
        <img src={assets.delvelogo} alt="" />
      </div>

      {/* Get the App Button */}
      <a
        href="https://drive.google.com/file/d/1tOR77Ixu77h_yNcM5-ubIrAa8UG91hdB/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block  bg-purple-600 text-white px-8 py-3 rounded-lg w-[15%] text-lg font-medium shadow-md hover:bg-gray-200 transition text-center"
      >
        Get the app!
      </a>
    </nav>
  );
};

export default NavBar;

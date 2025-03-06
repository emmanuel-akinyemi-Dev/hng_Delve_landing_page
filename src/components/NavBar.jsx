import React, { useState } from "react";
import { NavLink } from "react-router";
import "animate.css";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b shadow-sm fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <img className="h-8 w-auto" src={assets.delvelogo} alt="Delve Logo" />
          <span className="ml-2 text-lg text-[#3D1166] font-semibold">
            Delve
          </span>
        </div>

        {/* Desktop Navigation Links (Centered) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#3D1166] font-medium" : "text-black font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-[#3D1166]" : "text-black"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "text-[#3D1166]" : "text-black"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#3D1166]" : "text-black"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Desktop Try Delve Button (Aligned to the Right) */}
        <div className="hidden md:block">
          <NavLink
            to="/try-delve"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Try Delve
          </NavLink>
        </div>

        {/* Mobile Try Delve Button */}
        <div className="md:hidden">
          <NavLink
            to="/try-delve"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Try Delve
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } fixed top-16 left-0 right-0 bg-white shadow-lg z-40`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            `block px-4 py-3 ${
              isActive
                ? "bg-[#3D1166] text-white"
                : "text-black hover:bg-gray-100"
            } animate__animated ${
              isOpen ? "animate__fadeInDown" : "animate__fadeOutUp"
            }`
          }
          style={{ animationDelay: "0.1s" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/pricing"
          onClick={closeMenu}
          className={({ isActive }) =>
            `block px-4 py-3 ${
              isActive
                ? "bg-[#3D1166] text-white"
                : "text-black hover:bg-gray-100"
            } animate__animated ${
              isOpen ? "animate__fadeInDown" : "animate__fadeOutUp"
            }`
          }
          style={{ animationDelay: "0.2s" }}
        >
          Pricing
        </NavLink>
        <NavLink
          to="/faq"
          onClick={closeMenu}
          className={({ isActive }) =>
            `block px-4 py-3 ${
              isActive
                ? "bg-[#3D1166] text-white"
                : "text-black hover:bg-gray-100"
            } animate__animated ${
              isOpen ? "animate__fadeInDown" : "animate__fadeOutUp"
            }`
          }
          style={{ animationDelay: "0.3s" }}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={closeMenu}
          className={({ isActive }) =>
            `block px-4 py-3 ${
              isActive
                ? "bg-[#3D1166] text-white"
                : "text-black hover:bg-gray-100"
            } animate__animated ${
              isOpen ? "animate__fadeInDown" : "animate__fadeOutUp"
            }`
          }
          style={{ animationDelay: "0.4s" }}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

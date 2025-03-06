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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src={assets.delvelogo}
              alt="Delve Logo"
            />
            <span className="ml-2 text-lg text-[#3D1166] font-semibold">
              Delve
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#3D1166] font-medium"
                  : "text-black font-medium"
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
          <div className="hidden md:block">
            <NavLink
              to="/try-delve"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Try Delve
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen
            ? "animate__animated animate__fadeIn"
            : "animate__animated animate__fadeOut hidden"
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block bg-[#3D1166] text-white px-4 py-2"
              : "block text-black px-4 py-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/pricing"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block bg-[#3D1166] text-white px-4 py-2"
              : "block text-black px-4 py-2"
          }
        >
          Pricing
        </NavLink>
        <NavLink
          to="/faq"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block bg-[#3D1166] text-white px-4 py-2"
              : "block text-black px-4 py-2"
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? "block bg-[#3D1166] text-white px-4 py-2"
              : "block text-black px-4 py-2"
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/try-delve"
          onClick={closeMenu}
          className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg relative active:top-1"
        >
          Try Delve
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

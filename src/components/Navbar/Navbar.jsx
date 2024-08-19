import React from "react";
import { useState } from "react";
import { GiRocketFlight } from "react-icons/gi";
import { navItems } from "../../constants/index.jsx";
import "./hamburgerMenu.css";

const Navbar = () => {
  const [mobileDrawerIsOpen, setMobileDrawerIsOpen] = useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawerIsOpen(!mobileDrawerIsOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-space-xs backdrop-blur-lg border-b border-neutral-700/80">
      {/* Container of mobile and large screen Navbar */}
      <div className="max-w-screen-2xl mx-auto px-space-s-m text-step--1">
        {/* Container of large Navbar*/}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <GiRocketFlight className="h-10 w-10 mr-space-3xs text-yellow-400" />
            <span className="text-step-1 font-bold font-logo tracking-tight">
              SpaceCraft
            </span>
          </div>
          {/* Navigation Links */}
          <ul className="hidden lg:flex ml-space-s-xl gap-space-s-xl items-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center gap-space-m items-center">
            <a href="#" className="py-space-3xs px-space-2xs border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-space-3xs px-space-2xs rounded-md"
            >
              Create Account
            </a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button
              onClick={toggleMobileDrawer}
              className="relative h-6 w-5 z-[60]"
            >
              <span
                className={`block h-[2px] my-1 bg-neutral-50 rounded relative ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
              <span
                className={`block h-[2px] my-1 bg-neutral-50 rounded relative ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
              <span
                className={`block h-[2px] my-1 bg-neutral-50 rounded relative ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* For mobile view, end of Navbar */}
        <div
          className={`fixed right-0 top-0 z-50 bg-neutral-900 p-space-l flex flex-col transition-transform duration-700 ease-in-out lg:hidden ${
            mobileDrawerIsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className="py-4 border-b border-neutral-700">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-6 mt-4">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-2 px-3 rounded-md"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

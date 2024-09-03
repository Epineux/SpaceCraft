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
    <nav
      className="sticky top-0 z-50 max-w-full border-b border-neutral-700/80 py-space-xs backdrop-blur-lg"
      style={{ overflowX: "clip" }}
    >
      {/* Container of mobile and large screen Navbar */}
      <div className="mx-auto max-w-screen-2xl px-space-s-m text-step--1">
        {/* Container of large Navbar*/}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <GiRocketFlight className="mr-space-3xs h-10 w-10 text-yellow-400" />
            <span className="font-logo text-step-1 font-bold tracking-tight">
              SpaceCraft
            </span>
          </div>
          {/* Navigation Links */}
          <ul className="ml-space-s-xl hidden items-center gap-space-s-xl lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center justify-center gap-space-m lg:flex">
            <a href="#" className="rounded-md border px-space-2xs py-space-3xs">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 px-space-2xs py-space-3xs"
            >
              Create Account
            </a>
          </div>
          <div className="flex flex-col justify-end lg:hidden">
            <button
              onClick={toggleMobileDrawer}
              className="relative z-[60] h-6 w-5"
            >
              <span
                className={`relative my-1 block h-[2px] rounded bg-neutral-50 ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
              <span
                className={`relative my-1 block h-[2px] rounded bg-neutral-50 ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
              <span
                className={`relative my-1 block h-[2px] rounded bg-neutral-50 ${
                  mobileDrawerIsOpen ? "menuOpen" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* For mobile view, end of Navbar */}
        <div
          className={`fixed right-0 top-0 z-50 flex flex-col bg-neutral-900 p-space-l transition-transform duration-700 ease-in-out lg:hidden ${
            mobileDrawerIsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-neutral-700 py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-6 pt-4">
            <a href="#" className="rounded-md border px-3 py-2">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 px-3 py-2"
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

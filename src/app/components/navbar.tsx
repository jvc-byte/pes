"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show the header if scrolling up and hide if scrolling down
      if (currentScrollY < scrollPosition) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      // Check if header should become fixed
      if (currentScrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      setScrollPosition(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-transform duration-700 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${isFixed ? "bg-white/40 backdrop-blur-sm shadow-lg" : "bg-black"}`} // Added backdrop blur when fixed
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a>Features</a></li>
            <li><a>How It Works</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LOGO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Features</a></li>
          <li><a>How It Works</a></li>
          <li><a>Pricing</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn">Sign In</a>
        <a className="btn">Sign Up</a>
      </div>
    </div>
  );
}

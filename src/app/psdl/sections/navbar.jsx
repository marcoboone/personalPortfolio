"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-[5vw] py-6 bg-transparent fixed w-full z-10 backdrop-blur-sm hover:bg-black/80 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl bodoni-moda tracking-widest">
          PSDL
        </div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="/psdl" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/psdl-research" className="text-gray-300 hover:text-white">
            Research
          </a>
          <a href="/psdl" className="text-gray-300 hover:text-white">
            People
          </a>
          <a href="/psdl" className="text-gray-300 hover:text-white">
            Publications
          </a>
          <a href="/psdl" className="text-gray-300 hover:text-white">
            Instruction
          </a>
          <a href="/psdl" className="text-gray-300 hover:text-white">
            News
          </a>
          <a href="/psdl" className="text-gray-300 hover:text-white">
            Outreach
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden p-4">
          <a href="/psdl" className="block text-gray-300 hover:text-white p-2">
            Home
          </a>
          <a href="/psdl-research" className="block text-gray-300 hover:text-white p-2">
            Research
          </a>
          <a
            href="/psdl"
            className="block text-gray-300 hover:text-white p-2"
          >
            People
          </a>
          <a
            href="/psdl"
            className="block text-gray-300 hover:text-white p-2"
          >
            Publications
          </a>
          <a
            href="/psdl"
            className="block text-gray-300 hover:text-white p-2"
          >
            Instruction
          </a>
          <a
            href="/psdl"
            className="block text-gray-300 hover:text-white p-2"
          >
            News
          </a>
          <a
            href="/psdl"
            className="block text-gray-300 hover:text-white p-2"
          >
            Outreach
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

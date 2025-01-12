import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MiscD = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center  bg-white text-black px-[5vw] py-[15vh] gap-8">
      <div className="flex flex-col ">
        <h1 className="bodoni-moda text-4xl md:text-5xl text-center md:text-start">
          Stay on the <span className="italic">Cutting Edge</span>
        </h1>
        <h1 className="bodoni-moda text-4xl md:text-5xl text-center md:text-start">with us at PSDL.</h1>
      </div>
      <div className="flex gap-8">
        <FaFacebook className="text-4xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" />
        <FaXTwitter className="text-4xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" />

        <FaInstagram className="text-4xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" />
        <FaLinkedin className="text-4xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default MiscD;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MiscCardC from "../components/miscCardC";

const MiscC = () => {
  return (
    <div className="bg-black text-white px-[5vw] py-[15vh]">
      <h1 className="bodoni-moda text-6xl py-6">Featured Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <MiscCardC
          title="Lorem ipsum dolor sit amet "
          date="DEC 11, 2024"
          imageSrc="/psdl_images/nanoTechC.jpg"
        ></MiscCardC>
        <MiscCardC
          title="Lorem ipsum"
          date="OCT 11, 2023"
          imageSrc="/psdl_images/nanoTechA.jpg"
        ></MiscCardC>
         <MiscCardC
          title="title"
          date="OCT 11, 2025"
          imageSrc="/psdl_images/nanoTechB.jpg"
        ></MiscCardC>
      </div>
    </div>
  );
};

export default MiscC;

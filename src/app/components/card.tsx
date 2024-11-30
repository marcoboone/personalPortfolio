import Image from "next/image";
import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { GrPlay } from "react-icons/gr";
import { GrCode } from "react-icons/gr";

interface CardProps {
  title: string;
  description: string;

  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ description, imageUrl, title }) => {
  return (
    <div className=" aspect-[2/1] md:aspect-[4/1] relative shadow-md rounded-lg group hover:scale-[1.01] transition-transform duration-100 ease-in group">
      <div className="absolute w-full h-full bg-black/60 backdrop-blur-sm rounded-lg "></div>
      <div className="absolute w-full h-full flex flex-col gap-2 md:gap-6 justify-center group-hover:opacity-0 transition-opacity duration-200 p-6 md:p-20 ">
        <span className="text-white lg:text-3xl block">{title}</span>
        <span className="text-white text-sm lg:text-2xl block ">
          {description}
        </span>
      </div>
      <div className="absolute w-full h-full flex  items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6 md:p-20">
        <span className="text-white text-base lg:text-3xl block">
          Learn More:
        </span>
        <GrDocumentPdf className="text-white text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
        <GrPlay className="text-white text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
        <GrCode className="text-white text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
      </div>
    </div>
  );
};

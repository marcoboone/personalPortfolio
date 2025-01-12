import React from "react";
import Image from "next/image";
import Link from "next/link";

const MiscB = () => {
  return (
    <div className="bg-black text-white px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" aspect-square rounded-md relative p-12 ">
          <Image
            src="/psdl_images/nanoTech.jpg"
            className="rounded-md"
            layout="fill"
            objectFit="cover"
            alt="Image"
          />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="bodoni-moda text-5xl">Nano Technology</h1>

          <h2 className="text-base text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            voluptatibus earum qui, corporis magnam commodi ducimus dolores.
          </h2>
          <Link
            href="/"
            className="text-xs text-white font-bold tracking-widest group mt-4 ml-4"
          >
            LEARN MORE{" "}
            <span className="font-normal inline-block transition-transform transform group-hover:translate-x-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiscB;

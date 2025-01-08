import React from "react";
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/themeToggle";
import { InlineMath, BlockMath } from "react-katex"; // Import from react-katex
import "katex/dist/katex.min.css"; // Import KaTeX CSS

const Projects = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-1/2 grid grid-cols-1 md:grid-cols-1  gap-6  text-atomblack dark:text-atomwhite ">
        {/*Projects Header*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-4xl md:text-6xl font-bold">
                  MATH 215 Course Notes
                </span>
              </div>
              <p className="text-sm">
                I have compiled a set of notes for the MATH 215 course at the
                University of Michigan.
              </p>
            </div>

            <div className="flex gap-2 text-xl">
              <Link
                href="/si"
                className="shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblack dark:shadow-atomwhite hover-pop"
              >
                <FaHome />
              </Link>
              <ThemeToggle></ThemeToggle>
            </div>
          </div>
        </div>

        {/*Chapter 1*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">
              Chapter 1: Coordinate Systems
            </span>
            <div className="text-sm">
              <InlineMath
                math={`
                        \\begin{aligned}
                        &\\text{The 3-dimensional coordinate system is defined by three axes:} \\\\
                        &\\text{1. The x-axis} \\\\
                        &\\text{2. The y-axis} \\\\
                        &\\text{3. The z-axis} \\\\
                        &\\text{These axes are mutually perpendicular and intersect at the origin (0, 0, 0).} \\\\
                        &\\text{Any point in 3-dimensional space can be represented as } (x, y, z).
                        \\end{aligned}
                    `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/themeToggle";
import { InlineMath, BlockMath } from "react-katex"; // Import from react-katex
import "katex/dist/katex.min.css"; // Import KaTeX CSS
import NotesTitle from "../noteComponents/noteTitle";

const Hero = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-1/2 grid grid-cols-1 md:grid-cols-1  gap-6  text-atomblack dark:text-atomwhite ">
        {/*Notes Title*/}
        <NotesTitle title="Physics 240" description="I am compiling a small textbook for Physics 240. I try to keep it simple and conversational. "></NotesTitle>
        {/*Chapter 1*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">
              Course Information
            </span>
            <ul>
              <li>Professor: Dr. Dave Winn</li>
              <li>Email: winn@umich.edu</li>
            </ul>
            <div className="text-sm"></div>
          </div>
        </div>

        {/*Chapter 1*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">
              Chapter 1: Coulombs Law and Electric Charge
            </span>
            <span className="text-xl md:text-2xl font-bold">
              1: Triboelectric Effect
            </span>
            <ul className="text-sm">
              <li>- Objects in contact may exchange charge</li>
            </ul>
            <span className="text-xl md:text-2xl font-bold">
              2: Coulombs Law
            </span>
            <div className="border-l-2 border-atomgreen p-4">
              <InlineMath>{"\\text{Definition:}"}</InlineMath>
              <BlockMath>
                {"\\vec{F} = k_e \\frac{q_1 q_2}{r^2}\\hat{r}"}
              </BlockMath>
              <ul>
                <li>
                  <InlineMath>
                    {"\\vec{F} := \\text{Force vector between the charges (N)}"}
                  </InlineMath>
                </li>
                <li>
                  <InlineMath>
                    {
                      "k_e := \\text{Coulomb's constant } (8.99 \\times 10^9 \\frac{N \\cdot m^2}{C^2})"
                    }
                  </InlineMath>
                </li>
                <li>
                  <InlineMath>
                    {"q_1, q_2 := \\text{Amounts of the two charges (C)}"}
                  </InlineMath>
                </li>
                <li>
                  <InlineMath>
                    {"r := \\text{Distance between the charges (m)}"}
                  </InlineMath>
                </li>
                <li>
                  <InlineMath>
                    {
                      "\\hat{r} := \\text{Vector pointing from charge 1 to charge 2 (m)}"
                    }
                  </InlineMath>
                </li>
              </ul>
            </div>
            <p classname="text-sm">
              Coulombs law is a inverse square relationship between the product
              of charges of two point particles, and their square displacement.
              A multitude of assumtions are made in the derivation of the
              equation, and thus should only be used in well defined situations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

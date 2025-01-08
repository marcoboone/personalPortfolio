import React from "react";
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/themeToggle";
import { InlineMath, BlockMath } from "react-katex"; // Import from react-katex
import "katex/dist/katex.min.css"; // Import KaTeX CSS

const Hero = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-1/2 grid grid-cols-1 md:grid-cols-1  gap-6  text-atomblack dark:text-atomwhite ">
        {/*Projects Header*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-4xl md:text-6xl font-bold">
                  Physics 240
                </span>
              </div>
              <p className="text-sm">
                I have compiled a set of notes for the Physics 240 course at the
                University of Michigan.
              </p>
            </div>

            <div className="flex gap-2 text-xl">
              <Link
                href="/courses"
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
              Unit 1: Coulombs Law and Electric Charge
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
              <InlineMath>{"\\text{Coulombs Law:}"}</InlineMath>
              <BlockMath>{"F = k_e \\frac{q_1 q_2}{r^2}"}</BlockMath>
              <ul>
                <li>
                  <InlineMath>
                    {"F := \\text{Force between the charges (N)}"}
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
              </ul>
            </div>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              i. Conductor
            </span>
            <ul className="pl-8 text-sm text-gray-400">
              <li>- Material that has some charges that may move within</li>
              <li>- Matalic conductors</li>
              <li>- Ionic Solutions</li>
            </ul>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              ii. Insulator
            </span>
            <ul className="pl-8 text-sm text-gray-400">
              <li>- Charges remain where they are placed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

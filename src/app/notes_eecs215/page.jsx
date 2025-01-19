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
                <span className="text-4xl md:text-6xl font-bold">EECS 215</span>
              </div>
              <p className="text-sm">
                I have compiled a set of notes for the EECS 215 course at the
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
              <li>Professor: Leland E Pierce</li>
              <li>Email: eecs215w25-staff@umich.edu</li>
            </ul>
            <div className="text-sm"></div>
          </div>
        </div>

        {/*Overview*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">Overview</span>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              i. Wires, Resistors, Sources
            </span>
            <ul className="pl-8 text-sm text-gray-400">
              <li>- Mathematical modeling when nothing changes in time</li>
            </ul>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              ii. Capacitors, inductors, Sources
            </span>
            <ul className="pl-8 text-sm text-gray-400">
              <li>- Mathematical modeling when things are changing in time</li>
              <li>- Differential equations</li>
              <li>- Complex numbers</li>
            </ul>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              iii. Simple Mathematical Models
            </span>
            <ul className="pl-8 text-sm text-gray-400">
              <li>- in order to develop understanding</li>
              <li>- approximations</li>
            </ul>
          </div>
        </div>

        {/*Chapter 1*/}
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <span className="text-2xl md:text-4xl font-bold">Chapter 1</span>
            <span className="text-xl md:text-2xl font-bold">
              1: Units, Dimensions, and Notation
            </span>
            <p>
              Use SI units. Time is a funamental dimension. Notation is expressed in the tables below.
            </p>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              i. Units
            </span>
            <div className="px-4 text-gray-400">
              <table className="table-auto border-collapse border border-gray-400 w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">
                      Quantity
                    </th>
                    <th className="border border-gray-400 px-4 py-2">Unit</th>
                    <th className="border border-gray-400 px-4 py-2">Symbol</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Length</td>
                    <td className="border border-gray-400 px-4 py-2">Meter</td>
                    <td className="border border-gray-400 px-4 py-2">m</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Mass</td>
                    <td className="border border-gray-400 px-4 py-2">
                      Kilogram
                    </td>
                    <td className="border border-gray-400 px-4 py-2">kg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Time</td>
                    <td className="border border-gray-400 px-4 py-2">Second</td>
                    <td className="border border-gray-400 px-4 py-2">s</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Electric Charge
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      coulomb
                    </td>
                    <td className="border border-gray-400 px-4 py-2">C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Temperature
                    </td>
                    <td className="border border-gray-400 px-4 py-2">kelvin</td>
                    <td className="border border-gray-400 px-4 py-2">K</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Current
                    </td>
                    <td className="border border-gray-400 px-4 py-2">Ampere</td>
                    <td className="border border-gray-400 px-4 py-2">A</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Voltage
                    </td>
                    <td className="border border-gray-400 px-4 py-2">volt</td>
                    <td className="border border-gray-400 px-4 py-2">V</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Resistance
                    </td>
                    <td className="border border-gray-400 px-4 py-2">ohm</td>
                    <td className="border border-gray-400 px-4 py-2">Ω</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Capacitance
                    </td>
                    <td className="border border-gray-400 px-4 py-2">farad</td>
                    <td className="border border-gray-400 px-4 py-2">F</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Inductance
                    </td>
                    <td className="border border-gray-400 px-4 py-2">henry</td>
                    <td className="border border-gray-400 px-4 py-2">H</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">
                      Frequency
                    </td>
                    <td className="border border-gray-400 px-4 py-2">hertz</td>
                    <td className="border border-gray-400 px-4 py-2">Hz</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-400 px-4 py-2">Power</td>
                    <td className="border border-gray-400 px-4 py-2">watt</td>
                    <td className="border border-gray-400 px-4 py-2">W</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              ii. Prefixes
            </span>
            <div className="text-gray-400 px-4">
              <table className="table-auto border-collapse border border-gray-400 w-full text-sm text-left">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">Prefix</th>
                    <th className="border border-gray-400 px-4 py-2">Symbol</th>
                    <th className="border border-gray-400 px-4 py-2">Factor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">milli</td>
                    <td className="border border-gray-400 px-4 py-2">m</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>-3</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">micro</td>
                    <td className="border border-gray-400 px-4 py-2">µ</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>-6</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">nano</td>
                    <td className="border border-gray-400 px-4 py-2">n</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>-9</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">pico</td>
                    <td className="border border-gray-400 px-4 py-2">p</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>-12</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">kilo</td>
                    <td className="border border-gray-400 px-4 py-2">k</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>3</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">mega</td>
                    <td className="border border-gray-400 px-4 py-2">M</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>6</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">giga</td>
                    <td className="border border-gray-400 px-4 py-2">G</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>9</sup>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-4 py-2">tera</td>
                    <td className="border border-gray-400 px-4 py-2">T</td>
                    <td className="border border-gray-400 px-4 py-2">
                      10<sup>12</sup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className="text-xl md:text-2xl font-bold">
              2: Circuit Representation
            </span>
            <p>
              At a high level circuits are represented by a network of nodes, and circuit elements. I outline a few key definions below.
            </p>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              i. Circuit Architecture
            </span>
            <ul className="pl-8 text-sm text-gray-400">
               <li><span className = "text-atomblue">node</span> - some linking between circuit elements</li>
               <li ><span className = "text-atomblue">ordinary node</span> - links only 2 circuit elements</li>
               <li ><span className = "text-atomblue">extraordinary node</span> - links 3+ circuit elements</li>
               <li ><span className = "text-atomblue">Branch</span> - the trace between two consecutive nodes
               containing one and only one element between them</li>
               <li><span className = "text-atomblue">Path</span> - any continuous sequence of branches, provided that
               no one node is encountered more than once.</li>
               <li><span className = "text-atomblue">Loop</span> - some linking between circuit elements</li>
               <li><span className = "text-atomblue">Mesh</span> - some linking between circuit elements</li>
               <li><span className = "text-atomblue">node</span> - some linking between circuit elements</li>

            </ul>
            <span className="pl-4 text-xl md:text-xl font-bold text-gray-400">
              ii. Circuit element relationships
            </span>
            <ul className="pl-8 text-sm text-gray-400">
               <li><span className = "text-atomblue">in series</span> - two circuit elements that share an ordinary node are by definition in series. Circuit elements in series share the same current.</li>
               <li ><span className = "text-atomblue">in parallel</span> - two circuit elements that share 2 extraordinary nodes are by definition in parallel. Ciruit elements in parallel share the same voltage</li>
               

            </ul>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

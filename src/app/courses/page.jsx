import React from "react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/themeToggle";
import {
  FaUnity,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCplusplus, SiCsharp } from "react-icons/si";
import { VscSymbolMisc } from "react-icons/vsc";
import TechNodule from "../components/techNodule";
import { PiShareNetwork } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { IoWaterOutline } from "react-icons/io5";
import { PiButterfly, PiPersonSimpleRun } from "react-icons/pi";
import { LuSword } from "react-icons/lu";

const Projects = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-4/6 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2 gap-6  text-atomblack dark:text-atomwhite ">
        {/*Projects Header*/}
        <div className="col-span-2 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <span className="text-4xl md:text-6xl font-bold">Courses</span>
              </div>
              <p className="text-sm">
                I have compiled a set of notes for some of the courses I have
                taken at UofM. These are publically available for anyone to use.
                If you have any questions, or find an error, feel free to reach
                out to me.
              </p>
            </div>

            <div className="flex gap-2 py-4 text-xl">
              <Link
                href="/"
                className="shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblack dark:shadow-atomwhite hover-pop"
              >
                <FaHome />
              </Link>
              <ThemeToggle></ThemeToggle>
              <Link
                href="https://github.com/marcoboone"
                className="shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomred hover-pop"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/*Physics 240*/}
        <div className="col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
          <div className="flex flex-col gap-4 p-6">
            <div className="flex gap-4 items-center">
              <div className="aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomgreen rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className="text-atomgreen text-4xl font-bold">240</span>
              </div>
              <div>
                <span className="font-bold">Physics 240</span>
                <span className="flex gap-2 items-center text-sm">
                  <span>
                    <FaCodeBranch />
                  </span>
                  <span>In Progress</span>
                </span>
              </div>
            </div>
            <p className="text-sm">Electricity and Magnetism</p>
            <div className="group flex gap-2 items-center">
              <div className=" rounded-sm w-[10px] h-[10px] bg-atomgreen group-hover:animate-spin"></div>
              <Link href="/notes_physics240" className="text-sm">
                Course Notes
              </Link>
              <span className="group-hover:ml-2 transition-all duration-150 ease-in-out">
                &rarr;
              </span>
            </div>
          </div>
        </div>
        {/*EECS 215*/}
        <div className="col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
          <div className="flex flex-col gap-4 p-6">
            <div className="flex gap-4 items-center">
              <div className="aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomred rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className="text-atomred text-4xl font-bold">215</span>
              </div>
              <div>
                <span className="font-bold">EECS 215</span>
                <span className="flex gap-2 items-center text-sm">
                  <span>
                    <FaCodeBranch />
                  </span>
                  <span>In Progress</span>
                </span>
              </div>
            </div>
            <p className="text-sm">Electronic Circuits</p>
            <div className="group flex gap-2 items-center">
              <div className=" rounded-sm w-[10px] h-[10px] bg-atomred group-hover:animate-spin"></div>
              <Link href="/" className="text-sm">
                Course Notes
              </Link>
              <span className="group-hover:ml-2 transition-all duration-150 ease-in-out">
                &rarr;
              </span>
            </div>
          </div>
        </div>
        {/*EECS 203*/}
        <div className="col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
          <div className="flex flex-col gap-4 p-6">
            <div className="flex gap-4 items-center">
              <div className="aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomblue rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className="text-atomblue text-4xl font-bold">203</span>
              </div>
              <div>
                <span className="font-bold">EECS 203</span>
                <span className="flex gap-2 items-center text-sm">
                  <span>
                    <FaCodeBranch />
                  </span>
                  <span>In Progress</span>
                </span>
              </div>
            </div>
            <p className="text-sm">Discrete Math</p>
            <div className="group flex gap-2 items-center">
              <div className=" rounded-sm w-[10px] h-[10px] bg-atomblue group-hover:animate-spin"></div>
              <Link href="/" className="text-sm">
                Course Notes
              </Link>
              <span className="group-hover:ml-2 transition-all duration-150 ease-in-out">
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

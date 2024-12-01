import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { TbMathIntegrals } from "react-icons/tb";
import ThemeToggle from "../components/themeToggle";


const Hero = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center md:h-screen py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-4/6 grid grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 gap-6  text-atomblack dark:text-atomwhite ">
{/*Main Section*/}
        <div className = "col-span-1 md:col-span-2 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
            <div className = "p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className = "flex justify-between items-start">
                    <span className = "text-4xl md:text-6xl font-bold">Marco Boone</span>
                    <ThemeToggle/>
                    </div>
                    <p className = "text-sm">
                        Welcome to my portfolio. Like what you see? Let&apos;s work together!
                    </p>
                </div>
                
                
                <div className = "flex gap-2 py-4 text-xl">
                    <Link href = "https://github.com/marcoboone" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomred hover-pop"><FaGithub /></Link>
                    <Link href = "https://www.linkedin.com/in/marco-boone-220200262/" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblue hover-pop"><FaLinkedin /></Link>
                    <Link href = "meboone@umich.edu" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomgreen hover-pop"><MdOutlineMailOutline /></Link>

                </div>
            </div>
        </div>
{/*About Section*/}
        <div className="col-span-1 row-span-1 relative overflow-hidden shadow-md rounded-md border-t-[1px]  border-atomgreyb/20 ">
           <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 bg-atomwhite dark:bg-atomblack shadow-md rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center animate-spin-slow">
                <span className = " text-2xl font-bold">MB</span>
            </div>
            <div>
            <span className = "font-bold">Hey, It&apos;s Marco</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><IoLocationOutline/></span>
                <span>Ann Arbor, MI</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I am a computer engineering student at the University of Michigan. In my freetime I like to make cool stuff. Check out some of my projects!</p>

           </div>
        </div>
{/*Research Section*/}
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomyellow rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomyellow text-4xl font-bold"><FaRobot/></span>
            </div>
            <div>
            <span className = "font-bold">Research</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Z-LAB</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I do swarm robotics reseach with the Z-Lab at the University of Michigan.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomyellow group-hover:animate-spin"></div>
                <Link href = "https://z.engin.umich.edu/" className = "text-sm">Z-Lab </Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Projects Section*/}
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomred rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomred text-4xl font-bold"><FaLaptopCode/></span>
            </div>
            <div>
            <span className = "font-bold">Projects</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Cool Stuff</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I&apos;ve got some cool projects to show off. Check them out at the link below.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomred group-hover:animate-spin"></div>
                <Link href = "https://github.com/marcoboone" className = "text-sm">View Projects</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Education Section*/}
        <div className = "col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomblue rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomblue text-4xl font-bold"><TbMathIntegrals/></span>
            </div>
            <div>
            <span className = "font-bold">Education</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Courses</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I am an SI for MATH 215. Click the link to get to the course page.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomblue group-hover:animate-spin"></div>
                <Link href = "/si" className = "text-sm">Course Page</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>

      
      </div>
    </div>
  );
};

export default Hero;

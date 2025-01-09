import React from "react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import ThemeToggle from "../components/themeToggle";
import CourseCard from "./courseCard";

const Projects = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
      <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-4/6 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-6  text-atomblack dark:text-atomwhite ">
        {/*Projects Header*/}
        <div className="col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
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
        <CourseCard color = "atomgreen"
                    title = "Physics 240"
                    subtitle = "In Progress"
                    description = "Electricity and Magnetism"
                    number = "240"
                    link = "/notes_physics240"></CourseCard>
        {/*EECS 215*/}
        <CourseCard color = "atomred"
                    title = "EECS 215"
                    subtitle = "In Progress"
                    description = "Circuit Design"
                    number = "215"
                    link = "/notes_eecs215"></CourseCard>
        {/*EECS 203*/}
        <CourseCard color = "atomblue"
                    title = "EECS 203"
                    subtitle = "In Progress"
                    description = "Discrete Mathematics"
                    number = "203"
                    link = "/notes_eecs203"></CourseCard>
      </div>
    </div>
  );
};

export default Projects;

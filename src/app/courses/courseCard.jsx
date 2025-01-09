import React from 'react';
import Link from 'next/link';
import { FaCodeBranch } from 'react-icons/fa';

const CourseCard = ({ color, title, subtitle, description, number, link }) => {
  const shadowColorClass = `shadow-${color}`;
  const textColorClass = `text-${color}`;
  const bgColorClass = `bg-${color}`;

  return (
    <div className="col-span-1 row-span-1 shadow-md border-t-[1px] border-atomgreyb/20 rounded-md">
      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-4 items-center">
          <div className={`aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md ${shadowColorClass} rounded-full border-t-[1px] border-atomgreyb/20 flex justify-center items-center`}>
            <span className={`text-4xl font-bold ${textColorClass}`}>{number}</span>
          </div>
          <div>
            <span className="font-bold">{title}</span>
            <span className="flex gap-2 items-center text-sm">
              <span>
                <FaCodeBranch />
              </span>
              <span>{subtitle}</span>
            </span>
          </div>
        </div>
        <p className="text-sm">{description}</p>
        <div className="group flex gap-2 items-center">
          <div className={`rounded-sm w-[10px] h-[10px] ${bgColorClass} group-hover:animate-spin`}></div>
          <Link href={link} className="text-sm">
            Course Notes
          </Link>
          <span className="group-hover:ml-2 transition-all duration-150 ease-in-out">
            &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
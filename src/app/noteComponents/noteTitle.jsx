import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import ThemeToggle from '../components/themeToggle';

const NoteTitle = ({ title, description }) => {
    return (
        <div className="col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px] border-atomgreyb/20">
            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <span className="text-4xl md:text-6xl font-bold">
                            {title}
                        </span>
                    </div>
                    <p className="text-sm">
                        {description}
                    </p>
                </div>

                <div className="flex gap-2 text-xl">
                    <Link
                        href="/courses"
                        className="shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblack dark:shadow-atomwhite hover-pop"
                    >
                        <FaHome />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
};

export default NoteTitle;
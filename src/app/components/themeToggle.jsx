"use client";
import { useEffect, useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
        } 
    }, []);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);
  return (
    <div
    onClick={() => setDarkMode(!darkMode)}
    className="shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 dark:shadow-atomwhite shadow-atomblack hover-pop"
  >
    {darkMode ? <FaSun /> : <FaMoon />}
  </div>
    
  )
}

export default ThemeToggle
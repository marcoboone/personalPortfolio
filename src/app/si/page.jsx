import React from 'react'
import Link from 'next/link'
import { FaCodeBranch } from 'react-icons/fa'   
import { FaHome, FaInfo } from "react-icons/fa";
import ThemeToggle from '../components/themeToggle'
import { VscSymbolMisc } from "react-icons/vsc";
import { PiShareNetwork } from "react-icons/pi";
import { GrResources } from "react-icons/gr";




const SI = () => {  
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center md:h-screen py-10 ">
        <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-4/6 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2 gap-6  text-atomblack dark:text-atomwhite ">
{/*Projects Header*/}          
        <div className = "col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
            <div className = "p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className = "flex justify-between items-start">
                    <span className = "text-4xl md:text-6xl font-bold">MATH 215 SI</span>
                    </div>
                    <div className = "flex flex-col text-sm">
            <span>When: Sunday from 1:00 pm to 2:30 pm</span>
            <span>Where: 1372 East Hall - Central Campus</span>
            </div>
                </div>
                
                
                <div className = "flex gap-2  text-xl">
                    
                    <Link href = "/" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblack dark:shadow-atomwhite hover-pop"><FaHome/></Link>
                    <ThemeToggle></ThemeToggle>
                   

                    

                </div>
            </div>
        </div>
        
{/*Game Dev Projects*/}        
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-6 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomblack dark:shadow-atomwhite rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomblack dark:text-atomwhite text-4xl font-bold"><VscSymbolMisc/></span>
            </div>
            <div>
            <span className = " font-bold ">Weekly Sessions</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Access Weekly Session Material</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">Click the link below to get access to all the weekly material in PDF format.</p>
            <div className = "flex flex-col gap-2">
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomblack dark:bg-atomwhite group-hover:animate-spin"></div>
                <Link href = "https://drive.google.com/drive/folders/12Pt0F6Cl5k8LezmfKdS41UT9HTURTZ5k?usp=drive_link" className = "text-sm">google drive</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button">
                <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomcyan group-hover:animate-spin"></div>
                <div className = "text-sm">LATEX</div>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-atomblack rounded-box z-[1] w-52 p-2 shadow">
                    <Link href = "PS1.pdf" className = "">Week 1</Link>
                    <Link href = "PS2.pdf" className = "">Week 2</Link>
                    <Link href = "PS3.pdf" className = "">Week 3</Link>
                    <Link href = "PS4.pdf" className = "">Week 4</Link>
                    <Link href = "PS5.pdf" className = "">Week 5</Link>
                    <Link href = "PS6.pdf" className = "">Week 6</Link>
                    <Link href = "PS7.pdf" className = "">Week 7</Link>
                    <Link href = "PS8.pdf" className = "">Week 8</Link>
                    <Link href = "PS9.pdf" className = "">Week 9</Link>
                   
                </ul>
                </div>
                </div>
            
           </div>
        </div>
{/*Resources*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomred rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomred text-4xl font-bold"><GrResources/></span>
            </div>
            <div>
            <span className = "font-bold">resources</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Useful Extra Content</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I have compiled a list of useful additional content to help you get that A+</p>
            <div className="dropdown">
                <div tabIndex={0} role="button">
                <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomred group-hover:animate-spin"></div>
                <div className = "text-sm">Resources</div>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-atomblack rounded-box z-[1] w-52 p-2 shadow">
                    <Link href = "https://math.arizona.edu/~serinh/teaching/math215.html" className = "">Course Notes</Link>
                    <Link href = "https://youtube.com/playlist?list=PL4C4C8A7D06566F38&si=SiuVBuEmhcdBW5SI" className = "">MIT Lectures</Link>
                    <Link href = "https://dept.math.lsa.umich.edu/courses/215/17exampractice/index.html" className = "">Previous Exams</Link>
                    <Link href = "https://www.khanacademy.org/math/multivariable-calculus" className = "">Khan Academy</Link>
                    <Link href = "https://tutorial.math.lamar.edu/classes/calciii/calciii.aspx " className = "">Paul&apos;s Online Notes</Link>
                    <Link href = "https://lsa.umich.edu/math/undergraduates/course-resources/math-lab.html" className = "">Math Lab</Link>
                    <Link href = "https://ecas.engin.umich.edu/elc/tutoring/" className = "">Tutoring</Link>
                    <Link href = "https://ecas.engin.umich.edu/elc-si-schedule/" className = "">SI Schedule</Link>
                </ul>
                </div>

           </div>
        </div>
{/*Info*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomblue rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomblue text-4xl font-bold"><FaInfo/></span>
            </div>
            <div>
            <span className = "font-bold">Course Notes</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>web notebook</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">Available NOW!</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomblue group-hover:animate-spin"></div>
                <Link href = "textbook.pdf" className = "text-sm">notes</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
        </div>
    </div>
  )
}

export default SI
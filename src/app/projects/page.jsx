import React from 'react'
import Link from 'next/link'
import { FaRobot } from 'react-icons/fa'
import { FaCodeBranch } from 'react-icons/fa'   
import { FaGithub } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";
import ThemeToggle from '../components/themeToggle'
import { FaUnity, FaReact, FaHtml5, FaCss3, FaJava, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCplusplus, SiCsharp } from "react-icons/si";
import { VscSymbolMisc } from "react-icons/vsc";
import TechNodule  from '../components/techNodule'
import { PiShareNetwork } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { IoWaterOutline } from "react-icons/io5";
import { PiButterfly, PiPersonSimpleRun} from "react-icons/pi";
import { LuSword } from "react-icons/lu";



const Projects = () => {
  return (
    <div className=" dark:bg-atomblack bg-atomwhite flex justify-center items-center py-10 ">
        <div className="dark:bg-atomblack light:bg-atomwhite w-5/6 md:w-4/6 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2 gap-6  text-atomblack dark:text-atomwhite ">
{/*Projects Header*/}          
        <div className = "col-span-1 md:col-span-1 row-span-1 shadow-md rounded-md border-t-[1px]  border-atomgreyb/20">
            <div className = "p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className = "flex justify-between items-start">
                    <span className = "text-4xl md:text-6xl font-bold">Projects</span>
                    </div>
                    <p className = "text-sm">
                        Here are some of the projects I have worked on.
                    </p>
                </div>
                
                
                <div className = "flex gap-2 py-4 text-xl">
                    
                    <Link href = "/" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomblack dark:shadow-atomwhite hover-pop"><FaHome/></Link>
                    <ThemeToggle></ThemeToggle>
                    <Link href = "https://github.com/marcoboone" className = "shadow-md rounded-md border-t-[1px] border-atomgreyb/20 p-2 shadow-atomred hover-pop"><FaGithub /></Link>

                </div>
            </div>
        </div>
        
{/*Game Dev Projects*/}        
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-6 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomwhite rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomwhite text-4xl font-bold"><VscSymbolMisc/></span>
            </div>
            <div>
            <span className = " font-bold">Tech Stack</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Check out the tech I use</span>
            </span>
            </div>
            </div>
            <div className = "flex gap-4 items-center text-2xl flex-wrap">
                <TechNodule color = "atomred" text = "Unity"><FaUnity/></TechNodule>
                <TechNodule color = "atomblue" text = "C++"><SiCplusplus/></TechNodule>
                <TechNodule color = "atomgreen" text = "C#"><SiCsharp/></TechNodule>
                <TechNodule color = "atomcyan" text = "Java"><FaJava/></TechNodule>
                <TechNodule color = "atomyellow" text = "React.JS"><FaReact/></TechNodule>
                <TechNodule color = "atompurple" text = "HTML"><FaHtml5/></TechNodule>
                <TechNodule color = "atomgreya" text = "CSS"><FaCss3/></TechNodule>
                <TechNodule color = "atompink" text = "Next.JS"><RiNextjsFill/></TechNodule>
            </div>
           </div>
        </div>
{/*Nimbl Site*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomgreen rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomgreen text-4xl font-bold">n</span>
            </div>
            <div>
            <span className = "font-bold">Nimbl</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Web Dev Agency</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">Interested in a website? Check out nimbl!</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomgreen group-hover:animate-spin"></div>
                <Link href = "https://nimbldesigns.com/" className = "text-sm">nimbldesigns.com</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Hydrip Site*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atompurple rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atompurple text-4xl font-bold"><IoWaterOutline/></span>
            </div>
            <div>
            <span className = "font-bold">Hydrip</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Website</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">A website my brother and I collaborated on for a window-cleaning company in Austin.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atompurple group-hover:animate-spin"></div>
                <Link href = "https://hydripclean.com" className = "text-sm">hydripclean.com</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Beastmode Site*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomyellow rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomyellow text-4xl font-bold"><CgGym/></span>
            </div>
            <div>
            <span className = "font-bold">Beastmode Fitness</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Website</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">A website I built on for a gym in Katy, TX.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomyellow group-hover:animate-spin"></div>
                <Link href = "https://beastmodetexas.com" className = "text-sm">beastmodetexas.com</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Flappy Bird Ai*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomblue rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomblue text-4xl font-bold"><PiShareNetwork/></span>
            </div>
            <div>
            <span className = "font-bold">Flappy Bird AI</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Unity Simulation</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I trained a shallow neural network to play flappy bird. Watch the AI learn in real time using a genetic algorithm based on natural selection!</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomblue group-hover:animate-spin"></div>
                <Link href = "https://play.unity.com/en/games/7413f091-9cde-404b-ab91-11450064d8a2/webaiflappybird" className = "text-sm">AI Flappy Bird</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Chaos Sim*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomcyan rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomcyan text-4xl font-bold"><PiButterfly/></span>
            </div>
            <div>
            <span className = "font-bold">Chaos Theory</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Simulation</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">Heard of the butterfly effect? I simulated a partical undergoing chaotic motion based off of some famous differential equations called attractors.</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomcyan group-hover:animate-spin"></div>
                <Link href = "https://play.unity.com/en/games/1e99fe7a-7372-4976-ac18-8047eb4a7d42/webgl-builds" className = "text-sm">Chaos Theory Simulation</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Infinite Runner*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atompink rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atompink text-4xl font-bold"><PiPersonSimpleRun/></span>
            </div>
            <div>
            <span className = "font-bold">Infinite Runner</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Video Game</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">I made a platformer game, go comment your highscore!</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atompink group-hover:animate-spin"></div>
                <Link href = "https://play.unity.com/en/games/2087819b-9eee-41ff-b19c-04d944d99ea8/webgl-builds" className = "text-sm">Infinte Runner</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
{/*Infinite Runner*/} 
        <div className = "col-span-1 row-span-1 shadow-md border-t-[1px]  border-atomgreyb/20 rounded-md">
        <div className = "flex flex-col gap-4 p-6">
            <div className = "flex gap-4 items-center">
            <div className = "aspect-square w-1/5 dark:bg-atomblack bg-atomwhite shadow-md shadow-atomgreyb rounded-full border-t-[1px]  border-atomgreyb/20 flex justify-center items-center">
                <span className = "text-atomgreyb text-4xl font-bold"><LuSword/></span>
            </div>
            <div>
            <span className = "font-bold">Dark Series</span>
            <span className = "flex gap-2 items-center text-sm">
                <span><FaCodeBranch/></span>
                <span>Video Game</span>
            </span>
            </div>
            </div>
            <p className = "text-sm">Another little platformer with some enemies to battle. Leave a comment if you enjoy!</p>
            <div className = "group flex gap-2 items-center">
                <div className = " rounded-sm w-[10px] h-[10px] bg-atomgreyb group-hover:animate-spin"></div>
                <Link href = "https://play.unity.com/en/games/5e0ff1bf-3376-4806-be76-99de7c73c19e/webgl-builds" className = "text-sm">Infinte Runner</Link>
                <span className = "group-hover:ml-2 transition-all duration-150 ease-in-out">&rarr;</span>
            </div>

           </div>
        </div>
        </div>
    </div>
  )
}

export default Projects
import React from "react";
import Tag from "@/app/components/tag";
import HeroCard from "@/app/components/heroCard";

const Hero = () => {
  return (
    <div className="md:h-screen bg-atomwhite p-10">
      {/* Grid layout for larger screens */}
      <div className="z-10 hidden md:grid md:grid-cols-6 md:grid-rows-6 md:gap-2 md:h-full md:p-20 md:text-atomblack">
        <div className="col-span-2 row-span-1 p-6 text-5xl tracking-widest">
          Hey<span className="text-atomyellow font-bold">!</span> it&apos;s{" "}
          <span className="text-atomblue font-bold">Marco</span>
        </div>

        <HeroCard
          title="About Me"
          link="https://www.marcoboone.com"
          description="Will be updated soon!"
          linkName="Coming Soon"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomgreya"
        />
        <HeroCard
          title="Contact"
          linkName="meboone@umich.edu"
          colSpan="col-span-1"
          rowSpan="row-span-2"
          color="hover:bg-atomgreyb"
        />

        <HeroCard
          title="Macro Tracker"
          link="https://www.marcoboone.com"
          description="New project? Shhhh. It's a secret."
          linkName="Coming Soon"
          colSpan="col-span-1"
          rowSpan="row-span-4"
          color="hover:bg-atomyellow"
        />

        <HeroCard
          title="Nimbl"
          link="https://www.nimbldesigns.com"
          description="Do you need a website? Check out this company I co-founded."
          linkName="learn more"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomred"
        />

        <HeroCard
          title="Atombots"
          link="https://mdp.engin.umich.edu/research_teams/atombot-24/"
          linkName="learn more"
          description="Researching the power of stochastic processes that could enable life-like robot swarms. "
          colSpan="col-span-1"
          rowSpan="row-span-4"
          color="hover:bg-atomcyan"
        />

        <HeroCard
          title="Custom Neural Nets"
          link="https://github.com/marcoboone"
          description="Will be updated soon!"
          linkName="learn more"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomgreen"
        />

        <HeroCard
          title="Mulivariable and Vector Calculus Class Page"
          link="/si"
          description="Supplemental Instruction Leader"
          linkName="learn more"
          colSpan="col-span-2"
          rowSpan="row-span-3"
          color="hover:bg-atomindigo"
        />

        <div className="col-span-3 row-span-2 rounded-[3rem] p-6  text-3xl">
          {" "}
          <span className="text-atomgreen font-bold">Welcome</span> to my
          portfolio! I am a student at the University of{" "}
          <span className="text-atomorange font-bold">Michigan </span>
          studying computer{" "}
          <span className="font-bold text-atomred">engineering</span>. Click a
          link and explore!{" "}
        </div>
      </div>

      {/* Grid layout for smaller screens */}
      <div className="grid grid-cols-2 grid-rows-12 gap-4 h-full p-5 text-white md:hidden">
        <div className="text-atomblack col-span-2 row-span-1 p-6 text-3xl tracking-widest">
          Hey<span className="text-atomyellow font-bold">!</span> it&apos;s{" "}
          <span className="text-atomblue font-bold">Marco</span>
        </div>

        <div className="text-atomblack col-span-2 row-span-2 rounded-[3rem] p-6  text-lg">
          {" "}
          <span className="text-atomgreen font-bold">Welcome</span> to my
          portfolio! I am a student at the University of{" "}
          <span className="text-atomorange font-bold">Michigan </span>
          studying computer{" "}
          <span className="font-bold text-atomred">engineering</span>. Click a
          link and explore!{" "}
        </div>

        <HeroCard
          title="Nimbl"
          link="https://www.nimbldesigns.com"
          description="Do you need a website? Check out this company I co-founded."
          linkName="learn more"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomred"
        />
        <HeroCard
          title="Atombots"
          link="https://mdp.engin.umich.edu/research_teams/atombot-24/"
          linkName="learn more"
          description="Researching the power of stochastic processes that could enable life-like robot swarms. "
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomcyan"
        />
        <HeroCard
          title="Mulivariable and Vector Calculus Class Page"
          link="/supplementalInstruction"
          description="Supplemental Instruction Leader"
          linkName="learn more"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomindigo"
        />
        <HeroCard
          title="About Me"
          link="https://www.marcoboone.com"
          description="Will be updated soon!"
          linkName="Coming Soon"
          colSpan="col-span-2"
          rowSpan="row-span-2"
          color="hover:bg-atomgreya"
        />
        <HeroCard
          title="Contact"
          linkName="meboone@umich.edu"
          colSpan="col-span-2"
          rowSpan="row-span-1"
          color="hover:bg-atomgreyb"
        />
      </div>
    </div>
  );
};

export default Hero;

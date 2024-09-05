import React from "react";

const About = () => {
  return (
    <div className="py-10 squeezetainer text-text bg-background ">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <span className="text-4xl tracking-widest"></span>
          <span className="font-semibold ">about</span>
        </div>
        <p className="text-lg">
          I am a student at the University of Michigan studying computer engineering. I
          am interested in programming, machine learning, robotics, math, physics,
          bodybuilding, chess, poker, and probably more.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className=" squeezetainer text-text bg-background py-[20vh]">
      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <span className="text-4xl tracking-widest">my work</span>
          <span className="font-semibold ">projects</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="card w-96 text-primary-content border-text/50 border-[1px] basis-1/3">
            <div className="card-body">
              <h2 className="card-title">atombots</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">learn more</button>
              </div>
            </div>
          </div>
          <div className="card w-96 text-primary-content border-text/50 border-[1px] basis-1/3">
            <div className="card-body">
              <h2 className="card-title">nimbl</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">learn more</button>
              </div>
            </div>
          </div>
          <div className="card w-96 text-primary-content border-text/50 border-[1px] basis-1/3">
            <div className="card-body">
              <h2 className="card-title">coursework</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm">learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

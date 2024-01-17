import React from "react";
import Tag from "@/app/components/tag";

const Hero = () => {
  return (
    <div className="squeezetainer h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col jusify-center gap-4">
          <Tag classNames={['text-xl']}>div</Tag>
          <span className="text-6xl tracking-widest">marco boone</span>
          <Tag classNames={['text-xl']}>div</Tag>
        </div>
      </div>
    </div>
  );
};

export default Hero;

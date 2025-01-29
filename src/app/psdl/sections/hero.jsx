import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
 <video src="/video.mp4" autoPlay muted loop className="absolute w-full h-full object-cover" />      <div className="absolute w-full h-full bg-black/40 "></div>
      <div className="absolute w-full h-full px-[5vw] py-[5vw] flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-8 md:gap-0">
        <div className="flex flex-col gap-2 md:w-[60%] items-center md:items-start">
          <h1 className=" bodoni-moda font-thin text-white text-3xl lg:text-7xl">
            Precision Innovated
          </h1>
          <p className=" text-white text-sm lg:text-lg text-center md:text-left">
            Engineering the future of motion. Explore designs that transform
            industries.
          </p>
          <div className="flex gap-6 text-base md:text-xl items-center mt-8">
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-xs font-semibold text-white tracking-widest">
                LOREM IPSUM
              </span>
              <span className="text-xl md:text-3xl text-white ">145</span>
              <span className="text-xs text-white">Esse soluta</span>
            </div>
            <div className="border-r-[1px] border-white opacity-70 h-20"></div>
            <div className="flex flex-col gap-1 items-center md:items-start">
              <span className="text-xs font-semibold text-white tracking-widest">
                LOREM IPSUM
              </span>
              <span className="text-xl md:text-3xl  text-white ">145</span>
              <span className="text-xs text-white">Esse soluta</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-end md:w-[40%]">
          <Link
            href="/"
            className="text-xs text-white border-white border-[1px] py-4 px-6 rounded-md tracking-widest font-semibold hover:bg-white hover:text-black transition-all duration-300"
          >
            LOREM
          </Link>
          <Link
            href="/"
            className="text-xs text-black bg-white border-white border-[1px] py-4 px-6 rounded-md tracking-widest font-semibold hover:opacity-80 transition-all duration-300"
          >
            IPSUM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

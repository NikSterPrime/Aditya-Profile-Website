import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-col bg-[#444444] p-6 md:p-10 m-6 md:m-10 rounded-2xl justify-center items-center h-full max-h-3xl w-10xl">
      
      {/* Text Content */}
      <div className="w-40 h-40 sm:w-50 sm:h-50 flex justify-center items-center mt-6 md:mt-0">
        <img
          className="rounded-full object-cover w-full h-full"
          src="./Aditya Profile phot.jpg"
          alt="Aditya Puranik"
        />
      </div>
      <div className="flex flex-col">
        <div className="w-full max-w-3xl justify-center items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#569CD6] m-3 sm:m-5 font-semibold">
            Aditya Puranik
          </h1>
          <p className="m-3 sm:m-5 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify break-words">
            Crafting clean, interactive interfaces with a creative edge.
            Passionate about design, games, and emerging tech.
            Always building, learning, and pushing ideas further.
          </p>
        </div>
        
        <div className="m-3 sm:m-5 flex">
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="m-2 sm:m-3 w-full p-2 rounded-4xl bg-[#C586C0] text-[#1E1E1E] font-extrabold hover:border-2">Connect with me</motion.button>
          <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="m-2 sm:m-3 w-full border-2 p-2 rounded-4xl text-[#F0F0F0] font-semibold hover:border-[#C586C0]"><a className='cursor-default'href="./AdityaResume.pdf" target="_blank" rel="noopener noreferrer" download>Resume</a></motion.button>
        </div>
      </div>

      {/* Profile Image */}
    </div>
  );
};

export default Hero;

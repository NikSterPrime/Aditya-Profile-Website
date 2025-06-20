import React from "react";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <motion.div whileHover={{scale:1.01}} className="flex flex-col p-6 md:p-10 rounded-2xl text-justify justify-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-left p-6 text-[#6A9955] font-semibold">//About Me:</h1>
      <p className="p-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed w-full">
          I’m a versatile developer and digital creative who thrives at the intersection of technology and design. With a passion for building functional, engaging experiences—from web apps to games—I bring ideas to life through code, graphic motion, and visual storytelling.
          Whether it’s crafting seamless user interfaces, exploring AI-driven creativity, or producing cinematic edits and immersive 3D environments, I’m constantly drawn to projects that challenge convention and spark innovation.
          <br></br>
          Beyond the screen, I enjoy experimenting with hardware, diving into new tech trends, and bridging the gap between logic and aesthetics. For me, building is more than just problem-solving — it’s a way to tell stories, connect ideas, and shape how people interact with the digital world.
      </p>
    </motion.div>
  );
}

export default AboutMe;

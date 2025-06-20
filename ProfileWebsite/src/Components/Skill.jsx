import React from "react";
import { motion } from "framer-motion";

import htmlLogo from "../assets/html5.png";
import jsLogo from "../assets/js.png";
import cssLogo from "../assets/css.png";
import reactLogo from "../assets/react.svg";
import tailLogo from "../assets/tailwindcss.png";
import pyLogo from "../assets/python.png";
import cplusLogo from "../assets/C++.png";
import ueLogo from "../assets/unreal.png";
import blenderLogo from "../assets/blender.png";
import bmLogo from "../assets/davinci.png";
import aeLogo from "../assets/after-effects.png";
import pproLogo from "../assets/premiere-pro.png";
import figma from "../assets/figma.png";
import { FaPython } from 'react-icons/fa';

const skillLogos = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Tailwind", logo: tailLogo },
  { name: "Python", logo: pyLogo },
  { name: "C++", logo: cplusLogo },
];

const creativeLogos = [
  { name: "Unreal Engine", logo: ueLogo },
  { name: "Blender", logo: blenderLogo },
  { name: "DaVinci Resolve", logo: bmLogo },
  { name: "After Effects", logo: aeLogo },
  { name: "Premiere Pro", logo: pproLogo },
  { name: "Figma", logo: figma },
];

const Skill = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex flex-col p-6 md:p-10 text-justify rounded-2xl bg-[#1e1e1e] border-1 border-[#569cd6] h-full w-full max-w-6xl mx-auto"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-[#6A9955] mb-4 font-semibold">//Skill Stack:</h1>
      
      <div className="mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#6A9955] mb-4 ">//Technical Stack:</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {skillLogos.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 object-contain mb-2"
              />
              <p className="text-sm text-[#CE9178] text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#6A9955] mb-4">//Creative Stack:</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {creativeLogos.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 object-contain mb-2"
              />
              <p className="text-sm text-[#CE9178] text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;

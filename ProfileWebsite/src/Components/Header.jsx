import { useState } from 'react';
import React from "react";
import './Component_Styles/Header.css';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
    <nav className="bg-[#1e1e1e] px-6 py-4 flex items-center justify-between w-screen">
      <div className="text-xl font-bold ml-10">Aditya_Puranik.dev</div>

      {/* Hamburger Icon (Mobile) */}
      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-9 font-mono text-sm absolute left-1/2 transform -translate-x-1/2">
        <li><a href="#about" className="inline-block hover:bg-[#333333] rounded-sm h-5 w-max justify-items-center px-1.5">About</a></li>
        <li><a href="#skills" className="inline-block hover:bg-[#333333] rounded-sm h-5 w-max justify-items-center px-1.5">Skills</a></li>
        <li><a href="#projects" className="inline-block hover:bg-[#333333] rounded-sm h-5 w-max justify-items-center px-1.5">Projects</a></li>
        <li><a href="#contact" className="inline-block hover:bg-[#333333] rounded-sm h-5 w-max justify-items-center px-1.5">Contact</a></li>
      </ul>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="absolute top-full right-0 bg-[#1E1E1E] text-vscode-text w-48 flex flex-col gap-4 py-4 px-6 md:hidden shadow-lg z-50">
          <li><a href="#about" onClick={() => setMenuOpen(false)} className="inline-block hover:bg-[#333333] rounded-sm h-6 w-max justify-items-center px-1.5">About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)} className="inline-block hover:bg-[#333333] rounded-sm h-6 w-max justify-items-center px-1.5">Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)} className="inline-block hover:bg-[#333333] rounded-sm h-6 w-max justify-items-center px-1.5">Projects</a></li>
          <li><a href="#reel" onClick={() => setMenuOpen(false)} className="inline-block hover:bg-[#333333] rounded-sm h-6 w-max justify-items-center px-1.5">Reel</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} className="inline-block hover:bg-[#333333] rounded-sm h-6 w-max justify-items-center px-1.5">Contact</a></li>
        </ul>
      )}
    </nav>
    )
}

export default Header
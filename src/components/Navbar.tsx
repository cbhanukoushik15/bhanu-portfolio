"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="font-bold text-cyan-400">
          BK
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}
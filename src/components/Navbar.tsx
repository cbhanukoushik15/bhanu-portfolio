"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#030712]/80 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <a
          href="#"
          className="text-2xl font-bold text-cyan-400 tracking-wider"
        >
          BK
        </a>

        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#certifications"
            className="hover:text-cyan-400 transition"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}
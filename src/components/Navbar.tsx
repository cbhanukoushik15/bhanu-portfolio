"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#030712]/85 border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <a
          href="#"
          onClick={handleNavClick}
          className="text-2xl font-bold text-cyan-400 tracking-wider hover:text-cyan-300 transition"
        >
          BK
        </a>

        {/* Desktop Navigation */}

        <div className="hidden lg:flex items-center gap-7 text-gray-300">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium hover:text-cyan-400 transition duration-300 group"
            >
              {item.name}

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}

         

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-cyan-400 hover:text-cyan-300 transition"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <div className="lg:hidden border-t border-cyan-500/10 bg-[#030712]/95 backdrop-blur-xl">

          <div className="px-6 py-6 flex flex-col gap-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-gray-300 hover:text-cyan-400 text-lg font-medium transition"
              >
                {item.name}
              </a>
            ))}

            

          </div>

        </div>
      )}

    </nav>
  );
}
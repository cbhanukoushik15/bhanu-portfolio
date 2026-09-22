"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[999] w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center shadow-lg shadow-cyan-400/30 hover:bg-cyan-300 hover:-translate-y-1 transition-all duration-300"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}
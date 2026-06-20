import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Numbers from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import SmoothScroll from "@/components/SmoothScroll";
import VisitorTracker from "@/components/VisitorTracker";
export default function Home() {
  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <VisitorTracker />
      <SmoothScroll />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Numbers />
      <Certifications />
      <Contact />

    </main>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#030712] pt-28 pb-16 md:pt-24 px-0 md:px-12 lg:px-20"
    >
      {/* FULL VIEWPORT MOBILE WRAPPER */}
      <div className="relative left-1/2 -translate-x-1/2 w-[100vw] px-5 sm:px-8 md:left-0 md:translate-x-0 md:w-full md:px-0">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col items-center text-center md:items-start md:text-left"
            >

              {/* Welcome */}

              <p className="text-cyan-400 text-sm sm:text-base tracking-[0.18em] uppercase mb-5">
                Welcome To My Portfolio
              </p>

              {/* Name */}

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 text-center md:text-left">
                <span className="block sm:inline">
                  C Bhanu
                </span>

                <span className="block sm:inline sm:ml-3">
                  Koushik
                </span>
              </h1>

              {/* Role */}

              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6 max-w-2xl text-center md:text-left">
                Data Analyst
                <span className="text-cyan-400 mx-2">|</span>
                Power BI Developer
                <span className="text-cyan-400 mx-2">|</span>
                Business Analyst
              </h2>

              {/* Description */}

              <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-xl text-center md:text-left">
                Turning raw data into meaningful business insights through
                analytics, visualization and data-driven decision making.
              </p>

              {/* Skills */}

              <div className="flex flex-wrap justify-center md:justify-start gap-2.5 mt-6 max-w-xl">

                {[
                  "Power BI",
                  "SQL",
                  "Excel",
                  "Python",
                  "Business Analysis",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs sm:text-sm text-gray-200 hover:border-cyan-400 hover:bg-cyan-500/15 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">

                <a
                  href="https://linkedin.com/in/cbhanukoushik15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-black px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-cyan-400 hover:scale-105 transition duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/cbhanukoushik15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-black px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-cyan-400 hover:scale-105 transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href="#projects"
                  className="bg-cyan-500 text-black px-5 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-cyan-400 hover:scale-105 transition duration-300"
                >
                  View Projects
                </a>

              </div>

            </motion.div>

            {/* PROFILE IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center items-center"
            >
              <div className="relative flex items-center justify-center">

                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] bg-cyan-500 blur-3xl opacity-25 rounded-full" />

                <Image
                  src="/profile.jpg"
                  alt="Bhanu Koushik"
                  width={350}
                  height={350}
                  priority
                  className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
                />

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
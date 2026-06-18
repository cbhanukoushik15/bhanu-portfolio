"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-20 bg-[#030712]">

      <div className="grid md:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            C Bhanu Koushik
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Data Analyst | Power BI Developer
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            Transforming data into actionable insights through
            Power BI, SQL, Excel and Python.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/cbhanukoushik15"
              target="_blank"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/cbhanukoushik15"
              target="_blank"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* RIGHT PHOTO */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <Image
              src="/profile.jpg"
              alt="Bhanu"
              width={350}
              height={350}
              className="rounded-full border-4 border-cyan-400 relative z-10"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
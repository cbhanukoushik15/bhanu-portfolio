"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-12"
      >
        <p className="text-cyan-400 mb-2">
          01
        </p>

        <h2 className="text-6xl font-bold mb-8">
          WHO I AM
        </h2>

        <p className="text-gray-300 text-xl leading-relaxed">
          Final-year BCA student passionate about Data Analytics,
          Power BI, SQL, Python and Business Intelligence.
          I enjoy transforming complex datasets into actionable
          business insights through dashboards, visualizations
          and data-driven decision making.
        </p>
      </motion.div>
    </section>
  );
}
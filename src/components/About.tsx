"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="max-w-5xl bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-12 hover:border-cyan-400/40 transition duration-300"
      >
        <p className="text-cyan-400 mb-2">
          01
        </p>

        <h2 className="text-6xl font-bold mb-8">
          WHO I AM
        </h2>

        <div className="space-y-6">

          <p className="text-gray-300 text-xl leading-relaxed">
            I&apos;m a technology enthusiast currently working as an
            <span className="text-cyan-400 font-semibold">
              {" "}Associate Technical Service Desk at Unisys India Pvt. Ltd.
            </span>
            , where I focus on IT support, troubleshooting, service desk
            operations and end-user support.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            My background also includes hands-on experience in
            <span className="text-cyan-400 font-semibold">
              {" "}Data Analytics, Power BI, SQL, Excel and Python
            </span>
            , with experience building dashboards, analysing datasets and
            transforming data into meaningful business insights.
          </p>

          <p className="text-gray-300 text-xl leading-relaxed">
            I enjoy solving technical problems, learning new technologies
            and finding practical ways to use technology and data to
            improve processes and support better decision-making.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

          <div className="border border-cyan-500/20 rounded-2xl p-5 text-center bg-slate-950/30">
            <p className="text-cyan-400 font-bold text-lg">
              IT Support
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Service Desk
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-5 text-center bg-slate-950/30">
            <p className="text-cyan-400 font-bold text-lg">
              Power BI
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Data Analytics
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-5 text-center bg-slate-950/30">
            <p className="text-cyan-400 font-bold text-lg">
              SQL
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Data & Reporting
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-5 text-center bg-slate-950/30">
            <p className="text-cyan-400 font-bold text-lg">
              Python
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Data Analysis
            </p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
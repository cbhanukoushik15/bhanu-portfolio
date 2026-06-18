"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Analytics",
    skills: ["Power BI", "SQL", "Excel", "Python"],
  },
  {
    title: "Business Intelligence",
    skills: [
      "DAX",
      "Power Query",
      "Data Modeling",
      "Dashboard Development",
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      "Requirement Gathering",
      "Market Research",
      "KPI Reporting",
      "Documentation",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Power BI",
      "Excel",
      "GitHub",
      "Google Sheets",
      "MS Office",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full"
      >
        <p className="text-cyan-400 mb-2">02</p>

        <h2 className="text-6xl font-bold mb-12">
          TECHNICAL SKILLS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}
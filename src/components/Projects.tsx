"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mobile Sales Analytics Dashboard",
    images: ["/mobile-sales.png"],
    description:
      "Power BI dashboard analyzing sales performance, transactions, customers and revenue trends.",
    metrics: [
      "₹162M Revenue",
      "783 Transactions",
      "41K Quantity Sold",
    ],
  },
  {
    title: "Omnichannel Retail Dashboard",
    images: [
      "/retail-overview.png",
      "/retail-time-analysis.png",
    ],
    description:
      "Retail sales and inventory analytics dashboard built using Power BI, SQL and Python.",  
    metrics: [
      "₹1498M Revenue",
      "67K Orders",
      "10 Cities",
    ],
  },
  {
    title: "CKD Prediction Dashboard",
    images: ["/ckd-dashboard.png"],
    description:
      "Healthcare analytics dashboard for Chronic Kidney Disease prediction using ML insights.",
    metrics: [
      "400 Patients",
      "250 CKD Cases",
      "ML Powered",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 mb-2">
          04
        </p>

        <h2 className="text-6xl font-bold mb-16">
          FEATURED PROJECTS
        </h2>

        <div className="space-y-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">

                <div className="relative min-h-[350px]">
                  <Image
  src={project.images[0]}
  alt={project.title}
  fill
  className="object-cover"
/>
                </div>

                <div className="p-10">

                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
                      >
                        {metric}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
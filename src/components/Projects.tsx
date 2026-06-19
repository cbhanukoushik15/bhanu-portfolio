"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [
{
title: "Mobile Sales Analytics Dashboard",
images: ["/mobile-sales.png"],
tools: "Power BI, Excel",
problem:
  "Businesses struggle to monitor sales performance, customer behaviour and revenue trends across products.",

solution:
  "Developed an interactive Power BI dashboard to analyse sales performance and customer purchasing patterns.",

impact:
  "Analysed ₹162M revenue, 783 transactions and 41K quantity sold.",

metrics: [
  "₹162M Revenue",
  "783 Transactions",
  "41K Quantity Sold",
],
},
{
title: "Omnichannel Retail Sales & Inventory Dashboard",
images: [
"/retail-overview.png",
"/retail-time-analysis.png",
],
tools: "Power BI, SQL, Python",


problem:
  "Retail businesses face challenges tracking sales and inventory across multiple channels and locations.",

solution:
  "Built a Power BI dashboard integrating sales and inventory data for comprehensive business analysis.",

impact:
  "Analysed 67K+ orders, ₹1498M revenue and operations across 10 cities.",

metrics: [
  "₹1498M Revenue",
  "67K Orders",
  "10 Cities",
],


},

{
title: "Healthcare CKD Prediction Dashboard",
images: ["/ckd-dashboard.png"],
tools: "Python, Machine Learning, Power BI",
problem:
  "Healthcare professionals require data-driven insights for early Chronic Kidney Disease detection.",

solution:
  "Created a machine learning powered analytics dashboard using healthcare datasets.",

impact:
  "Analysed 400 patient records and generated CKD prediction insights.",

metrics: [
  "400 Patients",
  "250 CKD Cases",
  "ML Powered",
],
},
];

export default function Projects() {
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
const interval = setInterval(() => {
setCurrentImage((prev) => (prev + 1) % 2);
}, 3000);


return () => clearInterval(interval);


}, []);

return ( <section
   id="projects"
   className="min-h-screen px-8 py-24"
 > <div className="max-w-7xl mx-auto">


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
          <div className="grid lg:grid-cols-[1.2fr_1fr]">

            <div className="relative h-full min-h-[500px] bg-slate-950">
              <Image
                src={
                  project.images.length > 1
                    ? project.images[currentImage]
                    : project.images[0]
                }
                alt={project.title}
                fill
                className="object-contain p-4 transition-all duration-700"
              />
            </div>

            <div className="p-10">

              <p className="text-cyan-400 mb-3 uppercase tracking-widest">
  Featured Project
              </p>

              <h3 className="text-3xl font-bold mb-6">
                {project.title}
              </h3>

              <div className="space-y-5 mb-6">

                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">
                    Problem
                  </h4>

                  <p className="text-gray-400">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">
                    Solution
                  </h4>

                  <p className="text-gray-400">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">
                    Impact
                  </h4>

                  <p className="text-gray-400">
                    {project.impact}
                  </p>
                </div>

              </div>

              <div className="mb-6">
                <span className="text-cyan-400 font-semibold">
                  Tools:
                </span>{" "}
                {project.tools}
              </div>

              <div className="flex flex-wrap gap-3">

                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-medium"
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

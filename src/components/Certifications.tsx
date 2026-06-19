"use client";

import { useState } from "react";

const featuredCertificates = [
  {
    title: "Data Analytics Internship",
    issuer: "Infotact Solutions",
    year: "2026",
    description:
      "Successfully completed a Data Analytics Internship focused on Power BI, SQL, Excel, reporting and business insights.",
  },

  {
    title: "Data Analytics Training",
    issuer: "Infotact Solutions",
    year: "2026",
    description:
      "Completed industry-oriented training in Data Analytics, dashboard development and reporting.",
  },

  {
    title: "Python Fundamental & Programming (Gold)",
    issuer: "NASSCOM FutureSkills Prime",
    year: "2026",
    description:
      "Achieved Gold Certification in Python Fundamental & Programming.",
  },

  {
    title: "Power BI Job Simulation",
    issuer: "PwC × Forage",
    year: "2025",
    description:
      "Completed practical tasks in Call Centre Trends, Customer Retention and Diversity & Inclusion analytics.",
  },

  {
    title: "Data Analytics & Visualization",
    issuer: "Accenture × Forage",
    year: "2025",
    description:
      "Worked on Data Cleaning, Modelling, Visualization, Storytelling and Client Presentation.",
  },

  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte × Forage",
    year: "2025",
    description:
      "Completed practical tasks in Data Analysis and Forensic Technology.",
  },

  {
    title: "Data Visualisation: Empowering Business",
    issuer: "Tata × Forage",
    year: "2025",
    description:
      "Focused on business scenarios, visual storytelling and communicating insights effectively.",
  },
];

const additionalCertificates = [
  {
    title: "30-Days SQL Micro Course",
    issuer: "Learn More Pro - Skill Course",
    year: "2025",
  },

  {
    title: "30-Days Power BI Micro Course",
    issuer: "Learn More Pro - Skill Course",
    year: "2025",
  },

  {
    title: "30-Days Excel Crash Course",
    issuer: "Learn More Pro - Skill Course",
    year: "2025",
  },

  {
    title: "Cybersecurity Job Simulation",
    issuer: "Mastercard × Forage",
    year: "2025",
  },
];

export default function Certificates() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="certifications"
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 mb-2">
          06
        </p>

        <h2 className="text-6xl font-bold mb-16">
          CERTIFICATIONS
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {featuredCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-cyan-400 font-semibold">
                {cert.issuer}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {cert.year}
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-12">

          <button
            onClick={() => setShowMore(!showMore)}
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition"
          >
            {showMore
              ? "Hide Additional Certifications"
              : "View Additional Certifications"}
          </button>

        </div>

        {showMore && (

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {additionalCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900/30 border border-cyan-500/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 mt-2">
                  {cert.year}
                </p>
              </div>
            ))}

          </div>

        )}

      </div>
    </section>
  );
}
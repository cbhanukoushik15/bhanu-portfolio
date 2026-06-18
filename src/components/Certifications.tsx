"use client";

const certifications = [
  "Deloitte Data Analytics Virtual Internship",
  "Accenture Data Analytics & Visualization",
  "Tata Data Visualization",
  "PwC Power BI Job Simulation",
  "Mastercard Cybersecurity Virtual Experience",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 mb-2">
          05
        </p>

        <h2 className="text-6xl font-bold mb-16">
          CERTIFICATIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-semibold">
                {cert}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
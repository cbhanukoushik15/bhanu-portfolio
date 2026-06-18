"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-5xl w-full">
        <p className="text-cyan-400 mb-2">03</p>

        <h2 className="text-6xl font-bold mb-12">
          EXPERIENCE
        </h2>

        <div className="space-y-8">

          <div className="bg-slate-900/50 border border-cyan-500/20 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Associate L1 – Data Analytics
            </h3>

            <p className="text-cyan-400 mt-2">
              Infotact Solutions
            </p>

            <p className="text-gray-400 mt-4">
              Working on Power BI dashboards,
              data visualization and business reporting.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-cyan-500/20 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold">
              Business Analyst Intern
            </h3>

            <p className="text-cyan-400 mt-2">
              Rojgaar.co
            </p>

            <p className="text-gray-400 mt-4">
              Worked on market research,
              stakeholder communication and business insights.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
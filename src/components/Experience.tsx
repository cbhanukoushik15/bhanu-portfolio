"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 mb-2">
          03
        </p>

        <h2 className="text-6xl font-bold mb-16">
          EXPERIENCE
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 space-y-16">

          {/* Infotact */}

          <div className="relative pl-12">

            <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400"></div>

            <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition">

              <span className="text-cyan-400 font-semibold">
                Feb 2026 – May 2026
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Associate L1 – Data Analytics Intern
              </h3>

              <p className="text-cyan-400 mt-2 text-lg">
                Infotact Solutions | Remote
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>
                  • Developed interactive Power BI dashboards and visual reports for business analysis.
                </li>

                <li>
                  • Performed data cleaning, validation and transformation using Excel and SQL.
                </li>

                <li>
                  • Generated actionable insights through KPI tracking and performance reporting.
                </li>

                <li>
                  • Supported data-driven decision-making by analysing business datasets.
                </li>

              </ul>

            </div>

          </div>

          {/* Rojgaar */}

          <div className="relative pl-12">

            <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400"></div>

            <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 transition">

              <span className="text-cyan-400 font-semibold">
                Dec 2025 – Present
              </span>

              <h3 className="text-3xl font-bold mt-3">
                Business Analyst Intern
              </h3>

              <p className="text-cyan-400 mt-2 text-lg">
                Rojgaar.co | Remote
              </p>

              <ul className="mt-6 space-y-3 text-gray-400">

                <li>
                  • Conducted market research and competitor analysis to identify business opportunities.
                </li>

                <li>
                  • Analysed industry trends and generated strategic business insights.
                </li>

                <li>
                  • Prepared reports, presentations and research findings for decision-making.
                </li>

                <li>
                  • Collaborated with business teams on growth initiatives and stakeholder communication.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
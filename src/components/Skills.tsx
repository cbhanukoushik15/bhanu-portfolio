"use client";

const skillCategories = [
  {
    title: "Data Analytics",
    skills: [
      "Power BI",
      "SQL",
      "Excel",
      "Python",
    ],
  },

  {
    title: "Business Intelligence",
    skills: [
      "Dashboard Development",
      "Data Visualization",
      "Power Query",
      "DAX",
    ],
  },

  {
    title: "Database",
    skills: [
      "MySQL",
      "RDBMS",
      "Database Design",
      "CRUD Operations",
    ],
  },

  {
    title: "Business Analysis",
    skills: [
      "Market Research",
      "Competitor Analysis",
      "Business Insights",
      "Documentation",
    ],
  },

  {
    title: "Reporting & Analytics",
    skills: [
      "KPI Tracking",
      "Performance Reporting",
      "Data Validation",
      "Data Cleaning",
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Microsoft Office",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 mb-2">
          02
        </p>

        <h2 className="text-6xl font-bold mb-16">
          SKILLS & TECHNOLOGIES
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import CountUp from "react-countup";

const stats = [
  {
    number: 67,
    suffix: "K+",
    label: "Orders Analysed",
  },
  {
    number: 1498,
    prefix: "₹",
    suffix: "M",
    label: "Revenue Analysed",
  },
  {
    number: 400,
    suffix: "+",
    label: "Healthcare Records",
  },
  {
    number: 2,
    label: "Internships",
  },
  {
    number: 11,
    label: "Certificates",
  },
  {
    number: 3,
    suffix: "+",
    label: "Power BI Dashboards",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 mb-2">
          05
        </p>

        <h2 className="text-6xl font-bold mb-16">
          ACHIEVEMENTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-10 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400 mb-4">

                {item.prefix}

                <CountUp
  start={0}
  end={item.number}
  duration={3}
  enableScrollSpy
  scrollSpyOnce
/>

                {item.suffix}

              </h3>

              <p className="text-gray-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
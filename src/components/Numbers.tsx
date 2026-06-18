"use client";

const stats = [
  { value: "67K+", label: "Orders Analysed" },
  { value: "₹1498M", label: "Revenue Tracked" },
  { value: "400+", label: "Patient Records" },
  { value: "50+", label: "Volunteers Led" },
];

export default function Numbers() {
  return (
    <section className="py-24 px-8">

      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 mb-2">
          05
        </p>

        <h2 className="text-6xl font-bold mb-16">
          BY THE NUMBERS
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
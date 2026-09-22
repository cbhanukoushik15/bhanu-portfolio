"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 1,
    suffix: "",
    label: "Professional Journey Started",
  },
  {
    number: 2,
    suffix: "",
    label: "Internship Experiences",
  },
  {
    number: 3,
    suffix: "+",
    label: "Power BI Dashboards",
  },
  {
    number: 11,
    suffix: "",
    label: "Certifications",
  },
  {
    number: 400,
    suffix: "+",
    label: "Healthcare Records Analysed",
  },
  {
    number: 67,
    suffix: "K+",
    label: "Orders Analysed",
  },
];

function AnimatedNumber({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () =>
      cancelAnimationFrame(animationFrame);
  }, [started, value, duration]);

  return <span ref={ref}>{count}</span>;
}

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

        <h2 className="text-6xl font-bold mb-4">
          MY JOURNEY
        </h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl">
          From internships and hands-on projects to
          starting my professional career in IT, every
          experience has been a step forward in my journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-10 text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400 mb-4">

                <AnimatedNumber
                  value={item.number}
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
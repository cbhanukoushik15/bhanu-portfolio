"use client";

import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-5xl w-full">

        <p className="text-cyan-400 mb-2">
          07
        </p>

        <h2 className="text-6xl font-bold mb-12">
          CONTACT ME
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Card */}

          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Let's Connect
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>cbhanukoushik@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl">💼</span>
                <a
                  href="https://www.linkedin.com/in/cbhanukoushik15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl">💻</span>
                <a
                  href="https://github.com/cbhanukoushik15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  GitHub Profile
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Hyderabad, Telangana</span>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-3xl p-8 flex flex-col justify-center">

            <h3 className="text-2xl font-bold mb-4">
              Open to Opportunities
            </h3>

            <p className="text-gray-400 mb-8">
              Currently seeking opportunities in
              Data Analytics, Business Analysis,
              Power BI Development and Business Intelligence.
            </p>

            <a
              href="/resumes.pdf"
              download
              className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-xl text-center hover:scale-105 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
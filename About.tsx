"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
        {text}
      </span>
      <div className="flex-1 h-px bg-border max-w-20" />
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => {
            (child as HTMLElement).style.animation = `fadeUp 0.6s ease ${i * 0.12}s forwards`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const interests = [
    { icon: "🧠", label: "Machine Learning" },
    { icon: "👁", label: "Computer Vision" },
    { icon: "⚡", label: "System Design" },
    { icon: "🌐", label: "Full-Stack APIs" },
    { icon: "📊", label: "Data Analytics" },
    { icon: "🎤", label: "Event Leadership" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <SectionLabel text="01 / About" />
            <h2 className="reveal opacity-0 font-display font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Where intelligence
              <br />
              <span className="text-teal-400">meets engineering.</span>
            </h2>
            <p className="reveal opacity-0 font-body text-slate-400 text-base leading-relaxed mb-6">
              {data.about}
            </p>
            <p className="reveal opacity-0 font-body text-slate-500 text-sm leading-relaxed">
              Currently a {data.degree} student at {data.university}, Class of {data.batch}. Also
              enrolled in the{" "}
              <span className="text-slate-300">
                IIT Madras B.S. Data Science & Applications
              </span>{" "}
              programme — running two rigorous programmes in parallel.
            </p>

            <div className="reveal opacity-0 mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${data.email}`}
                className="group inline-flex items-center gap-2 text-sm font-body text-teal-400 hover:text-teal-300 transition-colors hover-underline"
              >
                {data.email}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Info card + interests */}
          <div className="space-y-6">
            {/* ID card */}
            <div className="reveal opacity-0 border border-border rounded-lg p-6 bg-surface relative overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="w-full h-full bg-gradient-radial from-teal-400 to-transparent rounded-full" />
              </div>
              <div className="relative z-10">
                <div className="font-mono text-xs text-slate-500 mb-4 tracking-widest uppercase">
                  Profile
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Institution", value: "Thapar Institute (TIET)" },
                    { label: "Programme", value: "B.E. ECE + IIT Madras B.S. DS" },
                    { label: "Batch", value: "2023 – 2027" },
                    { label: "Location", value: "Patiala, India" },
                    { label: "Status", value: "Junior Year · Seeking Internships" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start gap-4">
                      <span className="font-mono text-xs text-slate-500 shrink-0">{label}</span>
                      <span className="font-body text-sm text-slate-300 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests grid */}
            <div className="reveal opacity-0">
              <div className="font-mono text-xs text-slate-500 mb-3 tracking-widest uppercase">
                Focus Areas
              </div>
              <div className="grid grid-cols-3 gap-2">
                {interests.map(({ icon, label }) => (
                  <div
                    key={label}
                    className="border border-border rounded p-3 text-center bg-panel hover:border-teal-400/30 hover:bg-teal-400/5 transition-all duration-200 cursor-default"
                  >
                    <div className="text-lg mb-1">{icon}</div>
                    <div className="font-mono text-xs text-slate-400 leading-tight">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

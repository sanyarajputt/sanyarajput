"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Languages": "#2AFFD7",
  "AI & ML": "#A78BFF",
  "Web & APIs": "#5BE5FF",
  "Infrastructure": "#FFB547",
  "Coursework": "#64768B",
};

const categoryIcons: Record<string, string> = {
  "Languages": "{ }",
  "AI & ML": "∿",
  "Web & APIs": "⟳",
  "Infrastructure": "⬡",
  "Coursework": "≡",
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, i) => {
            (child as HTMLElement).style.animation = `fadeUp 0.5s ease ${i * 0.08}s forwards`;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-teal-400 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
              04 / Skills
            </span>
            <div className="h-px bg-border w-16" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Technical{" "}
            <span className="text-teal-400">Arsenal</span>
          </h2>
          <p className="font-body text-slate-500 mt-3 text-base">
            Languages, frameworks, and tools across the ML and full-stack spectrum.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(data.skills).map(([category, skills], ci) => {
            const color = categoryColors[category] || "#2AFFD7";
            const icon = categoryIcons[category] || "·";
            return (
              <div
                key={category}
                className="reveal opacity-0 border border-border rounded-xl p-6 bg-surface card-hover group"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-lg font-bold"
                    style={{ color }}
                  >
                    {icon}
                  </span>
                  <span className="font-display font-semibold text-sm text-white">
                    {category}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill font-mono text-xs px-2.5 py-1.5 rounded border border-border text-slate-400 bg-panel transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Education bar */}
        <div className="reveal opacity-0 mt-12 border border-border rounded-xl p-8 bg-surface">
          <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-6">
            Education
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "B.E. Electronics & Computer Engineering",
                school: "Thapar Institute of Engineering & Technology, Patiala",
                period: "2023 – 2027",
                tag: "Primary",
                color: "#2AFFD7",
              },
              {
                degree: "B.S. Data Science & Applications",
                school: "Indian Institute of Technology, Madras",
                period: "2023 – Present",
                tag: "Concurrent",
                color: "#A78BFF",
              },
            ].map(({ degree, school, period, tag, color }) => (
              <div key={degree} className="flex items-start gap-4">
                <div
                  className="w-1 self-stretch rounded-full shrink-0 mt-1"
                  style={{ background: color }}
                />
                <div>
                  <div className="font-display font-semibold text-white text-base">{degree}</div>
                  <div className="font-body text-sm text-slate-400 mt-1">{school}</div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-xs text-slate-500">{period}</span>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded border"
                      style={{
                        color,
                        borderColor: `${color}30`,
                        background: `${color}10`,
                      }}
                    >
                      {tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

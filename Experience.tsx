"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

function TimelineItem({
  role,
  company,
  period,
  type,
  points,
  delay,
}: {
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
  delay: number;
}) {
  return (
    <div
      className="reveal opacity-0 relative pl-8 pb-12 last:pb-0"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />
      {/* Dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-0.5 rounded-full bg-teal-400 ring-4 ring-ink" />

      <div className="border border-border rounded-lg p-6 bg-surface card-hover">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-white">{role}</h3>
            <p className="font-body text-sm text-teal-400 mt-0.5">{company}</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-slate-500">{period}</span>
            <br />
            <span className="font-mono text-xs text-slate-600 mt-0.5 inline-block">{type}</span>
          </div>
        </div>
        <ul className="space-y-2">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5 shrink-0 text-xs">▸</span>
              <span className="font-body text-sm text-slate-400 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LeadershipCard({
  role,
  org,
  period,
  note,
  points,
  delay,
}: {
  role: string;
  org: string;
  period: string;
  note: string;
  points: string[];
  delay: number;
}) {
  return (
    <div
      className="reveal opacity-0 border border-border rounded-lg p-6 bg-surface card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="font-mono text-xs text-slate-500 mb-1 tracking-widest uppercase">
            {org}
          </div>
          <h3 className="font-display font-bold text-lg text-white">{role}</h3>
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono text-xs text-slate-500">{period}</div>
          <div className="font-mono text-xs text-teal-400/60 mt-1">{note}</div>
        </div>
      </div>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5 shrink-0 text-xs">▸</span>
            <span className="font-body text-sm text-slate-400 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-surface relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
              03 / Experience
            </span>
            <div className="h-px bg-border w-16" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Where I&apos;ve{" "}
            <span className="text-teal-400">Contributed</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="reveal opacity-0 font-mono text-xs text-slate-500 tracking-widest uppercase mb-8 border-b border-border pb-4">
              Work Experience
            </h3>
            <div>
              {data.experience.map((exp, i) => (
                <TimelineItem key={exp.company} {...exp} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="reveal opacity-0 font-mono text-xs text-slate-500 tracking-widest uppercase mb-8 border-b border-border pb-4">
              Leadership & Events
            </h3>
            <div className="space-y-5">
              {data.leadership.map((item, i) => (
                <LeadershipCard key={item.org} {...item} delay={i * 0.1 + 0.2} />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement callout */}
        <div className="reveal opacity-0 mt-16 border border-amber-400/20 rounded-lg p-6 bg-amber-400/5 flex items-start gap-4">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="font-display font-semibold text-white text-base">
              Generated ₹1.5L+ in participation revenue
            </p>
            <p className="font-body text-sm text-slate-400 mt-1">
              As Senior Outreach Executive at Saturnalia TIET, led partnership campaigns that drove
              registrations and sponsorship revenue across multiple high-turnout college events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

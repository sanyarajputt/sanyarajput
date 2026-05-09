"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

function CategoryBadge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="font-mono text-xs px-2 py-0.5 rounded border"
      style={{
        color: color,
        borderColor: `${color}30`,
        background: `${color}10`,
      }}
    >
      {text}
    </span>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof data.projects)[0];
  index: number;
}) {
  return (
    <div
      className="group border border-border rounded-xl bg-surface overflow-hidden card-hover relative"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full opacity-60 transition-all duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <CategoryBadge text={project.category} color={project.color} />
            <h3 className="font-display font-bold text-2xl text-white mt-3 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-sm text-slate-500 mt-1">{project.subtitle}</p>
          </div>
          {/* Number */}
          <span
            className="font-mono text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity leading-none"
            style={{ color: project.color }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <span style={{ color: project.color }} className="mt-0.5 shrink-0 text-xs">
                ▸
              </span>
              <span className="font-body text-xs text-slate-400">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 rounded bg-panel border border-border text-slate-500 group-hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".project-card").forEach((card, i) => {
            (card as HTMLElement).style.animation = `fadeUp 0.6s ease ${i * 0.15}s forwards`;
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
    <section id="projects" className="py-24 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-3 bg-gradient-radial from-teal-400/8 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
                02 / Projects
              </span>
              <div className="h-px bg-border w-16" />
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
              Featured Work
            </h2>
            <p className="font-body text-slate-500 mt-3 text-base max-w-lg">
              Systems I&apos;ve built from first principles — combining machine intelligence with clean engineering.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {data.projects.map((project, i) => (
            <div key={project.id} className="project-card opacity-0">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-slate-500 hover:text-teal-400 transition-colors hover-underline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Explore all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

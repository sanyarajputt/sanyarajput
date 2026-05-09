"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ink" />
      {/* Teal top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-teal-400/10 via-teal-400/3 to-transparent" />
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, #2AFFD7 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full opacity-4"
        style={{
          background:
            "radial-gradient(circle, #A78BFF 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />
    </div>
  );
}

function TypewriterTag({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 mb-8">
      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
      <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
        {text}
      </span>
    </div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters =
              entry.target.querySelectorAll("[data-count]");
            counters.forEach((counter) => {
              const target = parseInt(
                counter.getAttribute("data-count") || "0"
              );
              let current = 0;
              const step = Math.ceil(target / 40);
              const timer = setInterval(() => {
                current = Math.min(current + step, target);
                counter.textContent = current.toString();
                if (current >= target) clearInterval(timer);
              }, 30);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl">
          <TypewriterTag text="Open to Opportunities · 2025" />

          {/* Name */}
          <div
            className="overflow-hidden mb-4"
            style={{ animation: "fadeUp 0.8s ease forwards" }}
          >
            <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none">
              Sanya
              <br />
              <span className="gradient-text teal-glow-text">Rajput</span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="font-display text-xl md:text-2xl text-slate-400 mt-6 mb-4 max-w-2xl leading-relaxed"
            style={{
              animation: "fadeUp 0.8s ease 0.2s forwards",
              opacity: 0,
            }}
          >
            {data.tagline}
          </p>

          {/* Role pills */}
          <div
            className="flex flex-wrap gap-2 mt-6 mb-10"
            style={{
              animation: "fadeUp 0.8s ease 0.35s forwards",
              opacity: 0,
            }}
          >
            {["AI / ML Engineering", "Computer Vision", "Full-Stack Systems", "TIET '27"].map(
              (tag) => (
                <span
                  key={tag}
                  className="tag-chip"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-20"
            style={{
              animation: "fadeUp 0.8s ease 0.5s forwards",
              opacity: 0,
            }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-teal-400 text-ink font-display font-bold text-sm rounded hover:bg-teal-500 transition-all duration-200 teal-glow"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-300 font-display font-medium text-sm rounded hover:border-teal-400/40 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-slate-300 font-display font-medium text-sm rounded hover:border-teal-400/40 hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border rounded-lg overflow-hidden bg-border"
            style={{
              animation: "fadeUp 0.8s ease 0.65s forwards",
              opacity: 0,
            }}
          >
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-6 py-5 hover:bg-panel transition-colors"
              >
                <div className="font-display font-bold text-2xl text-teal-400">
                  {stat.value}
                  <span className="text-lg">{stat.suffix}</span>
                </div>
                <div className="font-body text-xs text-slate-500 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}

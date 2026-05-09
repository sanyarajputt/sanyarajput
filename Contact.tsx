"use client";
import { useEffect, useRef } from "react";
import { data } from "@/lib/data";

export default function Contact() {
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

  const links = [
    {
      label: "Email",
      value: data.email,
      href: `mailto:${data.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "sanyarajput-9518ab288",
      href: data.linkedin,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "rajputsanya031",
      href: data.github,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "Phone",
      value: data.phone,
      href: `tel:${data.phone}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-5 bg-gradient-radial from-teal-400 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <div className="reveal opacity-0 flex items-center justify-center gap-3 mb-4">
            <div className="h-px bg-border w-16" />
            <span className="font-mono text-xs text-teal-400 tracking-widest uppercase">
              05 / Contact
            </span>
            <div className="h-px bg-border w-16" />
          </div>
          <h2 className="reveal opacity-0 font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Let&apos;s Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="reveal opacity-0 font-body text-slate-400 text-base max-w-lg mx-auto">
            Open to SDE internships, AI/ML research roles, and collaborative projects. I respond within 24 hours.
          </p>
        </div>

        {/* Contact links */}
        <div className="reveal opacity-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {links.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center gap-3 p-6 border border-border rounded-xl bg-surface card-hover text-center"
            >
              <span className="text-slate-500 group-hover:text-teal-400 transition-colors">
                {icon}
              </span>
              <div>
                <div className="font-mono text-xs text-slate-500 mb-1 tracking-widest uppercase">
                  {label}
                </div>
                <div className="font-body text-sm text-slate-300 group-hover:text-teal-400 transition-colors break-all">
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal opacity-0 text-center">
          <a
            href={`mailto:${data.email}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-ink font-display font-bold text-base rounded-lg hover:bg-teal-500 transition-all duration-200 teal-glow"
          >
            Send Me a Message
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

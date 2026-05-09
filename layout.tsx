import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanya Rajput — AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Sanya Rajput — building intelligent systems at the intersection of AI, computer vision, and full-stack engineering.",
  keywords: [
    "Sanya Rajput",
    "AI Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "TIET",
    "Thapar",
  ],
  authors: [{ name: "Sanya Rajput" }],
  openGraph: {
    title: "Sanya Rajput — AI/ML Engineer",
    description:
      "Portfolio showcasing AI, computer vision, and full-stack engineering projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-ink text-slate-200 antialiased">{children}</body>
    </html>
  );
}

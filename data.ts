export const data = {
  name: "Sanya Rajput",
  tagline: "Building intelligent systems that think, learn, and scale.",
  headline: "AI/ML Engineer & Full-Stack Developer",
  subheadline:
    "I design end-to-end systems where machine intelligence meets clean engineering — from CNN pipelines to production-ready APIs.",
  location: "Patiala, India",
  email: "rajputsanya031@gmail.com",
  phone: "+91-97502-00031",
  github: "https://github.com/rajputsanya031",
  linkedin: "https://www.linkedin.com/in/sanyarajput-9518ab288",
  university: "Thapar Institute of Engineering & Technology",
  degree: "B.E. Electronics & Computer Engineering",
  batch: "2023–2027",

  about: `Junior at Thapar Institute with a dual focus on AI/ML systems and full-stack engineering. I build things that are both technically rigorous and practically useful — from computer vision models trained on 10K+ image datasets to real-time seat management platforms with live admin dashboards. I'm drawn to problems that sit at the boundary of intelligent automation and system design, where a model isn't just an experiment but a component in a working product.`,

  projects: [
    {
      id: "libdesk",
      title: "LibDesk",
      subtitle: "Smart Library Seat Management System",
      description:
        "Engineered a QR-based real-time seat booking platform that eliminated seat hoarding across a 500+ seat library. Built Flask REST APIs handling session lifecycle, automated 2-hour expiry enforcement, penalty tracking, and concurrent booking conflicts — all backed by a live admin dashboard with occupancy KPIs and hourly utilization analytics.",
      stack: ["Python", "Flask", "MySQL", "React", "Chart.js", "APScheduler", "Render"],
      highlights: [
        "Zero seat-hoarding incidents post-deployment",
        "REST API handling 500+ concurrent seat states",
        "Live floor-plan visualization with real-time occupancy KPIs",
        "Automated session expiry & penalty enforcement via APScheduler",
      ],
      featured: true,
      category: "Full-Stack Systems",
      color: "#2AFFD7",
    },
    {
      id: "legal-insights",
      title: "Legal Insights",
      subtitle: "AI-Powered Legal Assistance Platform",
      description:
        "Architected a full-stack AI platform that democratizes access to legal guidance — handling natural language queries, document processing workflows, and fraud prevention detection. Designed scalable Flask REST APIs and a React frontend to serve as a unified legal support hub.",
      stack: ["Python", "Flask", "React.js", "TypeScript", "OpenAI API", "CSS"],
      highlights: [
        "End-to-end AI query pipeline for legal document analysis",
        "Scalable REST architecture supporting multiple workflow types",
        "Integrated fraud-pattern detection module",
        "Full-stack: React frontend ↔ Flask backend ↔ AI inference layer",
      ],
      featured: true,
      category: "AI Platform",
      color: "#5BE5FF",
    },
    {
      id: "dehazing",
      title: "Vision Clarity",
      subtitle: "Image Dehazing & Classification System",
      description:
        "Designed and trained a CNN-based image classification model on a dataset of 10,000+ images, reaching 84% accuracy. Built an end-to-end preprocessing and dehazing pipeline using OpenCV, improving downstream classification performance and enabling reliable inference on degraded inputs.",
      stack: ["Python", "TensorFlow", "OpenCV", "NumPy", "CNN", "Keras"],
      highlights: [
        "84% classification accuracy on 10,000+ image dataset",
        "Custom dehazing pipeline improving model input quality",
        "Full training, evaluation, and performance analysis workflow",
        "Optimized dataset preprocessing for noisy real-world images",
      ],
      featured: true,
      category: "Computer Vision",
      color: "#A78BFF",
    },
  ],

  experience: [
    {
      role: "Data Processing Intern",
      company: "Revisable AI",
      period: "Mar 2025 – Apr 2025",
      type: "Remote",
      points: [
        "Built Python automation scripts that reduced manual processing time by 40% on high-volume AI prompt datasets",
        "Validated and cleaned structured content across large-scale prompt improvement workflows",
        "Maintained quality standards via formatting checks and consistency audits on multi-thousand item pipelines",
        "Contributed to script-based pipeline optimization for scalable content transformation at production scale",
      ],
    },
    {
      role: "Crowdfunding Intern",
      company: "Muskurahat Foundation",
      period: "Jun 2024 – Jul 2024",
      type: "NGO",
      points: [
        "Ran digital crowdfunding campaigns that raised funds supporting underprivileged children's education",
        "Coordinated outreach across social channels and donor networks to maximize campaign reach",
      ],
    },
  ],

  leadership: [
    {
      role: "Events & Outreach Head",
      org: "TEDxTIET",
      period: "Sep 2023 – Present",
      note: "2 years 10 months",
      points: [
        "Led end-to-end speaker acquisition, sponsor relations, and collaborator outreach for annual TEDxTIET events",
        "Managed cross-functional logistics across onboarding, scheduling, and live operations for 500+ attendee events",
        "Progressed from Core Member → Executive Committee → Head across 4 roles over 3 years",
      ],
    },
    {
      role: "Senior Outreach Executive",
      org: "Saturnalia TIET",
      period: "Oct 2024 – Nov 2025",
      note: "1 year 2 months",
      points: [
        "Drove outreach campaigns that generated ₹1.5L+ in participation revenue through registrations and partnerships",
        "Coordinated with marketing, hospitality, and operations teams to execute multiple high-turnout events",
      ],
    },
  ],

  skills: {
    "Languages": ["Python", "C/C++", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    "AI & ML": ["TensorFlow", "Keras", "OpenCV", "NumPy", "Pandas", "Scikit-learn", "CNN", "NLP"],
    "Web & APIs": ["Flask", "React.js", "Node.js", "REST APIs", "Chart.js"],
    "Infrastructure": ["MySQL", "Docker", "AWS", "Git", "Render", "VS Code"],
    "Coursework": ["DSA", "DBMS", "Operating Systems", "OOPs", "Computer Networks", "Cloud Computing", "IoT"],
  },

  stats: [
    { label: "Projects Shipped", value: "3+", suffix: "" },
    { label: "Model Accuracy", value: "84", suffix: "%" },
    { label: "Images Trained On", value: "10K", suffix: "+" },
    { label: "Events Led", value: "500", suffix: "+ attendees" },
  ],
};

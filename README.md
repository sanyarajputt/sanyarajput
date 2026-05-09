# sanya-rajput-portfolio

Personal portfolio website for Sanya Rajput — AI/ML Engineer & Full-Stack Developer.

Built with Next.js 14 (App Router), Tailwind CSS, and a dark editorial design system centered on deep navy tones with electric teal accents.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Fonts**: Syne (display), DM Sans (body), JetBrains Mono (mono)
- **Animations**: CSS keyframes with IntersectionObserver-triggered reveals
- **Dark Mode**: Forced dark (class strategy)

## Local Setup

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/<your-username>/sanya-rajput-portfolio.git
cd sanya-rajput-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page — assembles all sections
│   └── globals.css       # Global styles, CSS variables, animations
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Fixed nav with scroll detection + active section
│   │   └── Footer.tsx    # Minimal footer
│   └── sections/
│       ├── Hero.tsx      # Hero with animated tagline, stats bar, CTAs
│       ├── About.tsx     # About + profile card + focus areas
│       ├── Projects.tsx  # 3 featured projects with highlights
│       ├── Experience.tsx # Timeline (work) + leadership cards
│       ├── Skills.tsx    # Skill categories + education bar
│       └── Contact.tsx   # Contact grid + CTA
└── lib/
    └── data.ts           # All portfolio content (single source of truth)
```

## Customization

All content lives in `src/lib/data.ts`. To update:
- **Projects**: Edit `data.projects` array
- **Experience**: Edit `data.experience` and `data.leadership`
- **Skills**: Edit `data.skills` (object of category → skill list)
- **Stats**: Edit `data.stats`
- **Links**: Update `github`, `linkedin`, `email` at the top of the file

Colors and design tokens are in `tailwind.config.ts` and `globals.css`.

## No Environment Variables Required

This project runs entirely without any `.env` configuration.

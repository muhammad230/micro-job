# MicroJobs Landing Page

A pixel-faithful React + Tailwind CSS recreation of the MicroJobs landing page.

## Project Structure

```
microjobs/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── components/
        ├── Navbar.jsx       # Sticky top nav with logo + links + Sign Up CTA
        ├── Hero.jsx         # Blue hero with headline, buttons, stats
        ├── HowItWorks.jsx   # 3-step cards section
        ├── WhyChoose.jsx    # 4-feature icon grid
        ├── CTA.jsx          # Blue CTA banner
        └── Footer.jsx       # Dark footer with 4-column links
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- **React 18** – UI framework
- **Tailwind CSS 3** – Utility-first styling
- **Vite** – Fast dev server and bundler

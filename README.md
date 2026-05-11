# Elshaddai Enterprises — Website

A premium, dark-themed, fully responsive React website for Elshaddai Enterprises — a professional debt recovery and collection services company.

## Tech Stack

- **React 18** — UI library
- **React Router v6** — client-side routing
- **Vite** — build tool & dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — (installed, ready for advanced animations)
- **Lucide React** — icon system

## Project Structure

```
elshaddai/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx              # App entry point
    ├── App.jsx               # Router + layout shell
    ├── index.css             # Global styles & CSS variables
    ├── components/
    │   ├── Navbar.jsx        # Sticky nav with scroll transform
    │   ├── Footer.jsx        # Site footer with links
    │   ├── ScrollProgress.jsx # Top progress bar
    │   ├── ParticleCanvas.jsx # Hero particle network
    │   └── RevealWrapper.jsx  # Scroll-triggered reveal HOC
    ├── hooks/
    │   └── useScrollReveal.js # IntersectionObserver + counter hooks
    ├── pages/
    │   ├── HomePage.jsx       # Assembles all sections
    │   └── PrivacyPage.jsx    # Full privacy policy
    └── sections/
        ├── HeroSection.jsx         # Cinematic hero with particles & float cards
        ├── AboutSection.jsx        # Company intro + animated progress bars
        ├── ServicesSection.jsx     # 6 service cards with hover depth
        ├── MetricsSection.jsx      # Animated counters + glow rings
        ├── MissionVisionSection.jsx # Dual glass panels
        ├── WorkflowSection.jsx     # 5-step process with timeline
        ├── CareersSection.jsx      # Job cards + full detail modal
        ├── CTASection.jsx          # Conversion section
        └── ContactSection.jsx      # Contact info + form
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

The `dist/` folder contains the production-ready static files.

## Customisation

### Contact Details
Update `src/sections/ContactSection.jsx`:
- Phone number
- Email address
- Physical address

### Company Details
Update text content in each section file under `src/sections/`.

### Colours
All CSS custom properties are defined in `src/index.css`:
```css
:root {
  --navy: #050d1a;
  --blue: #1e6fff;
  --teal: #00c9a7;
  --gold: #c9a84c;
  --muted: #8899bb;
}
```

### Careers / Job Roles
Edit the `roles` array in `src/sections/CareersSection.jsx` to update job descriptions.

## Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with scroll-triggered glass effect
- ✅ Scroll progress indicator
- ✅ Particle network animation in hero
- ✅ Floating glassmorphism stat cards
- ✅ Scroll-triggered reveal animations on all sections
- ✅ Animated progress bars (About section)
- ✅ Animated counters with IntersectionObserver (Metrics)
- ✅ Interactive service cards with hover effects
- ✅ Careers modal with full job descriptions
- ✅ Contact form with success state
- ✅ Privacy Policy page
- ✅ React Router client-side navigation
- ✅ Dark premium theme throughout

## Deployment

This is a standard Vite + React SPA. Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop the `dist/` folder
- **Any static host**: upload contents of `dist/`

For React Router to work on Netlify/Vercel, add a redirect rule:
- Netlify: create `public/_redirects` with `/* /index.html 200`
- Vercel: create `vercel.json` with rewrites config

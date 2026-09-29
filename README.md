# Portfolio

My personal portfolio site, styled like a code editor. Live at **[kyleclose.dev](https://kyleclose.dev)**.

## Features

- **Interactive terminal** in the hero section. Type `help` to see the commands (`whoami`, `projects`, `skills`, `contact`, `resume`, `theme`, `neofetch`, and more). It supports command history (↑/↓), tab completion, and `Ctrl+L` to clear.
- **Command palette.** Press `⌘K` / `Ctrl+K` to jump to a section or run an action.
- **Editor-style layout.** Each section is a "file" (`index.tsx`, `about.md`, `projects.json`, `contact.sh`) with a tab bar and status bar that follow the scroll position.
- **Light and dark themes.** Your choice is saved to `localStorage` and applied before first paint, so the page doesn't flash.
- Animations with [Framer Motion](https://www.framer.com/motion/).

## Tech stack

- React 18 + TypeScript
- Vite
- Plain CSS, one file per component
- GitHub Actions → GitHub Pages

## Getting started

Requires Node 20+.

```bash
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build to dist/
npm run serve    # preview the production build
```

## Project structure

```
src/
├── components/   # Hero (terminal), About, Projects, Contact, TabBar, StatusBar, CommandPalette, ...
├── data/         # Site content: links, sections, projects, tech stack
├── hooks/        # useTheme, useActiveSection, useTextEffects
└── img/          # Project screenshots and tech icons
public/           # Resume PDF, favicon, 404.html, robots.txt, sitemap.xml
```

Most content changes only touch `src/data/`:

- `siteData.ts` holds contact links and the section list.
- `projectData.ts` holds the project cards (name, stack, description, source and live links, screenshot).
- `techData.ts` holds the tech marquee icons.

## Deployment

Every push to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `dist/` to GitHub Pages, served on the custom domain `kyleclose.dev`. `public/404.html` works with a small script in `index.html` so that deep links survive the GitHub Pages redirect.

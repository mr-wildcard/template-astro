# <img src="./doc/astro-dark.svg" height="46px" /> Astro Starter Template

Kickstart an Astro project that ships with Tailwind CSS v4, sensible defaults for meta tags and fonts, and Playwright end-to-end tests already wired up.

## Requirements

- Node.js 24.11.0 (see `.nvmrc`)
- pnpm 10.20.0+

## Create a new project

```bash
pnpm create astro@latest --template mr-wildcard/template-astro
```

The scaffolder installs dependencies for you. If you clone this repository instead, run `pnpm install` before following the next steps.

## Local development

1. Duplicate the provided environment file and adjust the values:
   ```bash
   cp .env .env.local
   cp .env .env.production
   ```
   The defaults expose the dev server on `http://localhost:4321`, but feel free to tweak the host/port.
2. Start the dev server:
   ```bash
   pnpm dev
   ```
3. Visit the URL printed in the terminal to see the homepage grid, icon sample, and base layout in action.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server with hot reload. |
| `pnpm build` | Run `astro check` and produce a production build in `dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm test:e2e` | Execute the Playwright end-to-end suite (uses headless Chromium by default). |
| `pnpm test:e2e:update:snapshots` | Update Playwright visual snapshots. |

## Project structure

```
.
├── public/                     # Static assets (favicons, fonts, social images, ...)
├── src/
│   ├── layouts/main.astro      # Global HTML shell with SEO and font setup
│   ├── pages/                  # Route definitions
│   ├── components/@common/     # Reusable UI primitives (grid, icon wrapper)
│   └── styles/base.css         # Tailwind base/components/utilities imports
├── tests/homepage.spec.ts      # Playwright snapshot example
├── tailwind.config.ts          # Tailwind v4 configuration
└── playwright.config.ts        # Test runner and screenshot settings
```

## Features included

- Opinionated `MainLayout` with Open Graph tags and a bundled Satoshi variable font.
- Responsive grid component built with Tailwind utility classes for rapid layout prototyping.
- Preconfigured `astro-icon` wrapper for SVG icons with accessible defaults.
- End-to-end snapshot test that waits for fonts before capturing screenshots.
- Tailwind CSS v4 pipeline with PostCSS and cssnano already configured.

## Testing

```bash
pnpm test:e2e
```

Playwright saves results under `test-results/` and full reports in `playwright-report/`. Update baselines with `pnpm test:e2e:update:snapshots` whenever the UI intentionally changes.

## Deployment

Run `pnpm build` to generate static assets in `dist/`. Deploy the `dist/` folder to your preferred static hosting provider (Vercel, Netlify, GitHub Pages, ...).

# Portfolio — Hunter Nilsen

## Overview
Single-page portfolio site for Hunter Nilsen. React 18 + TypeScript (strict) + Vite 5, hash-based routing, deployed to GitHub Pages at `hunternilsen.github.io/portfolio-landing/`.

Ported from vanilla HTML/CSS/JS on 2026-04-22. The pre-migration vanilla is archived at `~/Documents/Projects/.archive/Portfolio-vanilla/` and tagged `v0.0.1-vanilla` in this repo.

## Stack
- **Build:** Vite 5, `base: './'` (relative asset paths — works under the `/portfolio-landing/` Pages subpath)
- **Framework:** React 18 + TypeScript strict; functional components only
- **Router:** `react-router-dom` HashRouter — routes `/` and `/project/:slug`
- **Styling:** Plain CSS in `src/styles.css`, imported once in `main.tsx`. Same class names and tokens as the vanilla. **Do not migrate to Tailwind or CSS Modules** without a separate discussion — the 2,000-line design system was kept verbatim on purpose.
- **State:** Local `useState` only. No Zustand / Context.

## File Structure
- `src/main.tsx` — Mounts App, imports `styles.css`
- `src/App.tsx` — HashRouter with home + project detail routes
- `src/styles.css` — Complete design system (verbatim port from vanilla)
- `src/assets/Headshot.jpg` — About section photo, imported via Vite
- `src/types/project.ts` — `Project` type + 14-variant `RichSection` discriminated union
- `src/data/projects.ts` — `PROJECT_DATA: Project[]`, ~1,000 lines, 15 projects
- `src/lib/seo.ts` — `applyProjectSeo` / `resetSeo` for title + meta tag updates
- `src/lib/scrollMemory.ts` — Module-scoped scroll position preservation between home ↔ detail
- `src/hooks/useScrollSpy.ts` — Active nav highlighting driven by scroll position
- `src/components/` — Home chrome (Header, About, Experience, Skills, Filters, ProjectGrid, ProjectCard, Footer)
- `src/components/common/` — SkipLink, ScrollProgress, RouteAnnouncer
- `src/components/detail/` — DetailHeader, PrevNextNav, PlainDetail, RichDetail, SectionDispatcher
- `src/components/detail/sections/` — 14 section components (Features, ThreeCol, Compare, Workflow, Pipeline, Tech, Steps, Rubric, Accordion, Modules, DataArchitecture, Timeline, Callout, Architecture)
- `src/pages/Home.tsx`, `src/pages/ProjectDetail.tsx`

## Routing
- `#/` — Home (About, Experience, Skills, Filters, Project grid)
- `#/project/{slug}` — Project detail; `ProjectDetail.tsx` looks up the slug in `PROJECT_DATA` and dispatches to `PlainDetail` or `RichDetail` based on `project.richDetail` presence
- Invalid slug → `<Navigate to="/" replace />`
- Section anchors in the header (About / Experience / Skills / Projects) do not change the URL hash — they scroll imperatively via `onNavClick` in `Header.tsx`. The URL hash is reserved for route paths.

## Project Data Shape
Every project needs: `slug`, `title`, `date` (YYYY-MM for sorting), `dateLabel`, `role`, `roleLabel`, `category`, `section`, `tags`, `impactAreas`, `summary`, `company`, `featured`, and a `detail` object. Projects with a rich detail page add a `richDetail` object whose `sections[]` is an array of the 14-variant `RichSection` union.

Optional fields:
- `cardStats?: string[]` — renders inline KPI chips on the home-grid card (only used by `free-trial-growth-initiative` and `clay-old-opportunity-workflow` today)

**If you add or rename a `RichSection` variant, you must update both:**
1. The union in `src/types/project.ts`
2. The `switch` in `src/components/detail/SectionDispatcher.tsx`

TypeScript's exhaustiveness check on the `_exhaustive: never` fallthrough will catch a missing case at compile time — this is the main reason for the migration.

## Common Tasks

### Add a new project
1. Add an object to `PROJECT_DATA` in `src/data/projects.ts`. Type-check should flag any missing fields.
2. If it needs a rich detail page, add a `richDetail.sections[]` using existing section types.
3. Nothing else to touch — the grid, filters, and prev/next nav derive automatically.

### Add a new rich-detail section type
1. Add the interface + union member in `src/types/project.ts`
2. Create `src/components/detail/sections/<Name>.tsx`
3. Wire it in the `switch` in `SectionDispatcher.tsx`
4. Add the styling to `src/styles.css` using `.rich-<name>-*` class names (match the vanilla conventions)

### Visual tweaks
Edit `src/styles.css` directly. Do not inline Tailwind utilities.

## Scripts
- `npm run dev` — Vite dev server at `http://localhost:5173/`
- `npm run typecheck` — `tsc -b`, strict mode; expect clean
- `npm run build` — Type-check, then produce `dist/` with hashed asset filenames
- `npm run deploy:pages` — Build and push `dist/` to the `gh-pages` branch via the `gh-pages` npm package

## Deployment — GitHub Pages
The live site is `https://hunternilsen.github.io/portfolio-landing/`.

**First-time Pages config change required:** in the GitHub repo Settings → Pages, switch source from `main` branch root to the `gh-pages` branch. The vanilla was served from main; the React build uses `gh-pages` as a built-artifact branch so `main` stays clean (source only).

Once configured, deploys are one command: `npm run deploy:pages`. The `gh-pages` package builds, then force-pushes `dist/` to `origin/gh-pages`.

## Migration Notes (for future maintenance)
- The vanilla Portfolio had a `manifest.json` claiming a Domo Custom App id (`5be303f1-3289-4c57-acf0-e5c0d07f2e27`). That app was deleted in Domo and the site was never actually hosted there — the manifest was dead config. It's been removed from this repo. If Domo hosting is ever desired, run `domo init` and add deploy tooling fresh.
- The vanilla home grid was hand-written HTML cards in `index.html`. The React port renders cards from `PROJECT_DATA` sorted by `date` DESC, so WIP projects with `date: "2099-01"` bubble to the top naturally.
- Prev/next nav in detail pages uses `PROJECT_DATA` order (not the sorted display order). This matches vanilla behavior.

## Rollback
If something goes catastrophically wrong and you need the vanilla back:

```bash
cd ~/Documents/Projects/Portfolio
git checkout v0.0.1-vanilla
```

You'll land on a detached HEAD with the vanilla working tree intact. From there, you can force-push back to `main` if needed. The archived vanilla at `~/Documents/Projects/.archive/Portfolio-vanilla/` is a separate copy for offline reference.

## Design Rules
- **Fonts:** Inter (headings, 500/600/700) + Lato (body, 400/500/700) via Google Fonts — already linked in `index.html`
- **Accent red:** `#DC2626` (buttons, accents). Token: `var(--color-accent)`
- **Respect `prefers-reduced-motion`** — fades and scroll animations already check it
- All colors, spacing, radii, shadows live as `var(--*)` tokens in `src/styles.css`

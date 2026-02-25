# Portfolio — Hunter Nilsen

## Overview
Single-page portfolio with hash-based routing for project detail pages. Static HTML/CSS/JS — no build step, no framework.

## File Structure
- `index.html` — Main page with home view and detail view container. Links external CSS/JS.
- `styles.css` — All styles: design tokens, layout, components, responsive breakpoints.
- `app.js` — Hash router, filtering, scroll progress, IntersectionObserver, mobile nav.
- `project-data.js` — Structured data for all 15 projects (title, summary, detail sections).
- `projects.md` — Source of truth for content (experience, education, 15 projects with roles, tags, key results).
- `Headshot.jpg` — Professional headshot used in About section.
- `manifest.json` — Domo Custom App manifest (needed if deploying inside Domo).

## Design System
- **Theme:** Light mode, clean professional
- **Colors:** Background `#FFFFFF`, Text `#212121`, Accent Red `#DC2626`, Secondary Gray `#6B7280`, Surface `#F3F4F6`
- **Fonts:** Inter (headings, 600/700) + Lato (body, 400/500) via Google Fonts
- **Cards:** Light gray bg, soft shadow, 10px border-radius, hover lift
- **Layout:** Responsive grid — 3 columns desktop, 2 tablet, 1 mobile. Max-width 1100px.

## Routing
- `#/` or empty hash → Home view (about, experience, projects grid)
- `#/project/{slug}` → Project detail view (rendered dynamically from `project-data.js`)
- Browser back/forward supported via `hashchange` listener
- Home scroll position preserved when navigating to/from detail views

## Key Patterns
- Filters use `data-role` and `data-category` attributes on `.project-card` elements
- `data-filter-type` and `data-filter-value` on `.filter-btn` elements drive filtering
- `data-slug` on cards matches project slugs in `project-data.js`
- Category sections auto-hide when all cards are filtered out
- The Free Trial Growth Initiative card has class `.featured` (full-width, stats grid)
- Project detail views built with safe DOM methods (createElement/textContent)
- Respects `prefers-reduced-motion`

## Deployment
- GitHub Pages: https://hunternilsen.github.io/portfolio-landing/
- Repo: https://github.com/hunternilsen/portfolio-landing
- Also deployable as a Domo Custom App via `manifest.json`

## Content Updates
When adding or editing projects, update `projects.md`, `project-data.js`, and `index.html`:
- `project-data.js`: Add/edit the project object (slug, title, role, category, tags, summary, detail sections)
- `index.html`: Add/edit the project card in the appropriate category section with matching `data-slug`, `data-role`, `data-category`
- `projects.md`: Update the source-of-truth content
- Each card needs: `data-role` (`revops`/`adops`), `data-category` (`dashboards`/`automation`/`enablement`/`strategic`), `data-slug`, role badge, category tag, summary, "View Project" link

## Future Improvements
- **Rich detail pages (Option 4):** Port COMINT landing page structure (`/Users/hunternilsen/Documents/Domo/VS Code/comint/landing.html`) into native portfolio detail pages. Adapt the COMINT template's sections (hero, stats row, workflow diagram, feature cards, expandable rubrics) to use the portfolio's light theme and Inter/Lato typography. This replaces the current placeholder detail content with COMINT-quality pages for each project.
- **Fill in project detail content:** All 15 projects in `project-data.js` have placeholder text in their `detail` fields (problem, solution, building, results). Replace with real content.

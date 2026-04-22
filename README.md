# Portfolio — Hunter Nilsen

Single-page portfolio at [hunternilsen.github.io/portfolio-landing](https://hunternilsen.github.io/portfolio-landing/).

Built with Vite 5 + React 18 + TypeScript (strict). Hash-routed, client-side only.

## Develop

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5173/`.

## Build

```bash
npm run build       # writes to dist/
npm run typecheck   # strict tsc -b
```

## Deploy to GitHub Pages

```bash
npm run deploy:pages
```

Builds the project and force-pushes `dist/` to the `gh-pages` branch via the `gh-pages` npm package. GitHub Pages is configured to serve from that branch.

## Project Structure

See [CLAUDE.md](CLAUDE.md) for the full architectural breakdown — routing, data shape, section types, and common maintenance tasks.

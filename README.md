# QuadMLabs website

Professional portfolio of an Atlassian consultant, built with [Docusaurus](https://docusaurus.io/) and published at <https://quadmlabs.com>.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm install
npm start
```

Starts a local dev server at `http://localhost:3000` with live reload.

## Build

```bash
npm run build
npm run serve   # preview the production build locally
```

The static output is generated in `build/`.

## Project structure

| Path | Content |
| --- | --- |
| `about/`, `experience/`, `skills/` | One docs plugin instance per top-level section (see `docusaurus.config.js`) |
| `docs/` | "Projects" section (served at `/projects`) (Project Performance & Flow Analytics) |
| `src/pages/index.js` | Home page |
| `src/components/HomepageFeatures/` | Service cards on the home page |
| `src/css/custom.css` | Theme: colors, typography, hero, buttons |
| `static/` | Images and `CNAME` |

## Theme

Colors and typography are defined as CSS variables at the top of `src/css/custom.css`. The accent color is the `--ifm-color-primary-*` scale (one for light mode, one for dark mode). Fonts (Inter and Plus Jakarta Sans) are self-hosted through `@fontsource-variable` packages.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `build/` to GitHub Pages with the `quadmlabs.com` custom domain.

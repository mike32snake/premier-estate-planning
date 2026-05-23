# Premier Estate Planning (PEP)

Marketing website for **Premier Estate Planning, PLLC** — Derek Carrillo's Florida
estate-planning practice (wills, revocable trusts, probate, business succession,
elder law).

Built from the approved **"B Teal"** design direction (teal / black / white,
Instrument Serif + Inter), implemented from a Claude Design handoff bundle.

**Live site:** https://mike32snake.github.io/premier-estate-planning/

## Stack

Static site — no build step. Each page is a small HTML wrapper that loads React 18
(UMD) + Babel Standalone from a CDN and renders shared JSX components in the browser.
Shared chrome (nav, footer, hero, CTA, article shell, design tokens) lives in
`shared.jsx`, so a palette or footer change propagates to every page at once.

```
index.html ............... Home (renders variants/VariantBTeal.jsx)
Practice Areas.html        \
Process.html               |
Attorneys.html             |  interior pages -> pages/*.jsx
Resources.html             |
Contact.html               /
<9 article pages>.html ... long-form Resources articles -> pages/articles/*.jsx
shared.jsx ............... tokens + Nav, Footer, Hero, CTA, article components
responsive.css ........... responsive layer (see below)
assets/ .................. pep-logo.png, derek.jpg
variants/VariantBTeal.jsx  home page component
.nojekyll ................ tells GitHub Pages to serve files verbatim (incl. .jsx)
```

## Responsiveness

The design was authored as a fixed 1440px desktop layout with React inline styles.
`responsive.css` adds a reflow layer **without touching the desktop look**: it targets
the serialized inline `style` attributes via attribute selectors and uses `!important`
to override them only under `max-width` media queries. It makes the 1440px container
fluid, collapses multi-column grids to one column on phones, scales the display type,
tightens gutters, and wraps the nav. Desktop (≥1440) renders exactly as designed.

## Local development

```bash
# from the repo root
python3 -m http.server 8765
# then open http://localhost:8765/index.html
```

Must be served over HTTP (not opened as a `file://` URL) so Babel can fetch the
`.jsx` sources.

## Known follow-ups

- **Contact form** (`pages/Contact.jsx`) is a visual mockup — wire it to a form
  backend (Formspree, Resend, or a serverless function) to actually deliver leads.
- **Quiz / guide / "Download PDF"** links are placeholders (`href="#"`). Point them
  at the real assets when available.
- **Performance / SEO**: in-browser Babel compilation is fine for launch but not
  ideal for search indexing or first-paint. A future pass could pre-compile the JSX
  to a static bundle.
- Replace placeholder phone (`(727) 555-0142`), email, and the office map image with
  real details.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

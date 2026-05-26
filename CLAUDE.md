# CLAUDE.md — Premier Estate Planning (PEP) site

Guidance for AI agents working in this repo. Keep this short and current.

---

## What this is

Marketing site for **Premier Estate Planning, PLLC** — Derek Carrillo's Florida
estate-planning practice (wills, trusts, probate, business succession, elder law).

- **Live:** https://mike32snake.github.io/premier-estate-planning/
- **GitHub:** `mike32snake/premier-estate-planning` (public, GitHub Pages from `main` root)
- **Local working dir:** `/Users/mmaseda/Desktop/PEP/premier-estate-planning`
- **Sister directory (not in repo):** `/Users/mmaseda/Desktop/PEP/pdf_build/` — the
  generator that produces the 9 PDFs in `guides/`. See "PDF guide pipeline" below.

## Stack — no build step

Plain static files. Each HTML wrapper loads React 18 UMD + Babel Standalone from a
CDN and renders shared JSX (`shared.jsx`) plus a page-specific JSX. Babel compiles
the JSX in the browser. There is no Node build, no bundler, no package.json.

Consequences worth knowing:
- The `.jsx` files are served as static assets and fetched by Babel. Browsers
  **cache them aggressively**. After any deploy, hard-refresh to verify.
- Every component is exposed as `window.PEPX`; pages call `<window.PEPCTA/>` etc.
- The 15 HTML files are nearly identical wrappers — see `index.html` for the
  canonical head; the only per-page differences are `<title>`, `<meta description>`,
  the JSX `src`, and the `ReactDOM.createRoot(...).render(...)` call.

## Quick start

```bash
# from the repo root
pm2 delete pepsrv 2>/dev/null
pm2 start python3 --name pepsrv --cwd "$PWD" -- -m http.server 8770
# open http://localhost:8770/index.html
pm2 logs pepsrv --lines 30   # if something breaks
pm2 delete pepsrv            # stop when done
```

Must be served over HTTP. Opening `file://` URLs will not work (Babel fetches the
`.jsx` files; same-origin fetch on file:// fails).

## File structure

```
index.html ............... Home (renders variants/VariantBTeal.jsx)
Practice Areas.html        \
Process.html               |
Attorneys.html             |  interior pages -> pages/*.jsx
Resources.html             |
Contact.html               /
<9 article pages>.html ... long-form Resources articles -> pages/articles/*.jsx
shared.jsx ............... tokens + Nav, Footer, Hero, CTA, article shell, TOC
variants/VariantBTeal.jsx  home page component
pages/*.jsx, pages/articles/*.jsx
responsive.css ........... CSS media-query responsive layer
scale.js ................. proportional desktop zoom above 1440px
assets/ .................. pep-logo.png (optimized to 168KB), derek.jpg, cornerstones-feature.jpg
guides/ .................. the 9 downloadable PDF guides
.nojekyll ................ keep GitHub Pages from filtering filenames / spaces
```

Filenames with spaces are intentional (the design used them and all internal hrefs
match). They work on GitHub Pages; don't rename without updating every cross-link.

## Architecture conventions

### Shared chrome (`shared.jsx`)

Exposes design tokens (`window.PEP`) and components on `window.*`:
`PEPPage` (fixed-width 1440 page shell), `PEPNav`, `PEPFooter`, `PEPHero`, `PEPCTA`,
`PEPEyebrow`, `PEPSidebarBlock`, `PEPArticleHero`, `PEPArticleBody`, `PEPProse`
(H2/H3/P/Pull/Callout/UL/OL/LI/Checkbox), `PEPRelated`, `PEPArticleTOC`.

Change the brand once here; it propagates to every page.

### Article anatomy

```jsx
<window.PEPPage current="resources">
  <window.PEPArticleHero category=... title=... italic=... lede=... meta=[...]/>
  <window.PEPArticleBody sidebar={<>
    <window.PEPSidebarBlock title="Download" dark>...PDF download link...</window.PEPSidebarBlock>
  </>}>
    <P lead>...</P>
    <H2>...</H2>
    <P>...</P>
    {/* etc */}
  </window.PEPArticleBody>
  <window.PEPRelated items={[ [cat, title, href, meta], ... ]}/>
  <window.PEPCTA/>
</window.PEPPage>
```

`PEPArticleBody` **automatically prepends a sticky `PEPArticleTOC`** to the sidebar
that scans the rendered `<article>` for H2s and renders an anchored TOC. So an
article only needs its Download block in the `sidebar` prop. The TOC slugifies H2
text into ids and sets `scroll-margin-top` for clean anchor landings.

### Resources page filter

`pages/Resources.jsx` uses `React.useState` to filter the archive grid by category
when the user clicks a chip. The featured (top) article is pinned and not part of
the filterable set. Categories must match the first element of each article tuple
exactly (e.g. `'Trust Admin'`, not `'Trust Administration'`).

### Responsive layer

Two pieces work together to keep the fixed-1440 design responsive across all
screen sizes without retuning the inline styles:

**`responsive.css`** — uses attribute selectors against the serialized inline
`style` attribute (e.g. `[style*="grid-template-columns: repeat(4"]`) with
`!important` to override at media-query breakpoints. Collapses grids, scales type,
wraps the nav on mobile. Also:
- `html, body { overflow-x: clip; }` — **must be `clip`, not `hidden`.** `hidden`
  silently breaks `position: sticky` on the article sidebar. This is a real
  gotcha; do not "tidy" it back to `hidden`.
- `[style*="width: 1440px"]` is targeted to make the page container fluid (the
  home / `PEPPage` root have an inline `width: 1440`).
- `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth } }`
  for smooth TOC anchor scrolling.

**`scale.js`** — proportionally zooms the page on viewports wider than 1440 via
`document.documentElement.style.zoom`, capped at 1.5×. Below 1440 the CSS
breakpoints handle reflow. Driven by `window.innerWidth` (stable under zoom — do
not switch to `clientWidth` or you'll create a feedback loop).

## Copy voice — the "un-AI" rules

The copy was rewritten to read like a person, not an AI. Anyone editing copy
must follow these rules:

- **No em-dashes (`—`) in user-facing copy.** Use periods, commas, colons, or
  parentheses. (en-dashes in number ranges like `K–12`, `Days 1–7` are fine.)
- **No "not X, it's Y" / "is not X. It is Y" antithesis.** State the thing directly.
- **No "rather than" / "instead of" gimmicks when they're just dressing up a contrast.**
- **Fewer rule-of-three triads.** Vary sentence structure.
- **Cut elevated diction:** "considered counsel," "the arc of a legacy,"
  "instrument," "armature," "deliberately," "navigate," "a difficult season."
- **American spellings.** organised → organized, realise → realize, fortnight → two weeks,
  notarised → notarized, summarising → summarizing, whilst → while.
- **Contractions are fine.** Trust & Will-style: "we'll," "you'll," "it's."
- **Keep the legal substance accurate.** Plain words, not vague words.

When in doubt, the loose reference is [Trust & Will's](https://trustandwill.com/)
voice — but a touch more personal/premium because this is a boutique firm.

## Brand details

- **Firm:** Premier Estate Planning, PLLC ("PEP")
- **Attorney:** Derek Carrillo, Esq.
- **Contact (from premier.law, do not invent new):**
  - Tampa, Florida (no full street address is publicly published)
  - Phone: `813.330.0697`
  - Email: `info@premier.law`
  - Web: `premier.law`
- **Tagline language:** "Serving Tampa Bay & clients nationwide"
- **Type system:** Instrument Serif (display, with italics for the teal accent),
  Inter (body), JetBrains Mono not currently used.
- **Color tokens** (`window.PEP`):
  `ink #0a0a0a`, `teal #0f4c4a`, `tealBr #4aa9a4`, `sand #f4f6f5`, `cream #ffffff`.

## PDF guide pipeline

The 9 PDFs in `guides/` are generated from `/Users/mmaseda/Desktop/PEP/pdf_build/`
(outside this repo). To regenerate after a copy change:

```bash
cd /Users/mmaseda/Desktop/PEP/pdf_build
python3 gen.py     # edit content.py for copy; gen.py owns layout/CSS
GUIDES="/Users/mmaseda/Desktop/PEP/premier-estate-planning/guides"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for h in html/*.html; do
  base=$(basename "$h" .html)
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --virtual-time-budget=12000 --run-all-compositor-stages-before-draw \
    --print-to-pdf="$GUIDES/$base.pdf" "file://$PWD/$h"
done
```

Each PDF has: a branded **cover page** (page 1, full bleed via `min-height: 9.15in`
with `break-after: page`), body pages, and a **dedicated contact page** with
Derek's photo + contact box + "what to expect" + disclaimer (forced via
`break-before: page`). The disclaimer never orphans alone — that was a real
complaint we fixed; keep it that way.

Derek's photo is base64-embedded so the PDFs render offline.

## Adding things

**A new article:**
1. Add `pages/articles/MyArticle.jsx` modeled on any existing article. Use
   `<window.PEPArticleBody sidebar={<>...</>}>` with only a Download block in the
   sidebar — the TOC auto-generates.
2. Add `MyArticle Title.html` at root (copy any existing article wrapper, change
   the title, the `src=`, and the `render(<Component/>)` call).
3. Add a tuple to the `articles` array in `pages/Resources.jsx`.
4. If you want a downloadable PDF, add a spec to `pdf_build/content.py` and
   regenerate (see pipeline above).

**A new page:**
Add `pages/MyPage.jsx`, an HTML wrapper at root, and a nav entry in `shared.jsx`'s
`PEPNav.items` array (and matching column items in `PEPFooter`).

## Deployment

```bash
gh auth switch --user mike32snake   # important — this repo lives on mike32snake
git add -A
git commit -m "..."
git push origin main
# GitHub Pages rebuilds automatically; poll until live:
gh api repos/mike32snake/premier-estate-planning/pages/builds/latest --jq '.status'
```

The git author for commits to this repo should be the `mike32snake` identity
already configured in `.git/config` (mike32snake@users.noreply.github.com). Do
**not** commit with a genhealth identity — this is a personal/client repo.

## Gotchas (real ones we hit)

- **Browser caches `.jsx` and `.css`.** After a deploy, both `responsive.css` and
  every `*.jsx` need a hard refresh in any browser that has them cached. Mention
  this when checking your own work; "the live file is correct, the browser is
  stale" is a frequent false alarm.
- **`overflow-x: hidden` breaks sticky.** Use `clip`. (See responsive.css.)
- **`zoom` measurement:** when using `scale.js`'s zoom, `window.innerWidth` is
  stable but `document.documentElement.clientWidth` divides by zoom — easy
  feedback loop trap.
- **GitHub Pages caches the build status.** Right after a push, the `pages/builds/latest`
  API may show the *previous* build as "built" — verify the `.commit` SHA matches
  HEAD before declaring deployed.
- **The contact form has no backend.** It's a visual mockup. Submitting does
  `e.preventDefault()`. Wire to Formspree/Resend/Cloudflare Worker when ready.

## Open follow-ups (documented also in `PROJECT_STATE.md`)

1. Contact form needs a real backend.
2. Quiz "Begin the quiz" link is a placeholder (`#`).
3. Three of Derek's real items (phone? hours?) — confirm with him before launch.
4. Long-term: pre-compile JSX to a static bundle for SEO/first-paint. Babel-in-browser
   is fine for now but not ideal for search indexing.

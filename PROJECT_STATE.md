# PROJECT_STATE — Premier Estate Planning (PEP)

_Last updated: 2026-05-23_

## What this is
Derek Carrillo's estate-planning marketing site, built from the Claude Design handoff
bundle and the approved **"B Teal"** direction. Same client we built premier.law for;
this is his estate-planning vertical (PEP = Premier Estate Planning).

## What was built this session
- Assembled the final site from the design bundle (home + 5 interior pages + 9 articles),
  excluding exploration variants (B2.x, Variant A/B/C) and source `uploads/`.
- Created `index.html` as the GitHub Pages home (renders `variants/VariantBTeal.jsx`);
  repointed the old `B Teal.html` references to `index.html`.
- Added a full **responsive layer** (`responsive.css`) so the fixed-1440 desktop design
  reflows cleanly on tablet/phone while staying pixel-identical on desktop.
- Added viewport + favicon + SEO meta to every page.
- Verified all 15 pages render with 0 JS errors at 1440px and 390px (Playwright).
- Published as a **public** repo on the `mike32snake` GitHub account + GitHub Pages.
- Made the Resources "Recent essays" category chips actually filter the archive grid.
- Added **9 downloadable PEP-branded guide PDFs** in `guides/` (reworded/rebranded from the
  source decks; no Hargrove/NetLaw, Florida + PEP contact, no copied pricing). Generated from
  `/Users/mmaseda/Desktop/PEP/pdf_build/` (gen.py + content.py) via headless Chrome
  `--print-to-pdf`. Wired into each article's Download block and the Resources guides section.

## Regenerating the guide PDFs
```bash
cd /Users/mmaseda/Desktop/PEP/pdf_build
python3 gen.py   # edit content.py for copy changes
for h in html/*.html; do "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --no-pdf-header-footer --virtual-time-budget=12000 \
  --print-to-pdf="/Users/mmaseda/Desktop/PEP/premier-estate-planning/guides/$(basename "$h" .html).pdf" "file://$PWD/$h"; done
```

## Key paths
- Repo / working dir: `/Users/mmaseda/Desktop/PEP/premier-estate-planning`
- Design bundle (source of truth): `/Users/mmaseda/Desktop/PEP/design_bundle/derek-estate-planning-website`
- Verification screenshots: `/Users/mmaseda/Desktop/PEP/shots`
- Shared components/tokens: `premier-estate-planning/shared.jsx`
- Home component: `premier-estate-planning/variants/VariantBTeal.jsx`
- Responsive layer: `premier-estate-planning/responsive.css`

## Hosting
- GitHub repo: `mike32snake/premier-estate-planning` (public)
- Live URL: https://mike32snake.github.io/premier-estate-planning/
- Pages serves the repo root; `.nojekyll` keeps `.jsx` and spaced filenames intact.

## Resume in a new session
```bash
cd /Users/mmaseda/Desktop/PEP/premier-estate-planning
python3 -m http.server 8765         # local preview at http://localhost:8765/index.html
gh auth switch --user mike32snake   # before any git push
```

## Open follow-ups (see README "Known follow-ups")
1. Wire the Contact form to a real backend (no submission handler today).
2. Replace placeholder contact details (phone/email/address/map) with Derek's real info.
3. Point quiz / guide / "Download PDF" links at real assets.
4. Optional: pre-compile JSX to a static bundle for SEO/perf.

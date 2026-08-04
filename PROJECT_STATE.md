# PROJECT_STATE — Premier Estate Planning (PEP)

_Last updated: 2026-08-04_

## Latest session (2026-08-04) — Derek's second batch of edits (deployed, commit 905a564)
- Home: eyebrow "Estate Planning Counsel"; proof bar 16 yrs → **12 yrs**; hero serves "across Florida".
- Plans renamed: Foundational → **Essential**, Comprehensive → **Advanced** (Packages page, shared.jsx, meta).
- Packages: removed the Optional Lifetime Protection Trust row (LPT still mentioned on trusts page/article).
- Wills: Pour-Over Will marked as an add-on for trust-based plans (shared.jsx includes list).
- Process hero: "name is on the door" → "the attorney you meet on day one".
- About: JD/Bar hero tiles removed; bar admissions alphabetized (DC, FL, NM, NY); "Twelve years in practice".
- "Premier Estate Planning, PLLC" comma removed everywhere (Contact, Privacy, meta).
- "Serving Tampa Bay & Florida" → "Serving all of Florida" (footers, office blocks, contact, articles, meta).
- Guide PDFs in guides/ were NOT regenerated this session (no plan-name matches found in them, but unverified).

---

_Last updated: 2026-06-29_

## Latest session (2026-06-29) — Derek's content edits

Worked through a batch of edits Derek sent. All JSX validated through the exact
@babel/standalone@7.29.0 build the pages load in-browser (26/26 transform clean);
every page serves 200 locally.

**Home (`variants/VariantBTeal.jsx`)**
- Removed "Established 2015". Hero/services copy: "revocable trusts" → "trusts" /
  "Revocable & irrevocable trusts".
- Services blurb "Three practice areas…" → "A full range of practice areas…".
- Reordered services so Business Succession is #3 (I Core Planning, II Care &
  Incapacity, III Business). Removed dynasty-trust references.
- Execution step now "Signing with witnesses and a notary… delivered digitally".
- "Serving Tampa Bay & Florida" (was "clients nationwide").

**Shared chrome (`shared.jsx`)** — single source of truth, propagates site-wide
- Footer (here + the home's inline footer): dropped comma in "Premier Estate Planning
  PLLC", removed "Florida Bar · Attorney Advertising", justified the legal disclaimer
  (matches premier.law's wording verbatim), "Serving Tampa Bay & Florida".
- `PEP_AREAS`: rewrote the Trusts entry (revocable + irrevocable; IRA trusts, ILITs,
  SLATs; optional Lifetime Protection Trust; title "Revocable & Irrevocable Trusts";
  engagement points to packages). Added a new **Enhanced Life Estate / Lady Bird Deed**
  area *before* Business Succession. POA → singular "Power of Attorney". Removed
  in-office signing language from the Wills body.
- Added **Packages** to the nav and footer. Area-page Overview + article body prose
  (`PEPProse.P`) now justified. Article byline → "Derek A. Carrillo, Esq.".

**New pages**
- `Lady Bird Deed.html` + `pages/areas/LadyBirdDeed.jsx` (renders `PEPAreaPage slug="ladybird"`).
- `Packages.html` + `pages/Packages.jsx`: Foundational + Comprehensive plan tiers and an
  A La Carte menu. **No prices shown** (a pricing note says quotes come on the consult).

**About Us (`pages/Attorneys.jsx`)**
- "Derek A. Carrillo, Esq.". "Founder of Premier Estate Planning" (not Premier Law).
- Removed the Founded/transaction tiles and the Experience + Focus columns (grid → 2 col).
- Philosophy paragraphs justified.

**Resources / Process / Contact / articles**
- HEMS → "Health, Education & Maintenance" in all labels/titles (full standard kept in
  the article body for legal accuracy). Removed season/year from cards + article heroes.
- Process: removed in-office + court-filing from the FAQ; "bound" copy → digital; FAQ
  justified. Contact: all fields mandatory (phone was optional); added Lady Bird Deed
  topic; "Serving Tampa Bay & Florida".
- Articles: removed in-office/bound mentions, singularized POA, dynasty removed, LPT
  framed as optional, "revocable trust" → "living trust" in prose where it read as a
  service label.

**Privacy** — already mirrors premier.law's policy verbatim, rebranded to "Premier Estate
Planning, PLLC" (intentionally omits premier.law's two "client portal" sentences since PEP
has no portal).

**Open judgment calls flagged to Derek:** (1) HEMS label uses three terms but body keeps
the accurate four-term standard; (2) executed *originals* kept physical (FL wills require
it) while the plan *copy* is digital; (3) privacy policy drops the client-portal lines.

_Earlier session below._

---

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

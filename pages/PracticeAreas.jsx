// Practice Areas — overview grid. Each card links to its own dedicated page.
// Card data comes from window.PEP_AREAS (see shared.jsx).

function PracticeAreasPage() {
  const T = window.PEP;
  const areas = window.PEP_AREAS || [];

  return (
    <window.PEPPage current="practice">
      <window.PEPHero
        eyebrow="Practice Areas"
        title="What we"
        italic="draft."
        lede="The building blocks of a Florida estate plan. Pick any one to see what it is, who it's for, and how we handle it."
      />

      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: `1px solid ${T.rule}`, borderRadius: 16, overflow: 'hidden',
        }}>
          {(() => { const lastRowStart = areas.length - ((areas.length % 3) || 3); return areas.map((a, i) => {
            const col = i % 3;
            const notLastRow = i < lastRowStart;
            return (
              <a key={a.slug} href={a.page} style={{
                padding: '34px 32px', textDecoration: 'none', color: T.ink, background: T.cream,
                borderRight: col < 2 ? `1px solid ${T.rule}` : 'none',
                borderBottom: notLastRow ? `1px solid ${T.rule}` : 'none',
                display: 'flex', flexDirection: 'column', gap: 12, minHeight: 240,
              }}>
                <span style={{ fontFamily: T.display, fontSize: 12, color: T.tealBr, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase' }}>{a.cat}</span>
                <span style={{ fontFamily: T.display, fontSize: 34, letterSpacing: -0.6, fontWeight: 400, lineHeight: 1.05 }}>{a.title}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: T.muted }}>{a.short}</span>
                <span style={{ fontSize: 12, color: T.teal, letterSpacing: 0.4, marginTop: 'auto', fontWeight: 500 }}>
                  ✓ We draft this &nbsp;·&nbsp; Read more →
                </span>
              </a>
            );
          }); })()}
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.PracticeAreasPage = PracticeAreasPage;

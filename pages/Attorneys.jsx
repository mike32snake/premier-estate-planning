// Attorneys page — Derek's bio, credentials, philosophy

function AttorneysPage() {
  const T = window.PEP;

  return (
    <window.PEPPage current="attorneys">
      {/* hero with portrait */}
      <section style={{ padding: '64px 40px 80px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <window.PEPEyebrow>Managing Attorney</window.PEPEyebrow>
            <h1 style={{
              fontFamily: T.display, fontWeight: 400, fontSize: 112, lineHeight: 0.96,
              letterSpacing: -3, margin: '24px 0 28px', color: T.ink,
            }}>
              Derek Carrillo, <em style={{ color: T.teal, fontStyle: 'italic' }}>Esq.</em>
            </h1>
            <p style={{ fontFamily: T.display, fontStyle: 'italic', fontSize: 24, lineHeight: 1.5, color: T.muted, maxWidth: 560, margin: 0 }}>
              Sixteen years of practice. Fifteen hundred families. One premise — the attorney
              who drafts your plan is the one who signs it.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
              marginTop: 40, fontSize: 13, color: T.muted, letterSpacing: 0.4,
            }}>
              {[
                ['J.D.',        'University of Florida · 2008'],
                ['Bar',         'Florida Bar — RPPTL Section'],
                ['Recognition', 'Super Lawyers, 2019 – 2026'],
                ['Fellowship',  'ACTEC (pending)'],
              ].map(([a, b]) => (
                <div key={a}>
                  <span style={{ color: T.tealBr, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', fontSize: 11 }}>{a}</span><br/>
                  <span style={{ color: T.ink }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img src="assets/derek.jpg" alt="Derek Carrillo"
              style={{
                width: '100%', aspectRatio: '4/5', objectFit: 'cover',
                objectPosition: 'center top', borderRadius: 18,
                border: `1px solid ${T.rule}`,
              }}
            />
            <div style={{
              marginTop: 18, padding: '20px 24px', background: T.sand,
              border: `1px solid ${T.rule}`, borderRadius: 14,
              fontSize: 13, lineHeight: 1.65,
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: T.sageDk, fontWeight: 600, marginBottom: 8 }}>Direct</div>
              counsel@premierep.law &middot; (727) 555&middot;0142
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: '96px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <window.PEPEyebrow>Philosophy</window.PEPEyebrow>
            <h2 style={{
              fontFamily: T.display, fontSize: 56, margin: '18px 0 0',
              fontWeight: 400, letterSpacing: -1.5, lineHeight: 1, color: T.ink,
            }}>
              On <em style={{ color: T.teal }}>plain counsel.</em>
            </h2>
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.7, color: T.ink, maxWidth: 700 }}>
            <p style={{ margin: '0 0 22px' }}>
              Estate practice is unusual among legal specialties: the documents we draft
              are not read in our offices but in someone's living room, often during the
              hardest week of a family's life. That fact ought to determine the way they
              are written.
            </p>
            <p style={{ margin: '0 0 22px' }}>
              We work in plain language. We summarize before we draft, and we draft once
              the summary is right. We meet clients where they live; we coordinate with
              their CPAs and advisors rather than around them; we quote flat fees so no
              client hesitates to call with a question.
            </p>
            <p style={{ margin: 0 }}>
              The result is a plan that an executor — your spouse, your child, your
              trustee — can actually follow without an attorney standing over their
              shoulder. That, to us, is the measure of competent estate work.
            </p>
          </div>
        </div>
      </section>

      {/* Memberships + bio facts */}
      <section style={{ padding: '0 40px 96px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
          }}>
            {[
              ['Education', [
                'J.D., University of Florida · 2008',
                'B.A., Eckerd College · 2005',
                'CLE, Estate &amp; Trust Planning · ongoing',
              ]],
              ['Bar Admissions', [
                'Florida State Bar · 2008',
                'U.S. District Court, M.D. Fla.',
                'U.S. Tax Court · 2014',
              ]],
              ['Memberships', [
                'FL Bar · RPPTL Section',
                'Pinellas County Estate Planning Council',
                'ACTEC (Fellowship pending)',
              ]],
              ['Community', [
                'Board, Tampa Bay Legal Aid',
                'Pro bono · Stetson Probate Clinic',
                'Volunteer, St. Pete Free Clinic',
              ]],
            ].map(([h, items], i) => (
              <div key={h} style={{
                padding: '28px 28px',
                borderRight: i < 3 ? `1px solid ${T.rule}` : 'none',
              }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: T.sageDk, fontWeight: 600, marginBottom: 16 }}>{h}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {items.map((it, j) => (
                    <li key={j} style={{ fontSize: 13, lineHeight: 1.55, color: T.ink }} dangerouslySetInnerHTML={{__html: it}}/>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews (id=reviews for footer link) */}
      <section id="reviews" style={{ padding: '0 40px 96px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 56 }}>
          <window.PEPEyebrow>Client Reflections</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 56, margin: '18px 0 48px',
            fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
          }}>
            In their own <em style={{ color: T.teal }}>words.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {[
              ['I had postponed this for twelve years. The firm guided us through it in a fortnight.', 'Sam K.', 'Business Owner · Tampa'],
              ['When my mother passed, the administration was overwhelming. Mr. Carrillo took it on entirely.', 'Priya R.', 'Daughter · Sarasota'],
              ['Counsel that explains plainly, without condescension. A rare combination.', 'Marcus T.', 'New Father · St. Petersburg'],
            ].map(([q, n, r], i) => (
              <div key={n} style={{
                padding: '32px 32px',
                borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
                borderTop: `1px solid ${T.rule}`,
                borderBottom: `1px solid ${T.rule}`,
              }}>
                <div style={{ fontFamily: T.display, fontSize: 56, lineHeight: 0.6, fontWeight: 400, marginBottom: 16, color: T.tealBr, fontStyle: 'italic' }}>“</div>
                <div style={{ fontSize: 17, lineHeight: 1.55, marginBottom: 24, fontFamily: T.display, fontStyle: 'italic' }}>{q}</div>
                <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.4 }}>{n}</div>
                <div style={{ fontSize: 12, color: T.muted, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.AttorneysPage = AttorneysPage;

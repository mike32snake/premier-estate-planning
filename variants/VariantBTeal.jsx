// Variant B (Teal) — original B layout, retuned formal/attorney-appropriate.

function VariantBTeal() {
  // teal palette
  const sand   = '#f4f6f5';   // cool neutral surface
  const cream  = '#ffffff';
  const sage   = '#4aa9a4';
  const sageDk = '#0f4c4a';
  const ink    = '#0a0a0a';
  const teal   = '#0f4c4a';
  const tealBr = '#4aa9a4';
  const muted  = 'rgba(10,10,10,0.62)';
  const rule   = 'rgba(10,10,10,0.14)';

  const display = '"Instrument Serif", "Cormorant Garamond", Georgia, serif';
  const body    = '"Inter", -apple-system, sans-serif';

  // Eyebrow — small caps tracked label, no pill bg
  const Eyebrow = ({ children, color = sageDk, style }) => (
    <div style={{
      fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase',
      color, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10,
      ...style,
    }}>
      <span style={{ width: 18, height: 1, background: 'currentColor', opacity: 0.5 }}/>
      {children}
    </div>
  );

  return (
    <div style={{
      width: 1440, background: cream, color: ink, fontFamily: body,
      position: 'relative',
    }}>
      {/* NAV — flat ruled bar */}
      <div style={{
        padding: '22px 40px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', borderBottom: `1px solid ${rule}`,
      }}>
        <a href="index.html" style={{ display: 'inline-block' }}>
          <img src="assets/pep-logo.png" style={{ height: 40, mixBlendMode: 'multiply', display: 'block' }} />
        </a>
        <nav style={{
          display: 'flex', gap: 36, fontSize: 14, fontWeight: 500, color: ink,
        }}>
          {[
            ['Practice Areas', 'Practice Areas.html'],
            ['Process',        'Process.html'],
            ['Attorneys',      'Attorneys.html'],
            ['Resources',      'Resources.html'],
            ['Contact',        'Contact.html'],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              color: ink, textDecoration: 'none', paddingBottom: 2,
            }}>{label}</a>
          ))}
        </nav>
        <a href="Contact.html" style={{
          background: ink, color: cream, border: 'none', padding: '12px 22px',
          borderRadius: 14, fontSize: 13, fontWeight: 500, fontFamily: body, cursor: 'pointer',
          letterSpacing: 0.3, textDecoration: 'none', display: 'inline-block',
        }}>
          Schedule a Consultation
        </a>
      </div>

      {/* HERO */}
      <section style={{ padding: '72px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'stretch' }}>
          {/* left card */}
          <div style={{
            background: sand, borderRadius: 14, padding: '72px 56px',
            position: 'relative', overflow: 'hidden', border: `1px solid ${rule}`,
          }}>
            <Eyebrow>Estate &amp; Trust Counsel · Established 2010</Eyebrow>
            <h1 style={{
              fontFamily: display, fontWeight: 400, fontSize: 96, lineHeight: 0.98,
              letterSpacing: -2.5, margin: '28px 0 44px', color: ink,
            }}>
              Estate planning,<br/>
              done <em style={{ color: teal, fontStyle: 'italic' }}>properly.</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: muted, maxWidth: 560, margin: 0 }}>
              A Florida firm dedicated to wills, revocable trusts, probate, and
              succession planning. Considered counsel for the families and
              business owners of the Gulf Coast.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 44, alignItems: 'center' }}>
              <a href="Contact.html" style={{
                background: ink, color: cream, padding: '16px 28px',
                borderRadius: 14, fontSize: 14, fontWeight: 500, fontFamily: body,
                letterSpacing: 0.3, textDecoration: 'none', display: 'inline-block',
              }}>Schedule a Consultation</a>
              <a href="Practice Areas.html" style={{
                background: 'transparent', color: ink, border: `1px solid ${ink}`,
                padding: '16px 28px', borderRadius: 14, fontSize: 14, fontWeight: 500, fontFamily: body,
                letterSpacing: 0.3, textDecoration: 'none', display: 'inline-block',
              }}>Practice Overview</a>
            </div>

            {/* proof bar */}
            <div style={{
              marginTop: 56, paddingTop: 28, borderTop: `1px solid ${rule}`,
              display: 'flex', gap: 56, fontSize: 12, color: muted,
              letterSpacing: 1.2, textTransform: 'uppercase',
            }}>
              <div><strong style={{ color: ink, fontFamily: display, fontSize: 36, fontWeight: 400, display: 'block', letterSpacing: -1, textTransform: 'none' }}>1,400+</strong>Florida families</div>
              <div><strong style={{ color: ink, fontFamily: display, fontSize: 36, fontWeight: 400, display: 'block', letterSpacing: -1, textTransform: 'none' }}>16 yrs</strong>In practice</div>
              <div><strong style={{ color: ink, fontFamily: display, fontSize: 36, fontWeight: 400, display: 'block', letterSpacing: -1, textTransform: 'none' }}>4.9 ★</strong>230 reviews</div>
            </div>
          </div>

          {/* right — stacked cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: sageDk, color: cream, borderRadius: 14, padding: '36px 36px 32px',
              flex: 1, position: 'relative', overflow: 'hidden',
            }}>
              <Eyebrow color="rgba(255,255,255,0.7)">A Question to Consider</Eyebrow>
              <div style={{ fontFamily: display, fontSize: 34, lineHeight: 1.18, marginTop: 18, fontWeight: 400, letterSpacing: -0.5, fontStyle: 'italic' }}>
                "If something happened tomorrow, would your family know where to begin?"
              </div>
              <div style={{
                marginTop: 26, fontSize: 13, letterSpacing: 0.4, color: 'rgba(255,255,255,0.85)',
                borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 18,
              }}>
                Five questions. A personalised checklist. →
              </div>
            </div>
            <div style={{
              background: '#fff', borderRadius: 14, padding: '32px 32px', flex: 1,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: `1px solid ${rule}`,
            }}>
              <Eyebrow>Managing Attorney</Eyebrow>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 14 }}>
                <img src="assets/derek.jpg" alt="Derek Carrillo" style={{
                  width: 76, height: 76, borderRadius: 999, objectFit: 'cover',
                  objectPosition: 'center top',
                }}/>
                <div>
                  <div style={{ fontFamily: display, fontSize: 28, fontWeight: 400, letterSpacing: -0.3 }}>Derek Carrillo, Esq.</div>
                  <div style={{ fontSize: 13, color: muted }}>Founder &middot; Managing Attorney</div>
                </div>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: muted, marginTop: 18, fontStyle: 'italic' }}>
                "I founded PEP after watching my own family navigate an estate
                without a plan. Two decades on, that lesson still informs every
                document we draft."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 44, borderBottom: `1px solid ${rule}`, paddingBottom: 32 }}>
          <div>
            <Eyebrow>Practice Areas</Eyebrow>
            <h2 style={{ fontFamily: display, fontSize: 60, margin: '18px 0 0', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
              Counsel across the full <em style={{ color: teal }}>arc of a legacy.</em>
            </h2>
          </div>
          <div style={{ fontSize: 15, color: muted, maxWidth: 320, lineHeight: 1.6 }}>
            Four focused practice areas. Engagement letters with flat fees. No surprise invoices.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 20 }}>
          {/* big card */}
          <div style={{
            gridColumn: 'span 7', background: sand, borderRadius: 14, padding: 44,
            minHeight: 340, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            border: `1px solid ${rule}`,
          }}>
            <div>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>I &middot; Core Planning</div>
              <h3 style={{ fontFamily: display, fontSize: 40, margin: '0 0 14px', fontWeight: 400, letterSpacing: -0.8 }}>Wills &amp; Revocable Trusts</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: muted, margin: 0, maxWidth: 480 }}>
                The foundation of every plan. Probate avoidance, guardianship of minor children, and homestead protection — drafted to Florida statute.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: `1px solid ${rule}`, marginTop: 32, paddingTop: 20 }}>
              {['Pour-over wills', 'Revocable trusts', 'Homestead strategy', 'Guardianship for minors'].map((t, i) => (
                <span key={t} style={{
                  padding: '4px 16px 4px 0', fontSize: 13, color: ink,
                  borderRight: i < 3 ? `1px solid ${rule}` : 'none', marginRight: 16,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: teal, color: cream, borderRadius: 14, padding: 32, flex: 1 }}>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>II &middot; Probate</div>
              <h3 style={{ fontFamily: display, fontSize: 30, margin: '6px 0 12px', fontWeight: 400, letterSpacing: -0.5 }}>Probate &amp; Trust Administration</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.88, margin: 0 }}>
                Filings, deadlines, creditor notice, and beneficiary distributions handled with discretion during a difficult season.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: 32, flex: 1, border: `1px solid ${rule}` }}>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>III &middot; Business</div>
              <h3 style={{ fontFamily: display, fontSize: 30, margin: '6px 0 12px', fontWeight: 400, letterSpacing: -0.5 }}>Business Succession</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: muted, margin: 0 }}>
                Buy-sell agreements, LLC restructurings, and dynasty trusts for closely-held Florida enterprises.
              </p>
            </div>
          </div>

          <div style={{ gridColumn: 'span 12', background: sageDk, color: cream, borderRadius: 14, padding: 44, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>IV &middot; Elder Law</div>
              <h3 style={{ fontFamily: display, fontSize: 40, margin: '6px 0 14px', fontWeight: 400, letterSpacing: -0.8 }}>Care &amp; Incapacity Planning</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.88, margin: 0, maxWidth: 520 }}>
                Powers of attorney, advance directives, Medicaid pre-planning, and guardianship petitions — preparing the documents before they are needed.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'rgba(255,255,255,0.14)' }}>
              {[
                ['Durable POA', "Financial decisions in incapacity"],
                ['Healthcare Surrogate', 'Medical decision authority'],
                ['Living Will', 'End-of-life directives'],
                ['Medicaid Planning', 'Asset protection &amp; eligibility'],
              ].map(([t, d]) => (
                <div key={t} style={{ background: sageDk, padding: '20px 22px' }}>
                  <div style={{ fontFamily: display, fontSize: 22, fontWeight: 400, letterSpacing: -0.3 }}>{t}</div>
                  <div style={{ fontSize: 13, opacity: 0.78, marginTop: 4 }} dangerouslySetInnerHTML={{__html: d}}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{ background: sand, borderRadius: 14, padding: '72px 56px', border: `1px solid ${rule}` }}>
          <Eyebrow>The Engagement</Eyebrow>
          <h2 style={{ fontFamily: display, fontSize: 60, margin: '18px 0 56px', fontWeight: 400, letterSpacing: -1.5, lineHeight: 1 }}>
            Three steps. <em style={{ color: teal }}>Approximately two weeks.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${rule}` }}>
            {[
              ['I','Consultation', "A complimentary thirty-minute call to understand your assets, your beneficiaries, and your concerns."],
              ['II','Drafting', 'A plain-language summary precedes the executed documents. You review; we revise; we file.'],
              ['III','Execution', 'In-office signing with witnesses and a notary. You depart with a bound estate portfolio.'],
            ].map(([n,t,d], i) => (
              <div key={n} style={{
                padding: '40px 32px 8px',
                borderRight: i < 2 ? `1px solid ${rule}` : 'none',
              }}>
                <div style={{ fontFamily: display, fontSize: 14, color: tealBr, letterSpacing: 1.5, fontWeight: 600 }}>STEP {n}</div>
                <div style={{ fontFamily: display, fontSize: 36, marginTop: 14, fontWeight: 400, letterSpacing: -0.5 }}>{t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.65, color: muted, marginTop: 12 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS row */}
      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{ borderBottom: `1px solid ${rule}`, paddingBottom: 24, marginBottom: 32 }}>
          <Eyebrow>Client Reflections</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {[
            ['I had postponed this for twelve years. The firm guided us through it in a fortnight.', 'Sam K.', 'Business Owner · Tampa'],
            ['When my mother passed, the administration was overwhelming. Mr. Carrillo took it on entirely.', 'Priya R.', 'Daughter · Sarasota'],
            ['Counsel that explains plainly, without condescension. A rare combination.', 'Marcus T.', 'New Father · St. Petersburg'],
          ].map(([q, n, r], i) => (
            <div key={n} style={{
              padding: '32px 32px',
              borderRight: i < 2 ? `1px solid ${rule}` : 'none',
              borderTop: `1px solid ${rule}`,
              borderBottom: `1px solid ${rule}`,
            }}>
              <div style={{ fontFamily: display, fontSize: 56, lineHeight: 0.6, fontWeight: 400, marginBottom: 16, color: tealBr, fontStyle: 'italic' }}>“</div>
              <div style={{ fontSize: 17, lineHeight: 1.55, marginBottom: 24, fontFamily: display, fontStyle: 'italic', color: ink }}>{q}</div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 0.4 }}>{n}</div>
              <div style={{ fontSize: 12, color: muted, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{
          background: ink, color: cream, borderRadius: 14, padding: '88px 56px',
          position: 'relative', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center',
        }}>
          <div>
            <Eyebrow color="rgba(255,255,255,0.65)">Schedule a Consultation</Eyebrow>
            <h2 style={{ fontFamily: display, fontSize: 72, margin: '24px 0 24px', fontWeight: 400, letterSpacing: -2, lineHeight: 1 }}>
              The conversation begins with a <em style={{ color: tealBr, fontStyle: 'italic' }}>thirty-minute call.</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: 520, margin: 0 }}>
              Complimentary and confidential. We will discuss your circumstances, outline a path forward, and quote a flat fee in writing.
            </p>
            <a href="Contact.html" style={{
              background: cream, color: ink, padding: '16px 28px',
              borderRadius: 14, fontSize: 14, fontWeight: 500, fontFamily: body,
              marginTop: 36, letterSpacing: 0.3, textDecoration: 'none', display: 'inline-block',
            }}>
              Schedule a Consultation
            </a>
          </div>
          <div style={{
            borderLeft: '1px solid rgba(255,255,255,0.18)', paddingLeft: 40,
            fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.78)',
          }}>
            <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: tealBr, fontWeight: 600, marginBottom: 14 }}>Office</div>
            200 Central Avenue, Suite 400<br/>
            St. Petersburg, Florida 33701<br/>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>—</span><br/>
            (727) 555&middot;0142<br/>
            counsel@premierep.law
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 40px 32px', fontSize: 13, color: muted, borderTop: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, paddingBottom: 36 }}>
          <div>
            <img src="assets/pep-logo.png" style={{ height: 40, mixBlendMode: 'multiply' }} />
            <div style={{ marginTop: 14, lineHeight: 1.7 }}>
              200 Central Avenue, Suite 400<br/>St. Petersburg, FL 33701
            </div>
          </div>
          {[
            ['Practice', ['Wills &amp; Trusts','Probate','Business','Elder Law']],
            ['Firm', ['About','Attorneys','Reviews','Careers']],
            ['Resources', ['Articles','Quiz','FAQ','Guides']],
            ['Contact', ['Schedule','Email','Client Portal','Pay Invoice']],
          ].map(([h, items]) => (
            <div key={h}>
              <div style={{ color: ink, fontWeight: 600, marginBottom: 14, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase' }} dangerouslySetInnerHTML={{__html: h}}/>
              {items.map(i => <div key={i} style={{ marginBottom: 8 }} dangerouslySetInnerHTML={{__html: i}}/>)}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `1px solid ${rule}`, paddingTop: 20, display: 'flex', justifyContent: 'space-between', fontSize: 12, letterSpacing: 0.4 }}>
          <span>© 2026 Premier Estate Planning, PLLC · All rights reserved</span>
          <span>Florida Bar &middot; Attorney Advertising</span>
        </div>
      </footer>
    </div>
  );
}

window.VariantBTeal = VariantBTeal;

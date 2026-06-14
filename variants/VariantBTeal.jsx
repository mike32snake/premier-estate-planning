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
      {/* NAV — shared chrome so the bar is identical across the whole site */}
      <window.PEPNav current={null} />

      {/* HERO */}
      <section style={{ padding: '72px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'stretch' }}>
          {/* left card */}
          <div style={{
            background: sand, borderRadius: 14, padding: '72px 56px',
            position: 'relative', overflow: 'hidden', border: `1px solid ${rule}`,
          }}>
            <Eyebrow>Estate &amp; Trust Counsel · Established 2015</Eyebrow>
            <h1 style={{
              fontFamily: display, fontWeight: 400, fontSize: 96, lineHeight: 0.98,
              letterSpacing: -2.5, margin: '28px 0 44px', color: ink,
            }}>
              Estate planning,<br/>
              done <em style={{ color: teal, fontStyle: 'italic' }}>properly.</em>
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: muted, maxWidth: 560, margin: 0 }}>
              We're a Florida firm focused on wills, revocable trusts, business
              succession, and incapacity planning. We help families and business
              owners across the Tampa Bay area protect what they've built.
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
            <a href="Quiz.html" style={{
              background: sageDk, color: cream, borderRadius: 14, padding: '36px 36px 32px',
              flex: 1, position: 'relative', overflow: 'hidden',
              textDecoration: 'none', display: 'block',
            }}>
              <Eyebrow color="rgba(255,255,255,0.7)">A Question to Consider</Eyebrow>
              <div style={{ fontFamily: display, fontSize: 34, lineHeight: 1.18, marginTop: 18, fontWeight: 400, letterSpacing: -0.5, fontStyle: 'italic' }}>
                "If something happened tomorrow, would your family know where to begin?"
              </div>
              <div style={{
                marginTop: 26, fontSize: 13, letterSpacing: 0.4, color: 'rgba(255,255,255,0.85)',
                borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 18,
              }}>
                Five questions. A checklist made for you. →
              </div>
            </a>
            <div style={{
              background: '#fff', borderRadius: 14, padding: '32px 32px', flex: 1,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: `1px solid ${rule}`,
            }}>
              <Eyebrow>Principal Attorney</Eyebrow>
              <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 14 }}>
                <img src="assets/derek.jpg" alt="Derek Carrillo" style={{
                  width: 76, height: 76, borderRadius: 999, objectFit: 'cover',
                  objectPosition: 'center top',
                }}/>
                <div>
                  <div style={{ fontFamily: display, fontSize: 28, fontWeight: 400, letterSpacing: -0.3 }}>Derek Carrillo, Esq.</div>
                  <div style={{ fontSize: 13, color: muted }}>Founder &middot; Principal Attorney</div>
                </div>
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: muted, marginTop: 18, fontStyle: 'italic' }}>
                "I started PEP after watching my own family deal with an estate
                that had no plan. Years later, that experience still shapes
                every document we draft."
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
              Everything your plan needs, <em style={{ color: teal }}>in one place.</em>
            </h2>
          </div>
          <div style={{ fontSize: 15, color: muted, maxWidth: 320, lineHeight: 1.6 }}>
            Three practice areas, each quoted as a flat fee in your engagement letter. No hourly billing.
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
              <h3 style={{ fontFamily: display, fontSize: 40, margin: '0 0 14px', fontWeight: 400, letterSpacing: -0.8 }}>Wills &amp; Trusts</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: muted, margin: 0, maxWidth: 480 }}>
                The foundation of every plan. We handle probate avoidance, guardianship for minor children, and homestead protection, all drafted to Florida law.
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

          <div style={{ gridColumn: 'span 5', background: teal, color: cream, borderRadius: 14, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 340 }}>
            <div>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>II &middot; Business</div>
              <h3 style={{ fontFamily: display, fontSize: 34, margin: '6px 0 14px', fontWeight: 400, letterSpacing: -0.5 }}>Business Succession</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, opacity: 0.88, margin: 0 }}>
                Buy-sell agreements, LLC restructuring, and dynasty trusts for closely held Florida businesses. We keep the value in the family or set up a clean sale.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.18)', marginTop: 28, paddingTop: 16 }}>
              {['Buy-Sell Agreements', 'LLC Reforms', 'Dynasty Trusts', 'Key-Person Planning'].map((t, i) => (
                <span key={t} style={{
                  padding: '4px 16px 4px 0', fontSize: 13, color: cream, opacity: 0.88,
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.18)' : 'none', marginRight: 16,
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: 'span 12', background: sageDk, color: cream, borderRadius: 14, padding: 44, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: display, fontSize: 14, color: tealBr, marginBottom: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600 }}>III &middot; Care &amp; Incapacity</div>
              <h3 style={{ fontFamily: display, fontSize: 40, margin: '6px 0 14px', fontWeight: 400, letterSpacing: -0.8 }}>Powers of Attorney &amp; Care Planning</h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, opacity: 0.88, margin: 0, maxWidth: 520 }}>
                Powers of attorney, healthcare surrogates, living wills, and guardianship designations. The documents that keep your family in control when you cannot speak for yourself.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 1, background: 'rgba(255,255,255,0.14)' }}>
              {[
                ['Durable POA',           'Financial decisions in incapacity'],
                ['Healthcare Surrogate',  'Medical decision authority'],
                ['Living Will',           'End-of-life directives'],
                ['Guardianship',          'Designations for minor children'],
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
            Three steps. <em style={{ color: teal }}>About two weeks.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: `1px solid ${rule}` }}>
            {[
              ['I','Consultation', "A free thirty-minute call to understand your situation and what matters most to you."],
              ['II','Drafting', 'We send a plain-language summary first. You review it, we make changes, then we finalize the documents.'],
              ['III','Execution', 'You sign in our office with witnesses and a notary, then leave with a bound copy of your plan.'],
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
          <Eyebrow>What Clients Say</Eyebrow>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
          {[
            ['I had put this off for twelve years. They got us through it in about two weeks.', 'Sam K.', 'Business Owner · Tampa'],
            ['When my mother passed, the paperwork was overwhelming. Derek handled all of it.', 'Priya R.', 'Daughter · Sarasota'],
            ['He explained everything in plain English and never talked down to us.', 'Marcus T.', 'New Father · St. Petersburg'],
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
              It starts with a <em style={{ color: tealBr, fontStyle: 'italic' }}>thirty-minute call.</em>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: 520, margin: 0 }}>
              It's free and confidential. We'll talk through your situation, walk you through your options, and give you a flat fee in writing.
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
            Tampa, Florida<br/>
            Serving Tampa Bay &amp; clients nationwide<br/>
            813.330.0136<br/>
            info@pep.law
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '48px 40px 32px', fontSize: 13, color: muted, borderTop: `1px solid ${rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, paddingBottom: 36 }}>
          <div>
            <img src="assets/pep-logo.png" style={{ height: 40, mixBlendMode: 'multiply' }} />
            <div style={{ marginTop: 14, lineHeight: 1.7 }}>
              Tampa, Florida<br/>Serving Tampa Bay &amp; clients nationwide
            </div>
          </div>
          {[
            ['Practice', ['Wills','Trusts','Powers of Attorney','Healthcare Directives','Business Succession']],
            ['Firm', ['About Us','Process','Reviews']],
            ['Resources', ['Articles','Quiz','FAQ','Guides']],
            ['Contact', ['Schedule','Email','Privacy Policy','Legal Disclaimer']],
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

        <div style={{ marginTop: 24, fontSize: 11, lineHeight: 1.7, color: muted, maxWidth: 1100 }}>
          <div style={{ fontSize: 11, letterSpacing: 1.5, fontWeight: 600, color: ink, textTransform: 'uppercase', marginBottom: 8 }}>Legal Disclaimer</div>
          <p style={{ margin: '0 0 10px' }}>The hiring of a lawyer is an important decision and should not be based solely on advertisements. Before you decide, you may request free written information about our attorneys&rsquo; qualifications and experience.</p>
          <p style={{ margin: '0 0 10px' }}>This website is provided for informational purposes only and does not constitute legal advice. The information here is not a substitute for consulting with an attorney and does not create an attorney-client relationship. You should always seek professional legal counsel for advice regarding your specific situation.</p>
          <p style={{ margin: '0 0 10px' }}>Because laws change frequently and some content relies on external sources, we do not warrant or guarantee the accuracy, completeness, or availability of the information provided on this site or any linked third-party websites. Links to other sites are offered solely as a convenience and do not imply endorsement.</p>
          <p style={{ margin: 0 }}>You should never delay seeking legal advice, disregard professional guidance, or start or stop any legal action based solely on information from this website. Always consult a qualified attorney for advice tailored to your circumstances.</p>
        </div>
      </footer>
    </div>
  );
}

window.VariantBTeal = VariantBTeal;

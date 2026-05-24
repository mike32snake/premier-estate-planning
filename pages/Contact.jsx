// Contact page — form, office details, map placeholder, hours

function ContactPage() {
  const T = window.PEP;

  const Input = ({ label, type = 'text', placeholder, span = 1 }) => (
    <label style={{
      display: 'flex', flexDirection: 'column', gap: 8,
      gridColumn: `span ${span}`,
    }}>
      <span style={{ fontSize: 11, letterSpacing: 2, color: T.sageDk, fontWeight: 600, textTransform: 'uppercase' }}>
        {label}
      </span>
      {type === 'textarea' ? (
        <textarea rows={5} placeholder={placeholder} style={{
          padding: '14px 16px', fontFamily: T.body, fontSize: 15, color: T.ink,
          border: `1px solid ${T.rule}`, borderRadius: 10, background: T.cream,
          resize: 'vertical', outline: 'none',
        }}/>
      ) : (
        <input type={type} placeholder={placeholder} style={{
          padding: '14px 16px', fontFamily: T.body, fontSize: 15, color: T.ink,
          border: `1px solid ${T.rule}`, borderRadius: 10, background: T.cream,
          outline: 'none',
        }}/>
      )}
    </label>
  );

  return (
    <window.PEPPage current="contact">
      <window.PEPHero
        eyebrow="Contact"
        title="Let's talk."
        italic="No obligation."
        lede="A free thirty-minute call to understand your situation. We will email you within one business day with a few proposed times."
      />

      {/* Form + sidebar */}
      <section style={{ padding: '64px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* form */}
          <div style={{
            background: T.sand, border: `1px solid ${T.rule}`, borderRadius: 18,
            padding: '48px 48px',
          }}>
            <window.PEPEyebrow>Send a Message</window.PEPEyebrow>
            <h2 style={{
              fontFamily: T.display, fontSize: 42, margin: '18px 0 32px',
              fontWeight: 400, letterSpacing: -0.8, lineHeight: 1,
            }}>
              Tell us briefly <em style={{ color: T.teal }}>what brings you in.</em>
            </h2>
            <form onSubmit={(e) => e.preventDefault()} style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20,
            }}>
              <Input label="First name"  placeholder="Eleanor" />
              <Input label="Last name"   placeholder="Halloran" />
              <Input label="Email"       type="email" placeholder="eleanor@email.com" />
              <Input label="Phone"       type="tel"   placeholder="813.330.0697" />
              <label style={{ display: 'flex', flexDirection: 'column', gap: 8, gridColumn: 'span 2' }}>
                <span style={{ fontSize: 11, letterSpacing: 2, color: T.sageDk, fontWeight: 600, textTransform: 'uppercase' }}>
                  Matter
                </span>
                <select style={{
                  padding: '14px 16px', fontFamily: T.body, fontSize: 15, color: T.ink,
                  border: `1px solid ${T.rule}`, borderRadius: 10, background: T.cream,
                  outline: 'none',
                }}>
                  <option>Estate planning (wills & trusts)</option>
                  <option>Probate or trust administration</option>
                  <option>Business succession</option>
                  <option>Elder law & incapacity</option>
                  <option>Something else</option>
                </select>
              </label>
              <Input label="A few words on your situation" type="textarea" placeholder="A line or two is plenty. We'll go deeper on the call." span={2} />
              <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: T.muted }}>
                  Your message is confidential. It does not create an attorney-client relationship until we are formally engaged.
                </span>
                <button type="submit" style={{
                  background: T.ink, color: T.cream, border: 'none', padding: '16px 28px',
                  borderRadius: 10, fontSize: 14, fontWeight: 500, fontFamily: T.body,
                  letterSpacing: 0.3, cursor: 'pointer',
                }}>
                  Send →
                </button>
              </div>
            </form>
          </div>

          {/* sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              padding: 32, background: T.sageDk, color: T.cream, borderRadius: 18,
            }}>
              <window.PEPEyebrow color="rgba(255,255,255,0.7)">Direct</window.PEPEyebrow>
              <div style={{ fontFamily: T.display, fontSize: 28, margin: '14px 0 14px', letterSpacing: -0.3 }}>
                Prefer to call?
              </div>
              <div style={{ fontFamily: T.display, fontSize: 36, fontStyle: 'italic', color: T.tealBr, marginBottom: 8 }}>
                813.330.0697
              </div>
              <div id="email" style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>
                info@premier.law
              </div>
            </div>

            <div style={{
              padding: 32, background: T.cream, border: `1px solid ${T.rule}`, borderRadius: 18,
            }}>
              <window.PEPEyebrow>Office</window.PEPEyebrow>
              <div style={{ marginTop: 14, fontSize: 15, lineHeight: 1.7 }}>
                Premier Estate Planning, PLLC<br/>
                Tampa, Florida<br/>
                Serving Tampa Bay &amp; clients nationwide
              </div>
              <div style={{
                marginTop: 16, paddingTop: 16, borderTop: `1px solid ${T.rule}`,
                fontSize: 13, color: T.muted, lineHeight: 1.7,
              }}>
                <strong style={{ color: T.ink, fontWeight: 600, display: 'block', marginBottom: 4 }}>Hours</strong>
                Mon &ndash; Thu &nbsp;9:00 – 5:30<br/>
                Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00 – 1:00<br/>
                <span style={{ color: T.muted }}>After-hours by appointment</span>
              </div>
            </div>

            {/* tiny map placeholder */}
            <div style={{
              aspectRatio: '4/3',
              background: `
                linear-gradient(135deg, ${T.sand} 0%, ${T.cream} 100%),
                repeating-linear-gradient(0deg, transparent 0 39px, rgba(15,76,74,0.06) 39px 40px),
                repeating-linear-gradient(90deg, transparent 0 39px, rgba(15,76,74,0.06) 39px 40px)
              `,
              backgroundBlendMode: 'normal, multiply, multiply',
              border: `1px solid ${T.rule}`, borderRadius: 18,
              position: 'relative', overflow: 'hidden',
            }}>
              <svg viewBox="0 0 400 300" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <path d="M 0 160 L 160 140 L 220 180 L 320 130 L 400 170"
                  stroke={T.rule} strokeWidth="2" fill="none"/>
                <path d="M 60 0 L 80 100 L 140 220 L 180 300"
                  stroke={T.rule} strokeWidth="2" fill="none"/>
                <circle cx="220" cy="155" r="10" fill={T.teal}/>
                <circle cx="220" cy="155" r="22" fill="none" stroke={T.teal} strokeWidth="1.5" opacity="0.5"/>
              </svg>
              <div style={{
                position: 'absolute', bottom: 16, left: 18, fontSize: 11, letterSpacing: 1.5, color: T.muted,
                textTransform: 'uppercase', fontWeight: 600,
              }}>Tampa, Florida</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom band — what to expect */}
      <section style={{ padding: '0 40px 96px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 64 }}>
          <window.PEPEyebrow>What to Expect</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 56, margin: '18px 0 40px',
            fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
          }}>
            From this message to a <em style={{ color: T.teal }}>signed plan.</em>
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
          }}>
            {[
              ['Within one business day', 'You will hear back from our office with two or three proposed call times.'],
              ['Within one week',         'A free thirty-minute call. We listen first, then suggest a path forward.'],
              ['Within two weeks',        'If you decide to move forward, your drafts arrive with a plain-English summary.'],
              ['On signing',              'Witnessed and notarized in our Tampa office. You leave with your bound plan.'],
            ].map(([w, d], i) => (
              <div key={w} style={{
                padding: '28px 28px', background: T.sand,
                borderRight: i < 3 ? `1px solid ${T.rule}` : 'none',
              }}>
                <div style={{ fontSize: 11, letterSpacing: 2, color: T.sageDk, fontWeight: 600, textTransform: 'uppercase', marginBottom: 14 }}>{w}</div>
                <div style={{ fontSize: 15, lineHeight: 1.6, color: T.ink }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </window.PEPPage>
  );
}

window.ContactPage = ContactPage;

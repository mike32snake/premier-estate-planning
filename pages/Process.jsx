// Process page — expanded three-step engagement + what's included + FAQ

function ProcessPage() {
  const T = window.PEP;

  const steps = [
    {
      n: 'I',
      title: 'Consultation',
      timing: 'Day 0 · 30 minutes · complimentary',
      body: 'A discovery call by phone or video. We will ask about your family, your assets, your prior planning, and your concerns. No billable clock; no obligation. By the end of the call you will have a clear sense of whether we are the right counsel for your matter.',
      includes: ['Family & beneficiary review', 'Asset inventory walkthrough', 'Discussion of objectives', 'Flat-fee quote, in writing'],
    },
    {
      n: 'II',
      title: 'Drafting',
      timing: 'Day 1 – 7 · flat fee, paid on signing',
      body: 'Drafts arrive with a plain-language summary that precedes the legalese. You read the summary first; questions become a single round of revisions; we revise once more if needed. Drafting is done in-house, by Mr. Carrillo.',
      includes: ['Plain-language plan summary', 'Full document drafts', 'One round of revisions included', 'Coordination with your CPA / advisor'],
    },
    {
      n: 'III',
      title: 'Execution',
      timing: 'Day 14 · 90 minutes · in office',
      body: 'In-office signing with two witnesses and a notary public. You depart with a bound estate portfolio, a digital archive in your secure client vault, and a one-page instruction sheet for your personal representative.',
      includes: ['Witnessed & notarized signing', 'Bound portfolio (paper + digital)', 'Funding instructions for any trust', 'Beneficiary designation review'],
    },
  ];

  const faq = [
    ['What is included in the flat fee?',
     'Everything from the consultation through execution: drafting, revisions, the signing meeting, the bound portfolio, and one year of minor amendments. Court filings (if any), recording fees, and notary fees are paid at cost and disclosed in the engagement letter.'],
    ['How long until my plan is in place?',
     'Most engagements are signed within fourteen days of the consultation. Urgent matters — pending surgery, travel, a recent diagnosis — can be expedited; please mention timing on your initial call.'],
    ['Do you maintain ongoing relationships with clients?',
     'Yes. Plans drift as life changes — new children, new property, new state of residence. We send a one-page annual check-in to active clients and reserve a flat fee for periodic amendments.'],
    ['Can you coordinate with my CPA, financial advisor, or insurance agent?',
     'We strongly prefer to. Most matters benefit from a brief joint call with your existing advisors; we treat them as members of the planning team rather than rivals for the engagement.'],
  ];

  return (
    <window.PEPPage current="process">
      <window.PEPHero
        eyebrow="The Engagement"
        title="Three meetings."
        italic="Approximately two weeks."
        lede="Estate planning need not be drawn out. Our process is deliberately short, deliberately flat-fee, and deliberately drafted by the attorney whose name is on the door."
      />

      {/* timeline */}
      <section style={{ padding: '72px 40px 32px' }}>
        <div style={{
          borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`,
          borderRadius: 14, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: '48px 36px', background: T.sand,
              borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
              borderLeft: i === 0 ? `1px solid ${T.rule}` : 'none',
            }}>
              <div style={{
                fontFamily: T.display, fontSize: 14, color: T.tealBr,
                letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase',
              }}>Step {s.n}</div>
              <h2 style={{
                fontFamily: T.display, fontSize: 48, margin: '14px 0 8px',
                fontWeight: 400, letterSpacing: -1, lineHeight: 1,
              }}>{s.title}</h2>
              <div style={{ fontSize: 13, color: T.muted, fontStyle: 'italic', marginBottom: 24 }}>
                {s.timing}
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: T.ink, margin: 0 }}>{s.body}</p>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: `1px solid ${T.rule}` }}>
                <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: T.sageDk, fontWeight: 600, marginBottom: 14 }}>Includes</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.includes.map(it => (
                    <li key={it} style={{ fontSize: 14, color: T.ink, display: 'flex', gap: 12, alignItems: 'baseline' }}>
                      <span style={{ color: T.tealBr, fontFamily: T.display, fontSize: 18, lineHeight: 1 }}>—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to bring */}
      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
          <div>
            <window.PEPEyebrow>Preparing for the Call</window.PEPEyebrow>
            <h2 style={{
              fontFamily: T.display, fontSize: 60, margin: '18px 0 0',
              fontWeight: 400, letterSpacing: -1.5, lineHeight: 1, color: T.ink,
            }}>
              What to bring to your <em style={{ color: T.teal }}>consultation.</em>
            </h2>
          </div>
          <div style={{
            border: `1px solid ${T.rule}`, borderRadius: 14, padding: '8px 32px',
          }}>
            {[
              ['A rough family tree',           'Spouse, children (with ages), and any prior marriages.'],
              ['A list of major assets',        'Real property, retirement accounts, brokerage, business interests.'],
              ['Prior planning documents',      'Any existing wills, trusts, or POAs — even outdated ones.'],
              ['A few of your worries',         'There is no wrong answer; this is the most useful part.'],
            ].map(([t, d], i, arr) => (
              <div key={t} style={{
                display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 24,
                padding: '24px 0',
                borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
              }}>
                <div style={{ fontFamily: T.display, fontSize: 22, letterSpacing: -0.3 }}>{t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: T.muted }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 40px 96px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 56 }}>
          <window.PEPEyebrow>Frequently Asked</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 60, margin: '18px 0 48px',
            fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
          }}>
            On engagement &amp; <em style={{ color: T.teal }}>expectations.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {faq.map(([q, a]) => (
              <div key={q} style={{
                border: `1px solid ${T.rule}`, borderRadius: 14, padding: 28,
                background: T.sand,
              }}>
                <h3 style={{
                  fontFamily: T.display, fontSize: 26, margin: '0 0 12px',
                  fontWeight: 400, letterSpacing: -0.4, lineHeight: 1.2,
                }}>{q}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: T.muted, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.ProcessPage = ProcessPage;

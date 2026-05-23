// Resources page — articles + quiz + FAQ + guides

function ResourcesPage() {
  const T = window.PEP;

  const featured = {
    cat: 'FEATURE · SPRING 2026',
    title: 'The cornerstones of estate planning: an essential overview',
    summary: 'A plan is not simply a record of how your assets pass — it is part of a larger financial conversation, designed to carry your wishes, your values, and the people you love through whatever comes next. A close look at the six instruments most Florida families need.',
    read: '11 minute read',
    href: 'Estate Planning Essentials.html',
  };

  const articles = [
    ['Overview',     'About the practice',                              'A short overview of how PEP practices — what we draft, how we charge, and where we sit in your team of advisors.',                                                  '5 min · Spring 2026',   'About the Practice.html'],
    ['Process',      'How our engagement works',                        'Three meetings, two weeks, one flat fee — a look at each milestone and what happens in our office between them.',                                              '5 min · Spring 2026',   'How Our Engagement Works.html'],
    ['Process',      'Preparing for your initial consultation',         'The first call is deliberately conversational. A short note on what to have at hand — and what not to bring.',                                                     '4 min · Spring 2026',   'Preparing for Your Consultation.html'],
    ['Trust Admin',  'HEMS, in practice',                               'Health, Education, Maintenance, and Support — the discretionary distribution standard at the heart of most modern trusts, examined line by line.',              '9 min · Spring 2026',   'HEMS Explained.html'],
    ['Marriage',     'Individual vs. joint trusts: a strategic choice', 'For Florida couples in a separate-property state, individual trusts almost always serve better than a joint trust. The reasons — administrative, tax, and protective.', '6 min · Spring 2026', 'Individual vs Joint Trusts.html'],
    ['Funding',      'Funding your trust: why, what, when, how',        'An unfunded trust is a beautifully drafted set of pages that does almost nothing. A practical look at what funding means and how it actually happens.',          '7 min · Spring 2026',   'Funding Your Trust.html'],
    ['After a Loss', 'After the loss of a spouse: a planning checklist','The hardest days are not the right time for complicated decisions. This checklist organises the months that follow into three deliberate phases.',                 '7 min · Spring 2026',   'After the Loss of a Spouse.html'],
    ['Process',      'After plan design: what happens next',            'You have completed the design meeting. A roadmap of the next ten to fourteen days — drafting, review, signing, and funding.',                                    '4 min · Spring 2026',   'After Plan Design.html'],
  ];

  const cats = ['All','Overview','Process','Trust Admin','Marriage','Funding','After a Loss'];

  const faqId = 'faq';
  const quizId = 'quiz';
  const guidesId = 'guides';

  // Category filter for the archive grid.
  const [activeCat, setActiveCat] = React.useState('All');
  const shown = activeCat === 'All' ? articles : articles.filter(a => a[0] === activeCat);

  return (
    <window.PEPPage current="resources">
      <window.PEPHero
        eyebrow="Resources"
        title="Reading from"
        italic="the desk."
        lede="Plain-language essays on Florida estate practice — written for clients and their advisors, not for other lawyers."
      />

      {/* Featured article */}
      <section style={{ padding: '64px 40px 32px' }}>
        <a href={featured.href} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: `1px solid ${T.rule}`, borderRadius: 18, overflow: 'hidden',
          textDecoration: 'none', color: T.ink, background: T.sand,
        }}>
          <div style={{
            aspectRatio: '4/3',
            background: `linear-gradient(135deg, ${T.tealBr} 0%, ${T.sageDk} 60%, ${T.ink} 100%)`,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* etched serif initials */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: T.display, fontStyle: 'italic', fontSize: 280,
              color: 'rgba(255,255,255,0.18)', letterSpacing: -8,
            }}>F.X.</div>
            <div style={{
              position: 'absolute', bottom: 24, left: 28,
              fontSize: 11, letterSpacing: 2, color: 'rgba(255,255,255,0.7)', fontWeight: 600,
            }}>IMAGE · PLACEHOLDER</div>
          </div>
          <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: T.sageDk, fontWeight: 600, marginBottom: 24 }}>{featured.cat}</div>
              <h2 style={{
                fontFamily: T.display, fontSize: 48, fontWeight: 400, letterSpacing: -1.2,
                lineHeight: 1.05, margin: '0 0 20px', color: T.ink,
              }}>{featured.title}</h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: T.muted, margin: 0 }}>{featured.summary}</p>
            </div>
            <div style={{
              marginTop: 32, fontSize: 13, letterSpacing: 1.2, color: T.sageDk, fontWeight: 600,
              textTransform: 'uppercase',
            }}>
              {featured.read} &nbsp;→
            </div>
          </div>
        </a>
      </section>

      {/* Article archive */}
      <section style={{ padding: '64px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40, borderBottom: `1px solid ${T.rule}`, paddingBottom: 28 }}>
          <div>
            <window.PEPEyebrow>The Archive</window.PEPEyebrow>
            <h2 style={{
              fontFamily: T.display, fontSize: 60, margin: '18px 0 0',
              fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
            }}>
              Recent <em style={{ color: T.teal }}>essays.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {cats.map((c) => {
              const on = c === activeCat;
              return (
                <button key={c} onClick={() => setActiveCat(c)} style={{
                  padding: '8px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500,
                  background: on ? T.sageDk : T.cream, color: on ? T.cream : T.ink,
                  border: on ? `1px solid ${T.sageDk}` : `1px solid ${T.rule}`,
                  cursor: 'pointer', fontFamily: T.body, lineHeight: 1.4,
                  transition: 'background 0.15s ease, color 0.15s ease',
                }}>{c}</button>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {shown.map(([cat, t, summary, meta, href], i) => (
            <a key={t} href={href} style={{
              textDecoration: 'none', color: T.ink, padding: '32px 28px',
              borderRight: (i % 4) < 3 ? `1px solid ${T.rule}` : 'none',
              borderTop: `1px solid ${T.rule}`,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ fontSize: 11, letterSpacing: 1.5, color: T.tealBr, fontWeight: 600, textTransform: 'uppercase' }}>{cat}</div>
              <h3 style={{
                fontFamily: T.display, fontSize: 26, margin: 0, fontWeight: 400,
                letterSpacing: -0.4, lineHeight: 1.2,
              }}>{t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: T.muted, margin: 0 }}>{summary}</p>
              <div style={{ fontSize: 12, color: T.muted, letterSpacing: 0.4, marginTop: 'auto' }}>{meta}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Quiz + Guides side by side */}
      <section style={{ padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div id={quizId} style={{
            padding: 48, background: T.sageDk, color: T.cream, borderRadius: 18, overflow: 'hidden', position: 'relative',
          }}>
            <window.PEPEyebrow color="rgba(255,255,255,0.7)">Interactive</window.PEPEyebrow>
            <h3 style={{
              fontFamily: T.display, fontSize: 40, margin: '18px 0 16px',
              fontWeight: 400, letterSpacing: -0.8, lineHeight: 1.05,
            }}>
              The five-question planning quiz.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)', margin: '0 0 28px', maxWidth: 440 }}>
              In under two minutes, see which planning documents you most likely need — and which can wait. A personalized checklist arrives by email.
            </p>
            <a href="#" style={{
              display: 'inline-block', background: T.cream, color: T.ink, padding: '14px 24px',
              borderRadius: 10, fontSize: 14, fontWeight: 500, textDecoration: 'none',
            }}>Begin the quiz →</a>
          </div>

          <div id={guidesId} style={{
            padding: 48, background: T.sand, color: T.ink, borderRadius: 18,
            border: `1px solid ${T.rule}`,
          }}>
            <window.PEPEyebrow>Downloadable</window.PEPEyebrow>
            <h3 style={{
              fontFamily: T.display, fontSize: 40, margin: '18px 0 16px',
              fontWeight: 400, letterSpacing: -0.8, lineHeight: 1.05,
            }}>
              Three guides for the curious.
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['The Florida Estate Planning Primer',     'PDF · 24 pp'],
                ['A Probate Checklist for Personal Reps',  'PDF · 8 pp'],
                ['The Business Succession Worksheet',      'PDF · 12 pp'],
              ].map(([t, m]) => (
                <li key={t} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '14px 0', borderBottom: `1px solid ${T.rule}`,
                  fontSize: 15,
                }}>
                  <a href="#" style={{ color: T.ink, textDecoration: 'none', fontFamily: T.display, fontSize: 22, letterSpacing: -0.3 }}>{t}</a>
                  <span style={{ fontSize: 12, color: T.muted, letterSpacing: 0.4 }}>{m} &nbsp;↓</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id={faqId} style={{ padding: '32px 40px 96px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 56 }}>
          <window.PEPEyebrow>Common Questions</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 60, margin: '18px 0 48px',
            fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
          }}>
            What clients <em style={{ color: T.teal }}>often ask.</em>
          </h2>

          <div style={{
            border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
          }}>
            {[
              ['Do I really need a trust, or will a will suffice?',
               'A will alone passes through probate; a properly funded revocable trust avoids it for most assets. For Florida residents with real property, the answer is almost always: a trust, with a pour-over will as a safety net.'],
              ['How often should I update my plan?',
               'Major life events (marriage, divorce, a new child, a change of state, a death in the family) trigger a review. Absent those, every three to five years is sound.'],
              ['Can you handle out-of-state property?',
               'For decedents who held Florida real estate, yes — through ancillary administration. For Florida residents with property elsewhere, we coordinate with local counsel in the relevant jurisdiction.'],
              ['What about digital assets, photos, crypto?',
               'Increasingly part of every plan. We draft fiduciary access language and maintain a digital asset inventory as part of the bound portfolio.'],
            ].map(([q, a], i, arr) => (
              <details key={q} style={{
                padding: '24px 28px',
                borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
                background: T.cream,
              }}>
                <summary style={{
                  fontFamily: T.display, fontSize: 24, letterSpacing: -0.3,
                  cursor: 'pointer', listStyle: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {q}
                  <span style={{ color: T.tealBr, fontSize: 24 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: T.muted, margin: '14px 0 0' }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.ResourcesPage = ResourcesPage;

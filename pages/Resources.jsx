// Resources page — articles + quiz + FAQ + guides

function ResourcesPage() {
  const T = window.PEP;

  const featured = {
    cat: 'FEATURE · SPRING 2026',
    title: 'The cornerstones of estate planning: an essential overview',
    summary: 'Your plan is more than a list of who gets what. It is part of a bigger financial picture, built to carry out your wishes and look after the people you love. A close look at the six documents most Florida families need.',
    read: '11 minute read',
    href: 'Estate Planning Essentials.html',
  };

  const articles = [
    ['Overview',     'About the practice',                              'A short overview of how we work, what we draft, and how we charge.',                                                  '5 min · Spring 2026',   'About the Practice.html'],
    ['Process',      'How our engagement works',                        'Three meetings, two weeks, one flat fee. A look at each step and what happens in between.',                                              '5 min · Spring 2026',   'How Our Engagement Works.html'],
    ['Process',      'Preparing for your initial consultation',         'The first call is a relaxed conversation. Here is what to have handy before we talk.',                                                     '4 min · Spring 2026',   'Preparing for Your Consultation.html'],
    ['Trust Admin',  'HEMS, in practice',                               'Health, Education, Maintenance, and Support: the distribution standard at the heart of most modern trusts, explained line by line.',              '9 min · Spring 2026',   'HEMS Explained.html'],
    ['Marriage',     'Individual vs. joint trusts: a strategic choice', 'For Florida couples, separate trusts almost always work better than a joint trust. Here is why, for administration, taxes, and protection.', '6 min · Spring 2026', 'Individual vs Joint Trusts.html'],
    ['Funding',      'Funding your trust: why, what, when, how',        'An unfunded trust is a nicely drafted stack of paper that does almost nothing. Here is what funding means and how it actually works.',          '7 min · Spring 2026',   'Funding Your Trust.html'],
    ['After a Loss', 'After the loss of a spouse: a planning checklist','The hardest days are not the time for big decisions. This checklist breaks the months that follow into three simple phases.',                 '7 min · Spring 2026',   'After the Loss of a Spouse.html'],
    ['Process',      'After plan design: what happens next',            'You have finished the design meeting. Here is what the next ten to fourteen days look like: drafting, review, signing, and funding.',                                    '4 min · Spring 2026',   'After Plan Design.html'],
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
        lede="Plain-language essays on Florida estate planning, written for clients and their advisors."
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
            position: 'relative', overflow: 'hidden',
          }}>
            <img
              src="assets/cornerstones-feature.jpg"
              alt="The Cornerstones of Estate Planning: An Essential Overview"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center', display: 'block' }}
            />
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
              In under two minutes, find out which documents you probably need and which can wait. We'll email you a checklist.
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
                ['The Cornerstones of Estate Planning', 'PDF · 3 pp', 'guides/estate-planning-essentials.pdf'],
                ['HEMS, in Practice',                   'PDF · 4 pp', 'guides/hems-explained.pdf'],
                ['Funding Your Trust',                  'PDF · 2 pp', 'guides/funding-your-trust.pdf'],
              ].map(([t, m, href]) => (
                <li key={t} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '14px 0', borderBottom: `1px solid ${T.rule}`,
                  fontSize: 15,
                }}>
                  <a href={href} download style={{ color: T.ink, textDecoration: 'none', fontFamily: T.display, fontSize: 22, letterSpacing: -0.3 }}>{t}</a>
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
               'A will alone still goes through probate. A properly funded revocable trust skips it for most assets. For Florida residents who own real estate, a trust with a pour-over will as backup is almost always the better setup.'],
              ['How often should I update my plan?',
               'Big life changes like marriage, divorce, a new child, a move, or a death in the family are good reasons to review. Otherwise, every three to five years is plenty.'],
              ['Can you handle out-of-state property?',
               'Yes. For Florida real estate in an out-of-state estate, we handle ancillary administration. If you own property in another state, we coordinate with local counsel there.'],
              ['What about digital assets, photos, crypto?',
               'These are part of most plans now. We include access language for the people you name and keep a digital asset inventory with your plan.'],
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

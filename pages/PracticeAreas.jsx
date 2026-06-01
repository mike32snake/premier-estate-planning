// Practice Areas — overview + 4 deep sections + CTA

function PracticeAreasPage() {
  const T = window.PEP;
  const E = window.PEPEyebrow;

  const areas = [
    {
      id: 'wills',
      roman: 'I',
      eyebrow: 'Core Planning',
      title: 'Wills & Revocable Trusts',
      lede: 'The foundation of any plan. We put together the documents that direct your assets, name guardians for minor children, and keep your family out of probate.',
      includes: [
        ['Last Will & Testament',     'Naming personal representatives, guardians, and specific bequests.'],
        ['Revocable Living Trust',    'Probate avoidance, lifetime flexibility, and orderly succession.'],
        ['Pour-Over Will',            'A safety net that captures any asset not titled in trust.'],
        ['Homestead Strategy',        'Drafted to Florida\'s constitutional homestead protections.'],
      ],
      forWhom: 'Florida residents at any stage of life, especially families with children, blended households, and anyone who owns real estate.',
      typical: 'Flat fee. Three meetings. Signed within two weeks.',
    },
    {
      id: 'business',
      roman: 'II',
      eyebrow: 'Closely-Held',
      title: 'Business Succession',
      lede: 'For many Florida owners, the business is the biggest asset in the estate. We build transfer structures that keep its value in the family or set up a clean sale.',
      includes: [
        ['Buy-Sell Agreements',      'Triggered by death, disability, retirement, or dispute.'],
        ['LLC Operating Reforms',    'Restating documents to reflect succession intent.'],
        ['Dynasty &amp; GRAT Trusts',    'Passing wealth across generations with an eye on taxes.'],
        ['Key-Person Planning',      'Insurance, deferred compensation, and contingency counsel.'],
      ],
      forWhom: 'Founders, partners, and family-business owners preparing for succession, a sale, or handing the business to the next generation.',
      typical: 'Flat fees based on scope, set in your engagement letter. We are glad to work with your CPA.',
    },
    {
      id: 'care',
      roman: 'III',
      eyebrow: 'Care & Incapacity',
      title: 'Powers of Attorney & Care Planning',
      lede: 'We get these documents in place before you need them. They name the people who will speak for you and make decisions in the moments you cannot.',
      includes: [
        ['Durable Power of Attorney','Financial decision authority during incapacity.'],
        ['Healthcare Surrogate',     'A clear voice for medical decisions when you cannot speak.'],
        ['Living Will',              'End-of-life directives, in writing and witnessed.'],
        ['Guardianship Designation', 'Naming a guardian for minor children, with standby provisions.'],
      ],
      forWhom: 'Adults of any age, parents of minor children, and adult children helping aging parents.',
      typical: 'Flat-fee document packages. Rush drafting available when it is urgent.',
    },
  ];

  return (
    <window.PEPPage current="practice">
      <window.PEPHero
        eyebrow="Practice Areas"
        title="Three areas."
        italic="One focused firm."
        lede="A focused Florida practice with every plan drafted by the attorney whose name is on your engagement letter."
      />

      {/* Anchor index */}
      <section style={{ padding: '40px 40px 0' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
        }}>
          {areas.map((a, i) => (
            <a key={a.id} href={`#${a.id}`} style={{
              padding: '24px 28px', textDecoration: 'none', color: T.ink,
              borderRight: i < areas.length - 1 ? `1px solid ${T.rule}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 6,
              background: T.cream,
            }}>
              <span style={{ fontFamily: T.display, fontSize: 14, color: T.tealBr, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase' }}>
                {a.roman} &middot; {a.eyebrow}
              </span>
              <span style={{ fontFamily: T.display, fontSize: 26, letterSpacing: -0.4, fontWeight: 400 }}>{a.title}</span>
              <span style={{ fontSize: 12, color: T.muted, letterSpacing: 0.4, marginTop: 4 }}>Read section ↓</span>
            </a>
          ))}
        </div>
      </section>

      {/* Each area */}
      {areas.map((a, idx) => (
        <section key={a.id} id={a.id} style={{ padding: '96px 40px 0' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.5fr',
            gap: 64, paddingBottom: 64,
            borderBottom: idx < areas.length - 1 ? `1px solid ${T.rule}` : 'none',
          }}>
            {/* left: title + tag */}
            <div>
              <div style={{
                fontFamily: T.display, fontSize: 14, color: T.tealBr,
                letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase', marginBottom: 14,
              }}>{a.roman} &middot; {a.eyebrow}</div>
              <h2 style={{
                fontFamily: T.display, fontSize: 60, margin: '0 0 24px', fontWeight: 400,
                letterSpacing: -1.5, lineHeight: 1, color: T.ink,
              }}>{a.title}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: T.muted, margin: 0 }}>
                {a.lede}
              </p>
            </div>

            {/* right: includes + meta */}
            <div>
              <window.PEPEyebrow>Engagement Includes</window.PEPEyebrow>
              <div style={{
                marginTop: 20, border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
              }}>
                {a.includes.map(([t, d], i) => (
                  <div key={t} style={{
                    display: 'grid', gridTemplateColumns: '1fr 1.4fr',
                    gap: 24, padding: '22px 26px',
                    borderBottom: i < a.includes.length - 1 ? `1px solid ${T.rule}` : 'none',
                  }}>
                    <div
                      style={{ fontFamily: T.display, fontSize: 22, letterSpacing: -0.3, color: T.ink }}
                      dangerouslySetInnerHTML={{__html: t}}
                    />
                    <div style={{ fontSize: 14, lineHeight: 1.6, color: T.muted }}>{d}</div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 28,
              }}>
                <div>
                  <window.PEPEyebrow>For Whom</window.PEPEyebrow>
                  <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{a.forWhom}</div>
                </div>
                <div>
                  <window.PEPEyebrow>Typical Engagement</window.PEPEyebrow>
                  <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{a.typical}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div style={{ height: 64 }}/>
      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.PracticeAreasPage = PracticeAreasPage;

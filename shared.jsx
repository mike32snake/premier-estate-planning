// Shared tokens + chrome for the PEP site.
// Designed to be loaded BEFORE any page component.

window.PEP = {
  // palette
  sand:   '#f4f6f5',
  cream:  '#ffffff',
  sage:   '#4aa9a4',
  sageDk: '#0f4c4a',
  ink:    '#0a0a0a',
  teal:   '#0f4c4a',
  tealBr: '#4aa9a4',
  muted:  'rgba(10,10,10,0.62)',
  rule:   'rgba(10,10,10,0.14)',

  // type
  display: '"Instrument Serif", "Cormorant Garamond", Georgia, serif',
  body:    '"Inter", -apple-system, sans-serif',
};

// Practice areas — the single source of truth for the nav dropdown, the
// Practice Areas overview grid, and each dedicated area page (PEPAreaPage).
window.PEP_AREAS = [
  {
    slug: 'wills', page: 'Wills.html', navLabel: 'Wills',
    cat: 'Core Planning', title: 'Wills',
    short: 'Directs who receives your assets and names guardians for your children.',
    lede: "A will directs who receives your assets, names guardians for your children, and tells the court who's in charge. It's the floor every Florida estate plan is built on.",
    body: [
      "A last will and testament does three jobs. It names the personal representative who settles your estate, it lists who inherits what, and it appoints guardians for your minor children. Without one, Florida's intestacy statute decides all of that for you, and the result is rarely what people would have chosen.",
      "A will on its own still passes through probate, the court process that proves the will and transfers your property. Probate in Florida is public, takes months, and carries filing and attorney costs. That's why many of our clients pair a will with a revocable trust, which keeps assets out of probate. For a simpler estate, a well-drafted will may be all you need.",
      "We draft the will, the self-proving affidavit that lets it be admitted without tracking down witnesses years later, and the supporting forms. Then we handle the signing in our office, witnessed and notarized so it holds up.",
    ],
    includes: [
      ['Last Will & Testament', 'Names your personal representative, beneficiaries, and specific gifts.'],
      ['Guardian Designation',  'Appoints who raises your minor children, with standby choices.'],
      ['Self-Proving Affidavit','Lets the will be admitted to probate without locating witnesses.'],
      ['Pour-Over Will',        'Catches any asset not already titled in your trust.'],
    ],
    forWhom: 'Every adult in Florida. Essential the moment you have children or own property.',
    typical: 'Flat fee, included in most planning packages. Signed within two weeks.',
  },
  {
    slug: 'trusts', page: 'Revocable Trusts.html', navLabel: 'Trusts',
    cat: 'Core Planning', title: 'Trusts',
    short: "Keeps your estate out of probate and steps in if you ever can't manage things yourself.",
    lede: "A revocable living trust keeps your estate out of probate, manages your assets if you're ever unable to, and passes everything privately to the people you choose.",
    body: [
      "A revocable living trust is a legal arrangement you create and control during your lifetime. You move your assets into it, you serve as your own trustee, and you can change or revoke it anytime. Nothing about your day to day changes. You still buy, sell, and spend exactly as before.",
      "The value shows up at two moments. If you become incapacitated, the successor trustee you named steps in to manage things without a court guardianship. When you pass, the trust distributes your assets directly to your beneficiaries without probate, which keeps the process private and usually faster and cheaper than a will alone.",
      "Wills and revocable trusts are separate products, and they solve different problems. We'll tell you plainly which one fits your situation, and for many families the answer is both: the trust does the heavy lifting and a pour-over will acts as a backstop.",
      "We draft the trust, prepare the pour-over will, and help you retitle your home, accounts, and other assets into the trust so it actually works when it's needed. A trust that isn't funded is just paper.",
    ],
    includes: [
      ['Revocable Living Trust', 'Holds and distributes your assets, fully under your control.'],
      ['Pour-Over Will',         'A safety net for anything left outside the trust.'],
      ['Asset Funding',          'Retitling your home and accounts into the trust.'],
      ['Successor Trustee Plan', "Names who takes over if you can't serve."],
    ],
    forWhom: 'Homeowners, blended families, and anyone who wants to avoid probate and keep matters private.',
    typical: 'Flat fee, set in your engagement letter.',
  },
  {
    slug: 'poa', page: 'Powers of Attorney.html', navLabel: 'Powers of Attorney',
    cat: 'Care & Incapacity', title: 'Powers of Attorney',
    short: "Names someone you trust to handle your finances if you can't.",
    lede: "A durable power of attorney names someone you trust to handle your finances if you can't. Done right, it keeps your family out of a courtroom.",
    body: [
      "A durable power of attorney lets a person you name, your agent, pay your bills, manage your accounts, deal with insurance, and handle legal and financial matters if you become unable to. The durable part means it stays in effect even after you lose capacity, which is exactly when it matters.",
      "Florida law is strict about these documents. Banks and title companies require specific statutory language, and a generic form off the internet often gets rejected at the worst possible moment. When that happens, the family's only option is a court-supervised guardianship, which is slow, public, and expensive.",
      "We draft your power of attorney to current Florida statutes, scope the powers to what you actually want your agent to be able to do, and explain the choices so you can pick the right person with confidence.",
    ],
    includes: [
      ['Durable Power of Attorney', 'Financial and legal authority that survives incapacity.'],
      ['Scope of Powers',          'Tailored to what you want your agent to handle.'],
      ['Successor Agents',         "Backups in case your first choice can't serve."],
      ['Statutory Compliance',     'Drafted to the language Florida banks require.'],
    ],
    forWhom: 'Every adult, and especially anyone helping aging parents plan ahead.',
    typical: 'Flat-fee document, often bundled with the core plan.',
  },
  {
    slug: 'healthcare', page: 'Healthcare Directives.html', navLabel: 'Healthcare Directives',
    cat: 'Care & Incapacity', title: 'Healthcare Directives',
    short: 'Your healthcare surrogate and living will, so your wishes are clear and followed.',
    lede: "Healthcare directives say who speaks for you and what you want when you can't make medical decisions yourself. They spare your family from guessing.",
    body: [
      "Healthcare directives are two documents that work together. A healthcare surrogate designation names the person who makes medical decisions for you when you can't make them yourself. A living will states your own wishes about life-prolonging treatment if you're ever terminally ill, end-stage, or in a persistent vegetative state.",
      "The living will is itself a healthcare directive, so we keep the two together as one package rather than treating them as separate products. Side by side, they answer both questions a hospital will ask: who decides, and what did this person want.",
      "Without these in place, your family may have to petition a court to make decisions, often during the hardest week of their lives. We prepare both documents, add a HIPAA release so your surrogate can actually access your records, and walk you through the choices in plain terms.",
    ],
    includes: [
      ['Healthcare Surrogate', 'Names who makes medical decisions for you.'],
      ['Living Will',          'Your wishes on end-of-life care, in writing and witnessed.'],
      ['HIPAA Authorization',  'Lets your surrogate access your medical records.'],
    ],
    forWhom: "Every adult. The hospital will ask for these the moment they're needed.",
    typical: 'Flat-fee document package.',
  },
  {
    slug: 'guardianship', page: 'Guardian Designations.html', navLabel: 'Guardian Designations',
    cat: 'Care & Incapacity', title: 'Guardian Designations',
    short: 'Names who raises your children if something happens to you.',
    lede: "A guardian designation tells the court who you want to raise your children if you can't. For young families, it's often the most important page in the plan.",
    body: [
      "If both parents are gone or unable to serve, a Florida court decides who raises your minor children. A guardian designation tells the judge who you'd choose, with standby names in case your first pick can't serve. Judges give real weight to a parent's written wishes, so this short document carries a lot of influence.",
      "The same idea protects adults. A pre-need guardian designation names who you'd want to manage your care and affairs if a court ever had to appoint a guardian for you, which can head off a contested fight among relatives.",
      "We prepare both the designation for your minor children and, if you want it, a pre-need designation for yourself. We also make sure it fits with the guardian named in your will so nothing contradicts.",
    ],
    includes: [
      ['Guardian for Minors', 'Names who raises your children, with standby choices.'],
      ['Pre-Need Guardian',   "Names who'd care for you if a court got involved."],
      ['Coordination',        'Aligned with the guardian named in your will.'],
    ],
    forWhom: 'Parents of minor children, and anyone planning for their own future care.',
    typical: 'Flat-fee document, included with family planning packages.',
  },
  {
    slug: 'business', page: 'Business Succession.html', navLabel: 'Business Succession',
    cat: 'Closely-Held', title: 'Business Succession',
    short: 'Keeps a family business in the family, or sets up a clean sale.',
    lede: "For many owners the business is the biggest asset in the estate. We build the structures that keep it in the family or set up a clean sale.",
    body: [
      "When a business owner dies or steps away without a plan, the company can stall fast. Partners and heirs end up negotiating under pressure, sometimes in court, and value walks out the door. A succession plan settles the hard questions in advance, while everyone's still at the table.",
      "We draft buy-sell agreements that say what happens to an owner's share on death, disability, retirement, or a dispute, and how it gets valued and paid for. We update LLC operating agreements and corporate documents so they actually match your intent, and we coordinate with your CPA so the transfer works for both the family and the tax picture.",
      "The goal is a business that survives the transition intact, whether that means handing it to the next generation or selling it on your terms.",
    ],
    includes: [
      ['Buy-Sell Agreement',         'Triggered by death, disability, retirement, or dispute.'],
      ['Operating Agreement Updates','Aligning company documents with your plan.'],
      ['Succession Structure',       'Family transfer or a clean third-party sale.'],
      ['Advisor Coordination',       'We work alongside your CPA and insurance advisor.'],
    ],
    forWhom: 'Founders, partners, and family-business owners planning for the next chapter.',
    typical: 'Flat fees based on scope, set in your engagement letter.',
  },
];

// Small caps tracked label with a leading hairline rule.
window.PEPEyebrow = function PEPEyebrow({ children, color, style }) {
  const T = window.PEP;
  return (
    <div style={{
      fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase',
      color: color || T.sageDk, fontWeight: 600,
      display: 'inline-flex', alignItems: 'center', gap: 10,
      ...style,
    }}>
      <span style={{ width: 18, height: 1, background: 'currentColor', opacity: 0.5 }}/>
      {children}
    </div>
  );
};

// Top navigation — flat, ruled, links to other pages.
// `current` is the slug of the active page (or null for home).
window.PEPNav = function PEPNav({ current }) {
  const T = window.PEP;
  const areas = window.PEP_AREAS || [];
  const items = [
    { label: 'Practice Areas', href: 'Practice Areas.html', slug: 'practice',
      children: areas.map((a) => ({ label: a.navLabel || a.title, href: a.page, cat: a.cat })) },
    { label: 'Process',   href: 'Process.html',   slug: 'process' },
    { label: 'About Us',  href: 'Attorneys.html',  slug: 'attorneys' },
    { label: 'Resources', href: 'Resources.html', slug: 'resources' },
    { label: 'Contact',   href: 'Contact.html',   slug: 'contact' },
  ];
  const [openMenu, setOpenMenu] = React.useState(null);
  return (
    <div style={{
      padding: '22px 40px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', borderBottom: `1px solid ${T.rule}`,
      background: T.cream,
    }}>
      <a href="index.html" style={{ display: 'inline-block' }}>
        <img src="assets/pep-logo.png" style={{ height: 40, mixBlendMode: 'multiply', display: 'block' }} alt="PEP" />
      </a>
      <nav style={{
        display: 'flex', gap: 36, fontSize: 14, fontWeight: 500, color: T.ink,
      }}>
        {items.map(it => {
          const active = current === it.slug;
          if (it.children && it.children.length) {
            const isOpen = openMenu === it.slug;
            return (
              <div key={it.slug} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
                onMouseEnter={() => setOpenMenu(it.slug)}
                onMouseLeave={() => setOpenMenu(null)}>
                <a href={it.href} style={{
                  color: active || isOpen ? T.sageDk : T.ink,
                  borderBottom: active ? `1.5px solid ${T.sageDk}` : 'none',
                  paddingBottom: 2, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  {it.label}
                  <span style={{
                    fontSize: 9, lineHeight: 1, transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.15s ease', color: T.tealBr,
                  }}>▼</span>
                </a>
                {isOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 16, zIndex: 60 }}>
                    <div style={{
                      background: T.cream, border: `1px solid ${T.rule}`, borderRadius: 14,
                      boxShadow: '0 18px 50px rgba(10,10,10,0.14)', padding: 8, minWidth: 268,
                    }}>
                      {it.children.map((c, ci) => (
                        <a key={c.href} href={c.href} style={{
                          display: 'block', padding: '12px 14px', borderRadius: 9,
                          textDecoration: 'none', color: T.ink,
                          borderBottom: ci < it.children.length - 1 ? `1px solid ${T.rule}` : 'none',
                        }}
                          onMouseEnter={(e) => { e.currentTarget.style.background = T.sand; }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                          <span style={{ display: 'block', fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: T.tealBr, fontWeight: 600, marginBottom: 3 }}>{c.cat}</span>
                          <span style={{ fontFamily: T.display, fontSize: 19, letterSpacing: -0.2, color: T.ink }}>{c.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return (
            <a key={it.slug} href={it.href} style={{
              color: active ? T.sageDk : T.ink,
              borderBottom: active ? `1.5px solid ${T.sageDk}` : 'none',
              paddingBottom: 2, textDecoration: 'none',
            }}>{it.label}</a>
          );
        })}
      </nav>
      <a href="Contact.html" style={{
        background: T.ink, color: T.cream, border: 'none', padding: '12px 22px',
        borderRadius: 10, fontSize: 13, fontWeight: 500, fontFamily: T.body,
        letterSpacing: 0.3, textDecoration: 'none', display: 'inline-block',
      }}>
        Schedule a Consultation
      </a>
    </div>
  );
};

// Page footer.
window.PEPFooter = function PEPFooter() {
  const T = window.PEP;
  const cols = [
    ['Practice', [
      ['Wills',                  'Wills.html'],
      ['Trusts',                 'Revocable Trusts.html'],
      ['Powers of Attorney',     'Powers of Attorney.html'],
      ['Healthcare Directives',  'Healthcare Directives.html'],
      ['Business Succession',    'Business Succession.html'],
    ]],
    ['Firm', [
      ['About Us',  'Attorneys.html'],
      ['Process',   'Process.html'],
      ['Reviews',   'Attorneys.html#reviews'],
    ]],
    ['Resources', [
      ['Articles', 'Resources.html'],
      ['Quiz',     'Quiz.html'],
      ['FAQ',      'Resources.html#faq'],
      ['Guides',   'Resources.html#guides'],
    ]],
    ['Contact', [
      ['Schedule',        'Contact.html'],
      ['Email',           'Contact.html#email'],
      ['Privacy Policy',  'Privacy Policy.html'],
      ['Legal Disclaimer','Privacy Policy.html#disclaimer'],
    ]],
  ];
  return (
    <footer style={{
      padding: '48px 40px 32px', fontSize: 13, color: T.muted,
      borderTop: `1px solid ${T.rule}`, background: T.cream,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 32, paddingBottom: 36 }}>
        <div>
          <img src="assets/pep-logo.png" style={{ height: 40, mixBlendMode: 'multiply' }} alt="PEP" />
          <div style={{ marginTop: 14, lineHeight: 1.7 }}>
            Tampa, Florida<br/>Serving Tampa Bay &amp; clients nationwide
          </div>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div
              style={{ color: T.ink, fontWeight: 600, marginBottom: 14, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase' }}
              dangerouslySetInnerHTML={{__html: h}}
            />
            {items.map(([label, href]) => (
              <div key={label} style={{ marginBottom: 8 }}>
                <a href={href} style={{ color: T.muted, textDecoration: 'none' }} dangerouslySetInnerHTML={{__html: label}}/>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{
        borderTop: `1px solid ${T.rule}`, paddingTop: 20,
        display: 'flex', justifyContent: 'space-between', fontSize: 12, letterSpacing: 0.4,
      }}>
        <span>© 2026 Premier Estate Planning, PLLC &middot; All rights reserved</span>
        <span>Florida Bar &middot; Attorney Advertising</span>
      </div>

      <div style={{ marginTop: 24, fontSize: 11, lineHeight: 1.7, color: T.muted, maxWidth: 1100 }}>
        <div style={{ fontSize: 11, letterSpacing: 1.5, fontWeight: 600, color: T.ink, textTransform: 'uppercase', marginBottom: 8 }}>Legal Disclaimer</div>
        <p style={{ margin: '0 0 10px' }}>The hiring of a lawyer is an important decision and should not be based solely on advertisements. Before you decide, you may request free written information about our attorneys&rsquo; qualifications and experience.</p>
        <p style={{ margin: '0 0 10px' }}>This website is provided for informational purposes only and does not constitute legal advice. The information here is not a substitute for consulting with an attorney and does not create an attorney-client relationship. You should always seek professional legal counsel for advice regarding your specific situation.</p>
        <p style={{ margin: '0 0 10px' }}>Because laws change frequently and some content relies on external sources, we do not warrant or guarantee the accuracy, completeness, or availability of the information provided on this site or any linked third-party websites. Links to other sites are offered solely as a convenience and do not imply endorsement.</p>
        <p style={{ margin: 0 }}>You should never delay seeking legal advice, disregard professional guidance, or start or stop any legal action based solely on information from this website. Always consult a qualified attorney for advice tailored to your circumstances.</p>
      </div>
    </footer>
  );
};

// Page shell — set the body width + base font/bg + render nav, content, footer.
window.PEPPage = function PEPPage({ current, children }) {
  const T = window.PEP;
  return (
    <div style={{
      width: 1440, margin: '0 auto',
      background: T.cream, color: T.ink, fontFamily: T.body,
    }}>
      <window.PEPNav current={current}/>
      {children}
      <window.PEPFooter/>
    </div>
  );
};

// Reusable closing CTA — used on every interior page.
window.PEPCTA = function PEPCTA() {
  const T = window.PEP;
  return (
    <section style={{ padding: '48px 40px 96px' }}>
      <div style={{
        background: T.ink, color: T.cream, borderRadius: 18, padding: '88px 56px',
        position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'center',
      }}>
        <div>
          <window.PEPEyebrow color="rgba(255,255,255,0.65)">Schedule a Consultation</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 72, margin: '24px 0 24px', fontWeight: 400,
            letterSpacing: -2, lineHeight: 1,
          }}>
            It starts with a <em style={{ color: T.tealBr, fontStyle: 'italic' }}>thirty-minute call.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: 520, margin: 0 }}>
            It's free and confidential. We'll talk through your situation, walk you through your options, and give you a flat fee in writing.
          </p>
          <a href="Contact.html" style={{
            display: 'inline-block', background: T.cream, color: T.ink, padding: '16px 28px',
            borderRadius: 10, fontSize: 14, fontWeight: 500, marginTop: 36,
            letterSpacing: 0.3, textDecoration: 'none',
          }}>
            Schedule a Consultation
          </a>
        </div>
        <div style={{
          borderLeft: '1px solid rgba(255,255,255,0.18)', paddingLeft: 40,
          fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.78)',
        }}>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: T.tealBr, fontWeight: 600, marginBottom: 14 }}>Office</div>
          Tampa, Florida<br/>
          Serving Tampa Bay &amp; clients nationwide<br/>
          813.330.0136<br/>
          info@pep.law
        </div>
      </div>
    </section>
  );
};

// Standard page hero — eyebrow + headline + lede + optional aside content.
window.PEPHero = function PEPHero({ eyebrow, title, italic, lede, aside }) {
  const T = window.PEP;
  return (
    <section style={{ padding: '80px 40px 64px', borderBottom: `1px solid ${T.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'end' }}>
        <div>
          <window.PEPEyebrow>{eyebrow}</window.PEPEyebrow>
          <h1 style={{
            fontFamily: T.display, fontWeight: 400, fontSize: 96, lineHeight: 1.05,
            letterSpacing: -2.5, margin: '24px 0 44px', paddingBottom: '0.2em', color: T.ink,
          }}>
            {title} {italic && <em style={{ color: T.teal, fontStyle: 'italic' }}>{italic}</em>}
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: T.muted, maxWidth: 620, margin: 0 }}>
            {lede}
          </p>
        </div>
        {aside}
      </div>
    </section>
  );
};

// Dedicated practice-area page. Driven entirely by a PEP_AREAS entry, so each
// page file is a one-line wrapper: <window.PEPAreaPage slug="wills"/>.
window.PEPAreaPage = function PEPAreaPage({ slug }) {
  const T = window.PEP;
  const areas = window.PEP_AREAS || [];
  const a = areas.find((x) => x.slug === slug);
  if (!a) return null;
  // three sibling areas for the "Related" strip, cycling so each page differs
  const start = areas.indexOf(a);
  const related = [1, 2, 3].map((n) => areas[(start + n) % areas.length]);

  return (
    <window.PEPPage current="practice">
      <window.PEPHero eyebrow={a.cat} title={a.title} lede={a.lede} />

      {/* Overview + sidebar */}
      <section style={{ padding: '64px 40px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'start' }}>
          <div>
            <window.PEPEyebrow>Overview</window.PEPEyebrow>
            <div style={{ marginTop: 22 }}>
              {a.body.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.75, color: T.ink, margin: i === 0 ? '0 0 20px' : '0 0 20px' }}>{p}</p>
              ))}
            </div>
          </div>

          <div style={{
            background: T.sand, border: `1px solid ${T.rule}`, borderRadius: 16,
            padding: '28px 30px', position: 'sticky', top: 32, alignSelf: 'start',
          }}>
            <span style={{
              fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600,
              color: T.teal, border: `1px solid ${T.tealBr}`, borderRadius: 999,
              padding: '6px 12px', display: 'inline-block',
            }}>✓ We draft this</span>
            <div style={{ marginTop: 24 }}>
              <window.PEPEyebrow>For Whom</window.PEPEyebrow>
              <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{a.forWhom}</div>
            </div>
            <div style={{ marginTop: 22 }}>
              <window.PEPEyebrow>Typical Engagement</window.PEPEyebrow>
              <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{a.typical}</div>
            </div>
            <a href="Contact.html" style={{
              display: 'block', textAlign: 'center', marginTop: 26,
              background: T.ink, color: T.cream, padding: '14px 20px', borderRadius: 10,
              fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: 0.3,
            }}>Schedule a Consultation</a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section style={{ padding: '40px 40px 24px' }}>
        <window.PEPEyebrow>Engagement Includes</window.PEPEyebrow>
        <div style={{ marginTop: 20, border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden' }}>
          {a.includes.map(([t, d], i) => (
            <div key={t} style={{
              display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 24, padding: '22px 26px',
              borderBottom: i < a.includes.length - 1 ? `1px solid ${T.rule}` : 'none',
            }}>
              <div style={{ fontFamily: T.display, fontSize: 22, letterSpacing: -0.3, color: T.ink }}>{t}</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: T.muted }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related areas */}
      <section style={{ padding: '40px 40px 8px' }}>
        <window.PEPEyebrow>Related Areas</window.PEPEyebrow>
        <div style={{
          marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
          border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
        }}>
          {related.map((r, i) => (
            <a key={r.slug} href={r.page} style={{
              padding: '26px 28px', textDecoration: 'none', color: T.ink, background: T.cream,
              borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <span style={{ fontSize: 11, letterSpacing: 1.5, color: T.tealBr, fontWeight: 600, textTransform: 'uppercase' }}>{r.cat}</span>
              <span style={{ fontFamily: T.display, fontSize: 26, letterSpacing: -0.4 }}>{r.title}</span>
              <span style={{ fontSize: 13, color: T.muted, lineHeight: 1.5, marginTop: 2 }}>{r.short}</span>
              <span style={{ fontSize: 12, color: T.teal, letterSpacing: 0.4, marginTop: 6 }}>Read more →</span>
            </a>
          ))}
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
};

// =========================================================================
// Article shell — long-form content pages in Resources.
// =========================================================================

window.PEPArticleHero = function PEPArticleHero({ category, title, italic, lede, meta }) {
  const T = window.PEP;
  return (
    <section style={{ padding: '48px 40px 56px', borderBottom: `1px solid ${T.rule}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <a href="Resources.html" style={{
          fontSize: 12, color: T.muted, textDecoration: 'none', letterSpacing: 0.4,
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
        }}>← Back to Resources</a>
        <div style={{ fontSize: 11, letterSpacing: 2, color: T.sageDk, fontWeight: 600, textTransform: 'uppercase', marginBottom: 24 }}>
          {category}
        </div>
        <h1 style={{
          fontFamily: T.display, fontWeight: 400, fontSize: 84, lineHeight: 1.02,
          letterSpacing: -2.4, margin: '0 0 32px', paddingBottom: '0.2em', color: T.ink,
        }}>
          {title}{italic ? <> <em style={{ color: T.teal, fontStyle: 'italic' }}>{italic}</em></> : null}
        </h1>
        <p style={{ fontFamily: T.display, fontStyle: 'italic', fontSize: 24, lineHeight: 1.5, color: T.muted, margin: '0 0 40px', maxWidth: 820 }}>
          {lede}
        </p>
        <div style={{
          paddingTop: 24, borderTop: `1px solid ${T.rule}`,
          display: 'flex', gap: 40, fontSize: 13, color: T.muted, letterSpacing: 0.4, flexWrap: 'wrap',
        }}>
          <div><span style={{ color: T.tealBr, fontWeight: 600, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1.5, marginRight: 8 }}>By</span>Derek Carrillo, Esq.</div>
          {meta && meta.map((m, i) => (
            <div key={i}><span style={{ color: T.tealBr, fontWeight: 600, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1.5, marginRight: 8 }}>{m[0]}</span>{m[1]}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Auto-generated table of contents. Scans the rendered <article> for its H2
// section headings, gives each a stable id, and renders an anchored list.
// Used as the (sticky) first block in every article sidebar.
window.PEPArticleTOC = function PEPArticleTOC({ title = 'In This Article' }) {
  const T = window.PEP;
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const article = document.querySelector('article');
    if (!article) return;
    const used = {};
    const slugify = (s) => {
      let base = (s || 'section').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'section';
      let id = base, n = 2;
      while (used[id]) { id = base + '-' + n; n++; }
      used[id] = 1;
      return id;
    };
    const list = Array.prototype.slice.call(article.querySelectorAll('h2')).map((h) => {
      const id = h.id || slugify(h.textContent);
      h.id = id;
      h.style.scrollMarginTop = '28px';
      return { id, text: h.textContent.trim() };
    });
    setItems(list);
  }, []);
  if (!items.length) return null;
  return (
    <window.PEPSidebarBlock title={title}>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14 }}>
        {items.map((it) => (
          <li key={it.id}>
            <a href={'#' + it.id} style={{ color: T.ink, textDecoration: 'none', lineHeight: 1.35, display: 'block' }}>{it.text}</a>
          </li>
        ))}
      </ul>
    </window.PEPSidebarBlock>
  );
};

window.PEPArticleBody = function PEPArticleBody({ children, sidebar }) {
  const T = window.PEP;
  return (
    <section style={{ padding: '64px 40px 48px' }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 320px', gap: 80, alignItems: 'start',
      }}>
        <article style={{ fontSize: 17, lineHeight: 1.75, color: T.ink, maxWidth: 720 }}>
          {children}
        </article>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 32, alignSelf: 'start' }}>
          <window.PEPArticleTOC/>
          {sidebar}
        </aside>
      </div>
    </section>
  );
};

window.PEPProse = {
  H2: ({ children }) => {
    const T = window.PEP;
    return <h2 style={{
      fontFamily: T.display, fontWeight: 400, fontSize: 40, letterSpacing: -1, lineHeight: 1.1,
      margin: '56px 0 18px', color: T.ink,
    }}>{children}</h2>;
  },
  H3: ({ children }) => {
    const T = window.PEP;
    return <h3 style={{
      fontFamily: T.display, fontWeight: 400, fontSize: 26, letterSpacing: -0.4, lineHeight: 1.25,
      margin: '36px 0 12px', color: T.ink,
    }}>{children}</h3>;
  },
  P: ({ children, lead }) => (
    <p style={{ margin: '0 0 20px', fontSize: lead ? 19 : 17, lineHeight: lead ? 1.6 : 1.75 }}>{children}</p>
  ),
  Pull: ({ children }) => {
    const T = window.PEP;
    return <blockquote style={{
      fontFamily: T.display, fontStyle: 'italic', fontSize: 28, lineHeight: 1.35,
      color: T.teal, margin: '40px 0', padding: '4px 0 4px 28px',
      borderLeft: `3px solid ${T.tealBr}`,
    }}>{children}</blockquote>;
  },
  Callout: ({ title, children, tone = 'sand' }) => {
    const T = window.PEP;
    const dark = tone === 'dark';
    return <div style={{
      background: dark ? T.sageDk : T.sand,
      color: dark ? T.cream : T.ink,
      border: dark ? 'none' : `1px solid ${T.rule}`,
      borderRadius: 14, padding: '24px 28px', margin: '32px 0',
    }}>
      {title && <div style={{
        fontSize: 11, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,0.7)' : T.sageDk, marginBottom: 10,
      }}>{title}</div>}
      <div style={{ fontSize: 16, lineHeight: 1.7 }}>{children}</div>
    </div>;
  },
  UL: ({ children }) => <ul style={{ margin: '0 0 20px', padding: '0 0 0 22px', fontSize: 17, lineHeight: 1.75 }}>{children}</ul>,
  OL: ({ children }) => <ol style={{ margin: '0 0 20px', padding: '0 0 0 22px', fontSize: 17, lineHeight: 1.75 }}>{children}</ol>,
  LI: ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li>,
  Checkbox: ({ children }) => {
    const T = window.PEP;
    return <li style={{
      listStyle: 'none', marginLeft: -22, marginBottom: 10, padding: '8px 0 8px 36px',
      borderBottom: `1px solid ${T.rule}`, position: 'relative', fontSize: 16,
    }}>
      <span style={{
        position: 'absolute', left: 0, top: 10,
        width: 18, height: 18, border: `1.5px solid ${T.sageDk}`, borderRadius: 4,
      }}/>
      {children}
    </li>;
  },
};

window.PEPSidebarBlock = function PEPSidebarBlock({ title, children, dark }) {
  const T = window.PEP;
  return (
    <div style={{
      background: dark ? T.sageDk : T.cream,
      color: dark ? T.cream : T.ink,
      border: dark ? 'none' : `1px solid ${T.rule}`,
      borderRadius: 14, padding: '22px 24px',
    }}>
      <div style={{
        fontSize: 11, letterSpacing: 2, fontWeight: 600, textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,0.7)' : T.sageDk, marginBottom: 14,
      }}>{title}</div>
      {children}
    </div>
  );
};

// Related-articles strip used at the bottom of every article.
window.PEPRelated = function PEPRelated({ items }) {
  const T = window.PEP;
  return (
    <section style={{ padding: '48px 40px 32px', borderTop: `1px solid ${T.rule}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <window.PEPEyebrow>Continue Reading</window.PEPEyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 24 }}>
          {items.map(([cat, t, href, meta], i) => (
            <a key={t} href={href} style={{
              textDecoration: 'none', color: T.ink, padding: '24px 28px',
              borderTop: `1px solid ${T.rule}`,
              borderRight: i < 2 ? `1px solid ${T.rule}` : 'none',
              display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <div style={{ fontSize: 11, letterSpacing: 1.5, color: T.tealBr, fontWeight: 600, textTransform: 'uppercase' }}>{cat}</div>
              <div style={{ fontFamily: T.display, fontSize: 24, letterSpacing: -0.3, lineHeight: 1.2 }}>{t}</div>
              <div style={{ fontSize: 12, color: T.muted, letterSpacing: 0.4, marginTop: 'auto' }}>{meta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


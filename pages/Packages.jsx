// Packages page — the two main plan tiers plus an a la carte menu.
// Derek's instruction: list a menu of options, but do NOT display prices.

function PackagesPage() {
  const T = window.PEP;

  const foundational = [
    ['Last Will & Testament', 'Names your personal representative, beneficiaries, and specific gifts.'],
    ['Durable Power of Attorney', 'Financial and legal authority that survives incapacity.'],
    ['Healthcare Surrogate & Living Will', 'Who decides for you, and your wishes on end-of-life care.'],
    ['HIPAA Authorization', 'Lets your surrogate access your medical records.'],
    ['Guardian Designations', 'Names who raises your minor children, with standby choices.'],
    ['Plain-language summary', 'You see what each document does before you sign.'],
  ];

  const comprehensive = [
    ['Everything in the Foundational plan', 'The full set of core documents above, included.'],
    ['Revocable Living Trust', 'Keeps your estate out of probate, with a pour-over will as backup.'],
    ['Asset funding & retitling', 'Deed for your Florida homestead and help moving assets into the trust.'],
    ['Optional Lifetime Protection Trust', 'Holds a beneficiary’s inheritance in protected form, when it fits.'],
    ['Successor trustee planning', 'Names who steps in if you cannot serve.'],
    ['Advisor coordination & annual check-in', 'We work with your CPA and review the plan each year.'],
  ];

  const alacarte = [
    ['Enhanced Life Estate (Lady Bird) Deed', 'Passes your home outside probate while you keep full control.'],
    ['Irrevocable Trusts', 'IRA trusts, ILITs, and SLATs for protection and tax planning.'],
    ['Business Succession & Buy-Sell Agreements', 'Keeps a closely held business in the family or sets up a clean sale.'],
    ['Trust funding for a specific asset', 'Retitling or a deed for one property or account.'],
    ['Review of an existing plan', 'A second look at documents drafted elsewhere or years ago.'],
    ['Standalone documents', 'A single power of attorney or healthcare directive on its own.'],
  ];

  const Card = ({ tag, name, blurb, items, dark }) => (
    <div style={{
      background: dark ? T.sageDk : T.cream,
      color: dark ? T.cream : T.ink,
      border: dark ? 'none' : `1px solid ${T.rule}`,
      borderRadius: 18, padding: '40px 40px 36px',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600,
        color: dark ? 'rgba(255,255,255,0.7)' : T.sageDk, marginBottom: 16,
      }}>{tag}</div>
      <h2 style={{
        fontFamily: T.display, fontSize: 40, fontWeight: 400, letterSpacing: -0.8,
        lineHeight: 1.05, margin: '0 0 14px',
      }}>{name}</h2>
      <p style={{
        fontSize: 15, lineHeight: 1.65, margin: '0 0 26px',
        color: dark ? 'rgba(255,255,255,0.78)' : T.muted,
      }}>{blurb}</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {items.map(([t, d], i) => (
          <div key={t} style={{
            padding: '16px 0',
            borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.18)' : T.rule}`,
          }}>
            <div style={{ fontFamily: T.display, fontSize: 20, letterSpacing: -0.3 }}>{t}</div>
            <div style={{
              fontSize: 13, lineHeight: 1.55, marginTop: 4,
              color: dark ? 'rgba(255,255,255,0.7)' : T.muted,
            }}>{d}</div>
          </div>
        ))}
      </div>
      <a href="Contact.html" style={{
        display: 'inline-block', textAlign: 'center', marginTop: 30,
        background: dark ? T.cream : T.ink, color: dark ? T.ink : T.cream,
        padding: '15px 24px', borderRadius: 10, fontSize: 14, fontWeight: 500,
        textDecoration: 'none', letterSpacing: 0.3,
      }}>Ask about this plan</a>
    </div>
  );

  return (
    <window.PEPPage current="packages">
      <window.PEPHero
        eyebrow="Packages"
        title="Plans built"
        italic="around you."
        lede="Most clients start with one of two plan packages and add what they need from an a la carte menu. Every engagement is a flat fee, quoted in writing. We talk pricing on your free consultation rather than posting it here."
      />

      {/* Two main tiers */}
      <section style={{ padding: '64px 40px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
          <Card
            tag="Tier One"
            name="Foundational Estate Plan"
            blurb="The core documents every Florida adult should have. The right starting point when a full trust is more than you need right now."
            items={foundational}
          />
          <Card
            tag="Tier Two · Most chosen"
            name="Comprehensive Estate Plan"
            blurb="The foundational plan plus a living trust and funding, for families who want to avoid probate and plan for the long term."
            items={comprehensive}
            dark
          />
        </div>
      </section>

      {/* A la carte */}
      <section style={{ padding: '24px 40px 40px' }}>
        <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: 48 }}>
          <window.PEPEyebrow>A La Carte Menu</window.PEPEyebrow>
          <h2 style={{
            fontFamily: T.display, fontSize: 56, margin: '18px 0 16px',
            fontWeight: 400, letterSpacing: -1.5, lineHeight: 1,
          }}>
            Add only what you <em style={{ color: T.teal }}>need.</em>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: T.muted, maxWidth: 640, margin: '0 0 36px' }}>
            Already have a plan, or only need one piece? Any of these can be done on its own or added to a package.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
            border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden',
          }}>
            {alacarte.map(([t, d], i) => (
              <div key={t} style={{
                padding: '28px 28px', background: T.cream,
                borderRight: (i % 3) < 2 ? `1px solid ${T.rule}` : 'none',
                borderTop: i >= 3 ? `1px solid ${T.rule}` : 'none',
                display: 'flex', flexDirection: 'column', gap: 8,
              }}>
                <div style={{ fontFamily: T.display, fontSize: 24, letterSpacing: -0.4, lineHeight: 1.15 }}>{t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.6, color: T.muted }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ padding: '0 40px 64px' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto', padding: '28px 32px',
          background: T.sand, border: `1px solid ${T.rule}`, borderRadius: 14,
        }}>
          <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 600, color: T.sageDk, textTransform: 'uppercase', marginBottom: 12 }}>
            On Pricing
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: T.ink, margin: 0, textAlign: 'justify' }}>
            Every plan is a flat fee, set in writing in your engagement letter before any work begins. There is no hourly billing and no surprise invoice at the end. Because the right package depends on your family, your assets, and your goals, we give you an exact quote on the free thirty-minute consultation rather than posting prices here.
          </p>
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.PackagesPage = PackagesPage;

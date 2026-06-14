// Practice Areas — a clickable accordion of the documents PEP drafts.
// Each row explains what the document is, who it's for, and that we draft it.

function PracticeAreasPage() {
  const T = window.PEP;

  const items = [
    {
      id: 'wills', cat: 'Core Planning', title: 'Last Will & Testament',
      short: 'Directs who receives your assets and names guardians for your minor children.',
      body: "A will names the personal representative who settles your estate, lists who inherits what, and appoints guardians for your minor children. On its own it still passes through Florida probate, which is why many plans pair it with a revocable trust. We draft the will, the self-proving affidavit, and the supporting forms, then handle the signing in our office.",
      forWhom: 'Every adult in Florida, and essential for parents of minor children.',
      typical: 'Flat fee, included in most planning packages.',
    },
    {
      id: 'trusts', cat: 'Core Planning', title: 'Revocable Living Trust',
      short: "Keeps your estate out of probate and steps in if you ever can't manage things yourself.",
      body: "A revocable trust holds your assets during your life, lets someone you choose take over if you become incapacitated, and passes everything to your beneficiaries without probate. You stay in full control and can change or revoke it anytime. We draft the trust, help retitle your assets into it, and add a pour-over will as a backstop. Wills and trusts are separate products, and we'll tell you plainly which one fits your situation.",
      forWhom: 'Homeowners, blended families, and anyone who wants to avoid probate and keep matters private.',
      typical: 'Flat fee, set in your engagement letter.',
    },
    {
      id: 'poa', cat: 'Care & Incapacity', title: 'Powers of Attorney',
      short: "Names someone you trust to handle your finances if you can't.",
      body: "A durable power of attorney lets a person you name pay bills, manage accounts, and handle legal and financial matters if you become unable to. Florida law requires specific language for banks to honor it, so a generic form off the internet often fails at the moment it's needed. We draft it to current Florida statutes.",
      forWhom: 'Every adult, and especially anyone supporting aging parents.',
      typical: 'Flat-fee document, often bundled with the core plan.',
    },
    {
      id: 'healthcare', cat: 'Care & Incapacity', title: 'Healthcare Directives',
      short: 'Your healthcare surrogate and living will, so your wishes are clear and followed.',
      body: "Healthcare directives are two documents that work together. A healthcare surrogate designation names the person who makes medical decisions for you when you can't speak for yourself. A living will states your wishes about end-of-life care so that choice never falls on your family by guesswork. We prepare both and walk you through the decisions in plain terms.",
      forWhom: 'Every adult. The hospital will ask for these the moment they are needed.',
      typical: 'Flat-fee document package.',
    },
    {
      id: 'guardianship', cat: 'Care & Incapacity', title: 'Guardian Designations',
      short: 'Names who raises your children if something happens to you.',
      body: "A guardian designation tells the court who you want to raise your minor children, with standby choices in case your first pick can't serve. For young families this is often the single most important document in the plan. We can also prepare a pre-need guardian designation that names who would care for you.",
      forWhom: 'Parents of minor children, and anyone planning for their own future care.',
      typical: 'Flat-fee document, included with family planning packages.',
    },
    {
      id: 'business', cat: 'Closely-Held', title: 'Business Succession',
      short: 'Keeps a family business in the family, or sets up a clean sale.',
      body: "For many owners the business is the largest asset in the estate. We draft buy-sell agreements triggered by death, disability, retirement, or a dispute, update LLC operating agreements to reflect your succession plan, and coordinate with your CPA so the transfer works for both the family and the tax picture.",
      forWhom: 'Founders, partners, and family-business owners planning for the next chapter.',
      typical: 'Flat fees based on scope, set in your engagement letter.',
    },
  ];

  const initial = (typeof window !== 'undefined' && window.location.hash) ? window.location.hash.slice(1) : null;
  const [open, setOpen] = React.useState(initial ? [initial] : []);
  const toggle = (id) => setOpen((o) => o.includes(id) ? o.filter((x) => x !== id) : [...o, id]);

  return (
    <window.PEPPage current="practice">
      <window.PEPHero
        eyebrow="Practice Areas"
        title="Every document,"
        italic="explained."
        lede="The pieces of a Florida estate plan, what each one does, and the documents we draft for you. Open any to read more."
      />

      <section style={{ padding: '48px 40px 96px' }}>
        <div style={{ border: `1px solid ${T.rule}`, borderRadius: 16, overflow: 'hidden' }}>
          {items.map((it, i) => {
            const isOpen = open.includes(it.id);
            return (
              <div key={it.id} id={it.id} style={{
                borderBottom: i < items.length - 1 ? `1px solid ${T.rule}` : 'none',
                background: isOpen ? T.sand : T.cream,
                scrollMarginTop: 100,
              }}>
                <button onClick={() => toggle(it.id)} style={{
                  width: '100%', textAlign: 'left', cursor: 'pointer',
                  background: 'transparent', border: 'none', padding: '32px 36px',
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center',
                  fontFamily: T.body,
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontFamily: T.display, fontSize: 12, color: T.tealBr, letterSpacing: 1.5, fontWeight: 600, textTransform: 'uppercase' }}>{it.cat}</span>
                    <span style={{ fontFamily: T.display, fontSize: 32, letterSpacing: -0.6, fontWeight: 400, color: T.ink, lineHeight: 1.05 }}>{it.title}</span>
                    <span style={{ fontSize: 15, lineHeight: 1.6, color: T.muted, maxWidth: 620 }}>{it.short}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{
                      fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600,
                      color: T.teal, border: `1px solid ${T.tealBr}`, borderRadius: 999,
                      padding: '6px 12px', whiteSpace: 'nowrap',
                    }}>✓ We draft this</span>
                    <span style={{
                      fontFamily: T.display, fontSize: 32, color: T.tealBr, lineHeight: 1,
                      width: 24, textAlign: 'center', fontWeight: 300,
                    }}>{isOpen ? '−' : '+'}</span>
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 36px 36px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: T.ink, margin: 0 }}>{it.body}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <div>
                        <window.PEPEyebrow>For Whom</window.PEPEyebrow>
                        <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{it.forWhom}</div>
                      </div>
                      <div>
                        <window.PEPEyebrow>Typical Engagement</window.PEPEyebrow>
                        <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.6, color: T.ink }}>{it.typical}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.PracticeAreasPage = PracticeAreasPage;

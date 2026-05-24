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
  const items = [
    { label: 'Practice Areas', href: 'Practice Areas.html', slug: 'practice' },
    { label: 'Process',        href: 'Process.html',        slug: 'process' },
    { label: 'Attorneys',      href: 'Attorneys.html',      slug: 'attorneys' },
    { label: 'Resources',      href: 'Resources.html',      slug: 'resources' },
    { label: 'Contact',        href: 'Contact.html',        slug: 'contact' },
  ];
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
      ['Wills &amp; Trusts',  'Practice Areas.html#wills'],
      ['Probate',             'Practice Areas.html#probate'],
      ['Business Succession', 'Practice Areas.html#business'],
      ['Elder Law',           'Practice Areas.html#elder'],
    ]],
    ['Firm', [
      ['About',     'Attorneys.html'],
      ['Attorneys', 'Attorneys.html'],
      ['Process',   'Process.html'],
      ['Reviews',   'Attorneys.html#reviews'],
    ]],
    ['Resources', [
      ['Articles', 'Resources.html'],
      ['Quiz',     'Resources.html#quiz'],
      ['FAQ',      'Resources.html#faq'],
      ['Guides',   'Resources.html#guides'],
    ]],
    ['Contact', [
      ['Schedule',      'Contact.html'],
      ['Email',         'Contact.html#email'],
      ['Client Portal', '#'],
      ['Pay Invoice',   '#'],
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
          813.330.0697<br/>
          info@premier.law
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


// Article: After the Loss of a Spouse — Planning Checklist

function ArticleSpousalLoss() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, Checkbox } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  const Section = ({ title, subtitle, items }) => (
    <div style={{ margin: '36px 0' }}>
      <H3>{title}</H3>
      <P>{subtitle}</P>
      <ul style={{ margin: 0, padding: 0, fontSize: 16 }}>
        {items.map((it, i) => <Checkbox key={i}>{it}</Checkbox>)}
      </ul>
    </div>
  );

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="CHECKLIST · AFTER A LOSS"
        title="After the loss of a spouse:"
        italic="a planning checklist."
        lede="The hardest days are not the time for complicated decisions. This checklist breaks the months that follow into three simple phases, so the most important things get attention first and the rest can wait."
        meta={[['Reading','7 minutes']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/after-the-loss-of-a-spouse.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          The weeks after a spouse's death feel both endless and impossibly compressed. Decisions come faster than you can process them, and well-meaning people call with paperwork that does not feel like a priority. This checklist will not cover everything, and your situation will add items of its own. Still, it gives you a place to start, with the most important things first and the rest able to wait.
        </P>

        <Pull>You do not have to face these decisions alone. Take the urgent steps, and let the rest wait until you can think clearly.</Pull>

        <H2>Phase 1 · Immediate focus</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>The first days and weeks.</P>

        <Section
          title="Care &amp; immediate logistics"
          subtitle="Start with what matters most: yourself, your family, and the documents you'll need in the coming weeks."
          items={[
            'Take care of yourself and your family. Eat, sleep, walk, accept help.',
            'Create a single central folder (paper or digital) for documents arriving in the coming weeks.',
            'Notify the people who help you: financial advisor, attorney, tax professional, insurance agent.',
            'Obtain death certificates. Order between ten and twenty-five certified copies.',
            'Gather key personal and financial documents in one place.',
            'Review life insurance policies and confirm funeral arrangements are in motion.',
            'Arrange access to short-term living expenses.',
            'Notify the Social Security Administration and, if applicable, the employer or pension administrator.',
          ]}
        />

        <H2>Phase 2 · Short-term follow-up</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>The first one to three months.</P>

        <Section
          title="Administrative continuity"
          subtitle="Once the immediate week has passed, attention turns to the practical work of unwinding shared accounts and updating titles."
          items={[
            'Review employer benefits, deferred compensation, and final pay.',
            'Secure and retitle bank and investment accounts.',
            'Review and address credit cards and outstanding loans.',
            'Update titles on real estate and motor vehicles.',
            'Update utility accounts, subscriptions, and automatic payments.',
            'Review and consolidate digital accounts where appropriate.',
          ]}
        />

        <H2>Phase 3 · Longer-term planning</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Three to twelve months.</P>

        <Section
          title="Looking forward"
          subtitle="With the immediate work behind you, this is the time to revisit the bigger picture: investments, estate documents, and what comes next."
          items={[
            'Review overall financial and investment strategy with your advisor.',
            'Plan for retirement income and the management of insurance proceeds.',
            'Inventory remaining estate assets and household items.',
            'Begin estate administration and required tax filings.',
            'Update your own will, trust, and healthcare documents. Your plan has changed.',
            'Hold a family financial meeting; clarify what your beneficiaries should know.',
            'Review charitable, legacy, and educational planning.',
            'Continue tending to your personal well-being.',
          ]}
        />

        <Callout title="What to expect from probate or trust administration">
          If your spouse had a properly funded living trust, most assets transfer without probate, and our role is mostly administrative: retitling, accountings, and beneficiary distributions. If there was a will but no trust, formal or summary probate may be required. We handle both in-house and will tell you which applies on our first call.
        </Callout>

        <H2>Where PEP fits</H2>
        <P>
          We assist surviving spouses with probate administration, trust funding and distribution, deed transfers, retitling, and the dozen smaller matters that arrive in the months after a loss. Most clients prefer to hand that work over entirely, and we handle each item ourselves instead of passing it to staff.
        </P>
        <P>
          If you would like assistance, <a href="Contact.html" style={{ color: T.teal }}>schedule a free thirty-minute call</a> or reach us at 813.330.0136. There is no obligation, and most callers leave the conversation with a clearer sense of next steps regardless of whether they retain us.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Core Planning', 'The cornerstones of estate planning', 'Estate Planning Essentials.html', '11 min'],
        ['Funding', 'Funding your trust, step by step', 'Funding Your Trust.html', '7 min'],
        ['Marriage', 'Individual vs. joint trusts', 'Individual vs Joint Trusts.html', '6 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleSpousalLoss = ArticleSpousalLoss;

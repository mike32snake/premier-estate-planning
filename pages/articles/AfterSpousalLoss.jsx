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
        lede="The hardest days are not the right time for complicated decisions. This checklist organises the months that follow into three deliberate phases — so the most important matters get attention first, and the rest can wait their turn."
        meta={[['Reading','7 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="Three Phases">
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              <div><strong>1.</strong> &nbsp;First days and weeks</div>
              <div><strong>2.</strong> &nbsp;First one to three months</div>
              <div><strong>3.</strong> &nbsp;Three to twelve months</div>
            </div>
          </SB>
          <SB title="If You Need Help" dark>
            <div style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>
              PEP handles probate, trust administration, and the practical matters that follow a death. Initial consultations are complimentary.
            </div>
            <a href="Contact.html" style={{
              display: 'inline-block', background: T.tealBr, color: T.tealInk || T.ink,
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Schedule a Call →</a>
          </SB>
        </>}
      >
        <P lead>
          The weeks following a spouse's death feel both endless and impossibly compressed. Decisions arrive faster than you can process them; well-meaning advisors call with paperwork that does not feel like a priority. This checklist is not exhaustive — your circumstances will require items not listed here — but it is a starting structure, organised so that the most important matters come first and the rest can wait.
        </P>

        <Pull>You do not have to navigate these decisions alone. Take the immediate steps; let the rest wait until you can think clearly.</Pull>

        <H2>Phase 1 · Immediate focus</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>The first days and weeks.</P>

        <Section
          title="Care &amp; immediate logistics"
          subtitle="Begin with the things that matter most — yourself, your family, and the documents you'll need in the coming weeks."
          items={[
            'Take care of yourself and your family. Eat, sleep, walk, accept help.',
            'Create a single central folder (paper or digital) for documents arriving in the coming weeks.',
            'Notify the people who help you — financial advisor, attorney, tax professional, insurance agent.',
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
          subtitle="With the immediate administrative work behind you, this is the moment to revisit the larger plan — investments, estate documents, and the next chapter."
          items={[
            'Review overall financial and investment strategy with your advisor.',
            'Plan for retirement income and the management of insurance proceeds.',
            'Inventory remaining estate assets and household items.',
            'Begin estate administration and required tax filings.',
            'Update your own will, trust, and healthcare documents — your plan has changed.',
            'Hold a family financial meeting; clarify what your beneficiaries should know.',
            'Review charitable, legacy, and educational planning.',
            'Continue tending to your personal well-being.',
          ]}
        />

        <Callout title="What to expect from probate or trust administration">
          If your spouse had a properly funded revocable trust, most assets transfer without probate, and our role is primarily administrative — retitling, accountings, and beneficiary distributions. If a will was in place but no trust, formal or summary probate may be required. We handle both in-house and will tell you which applies on our first call.
        </Callout>

        <H2>Where PEP fits</H2>
        <P>
          We assist surviving spouses with probate administration, trust funding and distribution, deed transfers, retitling, and the dozen smaller matters that arrive in the months after a loss. Most clients prefer to delegate that work entirely, and we handle each item ourselves rather than dispatching it to staff.
        </P>
        <P>
          If you would like assistance, <a href="Contact.html" style={{ color: T.teal }}>schedule a complimentary thirty-minute call</a> or reach our office at (727) 555·0142. There is no obligation, and most callers leave the conversation with a clearer sense of next steps regardless of whether they retain us.
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

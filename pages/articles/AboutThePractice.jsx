// Article: About the Practice (from Client Brochure)

function ArticleAbout() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="OVERVIEW · ABOUT THE PRACTICE"
        title="Quality estate planning,"
        italic="quietly delivered."
        lede="A short overview of how PEP practices — what we draft, how we charge, where we sit in your team of advisors, and the assumptions we built the firm around."
        meta={[['Reading','5 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/about-the-practice.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          Premier Estate Planning is a boutique Florida firm devoted exclusively to wills, trusts, probate, business succession, and elder law. We do not handle litigation, family law, or real estate transactions. The narrow focus is deliberate — it is what lets the attorney whose name is on the engagement letter be the one who drafts your plan.
        </P>

        <H2>What we do</H2>
        <UL>
          <LI><strong>Wills &amp; Revocable Trusts.</strong> The cornerstone of every plan — probate avoidance, guardianship of minor children, homestead protection.</LI>
          <LI><strong>Probate &amp; Trust Administration.</strong> Formal, summary, and ancillary probate; trust funding and distributions; accountings.</LI>
          <LI><strong>Business Succession.</strong> Buy-sell agreements, LLC operating reforms, and dynasty trusts for closely-held Florida businesses.</LI>
          <LI><strong>Elder Law.</strong> Durable powers of attorney, advance directives, Medicaid pre-planning, and guardianship petitions.</LI>
        </UL>

        <H2>How we work</H2>

        <H3>Flat fees, quoted in writing</H3>
        <P>
          Every engagement begins with a flat-fee quote in your engagement letter. There is no surprise invoice at the end of the month, no billable clock running during your phone calls, and no incentive on our part to drag the work out. Most plans are signed within fourteen days of the initial consultation.
        </P>

        <H3>The attorney drafts the plan</H3>
        <P>
          Larger firms often delegate drafting to associates and paralegals; we do not. Mr. Carrillo personally drafts every plan — which is also why we cap the number of new families we accept each quarter.
        </P>

        <Pull>The attorney drafting your plan should be the one who signs it.</Pull>

        <H3>Plain-language summaries before legalese</H3>
        <P>
          Drafts arrive with a plain-language summary of what the documents do, in what order, under what circumstances. You review the summary first; we adjust; only then do we generate the legal documents themselves. The practical result is that you understand your own plan — which matters most on the day your family needs to use it.
        </P>

        <H3>Coordination with your other advisors</H3>
        <P>
          We work most effectively when your CPA, financial advisor, and insurance agent are part of the conversation. We are happy to join calls with your existing advisors and treat them as members of the planning team rather than rivals for the engagement.
        </P>

        <H2>Why families choose PEP</H2>
        <Callout title="A short list">
          <UL>
            <LI>Florida-only practice — every document drafted to Florida statute.</LI>
            <LI>Flat-fee pricing disclosed in writing before engagement.</LI>
            <LI>Three meetings, approximately two weeks, plan signed.</LI>
            <LI>Attorney-drafted, attorney-reviewed, attorney-signed.</LI>
            <LI>Plain-language summaries precede every legal document.</LI>
            <LI>Coordination with your existing CPA and financial advisor encouraged.</LI>
          </UL>
        </Callout>

        <H2>Where we are based</H2>
        <P>
          Our office is in Tampa, convenient to Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties — and we serve clients throughout the Tampa Bay area and nationwide. Initial consultations can be conducted by phone or video; signing meetings are conducted in person.
        </P>

        <Callout tone="dark">
          To learn whether PEP is right for your family, <a href="Contact.html" style={{ color: T.tealBr }}>schedule a complimentary thirty-minute consultation</a> or call our office at 813.330.0697.
        </Callout>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Process', 'How our engagement works', 'How Our Engagement Works.html', '5 min'],
        ['Process', 'Preparing for your initial consultation', 'Preparing for Your Consultation.html', '4 min'],
        ['Core Planning', 'The cornerstones of estate planning', 'Estate Planning Essentials.html', '11 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleAbout = ArticleAbout;

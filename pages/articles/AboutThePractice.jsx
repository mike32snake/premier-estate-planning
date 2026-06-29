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
        lede="A short overview of how we work: what we draft, how we charge, and where we fit among your advisors."
        meta={[['Reading','5 minutes']]}
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
          Premier Estate Planning is a boutique Florida firm focused only on wills, trusts, business succession, and care planning. We do not handle litigation, family law, or real estate deals. That focus is on purpose. It is what lets the attorney whose name is on the engagement letter be the one who drafts your plan.
        </P>

        <H2>What we do</H2>
        <UL>
          <LI><strong>Wills &amp; Trusts.</strong> The cornerstone of every plan: probate avoidance, guardianship of minor children, homestead protection.</LI>
          <LI><strong>Business Succession.</strong> Buy-sell agreements, LLC operating reforms, and succession planning for closely-held Florida businesses.</LI>
          <LI><strong>Power of Attorney &amp; Care Planning.</strong> Durable power of attorney, healthcare surrogates, living wills, and guardianship designations.</LI>
        </UL>

        <H2>How we work</H2>

        <H3>Flat fees, quoted in writing</H3>
        <P>
          Every engagement starts with a flat-fee quote in your engagement letter. No surprise invoice at the end of the month, and no clock running while you are on the phone with us. Most plans are signed within two weeks of the first consultation.
        </P>

        <H3>The attorney drafts the plan</H3>
        <P>
          Larger firms often hand drafting to associates and paralegals. We do not. Derek drafts every plan himself, which is why we cap how many new families we take on each quarter.
        </P>

        <Pull>The attorney drafting your plan should be the one who signs it.</Pull>

        <H3>Plain-language summaries before legalese</H3>
        <P>
          Your drafts come with a plain-language summary of what each document does and when. You read the summary first, we make changes, and only then do we produce the legal documents. The point is simple: you actually understand your own plan, which matters most on the day your family has to use it.
        </P>

        <H3>Coordination with your other advisors</H3>
        <P>
          We do our best work when your CPA, financial advisor, and insurance agent are part of the conversation. We are glad to join calls with your existing advisors and treat them as part of your team.
        </P>

        <H2>Why families choose PEP</H2>
        <Callout title="A short list">
          <UL>
            <LI>Florida-only practice, with every document drafted to Florida law.</LI>
            <LI>Flat-fee pricing disclosed in writing before engagement.</LI>
            <LI>Three meetings, approximately two weeks, plan signed.</LI>
            <LI>Attorney-drafted, attorney-reviewed, attorney-signed.</LI>
            <LI>Plain-language summaries precede every legal document.</LI>
            <LI>Coordination with your existing CPA and financial advisor encouraged.</LI>
          </UL>
        </Callout>

        <H2>Where we are based</H2>
        <P>
          Our office is in Tampa, convenient to Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties, and we serve clients throughout the Tampa Bay area and across Florida. First consultations can be done by phone or video. Signing meetings happen in person.
        </P>

        <Callout tone="dark">
          To find out whether PEP is right for your family, <a href="Contact.html" style={{ color: T.tealBr }}>schedule a free thirty-minute consultation</a> or call us at 813.330.0136.
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

// Article: How Our Engagement Works

function ArticleHowItWorks() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, OL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · ENGAGEMENT WORKFLOW"
        title="How our engagement"
        italic="actually works."
        lede="Three meetings, approximately two weeks, one flat fee — and a plan you understand well enough to explain to your family. A look at each milestone and what happens between them."
        meta={[['Reading','5 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/how-our-engagement-works.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          Estate planning need not be drawn out. Our process is deliberately short, deliberately flat-fee, and deliberately drafted by the attorney whose name is on the door. Below is what to expect at each milestone, and what is happening in our office between them.
        </P>

        <H2>1 · Initial Consultation</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Day 0 &nbsp;·&nbsp; thirty minutes &nbsp;·&nbsp; complimentary</P>
        <P>
          A discovery call by phone or video. We ask about your family, your assets, your prior planning, and the outcomes you are hoping for. There is no billable clock; there is no obligation. By the end of the call you have a clear sense of whether we are the right counsel for your matter and a flat-fee quote in writing.
        </P>
        <Callout title="What you bring">
          A rough mental picture of your family and your assets. Any existing planning documents — even ones you suspect are out of date. A short list of your concerns. There is no preparation packet to complete in advance.
        </Callout>

        <H2>2 · Plan Design Meeting</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Within the first week &nbsp;·&nbsp; 60–90 minutes</P>
        <P>
          The decision-making meeting. Together we work through the substantive choices — beneficiaries, guardians, trust structures, distribution standards, powers of attorney, healthcare surrogates, and the dozen smaller decisions that compose a complete plan. You leave with a written summary of every decision we made, and our office moves into drafting.
        </P>

        <Pull>By the end of plan design, every meaningful decision is made — in plain language, on paper.</Pull>

        <H2>3 · Drafting</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Days 5–10 &nbsp;·&nbsp; happens in our office</P>
        <P>
          Documents are drafted by Mr. Carrillo personally. Each draft arrives with a plain-language summary that precedes the legalese — so you read the summary first, raise any questions, and only then engage with the language of the documents themselves. One round of revisions is included; a second is included if needed.
        </P>

        <H2>4 · Wrap-Up &amp; Signing</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Day 14 &nbsp;·&nbsp; 90 minutes &nbsp;·&nbsp; in office</P>
        <P>
          A final walk-through of the documents, then signing with two witnesses and a notary public. You depart with a bound estate portfolio, a digital archive in your secure client file, and a one-page instruction sheet for your personal representative.
        </P>

        <H2>5 · Funding</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Days 14 onward &nbsp;·&nbsp; included in the engagement</P>
        <P>
          The plan is signed, but a trust does not own anything until you fund it. Deeds and Certificate of Trust are prepared by our office; beneficiary forms and retitling instructions are sent to your financial institutions. We follow up at thirty, sixty, and ninety days to confirm funding is complete. (For a deeper discussion, see our article on <a href="Funding Your Trust.html" style={{ color: T.teal }}>funding your trust</a>.)
        </P>

        <Callout tone="dark" title="What's included in the flat fee">
          Everything above — the consultation, the design meeting, drafting, one round of revisions, the signing meeting, the bound portfolio, deed preparation for Florida property, and one year of minor amendments. Court filings (if any), recording fees, and notary fees are paid at cost and disclosed in the engagement letter.
        </Callout>

        <P>
          To begin, <a href="Contact.html" style={{ color: T.teal }}>schedule a complimentary thirty-minute call</a> or reach our office at 813.330.0697.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Process', 'Preparing for your initial consultation', 'Preparing for Your Consultation.html', '4 min'],
        ['Process', 'After plan design: next steps', 'After Plan Design.html', '4 min'],
        ['Funding', 'Funding your trust', 'Funding Your Trust.html', '7 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleHowItWorks = ArticleHowItWorks;

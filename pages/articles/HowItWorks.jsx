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
        lede="Three meetings, about two weeks, one flat fee, and a plan you understand well enough to explain to your family. A look at each step and what happens in between."
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
          Estate planning does not have to drag on. Our process is short, flat-fee, and handled start to finish by the attorney whose name is on the door. Here is what to expect at each step, and what is happening in our office in between.
        </P>

        <H2>1 · Initial Consultation</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Day 0 &nbsp;·&nbsp; thirty minutes &nbsp;·&nbsp; free</P>
        <P>
          A call by phone or video. We ask about your family, your assets, any planning you have already done, and what you are hoping for. No billing, no obligation. By the end of the call you will know whether we are the right fit, and you will have a flat-fee quote in writing.
        </P>
        <Callout title="What you bring">
          A rough picture of your family and your assets. Any existing planning documents, even ones you think are out of date. A short list of your concerns. There is no prep packet to fill out beforehand.
        </Callout>

        <H2>2 · Plan Design Meeting</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Within the first week &nbsp;·&nbsp; 60–90 minutes</P>
        <P>
          The decision-making meeting. Together we work through the real choices: beneficiaries, guardians, trust structures, distribution standards, powers of attorney, healthcare surrogates, and the dozen smaller decisions that make up a complete plan. You leave with a written summary of every decision we made, and our office moves into drafting.
        </P>

        <Pull>By the end of plan design, every meaningful decision is made, in plain language and on paper.</Pull>

        <H2>3 · Drafting</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Days 5–10 &nbsp;·&nbsp; happens in our office</P>
        <P>
          Derek drafts the documents himself. Each draft comes with a plain-language summary, so you read the summary first, ask any questions, and only then dig into the legal language. One round of revisions is included, and a second if you need it.
        </P>

        <H2>4 · Wrap-Up &amp; Signing</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Day 14 &nbsp;·&nbsp; 90 minutes &nbsp;·&nbsp; in office</P>
        <P>
          A final walk-through of the documents, then signing with two witnesses and a notary. You will leave with a bound copy of your plan, a digital archive in your client file, and a one-page instruction sheet for your personal representative.
        </P>

        <H2>5 · Funding</H2>
        <P style={{ marginTop: -8, color: T.muted, fontSize: 16, fontStyle: 'italic' }}>Days 14 onward &nbsp;·&nbsp; included in the engagement</P>
        <P>
          The plan is signed, but a trust does not own anything until you fund it. Deeds and Certificate of Trust are prepared by our office; beneficiary forms and retitling instructions are sent to your financial institutions. We follow up at thirty, sixty, and ninety days to confirm funding is complete. (For a deeper discussion, see our article on <a href="Funding Your Trust.html" style={{ color: T.teal }}>funding your trust</a>.)
        </P>

        <Callout tone="dark" title="What's included in the flat fee">
          Everything above: the consultation, the design meeting, drafting, one round of revisions, the signing meeting, the bound portfolio, deed preparation for Florida property, and one year of minor amendments. Court filings (if any), recording fees, and notary fees are paid at cost and listed in the engagement letter.
        </Callout>

        <P>
          To begin, <a href="Contact.html" style={{ color: T.teal }}>schedule a free thirty-minute call</a> or reach our office at 813.330.0136.
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

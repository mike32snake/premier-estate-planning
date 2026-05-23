// Article: Preparing for Your Initial Consultation

function ArticlePrepConsult() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI, Checkbox } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · BEFORE WE MEET"
        title="Preparing for your"
        italic="initial consultation."
        lede="The first call is deliberately conversational — there is no homework packet, no intake form to complete in advance. That said, a few items make the conversation more productive when they're at hand."
        meta={[['Reading','4 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="The Short List">
            <div style={{ fontSize: 14, lineHeight: 1.65 }}>
              <div>· A rough family picture</div>
              <div>· A rough asset picture</div>
              <div>· Existing planning documents</div>
              <div>· A few of your worries</div>
              <div>· Your other advisors' names</div>
            </div>
          </SB>
          <SB title="Schedule" dark>
            <div style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>
              The call is thirty minutes, by phone or video, complimentary.
            </div>
            <a href="Contact.html" style={{
              display: 'inline-block', background: T.tealBr, color: T.tealInk || T.ink,
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Schedule a Call →</a>
          </SB>
        </>}
      >
        <P lead>
          A few notes on what we will cover, what to have at hand, and what <em>not</em> to do in advance. The most common mistake we see is over-preparation — clients arrive with binders of paperwork for a thirty-minute conversation. The call is meant to be a discovery, not an intake.
        </P>

        <H2>What the call covers</H2>
        <UL>
          <LI>Your family — spouse, children, parents, anyone you support financially or worry about.</LI>
          <LI>The general shape of your assets — not exact figures, but the categories.</LI>
          <LI>Anything you have already done — wills, trusts, powers of attorney, beneficiary designations.</LI>
          <LI>Your goals and concerns — including the ones that feel too small to mention.</LI>
          <LI>Whether PEP is the right fit, and what a flat fee would look like if so.</LI>
        </UL>

        <Pull>The first call is about whether the engagement should exist. The details come later, on paper.</Pull>

        <H2>What to have on hand</H2>
        <ul style={{ margin: 0, padding: 0, fontSize: 16 }}>
          <Checkbox><strong>A rough family tree</strong> &mdash; spouse, children with rough ages, prior marriages, anyone you support.</Checkbox>
          <Checkbox><strong>A general asset picture</strong> &mdash; real estate, investment accounts, retirement, business interests, life insurance. Approximate values are plenty.</Checkbox>
          <Checkbox><strong>Existing planning documents</strong> &mdash; any prior wills, trusts, or powers of attorney, even ones you suspect are out of date.</Checkbox>
          <Checkbox><strong>Beneficiary designations</strong> &mdash; or a note on what they currently look like, especially for retirement accounts and life insurance.</Checkbox>
          <Checkbox><strong>Your other advisors' names</strong> &mdash; CPA, financial advisor, insurance agent. We coordinate with them, not around them.</Checkbox>
          <Checkbox><strong>A list of your concerns</strong> &mdash; the things that brought you to this call. There is no wrong answer; this is the most useful part.</Checkbox>
        </ul>

        <Callout title="What not to do">
          Do not assemble a binder. Do not call your accountant for exact account balances. Do not pull deeds. Do not draft notes for us to review. The first call is a conversation; nothing you say or omit is binding, and the detailed inventory comes during the plan design meeting if we proceed.
        </Callout>

        <H2>How the call is structured</H2>
        <P>
          The first ten minutes are introductions and orientation. The next fifteen minutes are listening — we ask, you talk, we take notes. The final five minutes are direction — what we think the right approach is, what the engagement would look like, what a flat fee would be, and how soon we could start.
        </P>
        <P>
          If we proceed, we send an engagement letter that same day. If we do not — because the matter is outside our practice, or another firm is a better fit, or you'd prefer to think it over — that is fine, too. Most callers leave the conversation with a clearer sense of next steps regardless of whether they retain us.
        </P>

        <Callout tone="dark">
          To schedule, visit our <a href="Contact.html" style={{ color: T.tealBr }}>contact page</a> or call (727) 555·0142.
        </Callout>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Process', 'How our engagement works', 'How Our Engagement Works.html', '5 min'],
        ['Process', 'After plan design: next steps', 'After Plan Design.html', '4 min'],
        ['Overview', 'About the practice', 'About the Practice.html', '5 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticlePrepConsult = ArticlePrepConsult;

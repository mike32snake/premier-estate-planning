// Article: After Plan Design — Next Steps

function ArticleAfterDesign() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, OL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  const Step = ({ n, title, body }) => (
    <div style={{
      display: 'grid', gridTemplateColumns: '60px 1fr', gap: 20,
      padding: '24px 0', borderBottom: `1px solid ${T.rule}`,
      alignItems: 'baseline',
    }}>
      <div style={{ fontFamily: T.display, fontSize: 36, color: T.tealBr, fontStyle: 'italic', lineHeight: 1 }}>
        {n}.
      </div>
      <div>
        <div style={{ fontFamily: T.display, fontSize: 24, letterSpacing: -0.3, marginBottom: 8 }}>{title}</div>
        <div style={{ fontSize: 15, lineHeight: 1.65, color: T.muted }}>{body}</div>
      </div>
    </div>
  );

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · AFTER PLAN DESIGN"
        title="After plan design:"
        italic="what happens next."
        lede="You have completed the design meeting and confirmed the structure of your plan. The remaining steps move quickly — drafting, review, signing, and funding. A look at each, and what we need from you along the way."
        meta={[['Reading','4 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/after-plan-design.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          Thank you for your continued trust in PEP. The plan design meeting is the substantive decision-making step; the work that follows is procedural — drafting, review, execution, and funding. Below is a roadmap of the next ten to fourteen days, in order.
        </P>

        <H2>The remaining steps</H2>

        <div style={{ borderTop: `1px solid ${T.rule}`, marginTop: 16 }}>
          <Step n="1" title="Confirm plan design"
            body="Within a day of our meeting you will receive an email summary of every decision we made together. Read it carefully; if anything is wrong, missing, or simply different from what you intended, tell us before we begin drafting."
          />
          <Step n="2" title="Document preparation"
            body="With the design confirmed, our office prepares the full set of documents — trust, will, powers of attorney, healthcare surrogate, living will, and any matter-specific instruments your plan calls for. Drafting is done in-house by Mr. Carrillo."
          />
          <Step n="3" title="Review notification"
            body="You will receive an email when drafts are ready. The package includes a plain-language summary of every document — read the summary first; the legal language second. Note any questions for the wrap-up meeting."
          />
          <Step n="4" title="Wrap-up meeting"
            body="A 60-minute meeting (in office or by video) to walk through every document, address questions, discuss funding strategy, and prepare for execution. Bring a list of questions; bring your spouse if applicable."
          />
          <Step n="5" title="Document execution"
            body="Signing occurs in our Tampa office with two witnesses and a notary public, scheduled at your convenience. The full set takes approximately 90 minutes. You leave with the bound portfolio in hand."
          />
          <Step n="6" title="Plan completion &amp; funding"
            body="Your executed originals go home with you; digital copies live in your secure client file. For trusts, funding begins immediately — deeds prepared by our office, beneficiary forms sent to your financial institutions, and a follow-up at 30, 60, and 90 days to confirm completion."
          />
        </div>

        <Pull>Between plan design and signing, the substantive work is done. What remains is execution.</Pull>

        <H2>If you need a deed</H2>
        <P>
          Florida real estate held in your name must be retitled to the trust by a new deed. Our office prepares the deed as part of every estate-planning engagement. Out-of-state property is funded through local counsel we coordinate with on your behalf.
        </P>

        <H2>If you have questions along the way</H2>
        <P>
          Reach the office at any time. There is no billable clock between plan design and signing, and small questions are easier to resolve in real time than to defer to the wrap-up meeting. Email is generally faster than phone for non-urgent questions.
        </P>

        <Callout tone="dark" title="Office contact">
          <strong>info@premier.law</strong> &nbsp;·&nbsp; 813.330.0697 &nbsp;·&nbsp; Tampa, Florida — serving Tampa Bay &amp; clients nationwide
        </Callout>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Process', 'How our engagement works', 'How Our Engagement Works.html', '5 min'],
        ['Funding', 'Funding your trust', 'Funding Your Trust.html', '7 min'],
        ['Process', 'Preparing for your initial consultation', 'Preparing for Your Consultation.html', '4 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleAfterDesign = ArticleAfterDesign;

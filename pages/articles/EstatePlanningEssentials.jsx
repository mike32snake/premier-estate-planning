// Article: Estate Planning Essentials — overview of core documents

function ArticleEPE() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · CORE PLANNING"
        title="The cornerstones of"
        italic="estate planning."
        lede="A plan is not simply a record of how your assets will pass — it is part of a larger financial conversation, designed to carry your wishes, your values, and the people you love through whatever comes next."
        meta={[['Reading','11 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="In This Article">
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
              <li><a href="#trust" style={{ color: T.ink, textDecoration: 'none' }}>The Living Trust</a></li>
              <li><a href="#subtrust" style={{ color: T.ink, textDecoration: 'none' }}>The Family Protection Subtrust</a></li>
              <li><a href="#will" style={{ color: T.ink, textDecoration: 'none' }}>The Last Will & Testament</a></li>
              <li><a href="#poa" style={{ color: T.ink, textDecoration: 'none' }}>Durable Power of Attorney</a></li>
              <li><a href="#health" style={{ color: T.ink, textDecoration: 'none' }}>Healthcare Documents</a></li>
              <li><a href="#hipaa" style={{ color: T.ink, textDecoration: 'none' }}>HIPAA Authorization</a></li>
            </ul>
          </SB>
          <SB title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable version of this guide, with worksheets for your initial consultation.
            </div>
            <a href="#" style={{
              display: 'inline-block', background: T.tealBr, color: T.tealInk || T.ink,
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </SB>
        </>}
      >
        <P lead>
          Most clients arrive at PEP with the same question, phrased differently each time: <em>what documents do we actually need?</em> The honest answer is that a thoughtful Florida estate plan typically rests on six instruments — each one quiet on its own, formidable together.
        </P>

        <H2><span id="trust"/>The Living Trust</H2>
        <P>
          A revocable living trust is a flexible legal arrangement that allows you to transfer your assets into a trust during your lifetime. You remain in full control as trustee; the trust simply holds title on your behalf. The practical consequence is that, on your death, those assets pass to your beneficiaries without going through Florida's probate court — which is to say, without the time, expense, and public record that probate involves.
        </P>
        <Pull>The trust is not an instrument of secrecy. It is an instrument of efficiency.</Pull>
        <P>
          A trust is also private. Where a will becomes a public record once filed for probate, a trust does not. For families who value discretion — and for those whose plans involve children from prior marriages, special-needs beneficiaries, or business interests — that privacy matters.
        </P>

        <H2><span id="subtrust"/>The Family Protection Subtrust</H2>
        <P>
          A Family Protection Subtrust is a structural feature of the living trust: a "trust within the trust" that takes effect after your death. Rather than distributing assets outright to your beneficiaries — exposed to their creditors, divorces, and tax events — the subtrust holds and manages those assets on their behalf.
        </P>
        <P>
          The result is a plan that protects your beneficiaries from forces neither of you can predict: a future divorce, a lawsuit, a bankruptcy, a remarriage. Distributions can be made flexibly, according to the standard you set (see our article on <a href="HEMS Explained.html" style={{ color: T.teal }}>HEMS standards</a>), and the principal remains shielded.
        </P>

        <H2><span id="will"/>The Last Will &amp; Testament</H2>
        <P>
          Most people have heard of a will, and it remains a critical component of a complete plan — but its role is different than most clients expect. In a properly funded trust plan, the will functions primarily as a <em>pour-over will</em>: a safety net that captures any asset not titled in the trust at your death and directs it into the trust to be distributed under the trust's terms.
        </P>
        <P>
          The will also performs functions the trust cannot. Most importantly, it is where you nominate the guardian for your minor children. If you have minor children and no will, the Florida courts decide who raises them — a result no client has ever asked for.
        </P>

        <Callout title="A Common Misconception">
          <strong>"I have a will, so I don't need a trust."</strong> A will alone passes through probate. For Florida residents with real property or substantial assets, a trust is almost always the more sensible foundation, with the will serving as backup.
        </Callout>

        <H2><span id="poa"/>General Durable Power of Attorney</H2>
        <P>
          Who attends to your affairs if you are incapacitated? A durable power of attorney grants someone you trust — your agent or attorney-in-fact — the legal authority to manage your financial matters and act on your behalf during periods of incapacity.
        </P>
        <P>
          The "durable" qualifier is the operative word: it means the document remains effective even after you can no longer make decisions for yourself, which is precisely when it is most needed. A POA permits the agent to pay your bills, manage your investments, file your tax returns, and handle real estate matters when you cannot.
        </P>

        <H2><span id="health"/>Healthcare Directives</H2>
        <H3>Advance Care Directive (Living Will)</H3>
        <P>
          Your living will allows you to express your wishes regarding medical treatment and end-of-life care, in advance and in writing. It addresses life-sustaining treatments, pain management, and the interventions you would (and would not) want if you could no longer speak for yourself. Done properly, it relieves your family of the most difficult conversation a family can have.
        </P>
        <H3>Healthcare Surrogate Designation</H3>
        <P>
          A healthcare surrogate is the person you authorize to make medical decisions when you cannot. The surrogate complements your living will: where the living will sets the standard, the surrogate applies it to the specific facts of the moment, in consultation with your physicians.
        </P>

        <H2><span id="hipaa"/>HIPAA Authorization</H2>
        <P>
          Federal privacy law restricts who may receive your protected health information. A HIPAA authorization names the individuals — typically your spouse, agent, and surrogate — permitted to receive that information on your behalf, so that the people who need to help you are not stopped at the hospital's privacy desk.
        </P>

        <Callout tone="dark" title="Putting it together">
          A complete Florida estate plan typically includes all six documents — drafted to work together as a single, coherent instrument of your wishes. We design, draft, and execute the full set under a single flat fee.
        </Callout>

        <H2>How PEP approaches it</H2>
        <P>
          Each document above is a tool. The plan is the composition. Our practice exists to help Florida families assemble the right composition for their specific circumstances — drafted by an attorney whose name is on the engagement letter, reviewed in plain language before any legalese is signed.
        </P>
        <P>
          If you would like to discuss what an appropriate plan might look like for your family, <a href="Contact.html" style={{ color: T.teal }}>schedule a complimentary thirty-minute consultation</a>.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['HEMS', 'A practical guide to HEMS distributions', 'HEMS Explained.html', '8 min'],
        ['Marriage', 'Individual vs. joint trusts for married couples', 'Individual vs Joint Trusts.html', '6 min'],
        ['Trust Funding', 'Why and how to fund your trust', 'Funding Your Trust.html', '7 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleEPE = ArticleEPE;

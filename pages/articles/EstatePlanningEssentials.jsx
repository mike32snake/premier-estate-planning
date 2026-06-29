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
        lede="Your plan is more than a record of how your assets pass. It is part of a bigger financial picture, built to carry out your wishes and look after the people you love."
        meta={[['Reading','11 minutes']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/estate-planning-essentials.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          Most clients come to us with the same question, asked in different ways: <em>what documents do we actually need?</em> For most Florida families, a solid plan rests on six. Each one does a specific job, and they work best as a set.
        </P>

        <H2><span id="trust"/>The Living Trust</H2>
        <P>
          A living trust is a flexible legal arrangement that allows you to transfer your assets into a trust during your lifetime. You remain in full control as trustee; the trust simply holds title on your behalf. The practical consequence is that, on your death, those assets pass to your beneficiaries without going through Florida's probate court. That means avoiding the time, expense, and public record that probate involves.
        </P>
        <Pull>A trust does two things well: it keeps your family out of probate, and it keeps your affairs private.</Pull>
        <P>
          A trust is also private. A will becomes a public record once it is filed for probate. A trust stays out of the public record. That matters for families who value their privacy, and especially for those with children from prior marriages, special-needs beneficiaries, or business interests.
        </P>

        <H2><span id="subtrust"/>The Family Protection Subtrust</H2>
        <P>
          A Family Protection Subtrust is a structural feature of the living trust: a "trust within the trust" that takes effect after your death. The subtrust holds and manages those assets for your beneficiaries. Creditors, divorces, and tax events have a much harder time reaching money held this way than money handed over outright.
        </P>
        <P>
          The result is a plan that protects your beneficiaries from forces neither of you can predict: a future divorce, a lawsuit, a bankruptcy, a remarriage. Distributions can be made flexibly, according to the standard you set (see our article on the <a href="HEMS Explained.html" style={{ color: T.teal }}>Health, Education &amp; Maintenance standard</a>), and the principal remains shielded.
        </P>

        <H2><span id="will"/>The Last Will &amp; Testament</H2>
        <P>
          Most people have heard of a will, and it is a critical part of a complete plan, though its role is different than most clients expect. In a properly funded trust plan, the will functions primarily as a <em>pour-over will</em>: a safety net that captures any asset not titled in the trust at your death and directs it into the trust to be distributed under the trust's terms.
        </P>
        <P>
          The will also performs functions the trust cannot. Most importantly, it is where you nominate the guardian for your minor children. If you have minor children and no will, a Florida court decides who raises them. No client has ever wanted that.
        </P>

        <Callout title="A Common Misconception">
          <strong>"I have a will, so I don't need a trust."</strong> A will alone passes through probate. For Florida residents with real property or substantial assets, a trust is almost always the more sensible foundation, with the will serving as backup.
        </Callout>

        <H2><span id="poa"/>General Durable Power of Attorney</H2>
        <P>
          Who attends to your affairs if you are incapacitated? A durable power of attorney gives someone you trust (your agent, or attorney-in-fact) the legal authority to manage your financial matters and act for you during periods of incapacity.
        </P>
        <P>
          The word "durable" is the important part: it means the document keeps working even after you can no longer make decisions, which is exactly when you need it most. A POA permits the agent to pay your bills, manage your investments, file your tax returns, and handle real estate matters when you cannot.
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
          Federal privacy law restricts who may receive your protected health information. A HIPAA authorization names the people, usually your spouse, agent, and surrogate, allowed to receive that information, so the people helping you are not stopped at the hospital's privacy desk.
        </P>

        <Callout tone="dark" title="Putting it together">
          A complete Florida plan usually includes all six documents, drafted to work together as one. We design, draft, and execute the full set for one flat fee.
        </Callout>

        <H2>How PEP approaches it</H2>
        <P>
          Each document above is a tool. The plan is how they fit together. We help Florida families put together the right combination for their situation, drafted by the attorney whose name is on the engagement letter and explained in plain language before anything is signed.
        </P>
        <P>
          If you would like to discuss what an appropriate plan might look like for your family, <a href="Contact.html" style={{ color: T.teal }}>schedule a free thirty-minute consultation</a>.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Trust Admin', 'A practical guide to trust distributions', 'HEMS Explained.html', '8 min'],
        ['Marriage', 'Individual vs. joint trusts for married couples', 'Individual vs Joint Trusts.html', '6 min'],
        ['Trust Funding', 'Why and how to fund your trust', 'Funding Your Trust.html', '7 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleEPE = ArticleEPE;

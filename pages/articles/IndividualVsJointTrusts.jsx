// Article: Individual vs. Joint Trusts

function ArticleTrustsCompare() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · MARRIED COUPLES"
        title="Individual vs. joint trusts:"
        italic="a strategic choice."
        lede="Florida is a separate-property state, and for most couples here, individual trusts work better than a joint trust. The reasons have everything to do with what happens after one spouse passes."
        meta={[['Reading','6 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/individual-vs-joint-trusts.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          A joint trust feels intuitive: one married couple, one document, one set of decisions. In a community-property state, that intuition can be right. Florida is a separate-property state, and here separate trusts for each spouse usually make for a sturdier plan. You feel the difference years after signing, when one spouse has passed and the other is settling what remains.
        </P>

        <H2>Why separate trusts tend to win in Florida</H2>

        <H3>Streamlined administration</H3>
        <P>
          When a spouse passes, the trustee, often the surviving spouse, has to sort out which assets belonged to the person who died, which were jointly held, and which belonged to the survivor. With separate trusts, the title already answers that. With a joint trust, the same question can take months of forensic accounting.
        </P>

        <H3>Enhanced asset protection</H3>
        <P>
          Each spouse has their own creditors, their own potential liabilities, and their own professional exposures. Separate trusts keep those exposures apart. A joint trust mixes them together, and mixed assets in a Florida trust can lose certain protections, including the strong Florida "tenancy by the entireties" treatment that shields joint marital property from one spouse's creditors.
        </P>

        <Pull>The structure should make the worst day easier on the people you leave behind.</Pull>

        <H3>Tax advantages</H3>
        <P>
          When the first spouse dies, their assets get a step-up in basis to fair-market value, which is a real tax benefit for property that has appreciated. With separate trusts, it is easy to see which assets get the step-up. With a joint trust, sorting out the step-up on mixed assets can get technical and sometimes costs the family tax benefits.
        </P>
        <P>
          Separate trusts also make it easier to implement credit-shelter trust planning at the first death, preserve each spouse's federal estate-tax exemption, and track lifetime gifts cleanly.
        </P>

        <H3>Clearer record-keeping</H3>
        <P>
          Each trust has a single grantor, single tax identification approach, and a clear chain of title. Joint trusts require ongoing tracking of which spouse contributed what, and that record-keeping tends to slip over decades of marriage.
        </P>

        <H2>Where joint trusts struggle in Florida</H2>
        <UL>
          <LI>Difficulty tracking each spouse's separate-property contributions.</LI>
          <LI>Potential gift-tax complications between spouses.</LI>
          <LI>Challenges implementing credit-shelter planning at the first death.</LI>
          <LI>More complex administration when one spouse passes.</LI>
          <LI>Possible erosion of creditor protection on jointly-titled assets.</LI>
        </UL>

        <H2>The Lifetime Protection Trust advantage</H2>
        <P>
          Most PEP-drafted trusts include <em>Lifetime Protection Trust</em> (LPT) provisions: structural elements that hold inherited assets in protective form for your beneficiaries after your death. The benefits compound naturally with separate trusts:
        </P>
        <UL>
          <LI>Enhanced asset protection for inheriting children.</LI>
          <LI>Insulation from a beneficiary's future creditors or divorce.</LI>
          <LI>Flexibility to address the needs of future generations.</LI>
          <LI>Continued tax efficiency on inherited assets.</LI>
          <LI>Preservation of family wealth across multiple lifetimes.</LI>
        </UL>

        <Callout title="Already have a joint trust?">
          Joint trusts can be amended, restated, or unwound into separate trusts depending on your circumstances. We do not recommend changing it as a reflex. Sometimes a joint trust serves a couple well. We do recommend a review.
        </Callout>

        <H2>Making the right choice</H2>
        <P>
          Some clients arrive with existing joint trusts, sometimes drafted in another state. Others are planning their first estate documents. Either way, the question is the same: what structure best serves <em>this</em> family, in <em>Florida</em>, given <em>these</em> assets and <em>these</em> beneficiaries?
        </P>
        <P>
          We can:
        </P>
        <UL>
          <LI>Draft new separate trusts.</LI>
          <LI>Maintain and optimize your existing joint trust where appropriate.</LI>
          <LI>Restate a joint trust into separate trusts when the circumstances warrant.</LI>
        </UL>

        <Callout tone="dark">
          Let's talk about which structure fits your family. The thirty-minute consultation is free, and you will leave with a clear recommendation in plain language.
        </Callout>

        <P>
          To begin, <a href="Contact.html" style={{ color: T.teal }}>schedule a consultation</a> or call our office at 813.330.0136.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Core Planning', 'The cornerstones of estate planning', 'Estate Planning Essentials.html', '11 min'],
        ['Trust Admin', 'HEMS, in practice', 'HEMS Explained.html', '9 min'],
        ['Funding', 'Funding your trust, step by step', 'Funding Your Trust.html', '7 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleTrustsCompare = ArticleTrustsCompare;

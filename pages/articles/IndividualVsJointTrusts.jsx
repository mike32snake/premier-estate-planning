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
        lede="For Florida couples — a separate-property state — individual trusts almost always serve better than a joint trust. The reasons have less to do with the wedding and more to do with what happens after one spouse passes."
        meta={[['Reading','6 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/individual-vs-joint-trusts.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </SB>
          <SB title="The Short Answer">
            <div style={{ fontSize: 15, lineHeight: 1.65 }}>
              In Florida, separate trusts for each spouse are usually preferable to a single joint trust — for administration, protection, and tax planning reasons explored below.
            </div>
          </SB>
          <SB title="Schedule a Review" dark>
            <div style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>
              Already have a joint trust? We will review it without obligation and recommend whether amendment is worth the effort.
            </div>
            <a href="Contact.html" style={{
              display: 'inline-block', background: T.tealBr, color: T.tealInk || T.ink,
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Book a Review →</a>
          </SB>
        </>}
      >
        <P lead>
          A joint trust feels intuitive: one married couple, one document, one set of decisions. For couples living in community-property states, that intuition can be correct. In Florida — a separate-property state — separate trusts for each spouse typically produce a more durable plan. The difference shows up not at signing but years later, when one spouse has passed and the other is administering what remains.
        </P>

        <H2>Why separate trusts tend to win in Florida</H2>

        <H3>Streamlined administration</H3>
        <P>
          When a spouse passes, the trustee — often the surviving spouse — needs to identify which assets were the decedent's, which were jointly held, and which belonged to the survivor. With separate trusts, that question is already answered by the title of the assets. With a joint trust, the same question can require months of forensic accounting.
        </P>

        <H3>Enhanced asset protection</H3>
        <P>
          Each spouse has their own creditors, their own potential liabilities, and their own professional exposures. Separate trusts keep those exposures cleanly separated. A joint trust commingles them — and commingled assets in a Florida trust can lose certain protections, particularly the powerful Florida "tenancy by the entireties" treatment that shields joint marital property from a single spouse's creditors.
        </P>

        <Pull>The structure should make administration easier, not harder, on the worst day.</Pull>

        <H3>Tax advantages</H3>
        <P>
          When the first spouse dies, the basis of their assets is stepped up to fair-market value — a meaningful tax benefit for appreciated property. With separate trusts, identifying which assets receive the step-up is straightforward. With a joint trust, sorting out the step-up basis on commingled assets can be technically complex and occasionally results in lost tax benefits.
        </P>
        <P>
          Separate trusts also make it easier to implement credit-shelter trust planning at the first death, preserve each spouse's federal estate-tax exemption, and track lifetime gifts cleanly.
        </P>

        <H3>Clearer record-keeping</H3>
        <P>
          Each trust has a single grantor, single tax identification approach, and a clear chain of title. Joint trusts require ongoing tracking of which spouse contributed what — a record-keeping burden that often degrades over decades of marriage.
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
          Joint trusts can be amended, restated, or unwound into separate trusts depending on your circumstances. We do not recommend amendment as a reflex — sometimes a joint trust serves a particular couple well. We do recommend a review.
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
          Let's discuss which structure best serves your family. A thirty-minute consultation is complimentary, and you will leave with a clear recommendation in plain language.
        </Callout>

        <P>
          To begin, <a href="Contact.html" style={{ color: T.teal }}>schedule a consultation</a> or call our office at (727) 555·0142.
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

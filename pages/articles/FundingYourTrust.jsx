// Article: Funding Your Trust

function ArticleFunding() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · TRUST FUNDING"
        title="Funding your trust:"
        italic="why, what, when, how."
        lede="An unfunded trust is a beautifully drafted set of pages that does almost nothing. Funding the trust — the act of retitling assets into its name — is what turns the document into a working instrument."
        meta={[['Reading','7 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/funding-your-trust.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </SB>
          <SB title="The Short Version">
            <div style={{ fontSize: 15, lineHeight: 1.65 }}>
              Signed but unfunded trusts pass through probate anyway. Funding is the difference between a plan that works and a plan that exists.
            </div>
          </SB>
          <SB title="Done With You" dark>
            <div style={{ fontSize: 15, lineHeight: 1.65, marginBottom: 14 }}>
              PEP prepares the deeds, beneficiary forms, and retitling letters as part of every estate-planning engagement.
            </div>
            <a href="Contact.html" style={{
              display: 'inline-block', background: T.tealBr, color: T.tealInk || T.ink,
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Schedule a Call →</a>
          </SB>
        </>}
      >
        <P lead>
          A trust is a vehicle. Funding is the act of putting the cargo inside. We have seen elegantly drafted trusts sit empty for a decade — and the family then go through probate as if the trust had never been signed. Funding is the unglamorous step that determines whether the plan actually performs on the day it is needed.
        </P>

        <H2>Why funding matters</H2>
        <UL>
          <LI>Assets titled in the trust avoid Florida's probate court process entirely.</LI>
          <LI>A properly funded trust saves both time and money for those you leave behind.</LI>
          <LI>Funding gives your successor trustee a clean, efficient administration — not a forensic search.</LI>
          <LI>Distributions flow according to the trust's terms without court supervision.</LI>
          <LI>Additional asset protection provisions only operate over assets the trust actually owns.</LI>
        </UL>

        <Pull>A trust is not what you signed. A trust is what you titled.</Pull>

        <H2>What does it mean to "fund" a trust?</H2>
        <P>
          Funding refers to the act of transferring ownership of appropriate assets from yourself, individually, to yourself, as trustee of your trust. The trust becomes the legal owner; you remain in full control as its trustee. Nothing about your day-to-day life changes — only the title.
        </P>
        <H3>Assets typically transferred into the trust</H3>
        <UL>
          <LI>Brokerage and investment accounts (outside of retirement accounts).</LI>
          <LI>Bank accounts.</LI>
          <LI>Business interests in closely-held entities.</LI>
          <LI>Real estate.</LI>
          <LI>Cars, RVs, boats, and other titled vehicles.</LI>
        </UL>
        <Callout title="Not everything belongs in the trust">
          Qualified retirement accounts, IRAs, 401(k)s, 403(b)s, annuities, and life insurance policies are <em>not</em> retitled into the trust. Instead, where appropriate, we name the trust as a beneficiary so that these assets pour into the trust at your death and follow its terms. The reason is tax: retitling a retirement account into a non-spousal entity can trigger immediate income taxation. Beneficiary designation avoids that result.
        </Callout>

        <H2>How each asset class is funded</H2>

        <H3>Real estate</H3>
        <P>
          A new deed is prepared transferring title from you, individually, to you as trustee of your trust. The deed must be properly executed and recorded with the County Recorder's Office. PEP prepares Florida deeds in-house as part of the engagement; out-of-state property is funded through local counsel we coordinate with.
        </P>

        <H3>Brokerage and investment accounts (non-retirement)</H3>
        <P>
          Each financial institution has its own change-of-ownership form. The institution will typically also request a Certificate of Trust — a short document we prepare summarising the trust's essential terms without disclosing its contents.
        </P>

        <H3>Bank accounts</H3>
        <P>
          A new ownership form, signed at the branch or via the institution's online process, transfers the account into the name of the trust. Same Certificate of Trust as above.
        </P>

        <H3>Qualified retirement accounts</H3>
        <P>
          Rather than retitling, complete a change-of-beneficiary form designating the trust (in the appropriate manner — typically as a "see-through" trust) as primary or contingent beneficiary. Beneficiary designations override the will and trust documents on the merits of the account, so getting these forms right is more consequential than most clients realise.
        </P>

        <H3>Vehicles, boats, RVs, and titled assets</H3>
        <P>
          Florida's Department of Highway Safety and Motor Vehicles will issue a new title in the name of the trust. Bring the existing title and a Certificate of Trust to a DMV office or processing service; the new title is issued in a few business days.
        </P>

        <H2>When to fund</H2>
        <P>
          Funding occurs <em>after</em> the trust is signed, witnessed, notarised, and executed. It is the immediate next step of the engagement, and we do not consider an estate plan complete until funding is meaningfully underway.
        </P>
        <H3>Newly-acquired assets after execution</H3>
        <P>
          Once the trust exists, new acquisitions can go directly into its name. At a real estate closing, simply ask for the deed to be in the name of the trust. New brokerage and bank accounts can be opened in the trust's name from day one. Newly purchased vehicles can be titled to the trust at the dealership. The habit of acquiring assets in the trust's name is the most efficient form of ongoing funding.
        </P>

        <Callout tone="dark" title="PEP funds the trust with you">
          We do not hand you a binder and wish you well. Funding instructions are included in every engagement, our team prepares the deeds and Certificate of Trust as part of the flat fee, and we follow up at thirty, sixty, and ninety days to confirm the funding has been completed.
        </Callout>

        <P>
          If you have an existing trust that you suspect may be partially or wholly unfunded, the fix is straightforward. <a href="Contact.html" style={{ color: T.teal }}>Schedule a complimentary review</a> and we will inventory your existing titling and identify the gaps in writing.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Core Planning', 'The cornerstones of estate planning', 'Estate Planning Essentials.html', '11 min'],
        ['Trust Admin', 'HEMS, in practice', 'HEMS Explained.html', '9 min'],
        ['Marriage', 'Individual vs. joint trusts', 'Individual vs Joint Trusts.html', '6 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleFunding = ArticleFunding;

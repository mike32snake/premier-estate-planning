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
        lede="An unfunded trust is a nicely drafted stack of paper that does almost nothing. Funding it means retitling your assets into the trust's name, and that is what makes the document actually work."
        meta={[['Reading','7 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/funding-your-trust.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          Think of the trust as a container. Funding is putting your assets inside it. We have seen well-drafted trusts sit empty for a decade, and then the family goes through probate anyway, as if the trust had never been signed. Funding is the unglamorous step that decides whether the plan works on the day it is needed.
        </P>

        <H2>Why funding matters</H2>
        <UL>
          <LI>Assets titled in the trust avoid Florida's probate court process entirely.</LI>
          <LI>A properly funded trust saves both time and money for those you leave behind.</LI>
          <LI>Funding spares your successor trustee a forensic search for your assets.</LI>
          <LI>Distributions flow according to the trust's terms without court supervision.</LI>
          <LI>Additional asset protection provisions only operate over assets the trust actually owns.</LI>
        </UL>

        <Pull>A trust only protects what you actually put inside it.</Pull>

        <H2>What does it mean to "fund" a trust?</H2>
        <P>
          Funding refers to the act of transferring ownership of appropriate assets from yourself, individually, to yourself, as trustee of your trust. The trust becomes the legal owner, and you stay in full control as its trustee. Nothing about your day-to-day life changes except the title.
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
          Each financial institution has its own change-of-ownership form. The institution will usually also ask for a Certificate of Trust, a short document we prepare that summarizes the trust's key terms without revealing its contents.
        </P>

        <H3>Bank accounts</H3>
        <P>
          A new ownership form, signed at the branch or via the institution's online process, transfers the account into the name of the trust. Same Certificate of Trust as above.
        </P>

        <H3>Qualified retirement accounts</H3>
        <P>
          Instead of retitling, complete a change-of-beneficiary form naming the trust (set up the right way, usually as a "see-through" trust) as primary or contingent beneficiary. Beneficiary designations override what your will and trust say about that account, so getting these forms right matters more than most clients realize.
        </P>

        <H3>Vehicles, boats, RVs, and titled assets</H3>
        <P>
          Florida's Department of Highway Safety and Motor Vehicles will issue a new title in the name of the trust. Bring the existing title and a Certificate of Trust to a DMV office or processing service; the new title is issued in a few business days.
        </P>

        <H2>When to fund</H2>
        <P>
          Funding happens <em>after</em> the trust is signed, witnessed, notarized, and executed. It is the very next step, and we do not call a plan complete until funding is well underway.
        </P>
        <H3>Newly-acquired assets after execution</H3>
        <P>
          Once the trust exists, new acquisitions can go directly into its name. At a real estate closing, simply ask for the deed to be in the name of the trust. New brokerage and bank accounts can be opened in the trust's name from day one. Newly purchased vehicles can be titled to the trust at the dealership. The habit of acquiring assets in the trust's name is the most efficient form of ongoing funding.
        </P>

        <Callout tone="dark" title="PEP funds the trust with you">
          We do not hand you a binder and wish you well. Funding instructions are included in every engagement, our team prepares the deeds and Certificate of Trust as part of the flat fee, and we follow up at thirty, sixty, and ninety days to confirm the funding has been completed.
        </Callout>

        <P>
          If you have an existing trust that may be partly or fully unfunded, the fix is straightforward. <a href="Contact.html" style={{ color: T.teal }}>Schedule a free review</a> and we will go through how your assets are titled and put the gaps in writing.
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

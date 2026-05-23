// Article: HEMS Explained

function ArticleHEMS() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  const Categories = ({ title, intro, groups }) => (
    <div style={{ margin: '32px 0' }}>
      <H3>{title}</H3>
      <P>{intro}</P>
      <div style={{
        border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden', marginTop: 16,
      }}>
        {groups.map(([g, items], i) => (
          <div key={g} style={{
            display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24,
            padding: '20px 24px',
            borderBottom: i < groups.length - 1 ? `1px solid ${T.rule}` : 'none',
            background: i % 2 === 0 ? T.cream : T.sand,
          }}>
            <div style={{ fontFamily: T.display, fontSize: 20, letterSpacing: -0.2, color: T.ink }}>{g}</div>
            <div style={{ fontSize: 15, lineHeight: 1.65, color: T.muted }}>
              {items.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <window.PEPPage current="resources">
      <window.PEPArticleHero
        category="GUIDE · TRUST ADMINISTRATION"
        title="HEMS, in practice."
        lede="Health, Education, Maintenance, and Support — a flexible yet protective standard that guides the responsible use of trust funds. A practical look at what falls inside, what falls outside, and why the line matters."
        meta={[['Reading','9 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <SB title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/hems-explained.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </SB>
          <SB title="The Four Letters">
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              <div><strong>H</strong> &nbsp;Health</div>
              <div><strong>E</strong> &nbsp;Education</div>
              <div><strong>M</strong> &nbsp;Maintenance</div>
              <div><strong>S</strong> &nbsp;Support</div>
            </div>
          </SB>
          <SB title="Why It Matters" dark>
            <div style={{ fontSize: 15, lineHeight: 1.65 }}>
              The HEMS standard is the difference between a trust that protects a beneficiary and one that can be drained. We draft to the standard; we administer to it.
            </div>
          </SB>
        </>}
      >
        <P lead>
          HEMS — short for <em>Health, Education, Maintenance, and Support</em> — is a discretionary distribution standard found in most well-drafted trusts. It gives a trustee the latitude to distribute trust assets for a beneficiary's needs while preserving the trust's protective shell against creditors, divorce, and impulsive spending. The four letters look simple. In practice, the line between "covered" and "not covered" deserves attention.
        </P>

        <Pull>HEMS is a discipline of language. Done well, it preserves both flexibility and protection.</Pull>

        <Categories
          title="Health"
          intro="Expenses must be reasonable and medically necessary — not cosmetic or extravagant — unless a clear health justification is established."
          groups={[
            ['Medical care',           ['Physician visits', 'Hospitalization', 'Specialist consultations', 'Surgery', 'Physical therapy']],
            ['Prescriptions',          ['Pharmacy costs', 'Durable medical equipment', 'Insulin pumps, crutches, mobility aids']],
            ['Dental & vision',        ['Routine dental', 'Orthodontics', 'Eye exams', 'Glasses and contacts', 'LASIK']],
            ['Mental health',          ['Psychotherapy', 'Psychiatric treatment', 'Substance abuse rehabilitation']],
            ['Preventive & holistic',  ['Health insurance premiums', 'Routine checkups', 'Vaccinations', 'Acupuncture, chiropractic']],
            ['Long-term care',         ['Home health aides', 'Assisted living', 'Nursing home costs', 'Memory care']],
          ]}
        />

        <Categories
          title="Education"
          intro="Expenses must be reasonable and directly tied to actual learning or training. The standard accommodates traditional schooling, vocational training, and meaningful enrichment."
          groups={[
            ['Traditional schooling',  ['Tuition (K–12, college, graduate)', 'Room and board', 'Books and lab fees']],
            ['Technology',             ['Laptop or tablet for school use', 'Educational software', 'Required subscriptions']],
            ['Study-related travel',   ['Airfare and housing for study abroad', 'Travel to and from school', 'Educational tours']],
            ['Tutoring & test prep',   ['Private tutoring', 'SAT, ACT, GRE, LSAT, MCAT prep', 'Academic coaching']],
            ['Vocational training',    ['Trade school tuition', 'Apprenticeships', 'Certification programs']],
            ['Continuing education',   ['Professional development', 'Skill-development courses', 'Music or art instruction']],
          ]}
        />

        <Categories
          title="Maintenance"
          intro="Maintenance expenses are those needed to maintain the beneficiary's current standard of living — neither raising it materially nor letting it fall."
          groups={[
            ['Housing',                ['Rent or mortgage', 'Property taxes', 'Homeowner\'s insurance', 'Maintenance and repairs', 'Utilities']],
            ['Transportation',         ['Car payments and insurance', 'Fuel and maintenance', 'Public transit or rideshare']],
            ['Day-to-day living',      ['Groceries', 'Clothing', 'Personal care', 'Phone and internet']],
            ['Lifestyle continuity',   ['Club memberships consistent with prior lifestyle', 'Reasonable travel', 'Pet care']],
          ]}
        />

        <Categories
          title="Support"
          intro="Support overlaps with maintenance and contemplates a beneficiary's reasonable standard of living. Luxury, extravagance, and discretionary speculation generally fall outside."
          groups={[
            ['Family support',         ['Spousal or child support obligations of the beneficiary', 'Modest gifts within the family']],
            ['Insurance & taxes',      ['Life and disability insurance premiums', 'Personal income tax assistance']],
            ['Professional services',  ['Legal counsel', 'Accounting and tax preparation', 'Financial advisory fees']],
          ]}
        />

        <Callout title="Where HEMS does not reach">
          Luxury vehicles beyond a reasonable need, speculative investments, gambling, gifts to non-beneficiaries beyond modest amounts, and purchases inconsistent with the beneficiary's established standard of living. The trustee's duty is to interpret the standard reasonably — and to document the basis for every distribution decision.
        </Callout>

        <H2>Why the line matters</H2>
        <P>
          The HEMS language is not boilerplate. It is the legal armature that allows a trust to protect a beneficiary from a future creditor, an opposing party in a divorce, or a bankruptcy. A trustee who consistently distributes <em>within</em> the HEMS standard preserves that protection. A trustee who distributes <em>outside</em> it can compromise the trust's protective character, sometimes permanently.
        </P>

        <Callout tone="dark" title="If you are a trustee">
          Document every distribution decision. A short paragraph in the file — what was requested, what was approved, why it falls within HEMS — is the single most useful protection against future challenge.
        </Callout>

        <P>
          PEP drafts HEMS standards into nearly every trust we prepare, and we counsel trustees on day-to-day administration. If you are a trustee navigating a discretionary distribution and you are unsure, <a href="Contact.html" style={{ color: T.teal }}>a brief call is usually all it takes to resolve the question</a>.
        </P>
      </window.PEPArticleBody>

      <window.PEPRelated items={[
        ['Core Planning', 'The cornerstones of estate planning', 'Estate Planning Essentials.html', '11 min'],
        ['Marriage', 'Individual vs. joint trusts', 'Individual vs Joint Trusts.html', '6 min'],
        ['Funding', 'Funding your trust, step by step', 'Funding Your Trust.html', '7 min'],
      ]}/>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}
window.ArticleHEMS = ArticleHEMS;

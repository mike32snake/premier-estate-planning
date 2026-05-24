// Article: HEMS Explained

function ArticleHEMS() {
  const T = window.PEP;
  const { H2, H3, P, Pull, Callout, UL, LI } = window.PEPProse;
  const SB = window.PEPSidebarBlock;

  const Categories = ({ title, intro, groups }) => (
    <div style={{ margin: '32px 0' }}>
      <H2>{title}</H2>
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
        lede="Health, Education, Maintenance, and Support: the standard that guides how trust funds get used. A practical look at what falls inside, what falls outside, and why the line matters."
        meta={[['Reading','9 minutes'],['Updated','Spring 2026']]}
      />

      <window.PEPArticleBody
        sidebar={<>
          <window.PEPSidebarBlock title="Download" dark>
            <div style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 14 }}>
              A printable, PEP-branded version of this guide.
            </div>
            <a href="guides/hems-explained.pdf" download style={{
              display: 'inline-block', background: '#4aa9a4', color: '#0a0a0a',
              padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, textDecoration: 'none',
            }}>Download PDF ↓</a>
          </window.PEPSidebarBlock>
        </>}
      >
        <P lead>
          HEMS stands for <em>Health, Education, Maintenance, and Support</em>. It is the standard most well-drafted trusts use to guide distributions. It gives a trustee room to cover a beneficiary's real needs while keeping the trust's protections against creditors, divorce, and impulse spending intact. The four letters look simple. In practice, the line between "covered" and "not covered" is where the judgment lives.
        </P>

        <Pull>Good HEMS language gives a trustee room to help while keeping the trust's protections intact.</Pull>

        <Categories
          title="Health"
          intro="Expenses should be reasonable and medically necessary, not cosmetic or extravagant, unless there is a clear health reason."
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
          intro="Maintenance covers what is needed to keep the beneficiary's current standard of living, without raising it much or letting it slip."
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
          Luxury vehicles beyond a reasonable need, speculative investments, gambling, gifts to non-beneficiaries beyond modest amounts, and purchases inconsistent with the beneficiary's established standard of living. The trustee's job is to read the standard reasonably and to write down the reason for every distribution.
        </Callout>

        <H2>Why the line matters</H2>
        <P>
          The HEMS language does real work. It is what lets a trust protect a beneficiary from a future creditor, a divorce, or a bankruptcy. A trustee who keeps distributions <em>within</em> the HEMS standard preserves that protection. A trustee who goes <em>outside</em> it can weaken the trust's protections, sometimes for good.
        </P>

        <Callout tone="dark" title="If you are a trustee">
          Document every distribution decision. A short note in the file, covering what was requested, what was approved, and why it falls within HEMS, is the single most useful protection against a future challenge.
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

// Quiz page — five-question estate planning intake with checklist email capture

function QuizPage() {
  const T = window.PEP;

  const questions = [
    {
      key: 'family',
      prompt: 'What does your household look like?',
      help: 'Pick the one that best fits today.',
      options: [
        ['single',     'Single, no dependents'],
        ['couple',     'Married or partnered, no children'],
        ['parents',    'Parents of minor children'],
        ['empty-nest', 'Parents of adult children'],
        ['blended',    'Blended family (prior marriages, step-children)'],
      ],
    },
    {
      key: 'realestate',
      prompt: 'Do you own real estate in Florida or another state?',
      options: [
        ['no',       'No real estate'],
        ['fl-only',  'Florida home only'],
        ['fl-multi', 'Florida home plus other Florida property'],
        ['multi',    'Real estate in more than one state'],
      ],
    },
    {
      key: 'business',
      prompt: 'Do you own all or part of a business?',
      options: [
        ['none',     'No'],
        ['side',     'Yes, a side business'],
        ['primary',  'Yes, this is my primary income'],
        ['partners', 'Yes, with one or more partners'],
      ],
    },
    {
      key: 'docs',
      prompt: 'Which of these do you already have in place?',
      help: 'Pick the most complete one that fits.',
      options: [
        ['none',         'Nothing yet'],
        ['old-will',     'A will from more than five years ago'],
        ['recent-will',  'A recent will'],
        ['trust',        'A living trust (funded or not)'],
        ['full-plan',    'A full plan with POA and healthcare directives'],
      ],
    },
    {
      key: 'goal',
      prompt: 'What brought you here today?',
      help: 'Pick whatever is most on your mind.',
      options: [
        ['get-started',     'Get something basic in place'],
        ['update',          'Update an outdated plan'],
        ['avoid-probate',   'Keep my family out of probate'],
        ['protect-kids',    'Make sure my kids are looked after'],
        ['succession',      'Hand off or sell my business'],
        ['incapacity',      'Plan for a possible health event'],
      ],
    },
  ];

  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const total = questions.length;
  const done = step >= total;
  const pct = Math.min(100, Math.round((step / total) * 100));

  function pick(key, val) {
    setAnswers(prev => ({ ...prev, [key]: val }));
    setStep(s => s + 1);
  }

  // Build the recommended checklist from the answers.
  function recommendations() {
    const a = answers;
    const recs = [];
    recs.push(['Last Will & Testament',           'Names personal representatives and directs your assets.']);
    if (a.family === 'parents' || a.goal === 'protect-kids') {
      recs.push(['Guardianship Designation',     'Names a guardian for your minor children.']);
    }
    if (a.realestate !== 'no' || a.docs === 'none' || a.docs === 'old-will' || a.goal === 'avoid-probate') {
      recs.push(['Living Trust',                 'Avoids probate and keeps your affairs private.']);
      recs.push(['Pour-Over Will',               'A safety net that captures anything not titled in trust.']);
    }
    recs.push(['Durable Power of Attorney',      'Names a trusted person to handle finances in incapacity.']);
    recs.push(['Healthcare Surrogate Designation','Names a trusted person to make medical decisions for you.']);
    recs.push(['Living Will',                    'Documents your wishes for end-of-life care.']);
    if (a.business && a.business !== 'none') {
      recs.push(['Business Succession Plan',     'Buy-sell terms, LLC reforms, and key-person planning.']);
    }
    if (a.realestate === 'multi') {
      recs.push(['Multi-State Coordination',     'Trust structures that work across jurisdictions.']);
    }
    return recs;
  }

  function restart() {
    setStep(0);
    setAnswers({});
    setEmail('');
    setName('');
    setSubmitted(false);
  }

  return (
    <window.PEPPage current="resources">
      <window.PEPHero
        eyebrow="Interactive"
        title="The five-question"
        italic="planning quiz."
        lede="In under two minutes, find out which estate planning documents you probably need and which can wait. We'll email you a checklist."
      />

      <section style={{ padding: '64px 40px 96px' }}>
        <div style={{
          maxWidth: 880, margin: '0 auto',
          background: T.sand, border: `1px solid ${T.rule}`, borderRadius: 18,
          padding: '48px 56px',
        }}>
          {/* Progress bar */}
          {!done && (
            <div style={{ marginBottom: 36 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 600, color: T.sageDk, textTransform: 'uppercase' }}>
                  Question {step + 1} of {total}
                </div>
                <div style={{ fontSize: 12, color: T.muted }}>{pct}% complete</div>
              </div>
              <div style={{ height: 4, background: 'rgba(10,10,10,0.08)', borderRadius: 999 }}>
                <div style={{ height: '100%', width: pct + '%', background: T.teal, borderRadius: 999, transition: 'width 0.25s ease' }}/>
              </div>
            </div>
          )}

          {/* Quiz step */}
          {!done && (
            <div>
              <h2 style={{
                fontFamily: T.display, fontSize: 44, lineHeight: 1.1, letterSpacing: -1,
                margin: '0 0 12px', color: T.ink, fontWeight: 400,
              }}>
                {questions[step].prompt}
              </h2>
              {questions[step].help && (
                <p style={{ fontSize: 14, color: T.muted, margin: '0 0 28px' }}>{questions[step].help}</p>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {questions[step].options.map(([val, label]) => (
                  <button key={val} onClick={() => pick(questions[step].key, val)} style={{
                    textAlign: 'left', padding: '18px 22px', background: T.cream,
                    border: `1px solid ${T.rule}`, borderRadius: 12, fontSize: 16,
                    color: T.ink, cursor: 'pointer', fontFamily: T.body,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  }}>
                    <span>{label}</span>
                    <span style={{ color: T.tealBr, fontSize: 18 }}>→</span>
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} style={{
                  marginTop: 24, background: 'transparent', border: 'none',
                  fontSize: 13, color: T.muted, cursor: 'pointer', padding: 0,
                }}>← Back</button>
              )}
            </div>
          )}

          {/* Results */}
          {done && !submitted && (
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, fontWeight: 600, color: T.sageDk, textTransform: 'uppercase', marginBottom: 14 }}>
                Your Recommended Checklist
              </div>
              <h2 style={{
                fontFamily: T.display, fontSize: 48, lineHeight: 1.05, letterSpacing: -1.2,
                margin: '0 0 14px', color: T.ink, fontWeight: 400,
              }}>
                Based on your answers, <em style={{ color: T.teal }}>here is what we'd cover.</em>
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: T.muted, margin: '0 0 32px' }}>
                This isn't legal advice, just a starting point so you walk into your consultation knowing what to ask. We'll email a clean copy of this checklist.
              </p>

              <div style={{ background: T.cream, border: `1px solid ${T.rule}`, borderRadius: 14, overflow: 'hidden', marginBottom: 36 }}>
                {recommendations().map(([t, d], i, arr) => (
                  <div key={t} style={{
                    padding: '18px 24px',
                    borderBottom: i < arr.length - 1 ? `1px solid ${T.rule}` : 'none',
                    display: 'flex', gap: 16, alignItems: 'flex-start',
                  }}>
                    <span style={{
                      marginTop: 4, width: 16, height: 16, border: `1.5px solid ${T.teal}`,
                      borderRadius: 4, flexShrink: 0,
                    }}/>
                    <div>
                      <div style={{ fontFamily: T.display, fontSize: 20, letterSpacing: -0.3 }}>{t}</div>
                      <div style={{ fontSize: 13, color: T.muted, marginTop: 2, lineHeight: 1.55 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <form
                action="https://formsubmit.co/info@pep.law"
                method="POST"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
              >
                <input type="hidden" name="_subject"  value="New Quiz Submission: Premier Estate Planning" />
                <input type="hidden" name="_captcha"  value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next"     value={(typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '') + '?submitted=true'} />
                <input type="text"   name="_honey"    style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {Object.entries(answers).map(([k, v]) => (
                  <input key={k} type="hidden" name={`answer_${k}`} value={v} />
                ))}
                <input
                  type="text" name="name" placeholder="Your name" required
                  value={name} onChange={(e) => setName(e.target.value)}
                  style={{
                    padding: '14px 16px', fontFamily: T.body, fontSize: 15, color: T.ink,
                    border: `1px solid ${T.rule}`, borderRadius: 10, background: T.cream,
                    outline: 'none',
                  }}
                />
                <input
                  type="email" name="email" placeholder="you@email.com" required
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: '14px 16px', fontFamily: T.body, fontSize: 15, color: T.ink,
                    border: `1px solid ${T.rule}`, borderRadius: 10, background: T.cream,
                    outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  gridColumn: 'span 2',
                  background: T.ink, color: T.cream, border: 'none', padding: '16px 24px',
                  borderRadius: 10, fontSize: 14, fontWeight: 500, fontFamily: T.body,
                  letterSpacing: 0.3, cursor: 'pointer',
                }}>
                  Email me my checklist →
                </button>
                <p style={{
                  gridColumn: 'span 2', fontSize: 12, color: T.muted, margin: 0, lineHeight: 1.6,
                }}>
                  Your email is used only to send the checklist and, if you want, set up a free thirty-minute call. We do not sell or share it.
                </p>
              </form>

              <div style={{ marginTop: 28, display: 'flex', gap: 16 }}>
                <button onClick={restart} style={{
                  background: 'transparent', border: 'none', fontSize: 13, color: T.muted,
                  cursor: 'pointer', padding: 0,
                }}>← Start over</button>
                <a href="Contact.html" style={{ fontSize: 13, color: T.teal, textDecoration: 'none' }}>
                  Skip to scheduling a consultation →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <window.PEPCTA/>
    </window.PEPPage>
  );
}

window.QuizPage = QuizPage;

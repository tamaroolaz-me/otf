import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

// ─── Content ───────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    text: 'Your manager tells you that you need to "communicate more clearly." Your first thought is:',
    options: [
      { letter: 'A', text: 'That\'s not accurate — I always take time to explain myself thoroughly.' },
      { letter: 'B', text: 'This feels rich coming from them. Their own communication isn\'t exactly great.' },
      { letter: 'C', text: 'Maybe I\'m just not as capable as I thought I was.' },
    ],
  },
  {
    text: 'A colleague gives you feedback on a piece of work you\'re proud of. You disagree with their take. You notice yourself:',
    options: [
      { letter: 'A', text: 'Going over all the evidence in your head for why they\'ve missed the point.' },
      { letter: 'B', text: 'Thinking about why they said it — the timing, the setting, what their real motivation might be.' },
      { letter: 'C', text: 'Feeling a wave of self-doubt that seems to go beyond just this one situation.' },
    ],
  },
  {
    text: 'How long does critical feedback typically stay with you?',
    options: [
      { letter: 'A', text: 'Not that long — once I\'ve worked out why I think they\'re wrong, I can move on.' },
      { letter: 'B', text: 'Depends entirely on who gave it. Some people I can shake off; others I can\'t.' },
      { letter: 'C', text: 'It can linger for days, even when I rationally know I should let it go.' },
    ],
  },
  {
    text: 'You share an idea and it gets pushback. What\'s running through your mind?',
    options: [
      { letter: 'A', text: '"They\'ve misunderstood — if I explain it better, they\'ll come around."' },
      { letter: 'B', text: '"I wonder if this would have landed differently coming from someone else."' },
      { letter: 'C', text: '"Maybe I\'m not as good at this as I thought."' },
    ],
  },
  {
    text: 'Feedback hits hardest for you when:',
    options: [
      { letter: 'A', text: 'You genuinely believe the other person has got their facts wrong.' },
      { letter: 'B', text: 'You suspect they have their own agenda, or don\'t have the full picture.' },
      { letter: 'C', text: 'It touches something you already privately worry about.' },
    ],
  },
  {
    text: 'After a difficult feedback conversation, you\'re most likely to:',
    options: [
      { letter: 'A', text: 'Replay it in your head and think of all the things you should have said.' },
      { letter: 'B', text: 'Find yourself analysing why that person said what they did, and what it says about them.' },
      { letter: 'C', text: 'Question your broader sense of what you\'re good at — in ways that go beyond the specific feedback.' },
    ],
  },
  {
    text: 'When you receive a compliment, you sometimes find yourself:',
    options: [
      { letter: 'A', text: 'Wondering whether they\'ve really understood your work, or are just being polite.' },
      { letter: 'B', text: 'Questioning whether they actually mean it, or want something from you.' },
      { letter: 'C', text: 'Feeling like it\'s a fluke — and quietly dreading having to live up to it.' },
    ],
  },
];

const RESULTS = {
  A: {
    headline: 'Your trigger is a Truth Trigger',
    subheadline: 'You\'re most thrown off when feedback feels factually wrong — and your instinct is to correct the record.',
    what_this_means: [
      'When feedback stings for you, it\'s usually because it doesn\'t match your reality. You have data they don\'t have, or you interpret the same events very differently. Your first move is often to mentally (or verbally) work out why they\'ve got it wrong — and until you can do that, the feedback is hard to sit with.',
      'This isn\'t stubbornness. It\'s actually a sign that you take accuracy seriously, and you have a strong grasp of your own reasoning and experience. The challenge is that it can make you quick to dismiss feedback that turns out to be more useful than it first appears.',
      'Here\'s something worth knowing: research shows that on average, 61% of any rating someone gives you reflects the rater, not you.[¹] So some of your scepticism is well-founded. The trick is learning when to lean in anyway.',
    ],
    what_gets_in_the_way: [
      'You and the feedback giver are working from different information — and you both think you\'re right.[²]',
      'You interpret the same events differently, and your brain — fast, automatic, and wired for survival — is quick to flag anything that doesn\'t match your worldview as wrong.[³]',
      'You may be dismissing the feedback before you\'ve fully understood what they\'re actually trying to say.',
    ],
    what_helps: [
      { title: '1. Separate the types of feedback first', body: 'Feedback comes in three forms: appreciation (support and recognition), evaluation (where you stand), and coaching (guidance on how to improve).[²] These often get tangled. If you can identify what kind of feedback you\'re actually receiving, it becomes easier to respond to it on its own terms — rather than fighting it wholesale.' },
      { title: '2. Shift from "what\'s wrong?" to "what\'s different?"', body: 'Instead of asking why they\'re mistaken, get curious about why your pictures differ. What data do they have that you don\'t? What are they noticing that you might not be? This isn\'t the same as agreeing with them — it\'s just getting the full picture before you decide.[²]' },
      { title: '3. Look for what\'s behind the label', body: 'Vague feedback like "you need to communicate better" is almost impossible to evaluate. Ask: What specifically are you noticing? Can you give me an example? You might still disagree with their conclusion, but at least you\'ll understand what they actually observed.[²]' },
      { title: '4. Look for patterns, not single data points', body: 'One person\'s feedback is one data point. But if you hear a similar theme from multiple people, it\'s worth sitting with — even if you could argue with each individual instance. Ask yourself: Where have I heard something like this before?[²]' },
      { title: '5. Build a challenge network', body: 'Seek out a small group of people you trust to tell you things you don\'t want to hear — who have different perspectives from your own. Their discomfort-inducing observations are often the most valuable ones.[²]' },
    ],
    bottom_line: 'You don\'t have to accept every piece of feedback uncritically. But try shifting your first move from "why are they wrong?" to "what are they seeing that I\'m not?" You might be surprised.',
    teaser: 'This is one of three feedback trigger types explored in depth in the Open to Feedback course. If you\'d like to go deeper — including how to handle truth triggers in real time —',
    footnotes: [
      '[¹] Scullen, S.E., Mount, M.K. & Goff, M. (2000), cited in Buckingham, M. & Goodall, A. (2019). "Most HR Data Is Bad Data." Harvard Business Review. Also discussed in Stone & Heen (2014).',
      '[²] Stone, D. & Heen, S. (2014). Thanks for the Feedback: The Science and Art of Receiving Feedback Well. Portfolio/Penguin.',
      '[³] Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux. System 1 thinking: fast, automatic, and highly resistant to information that conflicts with established beliefs.',
    ],
  },
  B: {
    headline: 'Your trigger is a Relationship Trigger',
    subheadline: 'You\'re most thrown off by who gave the feedback, or how they gave it — not necessarily what they said.',
    what_this_means: [
      'When feedback is hard for you to take, it\'s often less about the content and more about the messenger. You might be thinking: they\'re not qualified to say that, or they didn\'t need to say it like that, or they have their own issues. You find it difficult to separate what was said from your feelings about the person who said it.',
      'This is extremely common — and it\'s not irrational. The relationship really does matter. Trust, credibility, and how you feel treated are all legitimately relevant to how much weight you give feedback.[¹] The challenge is when your feelings about the delivery cause you to dismiss feedback that might actually be worth hearing.',
    ],
    what_gets_in_the_way: [
      'You feel you\'re not being treated fairly — the timing was off, the tone was wrong, it was said in front of others.[¹]',
      'You don\'t trust the person\'s credibility or motives — they\'re the last person to be giving me this advice.[¹]',
      'You\'re actually dealing with two separate issues at once (the feedback itself, and the relationship problem underneath it) — but having both conversations at the same time means neither gets resolved.[¹]',
    ],
    what_helps: [
      { title: '1. Notice when you\'re "switch-tracking"', body: 'Switch-tracking is what happens when a feedback conversation quietly becomes a different conversation — about trust, fairness, or relationship history — without either person realising it.[¹] Once you spot it, you can name it: "I think there are two separate things here — can we talk about them one at a time?" This is one of the most powerful moves you can make.' },
      { title: '2. Listen for what\'s underneath the feedback', body: 'Sometimes feedback is a roundabout way of saying something about the relationship. "You need to be more responsive" might really mean "I feel like you don\'t value my time." If you can hear both layers, you can respond to what\'s actually going on.[¹]' },
      { title: '3. Try a systems lens', body: 'Instead of focusing on you versus them, try zooming out. What roles are you both playing? What organisational pressures or dynamics might be shaping this interaction? Often what feels like a personal slight looks very different from a broader perspective.[¹]' },
      { title: '4. Take responsibility for your part — only your part', body: 'You don\'t need to accept full blame for a difficult dynamic. But asking what\'s my contribution here? — honestly — often reveals something useful, even when the other person isn\'t handling it perfectly either.[¹]' },
      { title: '5. Apply Hanlon\'s Razor', body: '"Never attribute to malice what can be explained by ignorance."[²] Most people aren\'t giving you feedback to undermine you. They\'re often just clumsy, poorly timed, or working from their own insecurities. Assuming positive intent — at least as a starting hypothesis — makes it easier to hear what\'s actually being said.' },
    ],
    bottom_line: 'Your feelings about the person matter, and they\'re valid. But try to distinguish between this feedback is wrong and I don\'t like how this person delivered it. You can think someone is a poor messenger and still find a useful signal in what they said.',
    teaser: 'This is one of three feedback trigger types explored in depth in the Open to Feedback course. If you\'d like to go deeper — including how to handle relationship triggers in real-time conversations —',
    footnotes: [
      '[¹] Stone, D. & Heen, S. (2014). Thanks for the Feedback: The Science and Art of Receiving Feedback Well. Portfolio/Penguin.',
      '[²] Hanlon\'s Razor, as discussed by Cook, M. See also: Stone & Heen (2014). The original formulation is attributed variously to Robert J. Hanlon and Robert Heinlein.',
    ],
  },
  C: {
    headline: 'Your trigger is an Identity Trigger',
    subheadline: 'You\'re most thrown off when feedback touches your sense of who you are — and one comment can feel like it says everything about you.',
    what_this_means: [
      'When feedback lands badly for you, it rarely stays contained to the specific thing being criticised. It tends to spread — from "this piece of work wasn\'t great" to "I\'m not good enough", from "they noticed one mistake" to "everyone must think I\'m incompetent." The feedback becomes about your worth, not just your work.',
      'This is your wiring, and it\'s not a character flaw. We each have a different emotional baseline, a different swing (how far we drop when something hits us), and a different recovery rate (how long it takes to bounce back). Research shows these can vary by as much as 3,000% between individuals[¹] — and the way your nervous system responds to criticism is largely not something you chose.',
      'The challenge is that when feedback spirals into questions about your identity, it becomes almost impossible to evaluate it clearly — which makes it hard to grow from.',
    ],
    what_gets_in_the_way: [
      'Emotions amplify the feedback: one thing becomes everything, partly becomes entirely.[¹]',
      'When you feel bad, you filter for confirming evidence — so everything seems to be "proof" that the criticism was right.',
      'You\'ve likely repeated certain stories about yourself for so long ("I\'m not good under pressure," "I always say the wrong thing") that they feel like facts, not stories. Identity-based beliefs are especially resistant to change.[²]',
    ],
    what_helps: [
      { title: '1. Separate the strands', body: 'When you\'re triggered, try asking yourself three distinct questions:[¹] What am I feeling right now? What story am I telling myself about this? What is the actual feedback? These are three different things, and mixing them up is where the pain amplifies. Getting them apart doesn\'t make the feeling go away — but it stops the feeling from distorting the feedback.' },
      { title: '2. Contain the story', body: 'Our minds have a habit of catastrophising in three dimensions:[¹] Time: "I always do this" → Actually: this happened, once, today. Specificity: "I\'m bad at everything" → Actually: this one area needs work. People: "Everyone thinks this about me" → Actually: one person said this. When you notice your mind generalising, gently pull it back to the specific.' },
      { title: '3. Change your vantage point', body: 'Look back from the future — will this moment matter in five years? In twenty? Become the observer: imagine a friend received this feedback. What would you say to them? You\'d probably be far kinder and more measured than you\'re being with yourself. Find the comedy — can you laugh at the situation with genuine lightness? Sometimes that\'s the fastest way back to yourself.[¹]' },
      { title: '4. Watch your self-talk', body: 'Phrases like "I\'m just not good at this" or "that\'s not who I am" are stories, not facts. Identity is not fixed — it is continuously revised through the small choices we make and the evidence we accumulate.[²] The most effective path to behaviour change isn\'t setting new goals; it\'s deciding what kind of person you want to become, and proving it to yourself with small wins.[²]' },
      { title: '5. Build your second score', body: 'Every time you receive feedback, there are two moments: how well the feedback was given (out of your control) and how well you received it (very much in your control). Focus on the second score. Getting a little better at receiving, every time — that\'s where the real growth is.[¹]' },
    ],
    bottom_line: 'You\'re not too sensitive. You\'re wired a certain way, and feedback hits certain nerves. The goal isn\'t to stop feeling it — it\'s to get better at not becoming it.',
    teaser: 'This is one of three feedback trigger types explored in depth in the Open to Feedback course. If you\'d like to go deeper — including how to manage identity triggers before they happen —',
    footnotes: [
      '[¹] Stone, D. & Heen, S. (2014). Thanks for the Feedback: The Science and Art of Receiving Feedback Well. Portfolio/Penguin. Emotional baseline, swing, and recovery data from neuroscientist Richard Davidson\'s research, as cited in Stone & Heen.',
      '[²] Clear, J. (2018). Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones. Avery. On identity-based habit change: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become."',
    ],
  },
};

const TRIGGER_LABELS: Record<string, string> = {
  A: 'Truth',
  B: 'Relationship',
  C: 'Identity',
};

const TIE_COPY: Record<string, string> = {
  'AB': 'You scored equally on Truth and Relationship triggers. You\'re most challenged by feedback when it feels both factually off and coming from someone whose credibility or motives you\'re unsure about — a double layer that makes it especially difficult to find anything useful in what they\'ve said. Read both results below for strategies that apply to you.',
  'AC': 'You scored equally on Truth and Identity triggers. You often start by mentally disputing the feedback — but if you can\'t shake it, it eventually gets personal. The intellectual defence kicks in first; the emotional blow lands second. Read both results below for the full picture.',
  'BC': 'You scored equally on Relationship and Identity triggers. How you feel treated and what the feedback implies about you tend to fuse for you — so a clumsy delivery from the wrong person can feel like a full-on attack on who you are. Read both results below for strategies that will help.',
  'ABC': 'You\'re a well-rounded responder — you feel all three types of triggers fairly evenly. That means you\'ll find something useful in each of the three results below.',
};

// ─── Sub-components ────────────────────────────────────────────────────────

function TriggerChart({ scores, dominant }: { scores: Record<string, number>; dominant: string[] }) {
  const total = 7;
  return (
    <div style={{
      background: 'var(--gray-50)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: 'var(--space-6)',
      marginBottom: 'var(--space-8)',
    }}>
      <h3 style={{ marginTop: 0, marginBottom: 'var(--space-2)', fontSize: '1.1rem' }}>Your trigger profile</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: 'var(--space-5)', marginTop: 0 }}>
        Most people experience all three triggers — this shows which ones showed up most for you today.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {(['A', 'B', 'C'] as const).map((key) => {
          const isHighlighted = dominant.includes(key);
          const pct = (scores[key] / total) * 100;
          return (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{
                width: '90px',
                flexShrink: 0,
                fontSize: '0.875rem',
                fontWeight: isHighlighted ? '600' : '400',
                color: isHighlighted ? 'var(--primary-700)' : 'var(--muted-foreground)',
              }}>
                {TRIGGER_LABELS[key]}
              </span>
              <div style={{
                flex: 1,
                background: 'var(--gray-200)',
                borderRadius: '999px',
                height: '14px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${pct}%`,
                  height: '100%',
                  background: isHighlighted ? 'var(--primary-500)' : 'var(--gray-400)',
                  borderRadius: '999px',
                  transition: 'width 0.6s ease',
                }} />
              </div>
              <span style={{
                width: '36px',
                flexShrink: 0,
                fontSize: '0.875rem',
                fontWeight: isHighlighted ? '600' : '400',
                color: isHighlighted ? 'var(--primary-700)' : 'var(--muted-foreground)',
                textAlign: 'right',
              }}>
                {scores[key]}/{total}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResultSection({ type, scores, dominant }: { type: 'A' | 'B' | 'C'; scores: Record<string, number>; dominant: string[] }) {
  const r = RESULTS[type];
  return (
    <div style={{ marginBottom: 'var(--space-12)' }}>
      <h2 style={{ color: 'var(--primary-800)', marginTop: 0 }}>{r.headline}</h2>
      <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--gray-600)', marginBottom: 'var(--space-6)' }}>
        {r.subheadline}
      </p>

      <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray-500)', marginTop: 0 }}>
        What this means
      </h3>
      {r.what_this_means.map((p, i) => (
        <p key={i} style={{ color: 'var(--gray-700)' }}>{p}</p>
      ))}

      <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray-500)' }}>
        What gets in the way
      </h3>
      <ul style={{ marginBottom: 'var(--space-6)' }}>
        {r.what_gets_in_the_way.map((item, i) => (
          <li key={i} style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-2)' }}>{item}</li>
        ))}
      </ul>

      <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray-500)' }}>
        What helps
      </h3>
      {r.what_helps.map((tip, i) => (
        <div key={i} style={{ marginBottom: 'var(--space-4)' }}>
          <p style={{ fontWeight: '600', color: 'var(--gray-800)', marginBottom: 'var(--space-1)' }}>{tip.title}</p>
          <p style={{ color: 'var(--gray-700)', marginBottom: 0 }}>{tip.body}</p>
        </div>
      ))}

      <div style={{
        background: 'var(--primary-50)',
        border: '1px solid var(--primary-200)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-5)',
        margin: 'var(--space-6) 0',
      }}>
        <p style={{ fontWeight: '600', color: 'var(--primary-900)', marginBottom: 0 }}>
          The bottom line: {r.bottom_line}
        </p>
      </div>

      <div style={{
        background: 'var(--gray-50)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-5)',
        marginBottom: 'var(--space-6)',
      }}>
        <p style={{ color: 'var(--gray-600)', marginBottom: 0 }}>
          {r.teaser}{' '}
          <Link href="/course" style={{ color: 'var(--primary-600)', fontWeight: '500' }}>
            join the waitlist →
          </Link>
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-4)' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginBottom: 'var(--space-2)' }}>
          <strong>References</strong>
        </p>
        {r.footnotes.map((fn, i) => (
          <p key={i} style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginBottom: 'var(--space-1)' }}>
            {fn}
          </p>
        ))}
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

type Phase = 'intro' | 'quiz' | 'result';

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const scores = { A: 0, B: 0, C: 0 };
  answers.forEach((a) => { if (a in scores) scores[a as keyof typeof scores]++; });

  const maxScore = Math.max(scores.A, scores.B, scores.C);
  const dominant = (['A', 'B', 'C'] as const).filter((k) => scores[k] === maxScore);

  const tieKey = dominant.length > 1 ? dominant.join('') : null;

  function handleAnswer(letter: string) {
    const next = [...answers, letter];
    setAnswers(next);
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase('result');
    }
  }

  function goBack() {
    if (currentQ === 0) {
      setPhase('intro');
    } else {
      setAnswers(answers.slice(0, -1));
      setCurrentQ(currentQ - 1);
    }
  }

  function restart() {
    setPhase('intro');
    setCurrentQ(0);
    setAnswers([]);
  }

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px' }}>

        {/* ── INTRO ── */}
        {phase === 'intro' && (
          <section style={{
            background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
            padding: 'var(--space-20) 0',
          }}>
            <div className="container-sm">
              <h1 style={{ color: 'var(--primary-900)', textAlign: 'center' }}>
                What&rsquo;s your feedback trigger?
              </h1>
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--primary-700)',
                textAlign: 'center',
                maxWidth: '560px',
                margin: '0 auto var(--space-8)',
                fontStyle: 'italic',
              }}>
                When feedback stings, it&rsquo;s usually for one of three reasons. Find out which one holds you back most — and what to do about it.
              </p>

              <div className="card" style={{ background: 'white' }}>
                <p style={{ color: 'var(--gray-700)' }}>
                  Most of us don&rsquo;t have a feedback problem. We have a <em>trigger</em> problem.
                </p>
                <p style={{ color: 'var(--gray-700)' }}>
                  When critical feedback lands badly, it&rsquo;s not usually because we&rsquo;re defensive or fragile. It&rsquo;s because something specific about that feedback — the content, the person, or what it implies about us — sets off a protective reaction we can&rsquo;t always control.
                </p>
                <p style={{ color: 'var(--gray-700)' }}>
                  Researchers have identified three distinct types of feedback trigger, and most people have one they&rsquo;re especially prone to.[¹]
                </p>
                <p style={{ color: 'var(--gray-700)', marginBottom: 'var(--space-6)' }}>
                  This 7-question quiz will help you identify yours — and give you a personalised set of strategies to handle it better.
                </p>

                <div style={{ textAlign: 'center' }}>
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => setPhase('quiz')}
                  >
                    Find out my trigger type →
                  </button>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted-foreground)',
                    marginTop: 'var(--space-3)',
                    marginBottom: 0,
                  }}>
                    Takes about 2 minutes. No sign-up required.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-4)', paddingLeft: 'var(--space-4)' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary-700)' }}>
                  [¹] Stone, D. &amp; Heen, S. (2014). <em>Thanks for the Feedback: The Science and Art of Receiving Feedback Well</em>. Portfolio/Penguin.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── QUIZ ── */}
        {phase === 'quiz' && (
          <section className="section">
            <div className="container-sm">
              {/* Progress */}
              <div style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 'var(--space-2)',
                }}>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                    Question {currentQ + 1} of {QUESTIONS.length}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>
                    {Math.round(((currentQ) / QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <div style={{
                  height: '6px',
                  background: 'var(--gray-200)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    width: `${(currentQ / QUESTIONS.length) * 100}%`,
                    height: '100%',
                    background: 'var(--primary-500)',
                    borderRadius: '999px',
                    transition: 'width 0.3s ease',
                  }} />
                </div>
              </div>

              {/* Question */}
              <div className="card">
                <p style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'var(--gray-800)',
                  marginBottom: 'var(--space-6)',
                }}>
                  {QUESTIONS[currentQ].text}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {QUESTIONS[currentQ].options.map((opt) => (
                    <button
                      key={opt.letter}
                      onClick={() => handleAnswer(opt.letter)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-3)',
                        padding: 'var(--space-4)',
                        background: 'var(--gray-50)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease',
                        width: '100%',
                        fontFamily: 'var(--font-sans)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary-50)';
                        e.currentTarget.style.borderColor = 'var(--primary-300)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--gray-50)';
                        e.currentTarget.style.borderColor = 'var(--border)';
                      }}
                    >
                      <span style={{
                        flexShrink: 0,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'var(--primary-100)',
                        color: 'var(--primary-700)',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {opt.letter}
                      </span>
                      <span style={{ color: 'var(--gray-700)', lineHeight: '1.5', fontSize: '0.9375rem' }}>
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={goBack}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted-foreground)',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  padding: 0,
                  textDecoration: 'underline',
                }}
              >
                ← Back
              </button>
            </div>
          </section>
        )}

        {/* ── RESULT ── */}
        {phase === 'result' && (
          <section className="section">
            <div className="container-sm">
              <p style={{
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted-foreground)',
                marginBottom: 'var(--space-2)',
              }}>
                Your results
              </p>

              <TriggerChart scores={scores} dominant={dominant} />

              {/* Tie intro copy */}
              {tieKey && (
                <div style={{
                  background: 'var(--primary-50)',
                  border: '1px solid var(--primary-200)',
                  borderRadius: 'var(--radius)',
                  padding: 'var(--space-5)',
                  marginBottom: 'var(--space-8)',
                }}>
                  <p style={{ color: 'var(--primary-800)', marginBottom: 0, fontStyle: 'italic' }}>
                    {TIE_COPY[tieKey]}
                  </p>
                </div>
              )}

              {/* Result(s) */}
              {dominant.map((type) => (
                <ResultSection
                  key={type}
                  type={type as 'A' | 'B' | 'C'}
                  scores={scores}
                  dominant={dominant}
                />
              ))}

              {/* Footer CTA */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))',
                border: '1px solid var(--primary-200)',
                borderRadius: 'var(--radius)',
                padding: 'var(--space-8)',
                textAlign: 'center',
                marginBottom: 'var(--space-8)',
              }}>
                <h3 style={{ color: 'var(--primary-900)', marginTop: 0 }}>Want to go deeper?</h3>
                <p style={{ color: 'var(--primary-700)', maxWidth: '480px', margin: '0 auto var(--space-6)' }}>
                  The Open to Feedback course covers all three trigger types in detail, alongside frameworks for seeking, actioning, and giving feedback well.
                </p>
                <Link href="/course" className="btn btn-primary btn-lg">
                  Join the waitlist →
                </Link>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={restart}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted-foreground)',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    textDecoration: 'underline',
                  }}
                >
                  Take the quiz again
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

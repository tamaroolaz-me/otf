import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

const courseMailto =
  `mailto:course@opentofeedback.com` +
  `?subject=${encodeURIComponent('Feedback Course Enquiry')}` +
  `&body=${encodeURIComponent("Hi, I'm interested in the feedback course for [myself / my company] and would like to know more.")}`;

const workshopMailto =
  `mailto:workshops@opentofeedback.com` +
  `?subject=${encodeURIComponent('Feedback Workshop Enquiry')}` +
  `&body=${encodeURIComponent("Hi, I'm interested in the feedback workshop for [myself / my company] and would like to know more.")}`;

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'The Feedback Course',
  description:
    'A six-week online course for young professionals who want to get better at receiving, seeking and acting on feedback. Small group format, live weekly sessions and practical async content.',
  provider: {
    '@type': 'Organization',
    name: 'Open to Feedback',
    sameAs: 'https://www.opentofeedback.com',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'online',
    courseWorkload: 'PT3H',
  },
};

const workshopSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalEvent',
  name: 'Feedback Workshop',
  description:
    'A practical half-day feedback workshop available in Cape Town or online. Learn how to receive, seek and give feedback in a way that actually changes behaviour. Suitable for teams and individuals.',
  eventAttendanceMode: [
    'https://schema.org/OnlineEventAttendanceMode',
    'https://schema.org/OfflineEventAttendanceMode',
  ],
  location: [
    { '@type': 'VirtualLocation', url: 'https://www.opentofeedback.com/services' },
    {
      '@type': 'Place',
      name: 'Cape Town',
      address: { '@type': 'PostalAddress', addressLocality: 'Cape Town', addressCountry: 'ZA' },
    },
  ],
  organizer: { '@type': 'Organization', name: 'Open to Feedback' },
};

const courseWho = [
  "You feel triggered or defensive when you receive feedback and want to change that",
  "You want more feedback from your manager, peers or team but don't know how to ask",
  "You keep getting vague or unhelpful feedback and want to learn how to draw out something more useful",
  "You know that building a feedback culture matters for your career and your team, and you're ready to put in the work to make it happen",
];

const courseTakeaways = [
  "A clear understanding of why feedback feels threatening and how to regulate that response",
  "Practical tools to seek feedback in ways that actually get you useful answers",
  "Skills to receive and process feedback without it derailing your day",
  "A personal action plan for building feedback habits into your work week",
  "A cohort of peers who are doing the same work",
];

const courseWeeks = [
  { week: 1, title: "Why feedback feels hard (and why that's normal)" },
  { week: 2, title: "Receiving without reacting" },
  { week: 3, title: "How to seek feedback that's actually useful" },
  { week: 4, title: "Turning feedback into action" },
  { week: 5, title: "Giving feedback that people can hear" },
  { week: 6, title: "Building a feedback culture around you" },
];

const workshopCovers = [
  "The psychology of feedback: why our brains treat it as a threat and what to do about that",
  "How to receive feedback without getting defensive or shutting down",
  "How to ask for feedback that's specific, honest and actually helpful",
  "How to give feedback that lands without damaging the relationship",
  "A personal commitment: one habit you'll start the following week",
];

const workshopTakeaways = [
  "A short practical guide summarising the key tools from the day",
  "A personal feedback plan you build during the session",
  "Access to follow-up resources to keep the learning going after the workshop",
];

const isThisForYou = [
  "Feel triggered or defensive when you receive feedback, and you know that's holding you back",
  "Want more feedback but aren't sure how to ask for it without feeling vulnerable",
  "Keep getting vague responses that leave you no clearer than before",
  "Want to grow into a leadership role and know that how you handle feedback shapes how others see you",
  "Are ready to invest real time and effort into understanding yourself and building new habits",
];

function Badge({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      background: 'var(--primary)',
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: '700',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      padding: 'var(--space-1) var(--space-3)',
      borderRadius: 'var(--radius)',
      marginBottom: 'var(--space-4)',
    }}>
      {label}
    </span>
  );
}

function CheckList({ items, icon = '✓' }: { items: string[]; icon?: string }) {
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-3)',
          alignItems: 'flex-start',
        }}>
          <span style={{ color: 'var(--primary)', fontWeight: '700', flexShrink: 0, marginTop: '2px' }}>
            {icon}
          </span>
          <span style={{ color: 'var(--foreground)' }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function EnquireCTA({ heading, body, href }: { heading: string; body: string; href: string }) {
  return (
    <div className="card" style={{
      background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
      border: '1px solid var(--primary-200)',
      textAlign: 'center',
    }}>
      <h3 style={{ color: 'var(--primary-900)', marginTop: 0, marginBottom: 'var(--space-2)' }}>
        {heading}
      </h3>
      <p style={{ color: 'var(--primary-800)', marginBottom: 'var(--space-6)' }}>
        {body}
      </p>
      <a href={href} className="btn btn-primary">Enquire Now</a>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Open to Feedback</title>
        <meta
          name="description"
          content="A six-week online course and practical half-day workshop for young professionals who want to get better at receiving, seeking and acting on feedback."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopSchema) }}
        />
      </Head>

      <Nav />

      <div style={{ paddingTop: '70px' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'var(--space-16) 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <h1 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-6)' }}>
              Services
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '600px',
              margin: '0 auto',
            }}>
              Practical programmes to help you build the skills, mindset and habits to get more from feedback
            </p>
          </div>
        </section>

        {/* ── Service 1: The Feedback Course ── */}
        <section className="section">
          <div className="container-sm">

            <div style={{ marginBottom: 'var(--space-8)' }}>
              <Badge label="6-Week Course" />
              <h2 style={{ color: 'var(--foreground)', marginTop: 0 }}>The Feedback Course</h2>
              <p style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--primary)',
                fontWeight: '500',
                marginBottom: 0,
              }}>
                Six weeks. Small groups. Real change.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 0, color: 'var(--foreground)', lineHeight: 1.8 }}>
                Most feedback training teaches you what good feedback looks like. This course changes how you actually respond to it.
                Over six weeks, in a small group of five to six people, you'll build the skills, mindset and habits to receive feedback
                without shutting down, seek it without feeling exposed, act on it in ways that stick, and start shaping a culture where
                honest feedback flows naturally around you.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h3 className="card-title" style={{ marginTop: 0 }}>How it works</h3>
              </div>
              <p style={{ color: 'var(--foreground)', marginBottom: 'var(--space-6)' }}>
                Each week combines a one-hour live group session with two hours of focused async content you complete in your own time.
                That's three hours a week total.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
              }}>
                {[
                  { icon: '⏱', value: '3 hrs / week', label: 'total time commitment' },
                  { icon: '🧑‍🤝‍🧑', value: '5–6 people', label: 'per live group session' },
                  { icon: '📱', value: '2 hrs async', label: 'content per week' },
                ].map(({ icon, value, label }) => (
                  <div key={label} style={{
                    padding: 'var(--space-4)',
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>{icon}</div>
                    <div style={{ fontWeight: '700', color: 'var(--accent-foreground)', fontSize: '1.0625rem' }}>{value}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginTop: 'var(--space-1)' }}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{ marginBottom: 0, color: 'var(--foreground)' }}>
                The live sessions happen in discussion groups of five to six people — small enough to go deep, safe enough to be honest.
                The async content includes short videos, reflection exercises, real scenarios and habit-building challenges you can apply
                immediately in your work.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h3 className="card-title" style={{ marginTop: 0 }}>Who this is for</h3>
              </div>
              <p style={{ color: 'var(--foreground)' }}>
                This course is for young professionals who want to grow faster and lead better. Specifically, it's for you if:
              </p>
              <CheckList items={courseWho} />
              <p style={{ marginTop: 'var(--space-4)', marginBottom: 0, fontStyle: 'italic', color: 'var(--muted-foreground)' }}>
                You don't need to be confident with feedback to start. You just need to be willing.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h3 className="card-title" style={{ marginTop: 0 }}>What you'll walk away with</h3>
                </div>
                <CheckList items={courseTakeaways} icon="→" />
              </div>

              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h3 className="card-title" style={{ marginTop: 0 }}>Course structure</h3>
                </div>
                {courseWeeks.map(({ week, title }) => (
                  <div key={week} style={{
                    display: 'flex',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      minWidth: '28px',
                      height: '28px',
                      background: 'var(--primary)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}>
                      {week}
                    </div>
                    <div style={{ paddingTop: '4px', color: 'var(--foreground)', fontSize: '0.9375rem' }}>
                      <strong>Week {week}:</strong> {title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <EnquireCTA
              heading="Interested in the course?"
              body="Get in touch and we'll tell you about upcoming cohorts, pricing and what to expect."
              href={courseMailto}
            />

          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '0 var(--space-4)' }} />

        {/* ── Service 2: Feedback Workshop ── */}
        <section className="section">
          <div className="container-sm">

            <div style={{ marginBottom: 'var(--space-8)' }}>
              <Badge label="Half-Day Workshop" />
              <h2 style={{ color: 'var(--foreground)', marginTop: 0 }}>Feedback Workshop</h2>
              <p style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--primary)',
                fontWeight: '500',
                marginBottom: 0,
              }}>
                Half a day. Practical skills you'll use the next morning.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <p style={{ color: 'var(--foreground)', lineHeight: 1.8, marginBottom: 'var(--space-4)' }}>
                This is a hands-on workshop for teams and individuals who want to get better at feedback, fast. In half a day, you'll
                move from understanding why feedback is hard to actually practising how to do it better. No slides-and-lectures.
                Real scenarios, real conversations, real takeaways.
              </p>
              <p style={{ marginBottom: 0, color: 'var(--muted-foreground)' }}>
                Available in person in Cape Town, or online for remote teams.
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h3 className="card-title" style={{ marginTop: 0 }}>Who this is for</h3>
              </div>
              <p style={{ color: 'var(--foreground)', marginBottom: 0 }}>
                This workshop works well for{' '}
                <strong>teams that avoid hard feedback conversations and want to change that</strong>,{' '}
                <strong>individuals who want practical tools they can use immediately</strong>,{' '}
                <strong>organisations onboarding new talent or building performance culture</strong>, and anyone
                who wants a taster before committing to the full six-week course.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h3 className="card-title" style={{ marginTop: 0 }}>What the day covers</h3>
                </div>
                <CheckList items={workshopCovers} />
              </div>

              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h3 className="card-title" style={{ marginTop: 0 }}>What you take away</h3>
                </div>
                <CheckList items={workshopTakeaways} icon="→" />
              </div>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h3 className="card-title" style={{ marginTop: 0 }}>Format</h3>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 'var(--space-4)',
              }}>
                {[
                  { icon: '⏰', value: 'Half day', label: 'duration' },
                  { icon: '🌍', value: 'In person or remote', label: 'format' },
                  { icon: '👥', value: 'Individuals or teams', label: 'audience' },
                  { icon: '📍', value: 'Cape Town', label: 'in-person location' },
                ].map(({ icon, value, label }) => (
                  <div key={label} style={{
                    padding: 'var(--space-4)',
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{icon}</div>
                    <div style={{ fontWeight: '700', color: 'var(--accent-foreground)', fontSize: '0.9375rem' }}>{value}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginTop: 'var(--space-1)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <EnquireCTA
              heading="Interested in the workshop?"
              body="Whether you're booking for yourself or your team, get in touch and we'll work out the best fit."
              href={workshopMailto}
            />

          </div>
        </section>

        {/* ── Is this for you? ── */}
        <section style={{
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'var(--space-16) 0',
        }}>
          <div className="container-sm">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ color: 'var(--primary-900)', marginTop: 0 }}>Is this for you?</h2>
            </div>
            <div className="card" style={{ background: 'var(--card)', border: '1px solid var(--primary-200)' }}>
              <p style={{ color: 'var(--foreground)', marginBottom: 'var(--space-6)' }}>
                You're in the right place if you:
              </p>
              <CheckList items={isThisForYou} />
              <p style={{ marginTop: 'var(--space-6)', marginBottom: 0, fontStyle: 'italic', color: 'var(--muted-foreground)' }}>
                This isn't for people who want a quick fix. It's for people who are serious about growing.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

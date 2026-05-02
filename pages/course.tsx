import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';

const courseMailto =
  `mailto:course@opentofeedback.com` +
  `?subject=${encodeURIComponent('Feedback Course Enquiry')}` +
  `&body=${encodeURIComponent("Hi, I'm interested in the feedback course for [myself / my company] and would like to know more.")}`;

function trackEnquiry() {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as Record<string, unknown>).gtag as ((...args: unknown[]) => void) | undefined;
  gtag?.('event', 'enquire_now_click', { service: 'course' });
}

const whoItIsFor = [
  "You feel triggered or defensive when you receive feedback and want to change that",
  "You want more feedback from your manager, peers or team but don't know how to ask",
  "You keep getting vague or unhelpful feedback and want to learn how to draw out something more useful",
  "You know that building a feedback culture matters for your career and your team, and you're ready to put in the work to make it happen",
];

const takeaways = [
  "A clear understanding of why feedback feels threatening and how to regulate that response",
  "Practical tools to seek feedback in ways that actually get you useful answers",
  "Skills to receive and process feedback without it derailing your day",
  "A personal action plan for building feedback habits into your work week",
  "A cohort of peers who are doing the same work",
];

const weeks = [
  { week: 1, title: "Why feedback feels hard (and why that's normal)" },
  { week: 2, title: "Receiving without reacting" },
  { week: 3, title: "How to seek feedback that's actually useful" },
  { week: 4, title: "Turning feedback into action" },
  { week: 5, title: "Giving feedback that people can hear" },
  { week: 6, title: "Building a feedback culture around you" },
];

const outcomes = [
  { icon: '🎯', title: 'Anticipate Your Triggers', description: 'Understand and anticipate your own triggers and blockers around receiving feedback' },
  { icon: '💬', title: 'Seek Feedback Confidently', description: 'Be better at and more comfortable seeking feedback, both digitally and in person' },
  { icon: '🔍', title: 'Gain Clarity Through Reflection', description: 'Gain greater clarity on feedback through effective questioning and reflection techniques' },
  { icon: '⚖️', title: 'Make Smart Decisions', description: 'Confidently decide which feedback is worth acting on versus discarding' },
  { icon: '🚀', title: 'Take Effective Action', description: 'Effectively action feedback through proven goal setting and habit building methods' },
  { icon: '📊', title: 'Track Your Growth', description: 'Keep a useful record of feedback and development for future reviews and applications' },
];

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

export default function Course() {
  return (
    <>
      <Head>
        <title>The Feedback Course | Open to Feedback</title>
        <meta
          name="description"
          content="A six-week online course for young professionals who want to get better at receiving, seeking and acting on feedback. Small group format, live weekly sessions and practical async content."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </Head>

      <Nav />

      <div style={{ paddingTop: '70px' }}>

        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'var(--space-20) 0',
          textAlign: 'center',
        }}>
          <div className="container">
            <div style={{ marginBottom: 'var(--space-4)' }}>
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
              }}>
                6-Week Course
              </span>
            </div>
            <h1 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-4)' }}>
              The Feedback Course
            </h1>
            <p style={{
              fontSize: '1.375rem',
              fontStyle: 'italic',
              color: 'var(--primary-700)',
              fontWeight: '500',
              marginBottom: 'var(--space-4)',
            }}>
              Six weeks. Small groups. Real change.
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '640px',
              margin: '0 auto var(--space-10)',
            }}>
              Master the art of receiving, seeking and acting on feedback — and start building a culture where honest feedback flows around you.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={courseMailto} onClick={trackEnquiry} className="btn btn-primary btn-lg">
                Enquire Now
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7iUljSVS3hTki4Om7VIvBT1tS-Z5M1nhjh8V5qobMMe799w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-sm">

            {/* Intro */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 0, color: 'var(--foreground)', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                Most feedback training teaches you what good feedback looks like. This course changes how you actually respond to it.
                Over six weeks, in a small group of five to six people, you'll build the skills, mindset and habits to receive feedback
                without shutting down, seek it without feeling exposed, act on it in ways that stick, and start shaping a culture where
                honest feedback flows naturally around you.
              </p>
            </div>

            {/* Quote */}
            <blockquote style={{
              fontSize: '1.125rem',
              fontStyle: 'italic',
              padding: 'var(--space-8)',
              background: 'var(--accent)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: 'var(--radius)',
              color: 'var(--blockquote-text)',
              textAlign: 'center',
              marginBottom: 'var(--space-8)',
            }}>
              "When you are open to feedback, your working relationships have more trust and humour,
              you collaborate more effectively and solve problems more easily."
              <br />
              <strong style={{ display: 'block', marginTop: 'var(--space-3)', color: 'var(--accent-foreground)' }}>
                — Douglas Stone and Sheila Heen, <em>Thanks for the Feedback</em> (2015)
              </strong>
            </blockquote>

            {/* How it works */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h2 className="card-title" style={{ marginTop: 0 }}>How it works</h2>
              </div>
              <p style={{ color: 'var(--foreground)', marginBottom: 'var(--space-6)' }}>
                Each week combines a one-hour live group session with two hours of focused async content you complete in your own time.
                That's three hours a week total.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-6)',
              }}>
                {[
                  { icon: '⏱', value: '3 hrs / week', label: 'total commitment' },
                  { icon: '🧑‍🤝‍🧑', value: '5–6 people', label: 'per live session' },
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
                The live sessions happen in discussion groups of five to six people; small enough to go deep, safe enough to be honest.
                The async content includes short videos, reflection exercises, real scenarios and habit-building challenges you can apply
                immediately in your work.
              </p>
            </div>

            {/* Who it's for */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h2 className="card-title" style={{ marginTop: 0 }}>Who this is for</h2>
              </div>
              <p style={{ color: 'var(--foreground)' }}>
                This course is for young professionals who want to grow faster and lead better. Specifically, it's for you if:
              </p>
              <CheckList items={whoItIsFor} />
              <p style={{ marginTop: 'var(--space-4)', marginBottom: 0, fontStyle: 'italic', color: 'var(--muted-foreground)' }}>
                You don't need to be confident with feedback to start. You just need to be willing.
              </p>
            </div>

            {/* Takeaways + Curriculum */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h2 className="card-title" style={{ marginTop: 0 }}>What you'll walk away with</h2>
                </div>
                <CheckList items={takeaways} icon="→" />
              </div>

              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h2 className="card-title" style={{ marginTop: 0 }}>Course structure</h2>
                </div>
                {weeks.map(({ week, title }) => (
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

          </div>
        </section>

        {/* Skills you'll build */}
        <section style={{
          background: 'var(--muted)',
          padding: 'var(--space-16) 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2>The skills you'll build</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
                By the end of the course, you'll be able to:
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-6)',
            }}>
              {outcomes.map(({ icon, title, description }) => (
                <div key={title} className="card" style={{ marginBottom: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--primary-100)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: '22px' }}>{icon}</span>
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-2)', fontSize: '1rem' }}>
                        {title}
                      </h4>
                      <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', margin: 0 }}>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-sm">
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)',
              textAlign: 'center',
            }}>
              <h2 className="card-title" style={{ color: 'var(--primary-900)', marginTop: 0 }}>
                Ready to change how you work with feedback?
              </h2>
              <p style={{ color: 'var(--primary-800)', marginBottom: 'var(--space-8)', fontSize: '1.0625rem' }}>
                Get in touch to find out about upcoming cohorts, pricing and what to expect.
                Or join the waitlist to be notified when the next cohort opens.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={courseMailto} onClick={trackEnquiry} className="btn btn-primary btn-lg">
                  Enquire Now
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc7iUljSVS3hTki4Om7VIvBT1tS-Z5M1nhjh8V5qobMMe799w/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  Join the Waitlist
                </a>
              </div>
              <p style={{ color: 'var(--primary-700)', fontSize: '0.875rem', marginTop: 'var(--space-4)', marginBottom: 0 }}>
                Spaces are limited to keep groups small and sessions meaningful
              </p>
            </div>
            <p style={{ textAlign: 'center', marginTop: 'var(--space-6)', color: 'var(--muted-foreground)' }}>
              Also interested in a quicker format?{' '}
              <Link href="/workshop">See the half-day workshop →</Link>
            </p>
          </div>
        </section>

      </div>
    </>
  );
}

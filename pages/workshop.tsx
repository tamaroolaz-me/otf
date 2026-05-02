import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';

const workshopMailto =
  `mailto:workshops@opentofeedback.com` +
  `?subject=${encodeURIComponent('Feedback Workshop Enquiry')}` +
  `&body=${encodeURIComponent("Hi, I'm interested in the feedback workshop for [myself / my company] and would like to know more.")}`;

function trackEnquiry() {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as Record<string, unknown>).gtag as ((...args: unknown[]) => void) | undefined;
  gtag?.('event', 'enquire_now_click', { service: 'workshop' });
}

const covers = [
  "The psychology of feedback: why our brains treat it as a threat and what to do about that",
  "How to receive feedback without getting defensive or shutting down",
  "How to ask for feedback that's specific, honest and actually helpful",
  "How to give feedback that lands without damaging the relationship",
  "A personal commitment: one habit you'll start the following week",
];

const takeaways = [
  "A short practical guide summarising the key tools from the day",
  "A personal feedback plan you build during the session",
  "Access to follow-up resources to keep the learning going after the workshop",
];

const whoItIsFor = [
  { label: 'Teams', description: 'that avoid hard feedback conversations and want to change that' },
  { label: 'Individuals', description: 'who want practical tools they can use immediately' },
  { label: 'Organisations', description: 'onboarding new talent or building performance culture' },
  { label: 'Anyone', description: 'who wants a taster before committing to the full six-week course' },
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

export default function Workshop() {
  return (
    <>
      <Head>
        <title>Feedback Workshop | Open to Feedback</title>
        <meta
          name="description"
          content="A practical half-day feedback workshop available in Cape Town or online. Learn how to receive, seek and give feedback in a way that actually changes behaviour. Suitable for teams and individuals."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                { '@type': 'VirtualLocation', url: 'https://www.opentofeedback.com/workshop' },
                {
                  '@type': 'Place',
                  name: 'Cape Town',
                  address: { '@type': 'PostalAddress', addressLocality: 'Cape Town', addressCountry: 'ZA' },
                },
              ],
              organizer: { '@type': 'Organization', name: 'Open to Feedback' },
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
                Half-Day Workshop
              </span>
            </div>
            <h1 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-4)' }}>
              Feedback Workshop
            </h1>
            <p style={{
              fontSize: '1.375rem',
              fontStyle: 'italic',
              color: 'var(--primary-700)',
              fontWeight: '500',
              marginBottom: 'var(--space-4)',
            }}>
              Half a day. Practical skills you'll use the next morning.
            </p>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '600px',
              margin: '0 auto var(--space-10)',
            }}>
              Available in person in Cape Town, or online for remote teams worldwide.
            </p>
            <a href={workshopMailto} className="btn btn-primary btn-lg">
              Enquire Now
            </a>
          </div>
        </section>

        <section className="section">
          <div className="container-sm">

            {/* Intro */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <p style={{ marginBottom: 0, color: 'var(--foreground)', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                This is a hands-on workshop for teams and individuals who want to get better at feedback, fast.
                In half a day, you'll move from understanding why feedback is hard to actually practising how to do it better.
              </p>
            </div>

            {/* Format boxes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)',
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
                  border: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>{icon}</div>
                  <div style={{ fontWeight: '700', color: 'var(--accent-foreground)', fontSize: '0.9375rem' }}>{value}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', marginTop: 'var(--space-1)' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Who it's for */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h2 className="card-title" style={{ marginTop: 0 }}>Who this is for</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 'var(--space-4)',
              }}>
                {whoItIsFor.map(({ label, description }) => (
                  <div key={label} style={{
                    padding: 'var(--space-4)',
                    background: 'var(--accent)',
                    borderRadius: 'var(--radius)',
                  }}>
                    <h3 style={{
                      fontSize: '1rem',
                      color: 'var(--accent-foreground)',
                      marginBottom: 'var(--space-1)',
                      marginTop: 0,
                    }}>
                      {label}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--foreground)', marginBottom: 0 }}>
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What the day covers + What you take away */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)',
            }}>
              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h2 className="card-title" style={{ marginTop: 0 }}>What the day covers</h2>
                </div>
                <CheckList items={covers} />
              </div>

              <div className="card" style={{ marginBottom: 0 }}>
                <div className="card-header">
                  <h2 className="card-title" style={{ marginTop: 0 }}>What you take away</h2>
                </div>
                <CheckList items={takeaways} icon="→" />
              </div>
            </div>

            {/* CTA */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)',
              textAlign: 'center',
            }}>
              <h2 className="card-title" style={{ color: 'var(--primary-900)', marginTop: 0 }}>
                Book the workshop
              </h2>
              <p style={{ color: 'var(--primary-800)', marginBottom: 'var(--space-6)', fontSize: '1.0625rem' }}>
                Whether you're booking for yourself or your team, get in touch and we'll work out the best format and timing.
              </p>
              <a href={workshopMailto} onClick={trackEnquiry} className="btn btn-primary btn-lg">
                Enquire Now
              </a>
            </div>

            <p style={{ textAlign: 'center', marginTop: 'var(--space-6)', color: 'var(--muted-foreground)' }}>
              Want a deeper programme?{' '}
              <Link href="/course">See the six-week course →</Link>
            </p>

          </div>
        </section>

      </div>
    </>
  );
}

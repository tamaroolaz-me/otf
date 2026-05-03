import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Nav';

const services = [
  {
    badge: '6-Week Course',
    title: 'The Feedback Course',
    tagline: 'Six weeks. Small groups. Keys to progressing in your career.',
    description:
      'An online programme for young professionals who want to change how they actually respond to feedback and seek out guidance that is actually useful.',
    highlights: [
      'Live group sessions of 5–6 people',
      '3hrs per week, 1hr live + 2hrs async',
      'Practical habits you apply immediately',
    ],
    cta: 'View Course',
    href: '/course',
  },
  {
    badge: 'Half-Day Workshop',
    title: 'Feedback Workshop',
    tagline: "Half a day. Practical skills you'll use the next morning.",
    description:
      'A hands-on workshop for teams and individuals who want to get better at feedback, fast. Research-based insights, useful simulations, useful takeaways.',
    highlights: [
      'Available in Cape Town or online',
      'Suitable for individuals or teams',
      'Actionable insights',
    ],
    cta: 'View Workshop',
    href: '/workshop',
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Open to Feedback</title>
        <meta
          name="description"
          content="Practical feedback programmes for individuals and teams. A six-week online course and a half-day workshop — in person in Cape Town or online worldwide."
        />
      </Head>

      <Nav />

      <main style={{ paddingTop: '70px' }}>

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
              maxWidth: '560px',
              margin: '0 auto',
            }}>
              Two ways to build real feedback skills — choose the format that fits
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-sm">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)',
            }}>
              {services.map(({ badge, title, tagline, description, highlights, cta, href }) => (
                <div key={href} className="card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginBottom: 0,
                }}>
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
                      {badge}
                    </span>
                  </div>

                  <h2 style={{
                    fontSize: '1.5rem',
                    color: 'var(--foreground)',
                    marginTop: 0,
                    marginBottom: 'var(--space-2)',
                  }}>
                    {title}
                  </h2>

                  <p style={{
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--primary)',
                    fontWeight: '500',
                    marginBottom: 'var(--space-4)',
                  }}>
                    {tagline}
                  </p>

                  <p style={{ color: 'var(--foreground)', marginBottom: 'var(--space-5)', flexGrow: 1 }}>
                    {description}
                  </p>

                  <ul style={{
                    listStyle: 'none',
                    margin: '0 0 var(--space-6) 0',
                    padding: 0,
                  }}>
                    {highlights.map((item) => (
                      <li key={item} style={{
                        display: 'flex',
                        gap: 'var(--space-2)',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--space-2)',
                        color: 'var(--foreground)',
                        fontSize: '0.9375rem',
                      }}>
                        <span style={{ color: 'var(--primary)', fontWeight: '700', flexShrink: 0 }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href={href} className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    {cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

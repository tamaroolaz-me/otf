import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

export default function About() {
  return (
    <>
      <Nav />
      
      {/* Add top padding to account for fixed header */}
      <div style={{ paddingTop: '70px' }}>
        
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'var(--space-16) 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-6)' }}>
              About This Platform
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Empowering individuals and teams to grow through the transformative power of feedback
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section">
          <div className="container-sm">
            
            {/* Mission Card */}
            <div className="card" style={{ marginBottom: 'var(--space-12)' }}>
              <div className="card-header">
                <h2 className="card-title">Our Mission</h2>
              </div>
              <p>
                This platform was created to help individuals and teams grow by learning how to give and receive feedback more effectively.
                Whether you're a student, a professional, or simply someone who wants to build better relationships and communication skills,
                you're in the right place.
              </p>
              <p>
                You'll find guidance, inspiration, and tools — including a comprehensive course — to help you start and sustain your feedback journey.
                The aim is to make learning about feedback feel approachable, empowering, and maybe even enjoyable.
              </p>
            </div>

            {/* What You'll Find */}
            <div className="card" style={{ marginBottom: 'var(--space-12)' }}>
              <div className="card-header">
                <h2 className="card-title">What You'll Discover Here</h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-6)',
                marginTop: 'var(--space-4)'
              }}>
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--primary-200)'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: 'var(--primary-900)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    🎯 Practical Tools
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    Step-by-step guidance on how to ask for, receive, and act on feedback effectively
                  </p>
                </div>
                
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--primary-200)'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: 'var(--primary-900)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    🧠 Mindset Shifts
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    Overcome mental barriers and learn to see feedback as a gift for growth
                  </p>
                </div>
                
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--primary-200)'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: 'var(--primary-900)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    📚 Free Resources
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    Curated reading lists, podcasts, and exercises to support your journey
                  </p>
                </div>
                
                <div style={{
                  padding: 'var(--space-4)',
                  background: 'var(--accent)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--primary-200)'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    color: 'var(--primary-900)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    🚀 Structured Learning
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--primary-700)' }}>
                    A comprehensive course designed to master the art of being open to feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Get Involved */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)',
              textAlign: 'center'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--primary-900)' }}>
                  Get Involved
                </h2>
              </div>
              <p style={{ color: 'var(--primary-800)', marginBottom: 'var(--space-6)' }}>
                If you'd like to get involved, share your story, or provide feedback on this platform,
                I'd love to hear from you! Your insights help make this resource better for everyone.
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeowyks1yjH50mc9ST9PKpsSPpaveIlZMRCBTgC_2GVjpz3dQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Share Your Feedback
                </a>
                <Link href="/quiz" className="btn btn-secondary">
                  Take the Quiz
                </Link>
              </div>
            </div>

            <hr style={{
              margin: 'var(--space-12) 0',
              border: 'none',
              borderTop: '1px solid var(--border)'
            }} />

            {/* What is Feedback section */}
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2>What is Feedback and Why is it Important?</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
                Let's clear up common misconceptions and define what truly helpful feedback looks like
              </p>
            </div>

            <div className="card" style={{ marginBottom: 'var(--space-12)' }}>
              <div className="card-header">
                <h2 className="card-title">Let's Be Clear About What We Mean</h2>
              </div>
              <p>
                We need to define what we actually mean by feedback, because not all feedback is created equal.
              </p>
              <blockquote style={{
                fontStyle: 'italic',
                margin: 'var(--space-6) 0',
                padding: 'var(--space-4)',
                background: 'var(--accent)',
                borderLeft: '4px solid var(--primary)',
                borderRadius: 'var(--radius)',
                color: 'var(--primary-800)'
              }}>
                "If we never learn to take something apart, test the assumptions, and reconstruct it,
                we end up trapped in what other people tell us — trapped in the way things have always been done."
                <br /><strong>– FS</strong>
              </blockquote>
              <p>
                A lot of concepts that appear to be feedback are <strong>not</strong> helpful to our development —
                or at least, not on their own. Let's debunk some common myths.
              </p>
            </div>

            {/* Common Myths Table */}
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2>Common Myths About Feedback</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
                  Let's separate fact from fiction
                </p>
              </div>
              <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
                  <thead>
                    <tr>
                      <th style={{
                        background: 'var(--destructive)',
                        color: 'white',
                        padding: 'var(--space-3) var(--space-4)',
                        textAlign: 'left',
                        fontWeight: '700',
                        width: '40%'
                      }}>Myth</th>
                      <th style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: 'var(--space-3) var(--space-4)',
                        textAlign: 'left',
                        fontWeight: '700',
                        width: '60%'
                      }}>Truth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      {
                        myth: 'Feedback is my performance review',
                        truth: "Feedback should be continuous, not annual. A good performance review will include feedback, but they're not the same thing."
                      },
                      {
                        myth: "Feedback is usually negative or focuses on what I'm doing wrong",
                        truth: 'Some of the most useful feedback focuses on what went right, so you can repeat it. In systems thinking, this is called a reinforcing feedback loop, and it leads to exponential growth!'
                      },
                      {
                        myth: 'The person giving feedback "has the right answer"',
                        truth: "Most feedback says more about the giver than the receiver. It's shaped by their experiences and worldview. Take what value you can, ask clarifying questions, and decide what's worth keeping."
                      },
                      {
                        myth: 'I need to action all feedback I receive',
                        truth: 'Trying to work on too many areas at once is overwhelming and ineffective. Consider all feedback carefully, then decide which insights are truly worth acting on. Quality over quantity.'
                      },
                      {
                        myth: 'Feedback is only a workplace thing',
                        truth: 'At work, at home, in relationships, even at a restaurant that gave you poor service — every part of life offers opportunities for feedback. The skills transfer across all contexts.'
                      },
                      {
                        myth: 'Feedback is always intentionally given and direct',
                        truth: 'Any information you receive about the impact of your actions is feedback. Sometimes no response at all is feedback. Being open to subtle and indirect feedback helps you learn faster and more comprehensively.'
                      },
                    ] as { myth: string; truth: string }[]).map(({ myth, truth }, i) => (
                      <tr key={i} style={{
                        borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
                        background: i % 2 === 0 ? 'var(--accent)' : 'white'
                      }}>
                        <td style={{
                          padding: 'var(--space-4)',
                          verticalAlign: 'top',
                          color: 'var(--destructive)',
                          fontWeight: '600',
                          borderRight: '1px solid var(--border)'
                        }}>
                          {myth}
                        </td>
                        <td style={{
                          padding: 'var(--space-4)',
                          verticalAlign: 'top',
                          color: 'var(--foreground)'
                        }}>
                          {truth}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* What Real Feedback Looks Like */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)',
              marginBottom: 'var(--space-12)'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--primary-900)' }}>
                  ✅ What Real Feedback Actually Looks Like
                </h2>
              </div>
              <div style={{ color: 'var(--primary-800)' }}>
                <ul style={{ marginLeft: 'var(--space-6)' }}>
                  <li>Information about the impact of your actions, both positive and negative</li>
                  <li>Observations from multiple perspectives, not just one "authority"</li>
                  <li>Data you can choose to act on or not, based on your goals and values</li>
                  <li>Continuous input from your environment, not just formal reviews</li>
                  <li>Both explicit conversations and implicit signals from the world around you</li>
                  <li>A tool for growth that works across all areas of life</li>
                </ul>
              </div>
            </div>

            {/* Ready to Dive Deeper CTA */}
            <div className="card" style={{ textAlign: 'center' }}>
              <div className="card-header">
                <h2 className="card-title">Ready to Dive Deeper?</h2>
              </div>
              <p style={{ marginBottom: 'var(--space-6)' }}>
                Now that you understand what feedback really is (and isn't),
                learn practical strategies for embracing it as a catalyst for growth.
              </p>
              <div style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link href="/how-to" className="btn btn-primary">
                  Learn How to Get Started
                </Link>
                <Link href="/course" className="btn btn-secondary">
                  Join Our Course
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

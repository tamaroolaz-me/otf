import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

export default function WhatIsFeedback() {
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
              What is Feedback and Why is it Important?
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Let's clear up common misconceptions and define what truly helpful feedback looks like
            </p>
          </div>
        </section>

        {/* Definition Section */}
        <section className="section">
          <div className="container-sm">
            
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

            {/* Myths Section */}
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
                <h2>Common Myths About Feedback</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
                  Let's separate fact from fiction
                </p>
              </div>

              {/* Myth 1 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #1: Feedback is my performance review
                    </h3>
                    <p>
                      <strong>Hard no.</strong> We should see opportunities for feedback in everyday life.
                      A good performance review will include feedback, but they're not the same thing.
                      Feedback should be continuous, not annual.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #2: Feedback is usually negative or focuses on what I'm doing wrong
                    </h3>
                    <p>
                      Some of the most useful feedback focuses on what went <em>right</em>, so you can repeat it.
                      In systems thinking, this is called a <strong>reinforcing feedback loop</strong>,
                      and it leads to exponential growth!
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #3: The person giving feedback "has the right answer"
                    </h3>
                    <p>
                      Most feedback says more about the giver than the receiver. It's shaped by their experiences and worldview.
                      Take what value you can, ask clarifying questions, and decide what's worth keeping.
                      Seek feedback from people you trust and admire.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #4: I need to action all feedback I receive
                    </h3>
                    <p>
                      See myth #3! Trying to work on too many areas at once is overwhelming and ineffective.
                      Consider all feedback carefully, then decide which insights are truly worth acting on.
                      Quality over quantity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 5 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #5: Feedback is only a workplace thing
                    </h3>
                    <p>
                      Absolutely not. At work, at home, in relationships, even at a restaurant that gave you poor service —
                      every part of life offers opportunities for feedback. The skills transfer across all contexts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 6 */}
              <div className="card" style={{ marginBottom: 'var(--space-6)' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--destructive)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✗
                  </div>
                  <div>
                    <h3 style={{ color: 'var(--destructive)', marginBottom: 'var(--space-2)' }}>
                      Myth #6: Feedback is always intentionally given and direct
                    </h3>
                    <p>
                      Any information you receive about the impact of your actions is feedback.
                      Sometimes <strong>no response at all is feedback</strong>.
                      Being open to subtle and indirect feedback helps you learn faster and more comprehensively.
                    </p>
                  </div>
                </div>
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

            {/* CTA Section */}
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

import React from 'react';
import Nav from '../components/Nav';

export default function Course() {
  return (
    <>
      <Nav />
      
      {/* Add top padding to account for fixed header */}
      <div style={{ paddingTop: '70px' }}>
        
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'var(--space-20) 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-6)' }}>
              Open to Feedback Course
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--primary-700)',
              maxWidth: '700px',
              margin: '0 auto var(--space-8)'
            }}>
              Master the art of receiving, processing, and acting on feedback to accelerate your personal and professional growth
            </p>
            <div style={{
              background: 'var(--primary-200)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius)',
              display: 'inline-block',
              marginBottom: 'var(--space-8)'
            }}>
              <p style={{
                color: 'var(--primary-900)',
                fontSize: '1rem',
                margin: 0,
                fontWeight: '600'
              }}>
                🎯 Join the waitlist to be notified when enrollment opens
              </p>
            </div>
            <div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7iUljSVS3hTki4Om7VIvBT1tS-Z5M1nhjh8V5qobMMe799w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
                style={{ marginRight: 'var(--space-4)' }}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-sm">
          <div className="container-sm">
            <blockquote style={{
              fontSize: '1.25rem',
              fontStyle: 'italic',
              margin: '0 auto',
              padding: 'var(--space-8)',
              background: 'var(--accent)',
              borderLeft: '4px solid var(--primary)',
              borderRadius: 'var(--radius)',
              color: 'var(--primary-800)',
              textAlign: 'center',
              maxWidth: '800px'
            }}>
              "When you are open to feedback, your working relationships have more trust and humour,
              you collaborate more effectively and solve problems more easily."
              <br />
              <strong style={{ color: 'var(--primary-900)' }}>
                — Douglas Stone and Sheila Heen, <em>Thanks for the Feedback</em> (2015)
              </strong>
            </blockquote>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2>Transform Your Relationship with Feedback</h2>
              <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                This comprehensive course will equip you with the mindset, frameworks, and practical tools
                to turn feedback into your greatest catalyst for growth.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-12)'
            }}>
              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '28px' }}>🧠</span>
                  </div>
                  <h3 className="card-title">Understand Your Psychology</h3>
                </div>
                <p className="card-description">
                  Discover why receiving feedback is so difficult for most of us and learn to recognize
                  and manage your own triggers and defensive responses.
                </p>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '28px' }}>🛠️</span>
                  </div>
                  <h3 className="card-title">Master Practical Frameworks</h3>
                </div>
                <p className="card-description">
                  Learn proven frameworks and practical tools to help you leverage others' insights
                  for meaningful personal and professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section style={{
          background: 'var(--gray-50)',
          padding: 'var(--space-16) 0',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)'
        }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
              <h2>What You'll Be Able to Do</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
                By the end of this course, you'll have developed these essential skills:
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                {
                  icon: '🎯',
                  title: 'Anticipate Your Triggers',
                  description: 'Understand and anticipate your own triggers and blockers around receiving feedback'
                },
                {
                  icon: '💬',
                  title: 'Seek Feedback Confidently',
                  description: 'Be better at and more comfortable seeking feedback, both digitally and in person'
                },
                {
                  icon: '🔍',
                  title: 'Gain Clarity Through Reflection',
                  description: 'Gain greater clarity on feedback through effective questioning and reflection techniques'
                },
                {
                  icon: '⚖️',
                  title: 'Make Smart Decisions',
                  description: 'Confidently decide which feedback is worth acting on versus discarding'
                },
                {
                  icon: '🚀',
                  title: 'Take Effective Action',
                  description: 'Effectively action feedback through proven goal setting and habit building methods'
                },
                {
                  icon: '📊',
                  title: 'Track Your Growth',
                  description: 'Keep a useful record of feedback and development for future reviews and applications'
                }
              ].map((outcome, index) => (
                <div key={index} className="card" style={{ height: '100%' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'var(--space-4)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--primary-100)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{ fontSize: '24px' }}>{outcome.icon}</span>
                    </div>
                    <div>
                      <h4 style={{
                        color: 'var(--primary-900)',
                        marginBottom: 'var(--space-2)',
                        fontSize: '1.125rem'
                      }}>
                        {outcome.title}
                      </h4>
                      <p style={{
                        color: 'var(--muted-foreground)',
                        fontSize: '0.875rem',
                        margin: 0
                      }}>
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--primary-900)' }}>
                  Ready to Transform Your Growth?
                </h2>
              </div>
              <p style={{
                color: 'var(--primary-800)',
                marginBottom: 'var(--space-8)',
                fontSize: '1.125rem'
              }}>
                Join the waitlist to be the first to know when enrollment opens.
                Spaces will be limited to ensure personalized attention and meaningful interaction.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7iUljSVS3hTki4Om7VIvBT1tS-Z5M1nhjh8V5qobMMe799w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Join the Waitlist
              </a>
              <p style={{
                color: 'var(--primary-700)',
                fontSize: '0.875rem',
                marginTop: 'var(--space-4)',
                margin: 'var(--space-4) 0 0 0'
              }}>
                No spam, just updates on course availability and exclusive early-bird pricing
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

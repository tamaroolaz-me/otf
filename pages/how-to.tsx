import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import { resources, CATEGORY_META } from '../data/resources';

const featuredResources = resources.filter((r) => r.featured);

export default function HowTo() {
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
              How to Start Being Open to Feedback
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-800)',
              maxWidth: '600px',
              margin: '0 auto var(--space-6)'
            }}>
              A practical quick-start guide to developing one of the most valuable skills for personal and professional growth
            </p>
            <div style={{
              background: 'var(--primary-200)',
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius)',
              display: 'inline-block'
            }}>
              <p style={{
                color: 'var(--primary-900)',
                fontSize: '0.875rem',
                margin: 0,
                fontWeight: '500'
              }}>
                💡 For comprehensive learning, consider joining our structured course
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="section">
          <div className="container-sm">
            
            {/* Step 1 */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  1
                </div>
                <h2 style={{ margin: 0, color: 'var(--foreground)' }}>
                  Understand what feedback is, when and why it's valuable
                </h2>
              </div>

              <p style={{ marginBottom: 'var(--space-6)' }}>
                Criticism triggers a real physiological pain response. Your ego will try to filter out what it doesn't want to hear. Start your path to understanding by listening to the podcast episode <em>'How to Love Criticism'</em> that explains why feedback is triggering and what you can do about it.
              </p>
              
              <Link href="/resources/how-to-love-criticism" className="btn btn-primary">
                🎧 Listen now →
              </Link>
            </div>

            {/* Step 2 */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  2
                </div>
                <h2 style={{ margin: 0, color: 'var(--foreground)' }}>
                  Build your challenge network
                </h2>
              </div>

              <p style={{ marginBottom: 'var(--space-6)' }}>
                Identify one or two people in your life who will push back on you honestly. Not your cheerleaders, the people who'll tell you what you need to hear. That's your challenge network. Then make it easy for them by explicitly asking them to give you feedback regularly, not just when something goes wrong.
              </p>

              <Link href="/resources/build-your-challenge-network" className="btn btn-primary">
                📄 Download the guide →
              </Link>
            </div>

            {/* Step 3 */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  3
                </div>
                <h2 style={{ margin: 0, color: 'var(--foreground)' }}>
                  Practice Asking for & Receiving Feedback
                </h2>
              </div>
              
              <p>
                Start small and build your comfort level. Here are some practical ways to begin:
              </p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>Ask specific questions like "What's one thing I could do better?"</li>
                <li>Send a short feedback form after meetings, presentations, or projects</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                marginBottom: 'var(--space-4)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700'
                }}>
                  4
                </div>
                <h2 style={{ margin: 0, color: 'var(--foreground)' }}>
                  Reflect & Decide What to Action
                </h2>
              </div>
              
              <h3 style={{ marginBottom: 'var(--space-3)', color: 'var(--foreground)' }}>
                Give yourself a second score
              </h3>
              <p>
                When feedback arrives, notice how well you received it. The first score is the feedback itself, you can't change it. The second score is how you responded to it. Were you open or defensive? Did you listen or shut down? That second score is the one you can actually work on. After each feedback conversation, ask yourself: how did I take that?
              </p>
              <p style={{ marginTop: 'var(--space-4)' }}>
                Now unpack the feedback. Process it thoughtfully. Ask yourself:
              </p>
              <div style={{
                background: 'var(--accent)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--primary-200)',
                marginTop: 'var(--space-4)'
              }}>
                <ul style={{ margin: 0, paddingLeft: 'var(--space-6)' }}>
                  <li style={{ color: 'var(--foreground)' }}>What's not clear? What clarifying questions should I ask?</li>
                  <li style={{ color: 'var(--foreground)' }}>What might be true or useful in this feedback?</li>
                  <li style={{ color: 'var(--foreground)' }}>How can I best act on the most valuable insights?</li>
                  <li style={{ color: 'var(--foreground)' }}>What patterns am I seeing across different feedback sources?</li>
                </ul>
              </div>
            </div>

            {/* Resources Section */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>📚 Recommended Resources</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 'var(--space-5)',
                marginBottom: 'var(--space-6)'
              }}>
                {featuredResources.map((resource) => {
                  const meta = CATEGORY_META[resource.category];
                  return (
                    <Link
                      key={resource.slug}
                      href={`/resources/${resource.slug}`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow-sm)',
                        overflow: 'hidden',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-lg)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-sm)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ position: 'relative' }}>
                        <img
                          src={resource.thumbnail}
                          alt={resource.title}
                          style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
                        />
                        <span style={{
                          position: 'absolute',
                          top: 'var(--space-3)',
                          left: 'var(--space-3)',
                          background: 'var(--primary)',
                          color: 'var(--primary-foreground)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: 'var(--space-1) var(--space-3)',
                          borderRadius: 999,
                          fontFamily: 'var(--font-sans)',
                        }}>
                          {meta.emoji} {meta.label}
                        </span>
                      </div>
                      <div style={{ padding: 'var(--space-4)' }}>
                        <h3 style={{
                          fontSize: '0.9375rem',
                          fontWeight: 600,
                          margin: '0 0 var(--space-1)',
                          color: 'var(--foreground)',
                          fontFamily: 'var(--font-heading)',
                          lineHeight: 1.3,
                        }}>
                          {resource.title}
                        </h3>
                        {resource.author && (
                          <p style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', margin: 0 }}>
                            by {resource.author}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/resources" className="btn btn-secondary">
                  Browse all resources →
                </Link>
              </div>
            </div>

            {/* Timing Section */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--primary-900)' }}>
                  ⏰ When's the Best Time to Ask for Feedback?
                </h2>
              </div>
              <p style={{ color: 'var(--primary-800)' }}>
                The best time to ask for feedback is when you're <strong>"above the line"</strong> —
                in a positive, open, and curious mindset. Being in this space helps reduce your natural
                defensive response to potentially challenging feedback.
              </p>
              <p style={{ color: 'var(--primary-800)', marginBottom: 'var(--space-6)' }}>
                If you're feeling defensive, stressed, or overwhelmed, it might be better to wait until
                you're in a more receptive state of mind.
              </p>
              <div style={{ textAlign: 'center' }}>
                <Link href="/quiz" className="btn btn-primary">
                  Take the Quiz
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

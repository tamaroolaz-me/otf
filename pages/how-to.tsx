import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

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
            <h1 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-6)' }}>
              How to Start Being Open to Feedback
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--muted-foreground)',
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
                color: 'var(--foreground)',
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
                  Understand What It Means & Why It's Valuable
                </h2>
              </div>
              
              <p style={{ marginBottom: 'var(--space-6)' }}>
                Start by listening to this excellent podcast: <strong>How to Love Criticism</strong> from <em>WorkLife with Adam Grant</em>
              </p>
              
              <div style={{
                background: 'var(--accent)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--primary-200)'
              }}>
                <h4 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-3)' }}>
                  🎧 Listen on:
                </h4>
                <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                  <a href="https://podcasts.apple.com/us/podcast/how-to-love-criticism/id1346314086?i=1000454230157"
                     target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Apple Podcasts
                  </a>
                  <a href="https://www.stitcher.com/show/worklife-with-adam-grant/episode/how-to-love-criticism-64883776"
                     target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Stitcher
                  </a>
                  <a href="https://www.ted.com/podcasts/worklife/how-to-love-criticism"
                     target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    TED
                  </a>
                </div>
              </div>
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
                  Make a Personal Commitment
                </h2>
              </div>
              
              <p>
                Write down your commitment to being more open to feedback. Reflect on what this means to you personally.
              </p>
              <p>
                Consider making yourself accountable by adding "Open to Feedback" to visible places like:
              </p>
              <ul style={{ marginLeft: 'var(--space-6)' }}>
                <li>Your Slack status</li>
                <li>Email signature</li>
                <li>LinkedIn profile</li>
                <li>Team bio or introduction</li>
              </ul>
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
                <li>Start conversations by directly asking for feedback</li>
                <li>Create a simple Google Form where people can share feedback anonymously</li>
                <li>Ask specific questions like "What's one thing I could do better?"</li>
                <li>Request feedback after meetings, presentations, or projects</li>
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
              
              <p>
                Don't just collect feedback—process it thoughtfully. Ask yourself:
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
              
              <div style={{
                background: 'var(--primary-100)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius)',
                marginTop: 'var(--space-6)',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-2)' }}>
                  🔄 Repeat Steps 3 & 4 Continuously
                </h3>
                <p style={{ color: 'var(--foreground)', margin: 0 }}>
                  Make this a regular practice, not a one-time activity
                </p>
              </div>
            </div>

            {/* Resources Section */}
            <div className="card" style={{ marginBottom: 'var(--space-8)' }}>
              <div className="card-header">
                <h2 className="card-title">📚 Recommended Resources</h2>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-6)'
              }}>
                <div>
                  <h4 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-3)' }}>📺 Watch</h4>
                  <ul style={{ marginLeft: 'var(--space-4)' }}>
                    <li><em>Brené Brown: The Call to Courage</em> (Netflix)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-3)' }}>🎧 Listen</h4>
                  <ul style={{ marginLeft: 'var(--space-4)' }}>
                    <li><em>Leading Above the Line</em></li>
                  </ul>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--foreground)', marginBottom: 'var(--space-3)' }}>📖 Read</h4>
                  <ul style={{ marginLeft: 'var(--space-4)' }}>
                    <li><em>Thanks for the Feedback</em> – Douglas Stone & Sheila Heen</li>
                    <li><em>Radical Candor</em> – Kim Scott</li>
                    <li><em>The Four Agreements</em> – Don Miguel Ruiz</li>
                    <li><em>Drive</em> – Daniel H. Pink</li>
                    <li><em>Thinking, Fast and Slow</em> – Daniel Kahneman</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timing Section */}
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
              border: '1px solid var(--primary-200)'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--foreground)' }}>
                  ⏰ When's the Best Time to Ask for Feedback?
                </h2>
              </div>
              <p style={{ color: 'var(--foreground)' }}>
                The best time to ask for feedback is when you're <strong>"above the line"</strong> —
                in a positive, open, and curious mindset. Being in this space helps reduce your natural
                defensive response to potentially challenging feedback.
              </p>
              <p style={{ color: 'var(--foreground)', marginBottom: 'var(--space-6)' }}>
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

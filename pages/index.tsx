import React from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      
      {/* Add top padding to account for fixed header */}
      <div style={{ paddingTop: '70px' }}>
        
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1>Master the Art of Being Open to Feedback</h1>
            <p>
              Transform your personal and professional relationships by developing one of the most powerful skills:
              being genuinely open to feedback. Whether you're just starting or looking to deepen your practice,
              you'll find the tools and insights you need here.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 'var(--space-8)'
            }}>
              <Link href="/quiz" className="btn btn-primary btn-lg">
                Take the Quiz
              </Link>
              <Link href="/how-to" className="btn btn-secondary btn-lg">
                Get Started Free
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}>
              <h2>Everything You Need to Grow</h2>
              <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
                Discover practical tools, proven frameworks, and expert guidance to help you embrace feedback as a catalyst for growth.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-8)',
              marginBottom: 'var(--space-12)'
            }}>
              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '24px' }}>🎯</span>
                  </div>
                  <h3 className="card-title">Practical Guidance</h3>
                </div>
                <p className="card-description">
                  Step-by-step instructions on how to ask for, receive, and act on feedback effectively.
                  No theory-heavy content—just actionable strategies you can use immediately.
                </p>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '24px' }}>🧠</span>
                  </div>
                  <h3 className="card-title">Mindset Shifts</h3>
                </div>
                <p className="card-description">
                  Overcome common myths and mental barriers that make feedback feel threatening.
                  Learn to see feedback as a gift rather than criticism.
                </p>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '24px' }}>📚</span>
                  </div>
                  <h3 className="card-title">Free Resources</h3>
                </div>
                <p className="card-description">
                  Curated reading lists, podcast recommendations, and practical exercises
                  to support your feedback journey—all completely free.
                </p>
              </div>

              <div className="card">
                <div className="card-header">
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'var(--primary-100)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <span style={{ fontSize: '24px' }}>🚀</span>
                  </div>
                  <h3 className="card-title">Structured Course</h3>
                </div>
                <p className="card-description">
                  Take your skills to the next level with our comprehensive course designed to help you
                  master the art of being open to feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'var(--primary-50)',
          padding: 'var(--space-16) 0',
          borderTop: '1px solid var(--primary-200)',
          borderBottom: '1px solid var(--primary-200)'
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary-900)', marginBottom: 'var(--space-6)' }}>
              Find out what holds you back most
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--primary-700)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              When feedback stings, it&apos;s usually for one of three reasons. Take the 2-minute quiz to find out which feedback trigger affects you most — and what to do about it.
            </p>
            <Link href="/quiz" className="btn btn-primary btn-lg">
              Take the Quiz
            </Link>
          </div>
        </section>

        {/* About the Journey Section */}
        <section className="section">
          <div className="container-sm">
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--gray-50) 0%, var(--primary-50) 100%)',
              border: '1px solid var(--primary-200)'
            }}>
              <div className="card-header">
                <h2 className="card-title" style={{ color: 'var(--primary-900)' }}>
                  A Personal Journey of Growth 🌱
                </h2>
              </div>
              <div style={{ color: 'var(--primary-800)' }}>
                <p>
                  In the spirit of being <strong>open to feedback</strong>, this site represents my own learning journey.
                  I'm rebuilding it using modern tools and AI assistance—embracing the process of continuous improvement.
                </p>
                <p>
                  You might notice changes, improvements, or even the occasional rough edge as I iterate and grow.
                  That's intentional. It's a living example of what it means to stay open to feedback and keep evolving.
                </p>
                <p style={{ marginBottom: 'var(--space-6)' }}>
                  Thanks for being part of this journey. Your thoughts, suggestions, and feedback are always welcome! 💬
                </p>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeowyks1yjH50mc9ST9PKpsSPpaveIlZMRCBTgC_2GVjpz3dQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Share Your Feedback
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

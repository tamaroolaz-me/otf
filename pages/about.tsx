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
                <Link href="/course" className="btn btn-secondary">
                  Join the Course
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

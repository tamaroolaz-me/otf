import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Modern Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 1000,
        padding: '0 var(--space-4)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}>
          {/* Logo/Brand */}
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--primary)',
            fontFamily: 'var(--font-heading)',
            textDecoration: 'none',
          }}>
            Open to Feedback
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
            }}>
              <Link href="/" style={{
                color: 'var(--muted-foreground)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.background = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
                e.currentTarget.style.background = 'transparent';
              }}>
                Home
              </Link>
              <Link href="/how-to" style={{
                color: 'var(--muted-foreground)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.background = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
                e.currentTarget.style.background = 'transparent';
              }}>
                How To
              </Link>
              <Link href="/what-is-feedback" style={{
                color: 'var(--muted-foreground)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.background = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
                e.currentTarget.style.background = 'transparent';
              }}>
                What is Feedback
              </Link>
              <Link href="/about" style={{
                color: 'var(--muted-foreground)',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary)';
                e.currentTarget.style.background = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--muted-foreground)';
                e.currentTarget.style.background = 'transparent';
              }}>
                About
              </Link>
            </div>
            
            {/* CTA Button */}
            <Link href="/course" className="btn btn-primary">
              Join Course
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            style={{
              display: 'none',
              position: 'relative',
              zIndex: 1001,
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius)',
              padding: 'var(--space-2)',
              cursor: 'pointer',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '40px',
              height: '40px',
              transition: 'all 0.3s ease',
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                height: '2px',
                width: '20px',
                background: 'white',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                width: '20px',
                background: 'white',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                height: '2px',
                width: '20px',
                background: 'white',
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'none',
          }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-100%',
          width: '280px',
          height: '100vh',
          background: 'var(--card)',
          borderLeft: '1px solid var(--border)',
          zIndex: 1000,
          transition: 'right 0.3s ease',
          padding: 'var(--space-20) var(--space-6) var(--space-6)',
          boxShadow: isMenuOpen ? 'var(--shadow-xl)' : 'none',
          display: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-2)',
          }}
        >
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              padding: 'var(--space-4) var(--space-4)',
              borderRadius: 'var(--radius)',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            Home
          </Link>
          <Link
            href="/how-to"
            onClick={closeMenu}
            style={{
              padding: 'var(--space-4) var(--space-4)',
              borderRadius: 'var(--radius)',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            How To
          </Link>
          <Link
            href="/what-is-feedback"
            onClick={closeMenu}
            style={{
              padding: 'var(--space-4) var(--space-4)',
              borderRadius: 'var(--radius)',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            What is Feedback
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            style={{
              padding: 'var(--space-4) var(--space-4)',
              borderRadius: 'var(--radius)',
              transition: 'all 0.2s ease',
              fontSize: '1rem',
              fontWeight: '500',
              color: 'var(--foreground)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            About
          </Link>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link
              href="/course"
              onClick={closeMenu}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Join Course
            </Link>
          </div>
        </div>
      </nav>

      {/* Add responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav > div:first-child {
            display: none !important;
          }
          
          button[aria-label="Toggle menu"] {
            display: flex !important;
          }
          
          nav[style*="right:"] {
            display: block !important;
          }
          
          div[style*="rgba(0, 0, 0, 0.5)"] {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

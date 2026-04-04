import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
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
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-8)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/how-to', label: 'How To' },
                { href: '/what-is-feedback', label: 'What is Feedback' },
                { href: '/about', label: 'About' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{
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
                  {label}
                </Link>
              ))}
            </div>
            <Link href="/course" className="btn btn-primary">Join Course</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            style={{
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
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: 'block', height: '2px', width: '20px', background: 'white',
              borderRadius: '1px', transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', height: '2px', width: '20px', background: 'white',
              borderRadius: '1px', transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', height: '2px', width: '20px', background: 'white',
              borderRadius: '1px', transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)', zIndex: 999,
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className="mobile-nav"
        style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-100%',
          width: '280px',
          height: '100vh',
          background: 'white',
          borderLeft: '1px solid var(--border)',
          zIndex: 1000,
          transition: 'right 0.3s ease',
          padding: 'var(--space-20) var(--space-6) var(--space-6)',
          boxShadow: isMenuOpen ? 'var(--shadow-xl)' : 'none',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/how-to', label: 'How To' },
            { href: '/what-is-feedback', label: 'What is Feedback' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu} style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius)',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#111',
              textDecoration: 'none',
              display: 'block',
            }}>
              {label}
            </Link>
          ))}
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link href="/course" onClick={closeMenu} className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}>
              Join Course
            </Link>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
        }
        .mobile-nav {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-nav {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

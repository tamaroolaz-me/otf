import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/how-to', label: 'How To' },
  { href: '/about', label: 'About' },
  { href: '/what-is-feedback', label: 'What is Feedback' },
  { href: '/course', label: 'Course' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-[#34c886]">OpenToFeedback</span>

        {/* Burger (mobile only) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop menu only (hidden on small screens) */}
        <ul className="hidden md:flex gap-6 items-center">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-gray-700 hover:text-[#34c886] transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown (only shows if open on small screens) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-gray-700 hover:text-[#34c886] transition"
                  onClick={() => setIsOpen(false)} // auto-close on click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

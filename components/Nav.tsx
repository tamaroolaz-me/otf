import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/how-to">How To</Link> |{' '}
      <Link href="/about">About</Link> |{' '}
      <Link href="/what-is-feedback">What is Feedback</Link> |{' '}
      <Link href="/course">Course</Link>
    </nav>
  );
}

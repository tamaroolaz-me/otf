import React from 'react';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Nav />
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
        <h1>Welcome!</h1>
        <p>
          This site is a space to explore one of the most powerful skills we can develop: being open to feedback.
          Whether you're new to the idea or already on your journey, you’ll find tools, thoughts, and resources to help you grow.
        </p>

        <section style={{ marginTop: '2rem' }}>
          <h2>Here, you’ll find:</h2>
          <ul>
            <li>Simple guidance on how to give and receive feedback</li>
            <li>Myths and mindset shifts that make feedback easier</li>
            <li>Free resources and reading suggestions</li>
            <li>A course to help you level up this skill</li>
          </ul>
        </section>

        <section
          style={{
            marginTop: '4rem',
            padding: '1.5rem',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h2 style={{ marginBottom: '1rem' }}>Why does the site look so hideous? 😅</h2>
          <p>
            In the spirit of being <strong>open to feedback</strong> (yes, I'm trying to live 'on brand'), I’m learning how to rebuild this site myself —
            using AI-powered tools and a healthy dose of curiosity. This approach is sometimes called <em>vibe coding</em>.
          </p>
          <p>
            That means the site might be a little ugly, unfinished, or broken at times — but it’s all part of the process.
            I’ll be slowly adding better design, features, and polish as I learn.
          </p>
          <p>
            Thanks for stopping by — and feel free to share your thoughts, suggestions, or feedback any time. 💬
          </p>
        </section>
      </main>
    </>
  );
}

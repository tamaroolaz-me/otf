import React from 'react';
import Nav from '../components/Nav';

export default function About() {
  return (
    <>
      <Nav />
      <main
        style={{
          padding: "2rem",
          fontFamily: "sans-serif",
          lineHeight: "1.6",
        }}
      >
        <h1>About This Site</h1>

        <p>
          This platform was created to help individuals and teams grow by learning how to give and receive feedback more effectively.
        </p>

        <p>
          Whether you're a student, a professional, or simply someone who wants to build better relationships and communication skills,
          you're in the right place.
        </p>

        <p>
          You'll find guidance, inspiration, and tools — including a free course — to help you start and sustain your feedback journey.
        </p>

        <p>
          The aim is to make learning about feedback feel approachable, empowering, and maybe even fun.
        </p>

        <p>
          If you'd like to get involved or share your story, please reach out. I'd love to hear from you!
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeowyks1yjH50mc9ST9PKpsSPpaveIlZMRCBTgC_2GVjpz3dQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "1rem",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Share feedback
        </a>
      </main>
    </>
  );
}

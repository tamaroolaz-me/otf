import React from 'react';
import Nav from '../components/Nav';

export default function WhatIsFeedback() {
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
        <h1>What is Feedback and Why is it Important?</h1>

        <h2>Let's be clear</h2>
        <p>We need to define what we actually mean by feedback.</p>

        <blockquote style={{ fontStyle: "italic", margin: "1.5rem 0", paddingLeft: "1rem", borderLeft: "3px solid #ccc" }}>
          "If we never learn to take something apart, test the assumptions, and reconstruct it, we end up trapped in what other people tell us — trapped in the way things have always been done." – FS
        </blockquote>

        <p>
          A lot of concepts appearing to be feedback are <strong>not</strong> helpful to our development — or at least, not on their own.
        </p>

        <h2>Myths About Feedback</h2>

        <h3>1. Feedback is my performance review</h3>
        <p>
          Hard no. We should see opportunities for feedback in everyday life.
          A good performance review will include feedback, but they're not the same.
        </p>

        <h3>2. Feedback is usually negative or focuses on what I'm doing wrong</h3>
        <p>
          Some of the most useful feedback I’ve received focuses on what went right, so I can repeat it.
          In systems thinking, this is called a <strong>reinforcing feedback loop</strong>, and it leads to exponential growth!
        </p>

        <h3>3. The person giving the feedback "has the right answer"</h3>
        <p>
          Most feedback says more about the giver than the receiver. It’s shaped by their experiences and worldview.
          Take what value you can, ask clarifying questions, and decide what’s worth keeping.
          Seek feedback from people you trust and admire.
        </p>

        <h3>4. I need to action all feedback I receive</h3>
        <p>
          Firstly — see #3. Trying to work on too many areas at once is tough.
          Consider all feedback carefully, then decide which ones are truly worth acting on.
        </p>

        <h3>5. Feedback is only a workplace thing</h3>
        <p>
          Nope. At work, at home, at a restaurant that gave you bad service — every part of life offers opportunities for feedback.
        </p>

        <h3>6. Feedback is always intentionally given and direct</h3>
        <p>
          Any information you receive about the impact of your actions is feedback.
          Sometimes <strong>no response at all is feedback</strong>.
          Being open to subtle and indirect feedback helps you learn faster.
        </p>

        <p><em>More coming soon...</em></p>
      </main>
    </>
  );
}

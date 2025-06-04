import React from 'react';
import Nav from '../components/Nav';

export default function Course() {
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
        <h1>Open to Feedback Course – Waitlist</h1>

        <h2>About the Course</h2>
        <blockquote style={{ fontStyle: "italic", margin: "1.5rem 0", paddingLeft: "1rem", borderLeft: "3px solid #ccc" }}>
          "When you are open to feedback, your working relationships have more trust and humour, you collaborate more effectively and solve problems more easily."<br />
          — Douglas Stone and Sheila Heen, <em>Thanks for the Feedback</em> (2015)
        </blockquote>

        <p><strong>Would you like to learn:</strong></p>
        <ul>
          <li>Why receiving feedback is so difficult for most of us</li>
          <li>Some useful frameworks and practical tools to help you leverage others' insights for personal growth</li>
        </ul>

        <h2>Outcomes</h2>
        <p>At the end of this course you should be able to:</p>
        <ul>
          <li>Understand (and anticipate) your own triggers/blockers around receiving feedback</li>
          <li>Be better at and more comfortable in seeking feedback (digitally and in person)</li>
          <li>Gain greater clarity on feedback (solicited or unsolicited) through questioning and reflection</li>
          <li>Confidently decide which feedback is worth actioning vs discarding</li>
          <li>Effectively action feedback through goal setting and habit building</li>
          <li>Keep a useful record of feedback and development to use in future reviews or applications</li>
        </ul>

        <h2>Sign Up</h2>
        <p>Sign up to be notified of upcoming course dates.</p>
        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSc7iUljSVS3hTki4Om7VIvBT1tS-Z5M1nhjh8V5qobMMe799w/viewform"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "1rem",
  }}
>
  Sign up
</a>

      </main>
    </>
  );
}

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Nav from "../../components/Nav";
import { posts } from "../../data/blog";
import type { BlogPost } from "../../data/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  post: BlogPost;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const post = posts.find((p) => p.slug === params?.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Shared prose styles applied via the components prop of ReactMarkdown.
// All values use CSS variables from globals.css so they stay consistent with the design system.
const markdownComponents: React.ComponentProps<typeof ReactMarkdown>["components"] = {
  h1: ({ children }) => (
    <h2
      style={{
        fontSize: "1.75rem",
        fontWeight: 700,
        fontFamily: "var(--font-heading)",
        color: "var(--foreground)",
        marginTop: "var(--space-10)",
        marginBottom: "var(--space-4)",
        lineHeight: 1.25,
      }}
    >
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2
      style={{
        fontSize: "1.375rem",
        fontWeight: 700,
        fontFamily: "var(--font-heading)",
        color: "var(--foreground)",
        marginTop: "var(--space-10)",
        marginBottom: "var(--space-3)",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      style={{
        fontSize: "1.125rem",
        fontWeight: 700,
        fontFamily: "var(--font-heading)",
        color: "var(--foreground)",
        marginTop: "var(--space-8)",
        marginBottom: "var(--space-2)",
        lineHeight: 1.35,
      }}
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4
      style={{
        fontSize: "1rem",
        fontWeight: 700,
        fontFamily: "var(--font-heading)",
        color: "var(--foreground)",
        marginTop: "var(--space-6)",
        marginBottom: "var(--space-2)",
      }}
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
        marginBottom: "var(--space-5)",
      }}
    >
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul
      style={{
        paddingLeft: "var(--space-6)",
        marginBottom: "var(--space-5)",
        listStyleType: "disc",
      }}
    >
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol
      style={{
        paddingLeft: "var(--space-6)",
        marginBottom: "var(--space-5)",
        listStyleType: "decimal",
      }}
    >
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
        marginBottom: "var(--space-2)",
      }}
    >
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote
      style={{
        borderLeft: "4px solid var(--primary)",
        background: "var(--accent)",
        margin: "var(--space-6) 0",
        padding: "var(--space-4) var(--space-5)",
        borderRadius: "0 var(--radius) var(--radius) 0",
        color: "var(--foreground)",
        fontSize: "1rem",
        lineHeight: 1.7,
      }}
    >
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--border)",
        margin: "var(--space-10) 0",
      }}
    />
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: 700, color: "var(--foreground)" }}>
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em style={{ fontStyle: "italic" }}>{children}</em>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "var(--primary)",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </a>
  ),
  code: ({ children, className }) => {
    // Fenced code block — className is "language-xxx"
    const isBlock = Boolean(className);
    if (isBlock) {
      return (
        <pre
          style={{
            background: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            padding: "var(--space-5)",
            overflowX: "auto",
            marginBottom: "var(--space-5)",
          }}
        >
          <code
            style={{
              fontFamily: "ui-monospace, 'Cascadia Code', monospace",
              fontSize: "0.875rem",
              color: "var(--foreground)",
            }}
          >
            {children}
          </code>
        </pre>
      );
    }
    return (
      <code
        style={{
          fontFamily: "ui-monospace, 'Cascadia Code', monospace",
          fontSize: "0.875em",
          background: "var(--muted)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "0.1em 0.4em",
          color: "var(--foreground)",
        }}
      >
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div
      style={{
        overflowX: "auto",
        marginBottom: "var(--space-6)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9375rem",
          lineHeight: 1.6,
        }}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead style={{ background: "var(--muted)" }}>{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th
      style={{
        padding: "var(--space-3) var(--space-4)",
        textAlign: "left",
        fontWeight: 700,
        color: "var(--foreground)",
        fontFamily: "var(--font-heading)",
        fontSize: "0.875rem",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      style={{
        padding: "var(--space-3) var(--space-4)",
        color: "var(--foreground)",
        verticalAlign: "top",
      }}
    >
      {children}
    </td>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt ?? ""}
      style={{
        maxWidth: "100%",
        borderRadius: "var(--radius)",
        marginBottom: "var(--space-5)",
        display: "block",
      }}
    />
  ),
  del: ({ children }) => (
    <del style={{ textDecoration: "line-through", color: "var(--muted-foreground)" }}>
      {children}
    </del>
  ),
};

export default function BlogPostPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Blog | Open to Feedback`}</title>
        <meta name="description" content={post.description} />
      </Head>
      <Nav />
      <main style={{ paddingTop: 70 }}>
        <div
          className="container-sm"
          style={{
            paddingTop: "var(--space-8)",
            paddingBottom: "var(--space-16)",
          }}
        >
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-2)",
              color: "var(--muted-foreground)",
              fontSize: "0.875rem",
              textDecoration: "none",
              marginBottom: "var(--space-8)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--primary)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)";
            }}
          >
            ← Back to Blog
          </Link>

          <img
            src={post.thumbnail}
            alt={post.title}
            style={{
              width: "100%",
              height: 320,
              objectFit: "cover",
              borderRadius: "var(--radius)",
              marginBottom: "var(--space-8)",
              display: "block",
            }}
          />

          <span
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "var(--accent-foreground)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              padding: "var(--space-1) var(--space-3)",
              borderRadius: 999,
              marginBottom: "var(--space-4)",
            }}
          >
            ✍ Blog
          </span>

          <h1 style={{ marginTop: 0, marginBottom: "var(--space-6)" }}>
            {post.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "var(--space-8)",
              flexWrap: "wrap",
              padding: "var(--space-4) var(--space-6)",
              background: "var(--muted)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              marginBottom: "var(--space-10)",
            }}
          >
            <MetaItem label="Published" value={formatDate(post.publishedAt)} />
            <MetaItem label="Read time" value={post.timeToRead} />
            {post.tags && post.tags.length > 0 && (
              <div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--muted-foreground)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "var(--space-2)",
                  }}
                >
                  Tags
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                        border: "1px solid var(--primary)",
                        borderRadius: 999,
                        padding: "2px var(--space-2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontSize: "0.6875rem",
          fontWeight: 600,
          color: "var(--muted-foreground)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "var(--space-1)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "0.9375rem",
          fontWeight: 500,
          color: "var(--foreground)",
        }}
      >
        {value}
      </div>
    </div>
  );
}

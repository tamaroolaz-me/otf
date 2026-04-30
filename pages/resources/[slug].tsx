import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import Nav from "../../components/Nav";
import { resources, CATEGORY_META } from "../../data/resources";
import type { Resource } from "../../data/resources";

interface Props {
  resource: Resource;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = resources
    .filter((r) => r.isExternal)
    .map((r) => ({ params: { slug: r.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const resource = resources.find((r) => r.slug === params?.slug);
  if (!resource) return { notFound: true };
  return { props: { resource } };
};

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

function renderMarkdownBlock(block: string, index: number): React.ReactNode {
  if (block.trim() === "---") {
    return (
      <hr
        key={index}
        style={{
          border: "none",
          borderTop: "1px solid var(--border)",
          margin: "var(--space-8) 0",
        }}
      />
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2
        key={index}
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginTop: "var(--space-8)",
          marginBottom: "var(--space-3)",
          color: "var(--foreground)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {block.slice(3)}
      </h2>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3
        key={index}
        style={{
          fontSize: "1.0625rem",
          fontWeight: 700,
          marginTop: "var(--space-6)",
          marginBottom: "var(--space-2)",
          color: "var(--foreground)",
          fontFamily: "var(--font-heading)",
        }}
      >
        {block.slice(4)}
      </h3>
    );
  }

  const lines = block.split("\n");
  if (lines.length > 1 && lines.every((l) => l.startsWith("- "))) {
    return (
      <ul
        key={index}
        style={{
          paddingLeft: "var(--space-6)",
          marginBottom: "var(--space-4)",
        }}
      >
        {lines.map((line, i) => (
          <li
            key={i}
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "var(--foreground)",
              marginBottom: "var(--space-1)",
            }}
          >
            {renderInline(line.slice(2))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      key={index}
      style={{
        fontSize: "1.0625rem",
        lineHeight: 1.75,
        color: "var(--foreground)",
      }}
    >
      {renderInline(block)}
    </p>
  );
}

export default function ResourceDetailPage({ resource }: Props) {
  const meta = CATEGORY_META[resource.category];
  const blocks = resource.detailDescription.split("\n\n");

  return (
    <>
      <Head>
        <title>{`${resource.title} | Resources | Open to Feedback`}</title>
        <meta name="description" content={resource.description} />
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
            href="/resources"
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
              (e.currentTarget as HTMLElement).style.color =
                "var(--muted-foreground)";
            }}
          >
            ← Back to Resources
          </Link>

          {resource.youtubeId ? (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "var(--radius)",
                marginBottom: "var(--space-8)",
                background: "#000",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${resource.youtubeId}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={resource.title}
              />
            </div>
          ) : (
            <img
              src={resource.thumbnail}
              alt={resource.title}
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                borderRadius: "var(--radius)",
                marginBottom: "var(--space-8)",
                display: "block",
              }}
            />
          )}

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
            {meta.emoji} {meta.label}
          </span>

          <h1 style={{ marginTop: 0, marginBottom: resource.author ? "var(--space-2)" : "var(--space-6)" }}>
            {resource.title}
          </h1>

          {resource.author && (
            <p
              style={{
                fontSize: "1rem",
                color: "var(--muted-foreground)",
                marginBottom: "var(--space-6)",
              }}
            >
              by {resource.author}
            </p>
          )}

          <div
            style={{
              display: "flex",
              gap: "var(--space-8)",
              flexWrap: "wrap",
              padding: "var(--space-4) var(--space-6)",
              background: "var(--muted)",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              marginBottom: "var(--space-8)",
            }}
          >
            <MetaItem label="Type" value={`${meta.emoji} ${meta.label}`} />
            <MetaItem label="Cost" value={resource.cost} />
            <MetaItem label="Time" value={resource.timeToComplete} />
          </div>

          <div style={{ marginBottom: "var(--space-10)" }}>
            {blocks.map((block, i) => renderMarkdownBlock(block, i))}
          </div>

          {resource.downloads && resource.downloads.length > 0 && (
            <div
              style={{
                padding: "var(--space-5) var(--space-6)",
                background: "var(--muted)",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                marginBottom: "var(--space-8)",
              }}
            >
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "var(--muted-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  margin: "0 0 var(--space-3)",
                }}
              >
                Downloads
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {resource.downloads.map((file, i) => (
                  <a
                    key={i}
                    href={file.href}
                    download
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "var(--primary)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.textDecoration = "none";
                    }}
                  >
                    ↓ {file.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {!resource.youtubeId && (
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Go to resource ↗
            </a>
          )}
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

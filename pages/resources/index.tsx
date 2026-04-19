import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Nav from "../../components/Nav";
import { resources, CATEGORY_META } from "../../data/resources";
import type { Resource } from "../../data/resources";

const CATEGORIES = ["Watch", "Listen", "Read"] as const;
type Category = (typeof CATEGORIES)[number];

const featuredResources = resources.filter((r) => r.featured);

export default function ResourcesPage() {
  const [filter, setFilter] = useState("");
  const query = filter.trim().toLowerCase();

  const getGridItems = (cat: Category): Resource[] => {
    const pool = query ? resources : resources.filter((r) => !r.featured);
    return pool.filter(
      (r) => r.category === cat && (!query || r.title.toLowerCase().includes(query))
    );
  };

  const hasResults = CATEGORIES.some((cat) => getGridItems(cat).length > 0);

  return (
    <>
      <Head>
        <title>Resources | Open to Feedback</title>
        <meta
          name="description"
          content="Curated books, videos, podcasts, and tools to help you give and receive feedback well."
        />
      </Head>
      <Nav />
      <main style={{ paddingTop: 70 }}>
        <section className="hero">
          <div className="container">
            <h1>Resources</h1>
            <p>
              Curated books, videos, and podcasts to help you give and receive
              feedback well.
            </p>
          </div>
        </section>

        <section className="section-sm">
          <div className="container">
            <div className="featured-grid">
              {featuredResources.map((resource) => (
                <FeaturedCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <div className="filter-bar">
          <div className="container">
            <input
              type="text"
              className="filter-input"
              placeholder="Filter resources…"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Filter resources"
            />
          </div>
        </div>

        <section className="section-sm">
          <div className="container">
            {!hasResults && query && (
              <p className="no-results">No resources match your search.</p>
            )}
            {CATEGORIES.map((cat) => {
              const items = getGridItems(cat);
              if (items.length === 0) return null;
              const meta = CATEGORY_META[cat];
              return (
                <div key={cat} className="category-block">
                  <h2 className="category-heading">
                    {meta.emoji} {meta.label}
                  </h2>
                  <div className="resource-grid">
                    {items.map((resource) => (
                      <ResourceCard key={resource.slug} resource={resource} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <style jsx>{`
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .filter-bar {
          background: var(--muted);
          padding: var(--space-6) 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .filter-input {
          width: 100%;
          max-width: 480px;
          padding: var(--space-3) var(--space-4);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          font-size: 1rem;
          font-family: var(--font-sans);
          background: var(--card);
          color: var(--foreground);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .filter-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15);
        }
        .category-block {
          margin-bottom: var(--space-12);
        }
        .category-heading {
          font-size: 1.5rem;
          margin-top: 0;
          margin-bottom: var(--space-6);
        }
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        .no-results {
          text-align: center;
          color: var(--muted-foreground);
          padding: var(--space-12) 0;
          font-size: 1.125rem;
        }
        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .resource-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
          .resource-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function FeaturedCard({ resource }: { resource: Resource }) {
  const meta = CATEGORY_META[resource.category];
  const href = resource.isExternal ? `/resources/${resource.slug}` : resource.href;
  const ctaLabel = resource.category === "Tool" ? "Open tool" : "Learn more";

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={resource.thumbnail}
          alt={resource.title}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
        />
        <span
          style={{
            position: "absolute",
            top: "var(--space-3)",
            left: "var(--space-3)",
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "var(--space-1) var(--space-3)",
            borderRadius: 999,
            fontFamily: "var(--font-sans)",
          }}
        >
          {meta.emoji} {meta.label}
        </span>
      </div>
      <div
        style={{
          padding: "var(--space-5)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            margin: "0 0 var(--space-1)",
            color: "var(--foreground)",
            fontFamily: "var(--font-heading)",
            lineHeight: 1.3,
          }}
        >
          {resource.title}
        </h3>
        {resource.author && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted-foreground)",
              marginBottom: "var(--space-3)",
            }}
          >
            by {resource.author}
          </p>
        )}
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            flex: 1,
            marginBottom: "var(--space-4)",
            lineHeight: 1.5,
          }}
        >
          {resource.description}
        </p>
        <span
          className="btn btn-primary"
          style={{ alignSelf: "flex-start", fontSize: "0.8125rem" }}
        >
          {ctaLabel} →
        </span>
      </div>
    </Link>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const href = resource.isExternal ? `/resources/${resource.slug}` : resource.href;

  return (
    <Link
      href={href}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <img
        src={resource.thumbnail}
        alt={resource.title}
        style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "var(--space-4)", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--space-2)",
            marginBottom: "var(--space-1)",
          }}
        >
          <span
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "var(--foreground)",
              lineHeight: 1.3,
              flex: 1,
            }}
          >
            {resource.title}
          </span>
          {resource.isExternal && (
            <span
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
                fontSize: "0.6875rem",
                fontWeight: 600,
                padding: "2px var(--space-2)",
                borderRadius: 999,
                whiteSpace: "nowrap",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              External
            </span>
          )}
        </div>
        {resource.author && (
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted-foreground)",
              marginBottom: "var(--space-2)",
            }}
          >
            by {resource.author}
          </p>
        )}
        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--muted-foreground)",
            margin: 0,
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } as React.CSSProperties}
        >
          {resource.description}
        </p>
      </div>
    </Link>
  );
}

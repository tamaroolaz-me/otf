import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import { resources, CATEGORY_META } from "../../data/resources";
import type { Resource } from "../../data/resources";

const featuredResources = resources.filter((r) => r.featured);
const allResources = resources.filter((r) => !r.featured);

export default function ResourcesPage() {
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
            <div className="resource-grid">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ paddingTop: 0 }}>
          <div className="container">
            <h2 style={{ marginTop: 0, marginBottom: "var(--space-6)" }}>
              All Resources
            </h2>
            <div className="resource-grid">
              {allResources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .resource-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        @media (max-width: 1024px) {
          .resource-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .resource-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
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
        <span
          style={{
            position: "absolute",
            top: "var(--space-3)",
            right: "var(--space-3)",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "var(--space-1) var(--space-3)",
            borderRadius: 999,
            fontFamily: "var(--font-sans)",
          }}
        >
          ⏱ {resource.timeToComplete}
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

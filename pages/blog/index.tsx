import Head from "next/head";
import Link from "next/link";
import Nav from "../../components/Nav";
import { posts } from "../../data/blog";
import type { BlogPost } from "../../data/blog";

const featuredPosts = posts.filter((p) => p.featured);
const allPosts = posts.filter((p) => !p.featured);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Open to Feedback</title>
        <meta
          name="description"
          content="Practical ideas on giving and receiving feedback, for leaders and teams."
        />
      </Head>
      <Nav />
      <main style={{ paddingTop: 70 }}>
        <section className="hero">
          <div className="container">
            <h1>Blog</h1>
            <p>
              Practical ideas on giving and receiving feedback, for leaders and
              teams.
            </p>
          </div>
        </section>

        {featuredPosts.length > 0 && (
          <section className="section-sm">
            <div className="container">
              <div className="blog-grid">
                {featuredPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {allPosts.length > 0 && (
          <section className="section-sm" style={{ paddingTop: 0 }}>
            <div className="container">
              <h2 style={{ marginTop: 0, marginBottom: "var(--space-6)" }}>
                All Posts
              </h2>
              <div className="blog-grid">
                {allPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <style jsx>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
        }
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
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
      <img
        src={post.thumbnail}
        alt={post.title}
        style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
      />

      <div
        style={{
          padding: "var(--space-5)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-3)",
            marginBottom: "var(--space-3)",
            fontSize: "0.75rem",
            color: "var(--muted-foreground)",
            fontWeight: 500,
          }}
        >
          <span>{formatDate(post.publishedAt)}</span>
          <span>·</span>
          <span>⏱ {post.timeToRead}</span>
        </div>

        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: 600,
            margin: "0 0 var(--space-3)",
            color: "var(--foreground)",
            fontFamily: "var(--font-heading)",
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </h3>

        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--muted-foreground)",
            flex: 1,
            marginBottom: "var(--space-4)",
            lineHeight: 1.5,
          }}
        >
          {post.description}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2)",
              marginBottom: "var(--space-4)",
            }}
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  border: "1px solid var(--primary)",
                  borderRadius: 999,
                  padding: "2px var(--space-2)",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <span
          className="btn btn-primary"
          style={{ alignSelf: "flex-start", fontSize: "0.8125rem" }}
        >
          Read more →
        </span>
      </div>
    </Link>
  );
}

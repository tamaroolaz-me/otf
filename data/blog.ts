import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
  timeToRead: string;
  publishedAt: string; // "YYYY-MM-DD"
  thumbnail: string;
  tags?: string[];
  author?: { name: string; url?: string }; // omit to default to site owner
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<BlogPost, "slug">) };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): { meta: BlogPost; content: string } {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...(data as Omit<BlogPost, "slug">) }, content };
}

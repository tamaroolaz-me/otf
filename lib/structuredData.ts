const SITE_URL = "https://opentofeedback.com";
const SITE_NAME = "Open to Feedback";
const LOGO_URL = `${SITE_URL}/icon-512.png`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

const DEFAULT_AUTHOR = {
  name: "Tamryn Roberts",
  url: "https://www.linkedin.com/in/tamryn-roberts-open-to-feedback/",
};

export function articleSchema(post: {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  author?: { name: string; url?: string };
}) {
  const imageUrl = post.thumbnail.startsWith("http")
    ? post.thumbnail
    : `${SITE_URL}${post.thumbnail}`;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const publishedIso = new Date(post.publishedAt).toISOString();
  const author = post.author ?? DEFAULT_AUTHOR;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: publishedIso,
    dateModified: publishedIso,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url ? { sameAs: author.url } : {}),
    },
  };
}

export function videoSchema(resource: {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  youtubeId: string;
  publishedAt?: string;
}) {
  const thumbnailUrl = resource.thumbnail.startsWith("http")
    ? resource.thumbnail
    : `${SITE_URL}${resource.thumbnail}`;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: resource.title,
    description: resource.description,
    thumbnailUrl,
    uploadDate: resource.publishedAt ?? "2024-01-01",
    embedUrl: `https://www.youtube.com/embed/${resource.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${resource.youtubeId}`,
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

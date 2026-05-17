---
name: notion-to-blog
description: Convert a Notion-exported .md file from raw-blog-or-resource/ into either a published-ready MDX blog post at content/blog/<slug>.mdx or a new entry in data/resources.ts. Trigger when the user drops a file into raw-blog-or-resource/ and asks to publish it, process it, or turn it into a blog post or resource.
---

# Notion to Blog / Resource — Open to Feedback Website

Converts a Notion-exported `.md` file into the correct site output based on the `Platform:` field in the header.

- **Platform: Blog** → creates `content/blog/<slug>.mdx`
- **Platform: Resources** → adds entry to `data/resources.ts`

---

## Step 1 — Parse the Notion header block

The Notion export begins with a `# Title` line, followed by a metadata block of `Key: Value` lines, then a second (duplicate) `# Title` line, then the article body.

**Fields to extract:**

| Notion field | Notes |
|---|---|
| `# Title` (first line) | Working title |
| `Platform:` | `Blog` or `Resources` — determines routing |
| `Status:` | Note to user if `Draft`; do not block on it |
| `description:` | Use as-is |
| `featured:` | `Yes` → `true`, `No` → `false` |
| `image relative path:` | Strip the leading `public/` to get the frontmatter path, e.g. `public/images/foo.png` → `/images/foo.png` |
| `published at:` | Convert "DD Month YYYY" or "Month DD, YYYY" to `YYYY-MM-DD` |
| `tags:` | Notion sometimes appends a database URL in parentheses — strip it. E.g. `Receiving Feedback (https://www.notion.so/...)` → `Receiving Feedback`. Split multiple tags on commas. |
| `time to read:` | Normalise to singular: `~7 mins` → `~7 min` |
| `author:` | Optional. If present, capture name (and optional URL if given). |
| `Figma url:`, `Last edited time:`, `Person:` | Discard — internal metadata only |

**Body extraction:**
The article body begins immediately after the duplicate `# Title` line. Strip that duplicate heading — the title renders from frontmatter. Keep everything after it exactly as written; do not rewrite, rephrase, or restructure any part of the body.

**If any required field is empty or absent:** Ask the user. Never invent or guess a value.

---

## Step 2 — Route: Blog or Resource?

Check the `Platform:` field.

- `Blog` → follow **Step 3A**
- `Resources` → follow **Step 3B**

---

## Step 3A — Blog post output

### Derive the slug

From the title: lowercase, hyphens only, remove special characters. Keep the distinctive or brand-relevant phrase from the title rather than reducing to pure SEO keywords. Aim for 4–7 words.

Examples:
- "One Behaviour, Many Views: Why Feedback Labels are Destroying Workplace Collaboration" → `one-behaviour-many-views-feedback-labels`
- "Lessons from AI for Giving Feedback" → `feedback-lessons-from-ai`

The slug becomes:
- File path: `content/blog/<slug>.mdx`
- Live URL: `/blog/<slug>`

### Internal linking

Before writing the file, scan the article body for mentions of:
1. **Existing resources** — read `data/resources.ts` and check for any resource `title` or `author` mentioned in the body.
2. **Existing blog posts** — read `content/blog/` filenames and check if any post title is referenced.

For each match found:
- Link to `/resources/<slug>` or `/blog/<slug>` using markdown `[anchor text](path)` syntax.
- Link each URL no more than 2–3 times per post. After the first link, only re-link if there's a significant gap between occurrences (different major section).
- Prefer linking on the first substantive mention (not in a passing reference).
- Use relative paths only. Never use absolute URLs for internal links.

For any book, tool, framework, or named model mentioned in the body that does **not** have a matching entry in `data/resources.ts`, flag it to the user:
> "Opportunity: '[name]' is mentioned in the article but doesn't have a resource entry yet. Consider adding it to data/resources.ts."

### Write the MDX file

**Frontmatter field mapping:**

```mdx
---
title: "[title from Notion header]"
publishedAt: "YYYY-MM-DD"
description: "[description from Notion header]"
tags:
  - "Tag One"
  - "Tag Two"
featured: true/false
timeToRead: "~X min"
thumbnail: "/images/filename.png"
---
```

Optional fields (only include if present in the Notion header):
```mdx
author:
  name: "Author Name"
  url: "https://..."  # only if a URL was provided
```

**Body:** Paste the extracted body (from Step 1) directly. Apply internal link substitutions identified above. Make no other changes to the text.

**BlogPost interface reference** (from `data/blog.ts`):
```ts
interface BlogPost {
  slug: string;         // derived from filename
  title: string;
  description: string;
  featured: boolean;
  timeToRead: string;
  publishedAt: string;  // YYYY-MM-DD
  thumbnail: string;
  tags?: string[];
  author?: { name: string; url?: string };
}
```

---

## Step 3B — Resource output

Read the existing `data/resources.ts` to understand the `Resource` interface and current entries before writing.

**Resource interface fields:**

| Field | Type | Required | Source |
|---|---|---|---|
| `slug` | string | yes | Derive from title (same rules as blog slug) |
| `title` | string | yes | From Notion `# Title` |
| `category` | `"Watch" \| "Listen" \| "Read" \| "Tool"` | yes | From Notion `category:` field, or ask user |
| `author` | string | no | From Notion `author:` field |
| `description` | string | yes | From Notion `description:` field |
| `detailDescription` | string | yes | The article body extracted in Step 1, as a template literal string. Preserve all markdown. |
| `thumbnail` | string | yes | From `image relative path:`, strip `public/` prefix |
| `href` | string | yes | From Notion `href:` or `url:` field. Ask if absent. |
| `youtubeId` | string | no | From Notion `youtubeId:` field, or extract from `?v=` param of YouTube URL |
| `isExternal` | boolean | yes | `true` unless the href is a local `/downloads/` path, in which case `true` still (for detail page generation) |
| `featured` | boolean | yes | `Yes`/`No` → `true`/`false` |
| `cost` | string | yes | From Notion `cost:` field. Ask if absent. |
| `timeToComplete` | string | yes | From Notion `time to complete:` or `time to read:` field. Ask if absent. |
| `downloads` | Array | no | From Notion `downloads:` field if present |

**detailDescription format:** The value is a template literal string. Embed it using backticks in the TypeScript source. All markdown formatting in the body is preserved as-is.

**Placement:** Add the new resource object to the `resources` array in `data/resources.ts`. Place featured resources near the top of the array, non-featured ones at the bottom. Do not reorder existing entries.

### Downloadable files in resources

If the article body ends with a markdown link in the form `[Download the guide](/public/downloads/filename.pdf)` or similar:

1. **Remove the link from the body.** It cannot render in the resource renderer and the `downloads` field handles it properly.
2. **Fix the path:** strip the leading `/public` — the correct href is `/downloads/filename.pdf`.
3. **Add to the `downloads` field:**
   ```ts
   downloads: [
     { label: "Download [descriptive label] (PDF)", href: "/downloads/filename.pdf" },
   ]
   ```
4. **Set `href`** to the same PDF path (so clicking the resource card opens the file directly in the browser — consistent with the "Build your challenge network" pattern).
5. **Verify the file exists** at `public/downloads/filename.pdf` before writing the entry. If it does not exist, flag it to the user rather than silently adding a broken link.

### Resource renderer limitations

Resources use a custom limited markdown renderer (`renderMarkdownBlock`), not MDX. It only supports:
- `---` → `<hr>`
- `## Heading` / `### Heading`
- Paragraphs and lists (every line must start with `- `)
- `**bold**` inline

**Not supported:** blockquotes (`>`), `*italic*`, `[links](url)`, inline code, nested lists.

When the article body uses unsupported syntax, adapt it minimally:
- **Blockquotes (`>`):** Strip the `>` prefix. Keep the text as a regular paragraph. Do not change the content.
- **Markdown links in body:** Remove them — the `downloads` field renders download buttons, and external links should be noted to the user.
- Do not change prose content when adapting formatting.

---

## Step 4 — Move the source file

After writing the output file, move the source `.md` from `raw-blog-or-resource/` to `raw-blog-or-resource/handled/`. Create the `handled/` subfolder if it doesn't exist.

```bash
mkdir -p raw-blog-or-resource/handled
mv "raw-blog-or-resource/[filename].md" raw-blog-or-resource/handled/
```

Note: `raw-blog-or-resource/` is **not** gitignored. Files moved to `handled/` will appear in `git status` as renamed. This is intentional — do not add them to `.gitignore` unless the user asks.

---

## Step 5 — Report to the user

After writing the file, tell the user:

1. **Output file created:** the path and live URL
2. **Internal links added:** list each resource/post linked, and where in the body
3. **Resource opportunities flagged:** any unmatched book/tool/model mentions
4. **Status note:** if the Notion `Status:` was `Draft`, note it (but do not block publishing)
5. **Next step:** confirm the post renders at `http://localhost:3000/blog/<slug>` (or `/resources/<slug>`) — ask user to verify

---

## Site conventions (reference)

- **Internal link format:** always relative paths (`/blog/slug`, `/resources/slug`) — never absolute URLs
- **CSS / styling:** do not add inline styles or class names to MDX body content
- **No rewrites:** the body is preserved exactly as written. The only permitted edits are adding markdown link syntax around existing text for internal links.
- **No invented values:** if a required field is missing from the Notion export, ask the user before proceeding

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16 (Pages Router)** educational site about giving and receiving feedback. TypeScript with strict mode. No CSS framework — styling uses inline styles with CSS custom properties defined in [styles/globals.css](styles/globals.css).

### Key conventions

- **CSS variables for all spacing/color:** Always use `style={{ padding: 'var(--space-4)' }}` pattern, not hardcoded values. Variables are defined in `styles/globals.css` (`--space-*`, `--primary`, `--border`, `--font-heading`, etc.).
- **Static data, no CMS:** All resource content lives in [data/resources.ts](data/resources.ts) as a typed `Resource[]` array — this is the single source of truth for the `/resources` section.

  **`Resource` interface fields:**
  | Field | Type | Required | Notes |
  |---|---|---|---|
  | `slug` | `string` | yes | URL segment; kebab-case, no spaces |
  | `title` | `string` | yes | |
  | `category` | `"Watch" \| "Listen" \| "Read" \| "Tool"` | yes | Controls emoji badge on card |
  | `author` | `string` | no | Shown beneath title on card and detail page |
  | `description` | `string` | yes | Short blurb shown on the card |
  | `detailDescription` | `string` | yes | Long-form body for the detail page; subset of markdown (see below) |
  | `thumbnail` | `string` | yes | **Always used for the card on `/resources`**, even for YouTube resources. Use a local path like `/images/my-resource.png` (file goes in `public/images/`). Use kebab-case filenames with no spaces. |
  | `href` | `string` | yes | The canonical external URL (e.g. YouTube, Amazon, Netflix) |
  | `youtubeId` | `string` | no | When set, the **detail page** replaces the static thumbnail with a 16:9 `<iframe>` embed. Has no effect on the card — `thumbnail` is still used there. Extract from the `?v=` param of the YouTube URL. |
  | `isExternal` | `boolean` | yes | Must be `true` for a detail page to be generated (`getStaticPaths` filters on this) |
  | `featured` | `boolean` | yes | `true` → appears in the top Featured grid; `false` → All Resources section |
  | `cost` | `string` | yes | e.g. `"Free"`, `"~$15"`, `"Netflix subscription"` |
  | `timeToComplete` | `string` | yes | e.g. `"~24 min"`, `"~8 hours"`, `"1h 16m"` |
  | `downloads` | `Array<{ label: string; href: string }>` | no | Downloadable files shown on detail page; place PDFs in `public/downloads/` and use `/downloads/filename.pdf` as `href` |

- **Pages Router only:** All routes are file-based under `/pages`. Do not introduce App Router patterns.
- **Minimal component abstraction:** Reusable components live in `/components` (currently just `Nav` and `Footer`). Page logic stays inline in page files unless genuinely shared.

### Notable pages

- [pages/quiz.tsx](pages/quiz.tsx) — The main interactive feature. Complex client-side state for a multi-step personality quiz. GA4 events fire on each step.
- [pages/resources/[slug].tsx](pages/resources/%5Bslug%5D.tsx) — Dynamic resource detail pages. Only resources with `isExternal: true` get a page. Two media modes at the top: a 16:9 `<iframe>` embed when `youtubeId` is set, or a static `<img>` from `thumbnail` otherwise.

  **`detailDescription` markdown renderer** (`renderMarkdownBlock` + `renderInline`, defined inline in the file):
  - The string is split on `\n\n` — each double-newline-separated chunk is one block.
  - **Supported block-level syntax:**
    - `---` (exact, trimmed) → `<hr>`
    - `## Heading` → `<h2>`
    - `### Heading` → `<h3>`
    - A block where **every line** starts with `- ` → `<ul>` (all lines must be list items; a single `- ` line with no siblings is treated as a `<p>`)
    - Everything else → `<p>`
  - **Supported inline syntax** (applied inside `<p>` and `<li>`): `**bold**` → `<strong>`
  - **Not supported:** `*italic*`, `[links](url)`, `# h1`, inline code, nested lists. These render as literal characters.

### Analytics

GA4 tracking is wired up in [pages/_app.tsx](pages/_app.tsx) for page views and in [pages/quiz.tsx](pages/quiz.tsx) for quiz step events.

### Security headers

`next.config.js` sets an HSTS header with preload. Keep security headers intact when modifying that file. (Ignore `next.config.ts` — it exists but is not used.)

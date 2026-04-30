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
- **Static data, no CMS:** All resource content lives in [data/resources.ts](data/resources.ts) as a typed `Resource[]` array — this is the single source of truth for the `/resources` section. The `Resource` interface supports an optional `youtubeId` field (renders an embedded YouTube player instead of a static thumbnail) and an optional `downloads` field (`Array<{ label: string; href: string }>`) for downloadable files (typically PDFs placed in `public/downloads/`). Neither field is required.
- **Pages Router only:** All routes are file-based under `/pages`. Do not introduce App Router patterns.
- **Minimal component abstraction:** Reusable components live in `/components` (currently just `Nav` and `Footer`). Page logic stays inline in page files unless genuinely shared.

### Notable pages

- [pages/quiz.tsx](pages/quiz.tsx) — The main interactive feature. Complex client-side state for a multi-step personality quiz. GA4 events fire on each step.
- [pages/resources/[slug].tsx](pages/resources/%5Bslug%5D.tsx) — Dynamic resource detail pages driven by slugs from `data/resources.ts`. Only resources with `isExternal: true` get a detail page (controls `getStaticPaths`). The page has two media modes: a responsive 16:9 YouTube iframe embed (when `youtubeId` is set) or a static thumbnail image. The `detailDescription` field supports a subset of markdown — `##`/`###` headings, `---` horizontal rules, `- ` bullet lists, and `**bold**` inline — rendered by `renderMarkdownBlock` and `renderInline` helpers inline in the page file.

### Analytics

GA4 tracking is wired up in [pages/_app.tsx](pages/_app.tsx) for page views and in [pages/quiz.tsx](pages/quiz.tsx) for quiz step events.

### Security headers

`next.config.js` sets an HSTS header with preload. Keep security headers intact when modifying that file. (Ignore `next.config.ts` — it exists but is not used.)

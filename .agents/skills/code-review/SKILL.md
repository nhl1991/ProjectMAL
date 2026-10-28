---
name: code-review
description: Review PR changes in a Next.js App Router application that proxies the MyAnimeList v2 API through Route Handlers (BFF), with React Query caching and Swiper carousels. Focus on BFF boundary safety, type correctness against the external API, and UI/accessibility regressions.
---

# Project MAL PR Code Review

Review changed code and the relevant surrounding call chain.

## 1. BFF / Server Boundary

- Verify `MAL_CLIENT_ID` is read only in server-only code: Route Handlers (`src/app/api/**/route.ts`), `src/lib/fetchAnimation.ts`, and Server Components that call it. Flag any read from a `'use client'` module or any `NEXT_PUBLIC_` prefix on secrets.
- Recommend `import "server-only"` (already a dependency) in new or changed modules that read secrets, so a client import fails at build time.
- Check that query params forwarded to the external API are validated/sanitized before being appended to the outbound URL.
- Check HTTP status propagation: external API errors should map to sensible status codes, not a blanket 200 or unhandled 500.

## 2. Caching and Outbound Requests

Applies to both server-side `fetch` options (`cache`, `next.revalidate`, `tags`) and React Query.

- Verify React Query keys are unique and include every variable that affects the result (query, offset, ranking type, season/year, id).
- Check that cache tags and revalidation keys distinguish requests that return different data.
- Check whether outbound requests can hang or fail without appropriate timeout and error handling.
- Recommend retries only when justified, with bounded attempts and proper handling of rate limits.
- Check pagination/infinite-scroll logic for duplicate or skipped items (cursor/offset correctness).
- The existing long-lived cache (`force-cache` with `revalidate: 3600`) is intentional. Report caching or stale data only when it causes a concrete correctness or UX regression, not merely because a cache duration is long or a setting is a default.

## 3. Type Safety Against the External API

- Treat MyAnimeList API response fields as potentially absent. When changed code relies on a field, verify its declared type in `src/types/animation.ts` matches actual nullability, rather than declaring it required and papering over it with `??` fallbacks.
- Check that fields used across components stay consistent with the declared type when the API or component contract changes.

## 4. Data Normalization

- Check whether API response normalization preserves valid records and handles missing optional fields.
- Detect regressions that silently discard valid data or produce invalid fallback values.

## 5. Next.js App Router

- Check Server/Client Component boundaries (`'use client'` usage, no server-only imports leaking into client bundles).
- Check URL-synced state (search/filter/tab) stays consistent with rendered content on reload and back/forward navigation.

## 6. UI, Carousel, and Accessibility (Swiper / Image)

- Check Swiper carousels expose keyboard navigation (`Keyboard`/`A11y` modules) when content extends beyond the visible viewport, not pointer/touch only.
- Check `next/image` `alt` text is descriptive (not a generic placeholder) and `sizes` matches the actual rendered slide/card width at each breakpoint.
- Check dark/light theme (`next-themes`) does not break contrast or layout.

## 7. Tests and Regression Coverage

- Check whether changed behavior is covered by existing Jest tests.
- Recommend new tests for meaningful behavior changes, especially API validation, pagination, and error handling.
- Do not demand tests for trivial UI or refactoring changes.

## Severity

- **P0**: Secret exposure, build failure, or runtime crash.
- **P1**: Functional regression, incorrect or lost data, broken external API error handling.
- **P2**: Accessibility, performance, or missing test coverage for meaningful behavior.

## Review Rules

- Write review comments in Korean. Keep code, commands, file paths, and package names as-is.
- Report only actionable findings related to the PR.
- Prioritize P0 and P1 findings over everything else; skip style.
- Include severity, file path, line number, and suggested fix.
- Avoid speculative warnings and stylistic preferences handled by lint/format.
- Do not modify files.

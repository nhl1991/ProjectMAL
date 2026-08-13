# Project-MAL

Project-MAL is a Next.js application for browsing MyAnimeList data. It lets you search for anime, explore ranking and seasonal lists, and inspect detailed anime pages. The app uses the App Router, React Query, and server API routes to combine cached data with client-side interaction.

## Project Overview

Instead of calling the MyAnimeList v2 API directly from the UI, the app proxies requests through Next.js API routes. Search, ranking, season, and detail pages are separated, while the home page acts as a single-scroll landing page that previews the main content areas.

## Features

- Search anime by keyword
- Browse ranking lists and filter by ranking type
- Browse seasonal anime by year and season
- View detailed anime information
- Save and reuse recent searches
- Responsive UI for mobile and desktop
- Light and dark theme switching
- React Query-based caching and data reuse

## Screens

- Home: hero, Top 5, ranking preview, season preview
- Search: search input, suggested searches, recent searches, search results
- Ranking: ranking-type list browsing
- Season: year and season-based lists
- Detail: metadata, synopsis, statistics, related titles, recommendations

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- React Query
- Zustand
- Swiper
- Radix UI
- Lucide Icons
- Jest

## Data Flow

1. A screen component receives user input or route parameters.
2. A Next.js API route requests data from MyAnimeList v2.
3. `src/lib/fetchAnimation.ts` handles shared fetch options and the client ID header.
4. The response is rendered through React Query or a standard fetch flow.

## API Routes

- `GET /api/search?q=...&offset=...`
- `GET /api/ranking?ranking_type=...&offset=...`
- `GET /api/season/[year]/[season]?offset=...`
- `GET /api/details/[id]`

Search and list endpoints fetch 20 items per request by default. The detail endpoint requests a broader set of fields so the UI can show cards, synopsis, scores, season info, studios, statistics, related titles, and recommendations.

## Project Structure

- `src/app`: routes, layouts, API routes
- `src/components`: shared and screen-specific UI components
- `src/lib`: fetch helpers, constants, recent search storage, QueryClient
- `src/providers`: theme provider
- `public/locales`: locale resources
- `src/types`: domain types

## Getting Started

```bash
git clone https://github.com/nhl1991/ProjectMAL.git
cd ProjectMAL
npm install
npm run dev
```

The development server runs at `http://localhost:3000` by default.

## Available Scripts

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm run start`: run the production build
- `npm run lint`: run ESLint
- `npm run typecheck`: run TypeScript type checking
- `npm run test`: run Jest tests

## Environment Variables

The MyAnimeList API requires a client ID. The same variable is used in both development and production.

- `MAL_CLIENT_ID`

## Implementation Notes

- The home page is built as a single-scroll landing page.
- The search screen uses a debounced query after typing.
- Recent searches are stored in browser `localStorage` and capped at 5 items.
- The top navigation highlights the active route.
- API requests use `force-cache` and `revalidate` for caching.

## Deployment

- Vercel deployment: https://project-mal.vercel.app/

## Notes

- Data source: MyAnimeList
- This document reflects the current codebase.
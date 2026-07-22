# Project-MAL

## 📖 Overview
This project was developed to study CSR,SSR Rendering and fetching external API provided by <a href="https://myanimelist.net/apiconfig/references/api/v2">myanimelist.com</a>.<br/>
It provides amount of animation list by ranking, season and search.

## 🛠 Tech Stack
- **Framework / Library**: Next.js, React 
- **Language**: TypeScript, HTML5, CSS3  
 

## ✨ Features
- 🔎 Search animations by keywords entered by the user
- 📊 Display animations ranked by type (e.g., popularity, user favorite, )
- 📅 View seasonal animations by specifying year and season


## Preview
<img width="480" height="300" alt="스크린샷 2025-12-14 오후 10 23 09" src="https://github.com/user-attachments/assets/343610a1-f025-4c08-9ff5-7742fa50d274" />
<img width="480" height="300" alt="스크린샷 2025-12-14 오후 10 23 41" src="https://github.com/user-attachments/assets/f5230a62-ec66-4c9a-94ae-cca46f4def35" />
<img width="480" height="300" alt="스크린샷 2025-12-14 오후 10 24 02" src="https://github.com/user-attachments/assets/45798b1f-a09d-461b-a3e1-58cacf9c3777" />
<img width="480" height="300" alt="스크린샷 2025-12-14 오후 10 24 25" src="https://github.com/user-attachments/assets/e19f5f27-39a4-4ec2-beab-658be10b10de" />





## 🚀 Getting Started
```bash
# Clone repository
git clone https://github.com/nhl1991/ProjectMAL.git

# Change directory
cd ProjectMAL

# Install dependencies
npm install

# Run development server
npm run dev
```

## Deploy
https://project-mal.vercel.app/

### In Progress


## Changelog
26/07/22
- Rebuild landing page as a single-scroll SPA: dark hero, Top 5 airing, ranking/season tab previews.
- Redesign ranking/season/search list pages: tab bars, 5-column grid with rank/rating hover overlays, URL-synced filters (shareable/bookmarkable), infinite scroll pagination.
- Redesign anime detail page: 2-column hero layout, status/studio/season/rating info grid, clamped synopsis with expand/collapse, unified accent color.
- Add shared top navigation with active-route highlighting, replacing the old icon nav.
- Various cleanup: removed unused nav/icon/grid components, consistent empty/error states across list pages.

26/03/09
- Fix API Image remote pattern.

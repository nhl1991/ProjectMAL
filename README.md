# Project-MAL
<img width="480" height="300" alt="preview_4" src="https://github.com/user-attachments/assets/91625f25-1524-4bc2-b3df-1cc8125c7c85" />
<img width="480" height="300" alt="preview_3" src="https://github.com/user-attachments/assets/2f160cb5-4b88-4555-81c7-8bf2e6e39edb" />
<img width="480" height="300" alt="preview_1" src="https://github.com/user-attachments/assets/6975a34c-8def-4719-8b89-95072a87ecd7" />
<img width="480" height="300" alt="preview_2" src="https://github.com/user-attachments/assets/9e63fa95-7aab-427b-a871-d8b800a5d941" />



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
- Introducing Swiper

## Changelog
- Fix UI

25/09/16
- Fixed an issue where <ul> tags were not wrapping <li> elements properly.

25/09/07
- Introduce TanStack Query’s useInfiniteQuery for infinite scrolling at '/ranking', '/season'.
- Fix UI.

25/08/25
- Set Image Componet sizes props
- Set cache and the cache lifetime
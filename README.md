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

25/12/14
ー Refactoring
- Fix UI


25/09/16
- Fixed an issue where <ul> tags were not wrapping <li> elements properly.

25/09/07
- Introduce TanStack Query’s useInfiniteQuery for infinite scrolling at '/ranking', '/season'.
- Fix UI.

25/08/25
- Set Image Componet sizes props
- Set cache and the cache lifetime

# Project-MAL

Project-MAL은 MyAnimeList API를 기반으로 애니메이션 정보를 탐색하고, 랭킹과 시즌별 작품을 확인하며, 작품 상세 정보를 보는 Next.js 애플리케이션입니다. App Router 구조를 사용하고, React Query와 서버 API 라우트를 조합해 캐싱과 클라이언트 데이터를 함께 다룹니다.

## 프로젝트 개요

이 프로젝트는 MyAnimeList v2 API를 직접 호출하는 대신, Next.js API Route를 통해 데이터를 한 번 감싸서 제공합니다. 검색, 랭킹, 시즌, 상세 페이지가 분리되어 있고, 홈 화면에서는 주요 콘텐츠를 한 페이지에서 미리 볼 수 있도록 구성되어 있습니다.

## 주요 기능

- 애니메이션 키워드 검색
- 랭킹 목록 조회 및 랭킹 타입 필터링
- 시즌별 애니메이션 조회 및 연도/시즌 선택
- 작품 상세 정보 확인
- 최근 검색어 저장 및 재사용
- 모바일과 데스크톱을 모두 고려한 반응형 UI
- 다크/라이트 테마 전환
- React Query 기반 데이터 캐싱 및 재사용

## 화면 구성

- 홈: 히어로, Top 5, 랭킹 미리보기, 시즌 미리보기
- 검색: 검색어 입력, 추천 검색어, 최근 검색어, 검색 결과
- 랭킹: 랭킹 타입별 리스트와 페이지형 탐색
- 시즌: 연도와 계절별 리스트
- 상세: 작품 메타 정보, 줄거리, 통계, 관련 작품, 추천 작품

## 기술 스택

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

## 데이터 흐름

1. 화면 컴포넌트가 사용자 입력 또는 라우트 파라미터를 받습니다.
2. 내부 API Route가 MyAnimeList v2 API를 호출합니다.
3. `src/lib/fetchAnimation.ts`가 공통 fetch 옵션과 클라이언트 ID 헤더를 처리합니다.
4. 결과는 React Query 또는 일반 fetch 흐름으로 화면에 렌더링됩니다.

## API 라우트

- `GET /api/search?q=...&offset=...`
- `GET /api/ranking?ranking_type=...&offset=...`
- `GET /api/season/[year]/[season]?offset=...`
- `GET /api/details/[id]`

검색과 목록 API는 기본적으로 20개 단위로 데이터를 가져옵니다. 상세 API는 작품 카드, 줄거리, 점수, 시즌, 스튜디오, 통계, 관련 작품 등을 보여주기 위한 필드를 넓게 요청합니다.

## 프로젝트 구조

- `src/app`: 라우트, 레이아웃, API Route
- `src/components`: 화면 단위 UI와 공통 컴포넌트
- `src/lib`: 데이터 fetch, 상수, 최근 검색 저장, QueryClient
- `src/providers`: 테마 제공자
- `public/locales`: 로케일 리소스
- `src/types`: 도메인 타입

## 실행 방법

```bash
git clone https://github.com/nhl1991/ProjectMAL.git
cd ProjectMAL
npm install
npm run dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 사용 가능한 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 빌드 결과 실행
- `npm run lint`: ESLint 검사
- `npm run typecheck`: TypeScript 타입 검사
- `npm run test`: Jest 테스트 실행

## 환경 변수

MyAnimeList API 호출을 위해 클라이언트 ID가 필요합니다. 개발 환경과 프로덕션 환경 모두 동일한 변수를 사용합니다.

- `MAL_CLIENT_ID`

## 구현 메모

- 홈 화면은 단일 스크롤 랜딩 페이지처럼 구성되어 있습니다.
- 검색 화면은 입력 후 디바운스된 쿼리를 사용합니다.
- 최근 검색어는 브라우저 `localStorage`에 저장되며 최대 5개까지 유지됩니다.
- 상단 내비게이션은 현재 경로를 기준으로 활성 상태를 표시합니다.
- API 요청은 `force-cache`와 `revalidate`를 사용해 캐싱됩니다.

## 배포

- Vercel 배포본: https://project-mal.vercel.app/

## 참고

- 데이터 출처: MyAnimeList
- 프로젝트 설명과 기능은 현재 코드베이스 기준으로 정리했습니다.
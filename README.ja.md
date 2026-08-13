# Project-MAL

Project-MAL は、MyAnimeList のデータを閲覧するための Next.js アプリケーションです。アニメの検索、ランキング一覧やシーズン別一覧の閲覧、作品詳細の確認ができます。App Router、React Query、サーバー側 API Route を組み合わせて、キャッシュとクライアント操作を両立しています。

## プロジェクト概要

UI から MyAnimeList v2 API を直接叩くのではなく、Next.js の API Route を経由してデータを取得します。検索、ランキング、シーズン、詳細ページは分離されており、ホーム画面は主要コンテンツを 1 ページで見渡せるシングルスクロール型のランディングページとして構成されています。

## 主な機能

- キーワードによるアニメ検索
- ランキング一覧の閲覧とランキング種別の切り替え
- 年と季節を指定したシーズン別アニメ一覧の閲覧
- 作品詳細情報の表示
- 最近の検索履歴の保存と再利用
- モバイルとデスクトップに対応したレスポンシブ UI
- ライト/ダークテーマ切り替え
- React Query によるキャッシュと再利用

## 画面構成

- ホーム: ヒーロー、Top 5、ランキングのプレビュー、シーズンのプレビュー
- 検索: 検索入力、候補検索、最近の検索、検索結果
- ランキング: ランキング種別ごとの一覧表示
- シーズン: 年度と季節ごとの一覧表示
- 詳細: 基本情報、あらすじ、統計、関連作品、推薦作品

## 技術スタック

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

## データの流れ

1. 画面コンポーネントがユーザー入力またはルートパラメータを受け取ります。
2. Next.js API Route が MyAnimeList v2 API にリクエストします。
3. `src/lib/fetchAnimation.ts` が共通の fetch 設定と client ID ヘッダーを処理します。
4. 結果は React Query または通常の fetch フローで画面に描画されます。

## API Route

- `GET /api/search?q=...&offset=...`
- `GET /api/ranking?ranking_type=...&offset=...`
- `GET /api/season/[year]/[season]?offset=...`
- `GET /api/details/[id]`

検索と一覧系 API は基本的に 20 件単位で取得します。詳細 API は、カード表示、あらすじ、スコア、季節、スタジオ、統計、関連作品などを表示できるよう、広めのフィールドを取得します。

## プロジェクト構成

- `src/app`: ルート、レイアウト、API Route
- `src/components`: 共通 UI と画面別コンポーネント
- `src/lib`: fetch 補助、定数、最近の検索保存、QueryClient
- `src/providers`: テーマプロバイダ
- `public/locales`: ロケールリソース
- `src/types`: ドメイン型定義

## 起動方法

```bash
git clone https://github.com/nhl1991/ProjectMAL.git
cd ProjectMAL
npm install
npm run dev
```

開発サーバーは既定で `http://localhost:3000` で起動します。

## 利用可能なスクリプト

- `npm run dev`: 開発サーバーの起動
- `npm run build`: 本番ビルドの作成
- `npm run start`: 本番ビルドの起動
- `npm run lint`: ESLint の実行
- `npm run typecheck`: TypeScript の型チェック
- `npm run test`: Jest テストの実行

## 環境変数

MyAnimeList API の利用には client ID が必要です。実装上、開発環境と本番環境で別名の変数を使っています。

- 開発環境: `MAL_CLIENT_ID`
- 本番環境: `NEXT_PUBLIC_MAL_CLIENT_ID`

## 実装メモ

- ホーム画面は 1 ページ完結のランディングページ構成です。
- 検索画面は入力後に debounce されたクエリを使います。
- 最近の検索履歴はブラウザの `localStorage` に保存され、最大 5 件まで保持されます。
- 上部ナビゲーションは現在のルートを基準にアクティブ状態を表示します。
- API リクエストは `force-cache` と `revalidate` を使ってキャッシュしています。

## デプロイ

- Vercel デプロイ: https://project-mal.vercel.app/

## 備考

- データソース: MyAnimeList
- 本書は現時点のコードベースに基づいています。
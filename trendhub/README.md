# TrendHub | ترندهاب

A bilingual (Persian RTL / English LTR) trends & magazine platform covering **AI, Tech, Gaming, Cars, Space, Movies & Series, and Music** — built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and hand-rolled shadcn-style UI primitives. All data is mocked locally (no backend / database required).

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/fa` (Persian, RTL) by default. Switch to English any time via the language button in the header, or by visiting `/en`.

## Project structure

```
app/
  [lang]/                # fa | en
    layout.tsx           # html/body, fonts, dir, Header/Footer
    page.tsx             # homepage
    ai/ tech/ gaming/ cars/ space/   # category pages
    movies/page.tsx       movies/[id]/page.tsx
    music/page.tsx        music/[id]/page.tsx
    post/[id]/page.tsx    # news post detail page
components/              # NewsCard, MovieTrendCard, MusicCard, Header, Footer, etc.
components/ui/           # Button, Card, Avatar, Input, Separator
lib/i18n/                # dictionaries.ts (fa/en strings), index.ts (helpers)
lib/mock/                # posts.ts, movies.ts, music.ts, categories.ts, trends.ts, comments.ts
```

## Deploying — no VPS required

This app uses standard Next.js dynamic rendering (SSR-friendly, no external DB), so it deploys cleanly to either platform below.

### Option A — Railway (recommended, zero config changes)

Railway runs Next.js natively with `next start`, so this repo works as-is.

1. Push this project to a GitHub repository.
2. In Railway: **New Project → Deploy from GitHub repo** and select it.
3. Railway auto-detects Next.js. Build command: `npm run build`. Start command: `npm run start`.
4. Set the `PORT` env var if Railway doesn't inject it automatically (it usually does).
5. Deploy — Railway gives you a public `*.up.railway.app` URL, and you can attach a custom domain in **Settings → Domains**.

### Option B — Cloudflare Pages

Cloudflare Pages needs the `@cloudflare/next-on-pages` adapter to run Next.js App Router with SSR (image optimization, dynamic routes, etc.).

1. Add the adapter:
   ```bash
   npm install -D @cloudflare/next-on-pages
   ```
2. Add a build script to `package.json`:
   ```json
   "pages:build": "npx @cloudflare/next-on-pages"
   ```
3. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select this repo.
4. Build settings:
   - Framework preset: **Next.js**
   - Build command: `npx @cloudflare/next-on-pages`
   - Build output directory: `.vercel/output/static`
5. Deploy. Cloudflare will build and host it on `*.pages.dev` (custom domains supported).

> Note: `next.config.js` already whitelists the remote image domains used by the mock data (`picsum.photos`, `images.unsplash.com`, `i.pravatar.cc`) so `next/image` works in production on both platforms.

## Notes

- All content (news posts, movies/series, songs, artists, albums, comments) is mock data living in `lib/mock/*.ts` — replace these with real API calls whenever you're ready to go live.
- Add real shadcn/ui components any time via `npx shadcn@latest add <component>` — the hand-rolled primitives in `components/ui` follow the same conventions and can be swapped in gradually.

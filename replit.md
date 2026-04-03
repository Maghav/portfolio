# Web CV — Portfolio Website

## Overview
A Next.js 16 portfolio/CV website with a neobrutalism design (bold borders, yellow accents, hard offset shadows). Built with Tailwind CSS, Radix UI, and shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 16.2.2 (App Router, Turbopack)
- **Styling**: Tailwind CSS v3 with custom neobrutalism tokens
- **UI Components**: Radix UI + shadcn/ui (customized for neobrutalism)
- **Font**: Space Grotesk (Google Fonts)
- **Analytics**: Vercel Analytics (debug mode in dev)

## Architecture
- `src/app/` — Next.js App Router pages and layouts
- `src/components/ui/` — Base UI components (Button, Card, Badge, Section)
- `src/components/` — Feature components (ProjectCard, AttachmentCard, ContactButtons, CommandMenu)
- `src/data/resume-data.tsx` — All portfolio content (edit this to update the CV)

## Neobrutalism Design Tokens
- Background: cream `#FFFBF0`
- Border: near-black `#0D0D0D`, 2px solid
- Shadow: hard offset `4px 4px 0px #0D0D0D`
- Accent yellow: `#FFD60A`
- Accent blue: `#4CC9F0`
- Accent coral: `#FF6B6B`
- Border radius: 0px (flat corners)

## Key Notes
- `ContactButtons` is a `"use client"` component — Next.js 16 requires that React component functions are NOT passed from server to client components. Icons are resolved via name-to-component map internally.
- `next.config.js` includes `allowedDevOrigins` for Replit's preview proxy domains.
- Dev server runs on port 5000, bound to `0.0.0.0` for Replit compatibility.

## Running
```bash
npm run dev    # starts on http://localhost:5000
npm run build  # production build
npm run start  # production server on port 5000
```

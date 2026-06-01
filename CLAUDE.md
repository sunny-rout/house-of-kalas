# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js)
npm run build     # Production build
npm run lint      # ESLint check
```

There are no tests in this project.

## Project Overview

**House of Kalas** is a Next.js (App Router) marketing website for a performing arts academy in Mumbai. It is a single-product, scroll-driven marketing site with no backend integration — all data is static and hardcoded within each component.

## Architecture

### Routes
- `/` — Home: Hero → Journey → Programs → Stories → Space → CallToAction → Footer
- `/about` — About: BrandStory → FoundersSection → AboutCtaStrip → Footer

### Component Conventions
- Components are **self-contained sections** — each owns its data (programs list, stories, nav links), its own Framer Motion scroll context, and its own local state.
- No global state management (no Context, Redux, or Zustand).
- All interactive components are `"use client"`. The root layout (`app/layout.tsx`) is server-side only.
- The `Footer` component is shared across both pages.

### Styling System
- **Tailwind CSS** for layout and spacing utilities.
- **CSS custom properties** (defined in `app/globals.css`) carry the design token system — colors, typography scale, spacing. Components use inline `style={{ color: "var(--color-hok-primary)" }}` to apply tokens.
- **Color tokens** follow a Material Design 3 naming convention: `--color-hok-primary`, `--color-hok-secondary`, `--color-hok-surface`, `--color-hok-surface-container-*`, `--color-hok-on-surface`, etc.
- **Fonts**: `Playfair Display` (serif, headings) and `Be Vietnam Pro` (sans-serif, body/UI), loaded via `next/image` Google Fonts in the root layout.
- Responsive typography uses `clamp()` against the CSS variable scale rather than Tailwind text utilities.
- Gradient text on primary headlines: `WebkitBackgroundClip: "text"` + `WebkitTextFillColor: "transparent"`.

### Animation Patterns
Framer Motion is a **devDependency** but is used as the sole animation library throughout.

- **Scroll-driven parallax**: `useScroll` + `useTransform` on section refs for background band movement.
- **Viewport-triggered reveals**: `whileInView` with `viewport={{ once: true }}` — standard entry animation is `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }` with `transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}`.
- **Stagger containers**: `variants` with `staggerChildren: 0.12` on wrapper + child variants on cards.
- **Sticky scroll frame animation**: `Journey.tsx` uses `useMotionValueEvent` on scroll progress to sequence through 6 pre-loaded image frames (`/bundle-hok-journey/journey-page-*.png`).
- Hover/tap interactions use `whileHover` / `whileTap` with spring transitions.

### Images
- All images served from `/public` via `next/image`.
- Journey section preloads all 6 frame images on mount and uses `unoptimized` to avoid compression artifacts during frame crossfades.
- Founder portraits live in `/public/founders/`.
- Video assets live in `/public/vid/`.

### Form Handling
The `CallToAction` component manages a contact form with React `useState` — there is currently no backend submission (logs to console). The `submitted` flag toggles a success state in the UI.

## Key Files

| File | Purpose |
|------|---------|
| `app/globals.css` | All design tokens (color, typography, spacing CSS vars) |
| `app/layout.tsx` | Root metadata, font loading, `<body>` wrapper |
| `app/page.tsx` | Home page — composes all section components |
| `app/about/page.tsx` | About page — composes about-specific components |
| `tailwind.config.js` | Extends Tailwind with custom color tokens that mirror the CSS vars |
| `components/Journey.tsx` | Most complex component — sticky scroll with frame sequencing |

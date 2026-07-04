# Personal Portfolio Site — Next.js + Netlify

## Context

Abu Bakar Siddique (Lead Software Engineer, BUET grad, background spanning ERPNext/Frappe/Shopify at Mondaysys, QA automation + LLM/React projects at Together Initiatives, full-stack React+Django work at Hyper Helios, plus data analysis and math-olympiad training) wanted a personal portfolio site to showcase his experience and projects, built with Next.js and deployed on Netlify's free tier.

Confirmed decisions:
- **Style**: classic/professional, recruiter-friendly, not flashy.
- **Structure**: single-page scroll (Hero/About/Skills/Experience/Projects/Contact via anchors) plus a separate `/blog` section (MDX).
- **Contact**: Netlify Forms (native, free).
- **Extras**: downloadable resume PDF, dark/light toggle, MDX blog.

## Tech Stack

- **Next.js (App Router), TypeScript** via `create-next-app`.
- **Tailwind CSS v4** for styling — neutral palette + one accent color for the "classic professional" look.
- **next-themes** for dark/light toggle — handles the anti-flash inline script and class-based theme switching.
- **next-mdx-remote/rsc + gray-matter** for the blog — not Contentlayer (unmaintained/breaks on newer Next.js). `gray-matter` parses frontmatter cheaply for the listing page; `compileMDX()` renders individual post bodies.
- **Static export** (`output: 'export'` in `next.config.ts`), deployed as a plain static site — not via `@netlify/plugin-nextjs`/OpenNext runtime. Nothing on this site is genuinely dynamic (no auth, no per-request data), so static export avoids Netlify Functions entirely: no cold starts, no function-invocation quota, simpler and more robust on the free tier. Tradeoffs accepted: `next/image` optimization disabled (`images: { unoptimized: true }`), no on-demand ISR (not needed here).

## Netlify Forms Gotcha

Netlify detects forms by statically scanning HTML at deploy time for `<form data-netlify="true" name="...">`. A React-rendered contact form isn't visible to that scanner on its own, so:
1. `public/__forms.html` holds a static, hidden fallback form with matching `name` attributes on every field — this file exists purely for Netlify's build-time bot to register the form.
2. The real contact form (`components/sections/contact.tsx`) is a client component with a hidden `form-name` input (`value="contact"`); on submit it `fetch()`-POSTs to `/` as `application/x-www-form-urlencoded`.
3. This can only be verified on an actual Netlify deploy (check the **Forms** tab in the dashboard) — `netlify dev` locally does not perform the same build-time registration, so local testing only covers the UI/validation, not real submission delivery.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # ThemeProvider, Nav, Footer, fonts
│   ├── page.tsx            # landing page, composes section components
│   ├── globals.css
│   └── blog/
│       ├── page.tsx        # listing (reads content/blog frontmatter)
│       └── [slug]/page.tsx # post (generateStaticParams + compileMDX)
├── components/
│   ├── nav.tsx, footer.tsx, theme-toggle.tsx
│   ├── sections/ (hero, about, skills, experience, projects, contact)
│   └── ui/ (section, card, badge)
├── content/blog/*.mdx
├── lib/
│   ├── mdx.ts               # getAllPosts(), getPostSource()
│   ├── data/ (experience.ts, projects.ts, skills.ts)
│   └── site-config.ts       # name, social links, metadata
├── public/ (resume.pdf, __forms.html, favicon)
├── doc/plan.md
├── next.config.ts, netlify.toml, tsconfig.json, package.json
```

## Content

Sourced from the resume: experience timeline (Mondaysys Ltd, Together Initiatives Limited, Hyper Helios, Staff Asia, Math Olympiad PEDP4), projects grid (Shopify App Store app, Absorb LMS test automation, Dr. Yahki's AI Assistant, Visitor Management System, The Job Wave, Million Challenge), skills grouped by category, and contact links (email, phone, GitHub, LinkedIn, LeetCode).

## Netlify Config

`netlify.toml`: `build.command = "npm run build"`, `publish = "out"`, `NODE_VERSION` pinned. No `[[plugins]]` block for `@netlify/plugin-nextjs` — static export means Netlify just serves `out/` directly.

## Outstanding before deploy

- **`public/resume.pdf`** is currently a placeholder — replace it with the real resume PDF before going live.
- Project links in `lib/data/projects.ts` are left blank where the work isn't public; add live URLs if available.

## Verification

- `npm run build` succeeds and produces `out/` with all expected static routes.
- Local static serve confirms nav/anchors, dark/light toggle (no flash on reload), resume download, responsive layout.
- Post-deploy: Netlify dashboard Forms tab shows the `contact` form registered; a real test submission appears under Submissions.
- Blog listing and at least one post render correctly with MDX formatting intact.

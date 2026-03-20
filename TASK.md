# HeyJimmi Website — Build Task

You are building the official website for **HeyJimmi**, an AI Studio that creates AI-powered chatbots and digital assistants for businesses in Mexico. The site targets specific verticals (condominiums, academies, local media) and is built with **Astro**.

## Tech Stack
- **Framework**: Astro (latest stable)
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Language**: Spanish (Mexico)
- **Deployment**: Static output (Vercel-ready)

## Site Structure

### Main Pages
- `/` — Home (most important page — conversion-focused landing)
- `/nosotros` — About Us
- `/como-funciona` — How it works
- `/precios` — Pricing
- `/demo` — Book a demo / try a demo
- `/blog` — Blog (SEO engine, listing + individual posts)
- `/blog/[slug]` — Individual blog post

### Vertical Pages (high purchase intent)
- `/para/condominios` — HeyJimmi for condominiums
- `/para/academias` — HeyJimmi for academies/schools
- `/para/medios-locales` — HeyJimmi for local media outlets

### Support/Legal Pages
- `/privacidad` — Privacy policy
- `/terminos` — Terms of service
- `/contacto` — Contact

## Requirement Docs (in `/docs` folder)
The following spec files will be placed in `./docs/` — read them ALL before writing any code:
- `00-PROJECT-OVERVIEW.md` — Project overview and goals
- `00-AGENT-README.md` — Instructions for the AI agent (you)
- `01-DESIGN-SYSTEM.md` — Colors, typography, spacing, design tokens
- `02-GLOBAL-COMPONENTS.md` — Navbar, Footer, CTA components
- `03-PAGE-HOME.md` — Home page detailed spec (copy + sections)
- `04-PAGES-PRINCIPALES.md` — Nosotros, Cómo funciona, Precios, Demo
- `05-VERTICALS.md` — Vertical pages copy and structure
- `06-BLOG.md` — Blog setup and content strategy
- `07-SEO-Y-PAGINAS-SOPORTE.md` — SEO config and support pages

## Instructions

1. **Read ALL docs in `/docs/` first** — they contain exact copy, color palette, typography, section structure and component specs. Follow them precisely.

2. **Initialize Astro project** in the current directory:
   ```
   pnpm create astro@latest . --template minimal --no-git --install
   pnpm add @astrojs/tailwind tailwindcss
   ```

3. **Implement the design system** from `01-DESIGN-SYSTEM.md` — set up Tailwind config with the exact colors, fonts, and spacing specified.

4. **Build global components** per `02-GLOBAL-COMPONENTS.md`:
   - Navbar (responsive, mobile-first)
   - Footer
   - CTA sections / buttons

5. **Build all pages** per their spec files — use the exact copy provided in Spanish.

6. **Blog**: Set up Astro's content collections for blog posts with proper frontmatter.

7. **SEO**: Implement meta tags, OG tags, sitemap, robots.txt per `07-SEO-Y-PAGINAS-SOPORTE.md`.

8. **Non-interactive flags**: Use `--yes` or equivalent for all CLI prompts.

9. **Commit everything** to git when done.

## Quality Checklist
- [ ] All pages render without errors
- [ ] Mobile responsive
- [ ] Spanish copy matches specs exactly
- [ ] Correct colors/fonts per design system
- [ ] SEO meta tags on every page
- [ ] Blog collection works
- [ ] `pnpm build` succeeds with zero errors

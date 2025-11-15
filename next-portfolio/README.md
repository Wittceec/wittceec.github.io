# Scroll Animation Prototype

This folder hosts a Next.js + TypeScript + Tailwind + shadcn-friendly setup so you can integrate the scrolling animation hero from 21st.dev without disturbing the existing Jekyll site. The key pieces are:

- `/components/ui/container-scroll-animation.tsx` – the motion component copied verbatim into the standard shadcn path.
- `/components/ui/splite.tsx`, `/components/ui/spotlight.tsx`, `/components/ui/card.tsx` – primitives required for the interactive 3D block (plus `lib/utils.ts` for `cn`).
- `/components/sections/hero-scroll-demo.tsx` & `/components/sections/interactive-3d-demo.tsx` – ready-to-drop sections showcasing each animation.
- `/app/page.tsx` – renders the hero so you can evaluate or export it into another layout.

## Getting Started

```bash
cd next-portfolio
npm install
# rerun if you already had node_modules so the new Spline deps get installed
```

Tailwind and TypeScript are already configured. If you plan to scaffold more shadcn components, run the CLI once inside this folder so that generators know about the `/components/ui` directory:

```bash
npx shadcn-ui@latest init
```

That keeps every primitive colocated under `/components/ui`, which is important so future `npx shadcn-ui add button` calls automatically drop files into the right place without manual moves.

## Running locally

```bash
npm run dev
```

Then open http://localhost:3000. You can copy the rendered markup into your main site or deploy this Next.js app independently (e.g., Vercel, Netlify). To embed the hero in the Jekyll theme, export a static build (`npm run build && npx next export`) and drop the generated HTML/CSS/JS into the existing layout, or migrate your portfolio entirely to this modern stack for richer interactivity.

## Customizing

- Update `HeroScrollDemo` to feed your own screenshots or case studies (swap the Unsplash URL for an asset in `/public`).
- Point `Interactive3DDemo` at your own `.splinecode` scene (`components/sections/interactive-3d-demo.tsx`) or replace the lucide icons with metrics you prefer.
- Tailwind tokens live in `tailwind.config.ts`. Add fonts/colors there to stay consistent across shadcn components.
- Need icons? `lucide-react` is pre-installed, so import any glyph from it when describing metrics or services.

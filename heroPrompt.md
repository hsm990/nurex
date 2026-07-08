# NUXAR Agency — Hero Section Build Prompt

Create a single-page hero section for a digital agency (**NUXAR**, product line **NUREX**) that builds websites, management systems, and AI automations for restaurants, schools, and shops. Use **React + Vite + Tailwind CSS + TypeScript with shadcn/ui**.

## Tech Stack
- React + Vite + TypeScript
- Tailwind CSS
- shadcn/ui components (Button, etc.)
- Framer Motion for entrance animations
- Zero npm audit vulnerabilities, clean Vite 8 build

## Background
Fullscreen animated background evoking **electric blue smoke/lightning tendrils on a near-black navy canvas** (see reference image). Do NOT use a plain video unless an asset is provided — instead build this as a layered CSS/SVG or Canvas effect so it's dependency-free:
- Base: `bg-[hsl(var(--background))]` — a very dark navy, almost black
- 2–3 absolutely positioned SVG "smoke wisp" shapes (soft blurred blue gradients, `filter: blur(60-100px)`, low opacity) placed asymmetrically (top-left, right, bottom-left) similar to the reference
- Subtle slow drift/pulse animation on the wisps (`@keyframes drift` — translate + opacity loop, 8-14s, ease-in-out, infinite alternate)
- `position: absolute; inset: 0; z-index: 0; pointer-events: none;` container
- Keep it dark and moody — no bright washes, no full-screen glow

## Fonts
- Headings: a bold, tight modern sans (e.g. **Space Grotesk** or **Inter, weight 700–800**) — NOT a serif. The agency's look is technical/confident, not literary.
- Body: **Inter**, weights 400/500
- CSS variables: `--font-display: 'Space Grotesk', sans-serif` and `--font-body: 'Inter', sans-serif`

## Color Theme (dark, HSL values)
- `--background: 220 60% 6%` (near-black navy)
- `--foreground: 0 0% 100%` (white)
- `--muted-foreground: 240 4% 66%`
- `--primary: 217 91% 60%` (electric blue, matches the smoke accent)
- `--primary-foreground: 0 0% 100%`
- `--secondary: 220 40% 10%`
- `--muted: 220 40% 10%`
- `--accent: 217 91% 60%`
- `--border: 220 20% 18%`
- `--input: 220 20% 18%`

## Navigation Bar
`relative z-10`, flex row, `justify-between`, `px-8 py-6`, `max-w-7xl mx-auto`

- **Logo**: pill-shaped white badge (`liquid-glass` or solid `bg-white/95 rounded-full px-5 py-2`) containing a small blue user/person icon + "NUXAR" in bold tight-tracking type, `text-foreground` on dark badge OR `text-black` on white badge (match reference)
- **Nav links** (centered pill container, `hidden md:flex`, `liquid-glass rounded-full px-2 py-1`): Home (active, `bg-white text-black rounded-full px-4 py-2`), Services, Portfolio, About, Contact — inactive links `text-sm text-muted-foreground hover:text-foreground transition-colors`
- **Right side**: Facebook + Instagram icon buttons in white circular badges, then a solid blue **"Contact us"** button (`bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:scale-[1.03] transition-transform`)

## Hero Section
`relative z-10`, flex column, centered, text-center, `px-6 pt-24 pb-20`

**H1** — three-line cinematic headline built from icon + word pairs, each line reading like "[3D cube icon with letter] + word":
- Line 1: 🅱️-style blue 3D cube icon with letter "B" (rounded-square glossy blue box, white bold letter) + "**uild.**" in white
- Line 2: cube icon "M" (same style) + "**anage.**" in accent blue
- Line 3: cube icon "A" (same style) + "**utomate.**" in white

Build the cube icons as small rounded-square divs (`w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex items-center justify-center`) with the capital letter centered, bold, white. Word text: `text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight font-extrabold` using the display font. Alternate white/blue coloring across the three lines as described.

**Subtext**: `text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed mx-auto` —
"NUREX builds websites, management systems, and AI automations that help restaurants, schools, and shops run smarter."

**CTA row** (`flex gap-4 mt-10 justify-center`):
- Primary: **"Explore offers"** — solid white pill, `bg-white text-black rounded-full px-7 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-transform cursor-pointer`
- Secondary: **"Watch a demo"** — `liquid-glass rounded-full px-7 py-3.5 text-sm text-foreground flex items-center gap-2` with a small play-circle icon, `hover:scale-[1.03] transition-transform cursor-pointer`

## Feature Card Strip (bottom of hero, half-overlapping the fold)
A horizontal row (auto-scrolling/looping marquee or simple overflow-x scroll on mobile) of 5–6 glass cards just below the hero content, partially cut off at the viewport bottom to hint at scroll:

Each card: `liquid-glass rounded-2xl p-6 min-w-[280px]` containing:
- A tiny 2x2 dot-grid icon (muted blue) top-left
- Small uppercase eyebrow label in accent blue, tracked-out, e.g. "AI & AUTOMATION"
- Bold white title, e.g. "AI Automation"
- Muted gray description, 3 lines

Cards/content to include (in order):
1. **AI Automation** — "Hand off the repetitive work. Reports, follow-ups, data entry — automated so your team focuses on what only humans can do."
2. **Website Building** — "Fast, modern websites built around your business — from sharp landing pages to full multi-section platforms that hold up on every screen."
3. **Restaurant Systems** — "Orders, tables, menus, staff — one dashboard. Built for the pace of a real restaurant, not a boardroom demo."
4. **School Platforms** — "Grades, attendance, schedules, and student records in one place. Structure without the overhead."
5. **Shop Management** — "Track stock, log sales, manage suppliers. Your shop runs better when the numbers aren't scattered across three spreadsheets."

Loop back to card 1 (AI Automation) for a seamless infinite-scroll feel, matching the reference layout.

## Liquid Glass Effect (CSS class `.liquid-glass`)
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.03);
  background-blend-mode: luminosity;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.1) 80%, rgba(255,255,255,0.35) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

## Animations (CSS keyframes + classes)
```css
@keyframes fade-rise {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-rise { animation: fade-rise 0.8s ease-out both; }
.animate-fade-rise-delay { animation: fade-rise 0.8s ease-out 0.2s both; }
.animate-fade-rise-delay-2 { animation: fade-rise 0.8s ease-out 0.4s both; }

@keyframes drift {
  0% { transform: translate(0, 0) scale(1); opacity: 0.35; }
  100% { transform: translate(30px, -20px) scale(1.08); opacity: 0.5; }
}
.animate-drift { animation: drift 12s ease-in-out infinite alternate; }
```
- Each headline line gets `animate-fade-rise`, `animate-fade-rise-delay`, `animate-fade-rise-delay-2` in sequence
- Subtext gets the next delay in the sequence
- CTA row gets the final delay
- Background smoke wisps get `animate-drift` with staggered `animation-delay`

## Layout Notes
- No literal video required — the blurred SVG/gradient "smoke" background carries the visual depth, matching the moody blue-on-navy look of the reference
- Keep the nav pill-shaped and glassy, not a flat bar
- Keep the icon-cube + word headline treatment — it's the strongest, most memorable element of the current design
- Mobile: stack nav into a hamburger, stack CTA buttons full-width, make the card strip a horizontal swipe/scroll
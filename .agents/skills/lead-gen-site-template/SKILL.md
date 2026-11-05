---
name: lead-gen-site-template
description: >-
  Builds a dark, scroll-driven lead-generation website (React, TypeScript, Tailwind CSS, GSAP)
  for a new client niche, with a server-side lead endpoint and an honest confirmation flow.
  Use when asked to build a lead-gen, membership, booking, or service landing site, or to adapt
  the NOVA Performance Club template to a new business.
---

# Lead-Generation Website Template

This skill builds one client website per run. Read the whole file before writing code.

## 0. Ground rules

- **One client per build.** Keep all client-specific content in one config file (section 1). Never hardcode client names, prices, staff, or testimonials in components.
- **No invented claims.** Do not write testimonials, certifications, awards, staff bios, or statistics unless the client supplies them with proof. Use clearly marked placeholders such as `[CLIENT TESTIMONIAL]` and list them in the handover notes.
- **Honest confirmations.** Never say "verified," "active," or "confirmed" unless a system has actually checked the thing. Use "Request received. We will confirm within [X] hours."
- **No secrets in the frontend.** Webhook URLs, API keys, and tokens live in server-side environment variables only.
- **Label demos.** If the site is a portfolio or sample build, show a visible "Demo: sample business, fictional content" note.

## 1. Client config (build this first)

Create `src/config/client.ts` and export one typed object. Every component reads from it.

```ts
export const CLIENT = {
  name: "[CLIENT NAME]",
  niche: "[NICHE]",
  address: "[REAL ADDRESS OR REMOVE]",
  phone: "[REAL PHONE]",
  email: "[REAL EMAIL]",
  hours: "[HOURS]",
  accent: "#FF5500",            // replace per brand
  headline: "[HERO HEADLINE]",
  subheadline: "[ONE LINE VALUE PROPOSITION]",
  primaryCta: "[PRIMARY CTA TEXT]",
  secondaryCta: "[SECONDARY CTA TEXT]",
  heroBullets: ["[BULLET 1]", "[BULLET 2]", "[BULLET 3]"],
  services: [
    { id: "01", title: "[SERVICE A]", specs: ["[SPEC]"], image: "/assets/services/a.jpg" },
  ],
  team: [
    { name: "[TEAM MEMBER]", role: "[ROLE]", credentials: ["[VERIFIED CREDENTIAL]"], portrait: "/assets/team/a.jpg" },
  ],
  testimonials: [], // only real, consented testimonials
  tiers: [
    { name: "[TIER]", price: "[PRICE]", period: "[PERIOD]", features: ["[FEATURE]"], highlighted: false },
  ],
  formFields: {
    custom1Label: "[CUSTOM FIELD LABEL]",
    custom1Options: ["[OPTION]"],
  },
  demoNotice: true, // set false only for a real client with real content
};
```

## 2. Design system

- Dark stage: `#05070A` to `#0B0F15`. Light stage (middle sections): `#FFFFFF` with `#0A0A0A` text.
- Accent: `CLIENT.accent`. Use it for the primary CTA, progress indicators, and bullets only.
- Typography: one display font for headlines, one body font. Keep label text at readable sizes (avoid long runs of tiny uppercase mono text on mobile).
- Glass effects: `backdrop-blur-2xl` with a translucent gradient border. Test contrast of all gray text on dark backgrounds (WCAG AA minimum).
- Navigation: a floating pill navbar. It starts dark on the hero, switches to light when the pinned light section reaches about 45% scroll progress, and hides after the last light section so the footer and later sections are unobstructed.

## 3. Page architecture

### Page 1: Hero
- Full viewport (`100vh`) dark stage. Left half: headline with a typewriter reveal, dual CTAs, and the bullets from config.
- Right side: masked background visual using `radial-gradient(ellipse at 70% 52%, rgba(0,0,0,1) 32%, rgba(0,0,0,0.85) 52%, rgba(0,0,0,0) 76%)`.
- **Desktop and tablet (`>= 768px`):** canvas frame sequence. Preload frames from `/assets/hero_frames/frame_001.webp` through `frame_NNN.webp`. Map scroll progress to frame index with GSAP ScrollTrigger (`scrub: 0.35`). Draw in a `requestAnimationFrame` loop.
- **Mobile (`< 768px`):** `<video autoPlay loop muted playsInline>` with a poster image. Do not load the frame sequence on mobile.
- **Reduced motion:** if `prefers-reduced-motion` is set, show the first frame as a still image and skip the scroll scrub and typewriter.
- **Before shipping:** confirm that every frame number in the range exists on disk. A missing first frame leaves the canvas blank until the user scrolls.

### Page 2: Core value proposition (pinned color shift)
- GSAP ScrollTrigger with `pin: true`, `scrub: 1`, `end: "+=110%"` on desktop and `"+=75%"` on mobile.
- Background transitions from black to white. Headline transitions from accent color to near-black. Subtext transitions from light slate to charcoal.
- Progress bar fills 0 to 100% with status copy that updates as it fills. Copy is client-specific and must not overstate results.

### Page 3: Services showroom (pinned horizontal glide)
- White background, pinned for `100vh` with `overflow: hidden` while the track glides right to left (`x: 680` to `x: -580`, adjust to card count).
- Left column (4 of 12): service summary and primary CTA.
- Right column (8 of 12): service cards numbered `01`, `02`, `03` from `CLIENT.services`.
- Clicking a card opens a centered spec modal (`max-h-[88vh]`, `max-w-lg md:max-w-2xl`, `rounded-[24px]`) with an image and a two-column detail grid. Close on Escape and on backdrop click.

### Page 4: Team (single viewport)
- White background, `lg:h-screen lg:max-h-screen`.
- Desktop: 3-column grid of team cards from `CLIENT.team`. Each card lists only verified credentials supplied by the client.
- Mobile: tab switcher that shows one card at a time.
- Button hover: left-to-right accent fill (`-translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out`).
- If the client has no team section, remove this page instead of inventing one.

### Page 5: Testimonials (glass marquee)
- Deep obsidian background with soft ambient orbs.
- Horizontal marquee of glass cards (`animate-marquee-glide`, pauses on hover). Use only `CLIENT.testimonials`. If the array is empty, hide this section. Do not fill it with sample reviews.
- Card style: `backdrop-blur-2xl`, `linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)`, `inset 0 1px 1px rgba(255,255,255,0.22)`, `rounded-[26px]`. Hover: `hover:-translate-y-2.5 hover:scale-[1.025]`.

### Page 6: Pricing, intake, and confirmation
- Pricing grid from `CLIENT.tiers`. Highlight one tier only if the client asks for it.
- Intake form (section 5). The confirmation state must match what actually happened (section 5).
- Cursor bloom (optional, desktop only): a 520px radial bloom with `filter: blur(42px)` and `mix-blend-screen`, following the cursor through a 60fps LERP loop. Disable it on touch devices and under reduced motion.

## 4. Required packages and commands

```bash
npm install gsap lucide-react
```

If `npm install` fails with `ERESOLVE` (for example, a pinned `esbuild` older than what `vite` requires), do not reach for `--legacy-peer-deps` as the permanent fix. Remove the conflicting pin or update it to a version the peer requirement accepts, then run `npm install` again and confirm `npm run build` passes. Remove unused dependencies (for example, an AI SDK nothing imports) before delivery.

Add a server function host for the lead endpoint (Vercel or Netlify functions, or a small Express route).

## 5. Lead form and webhook (secure version)

**Do not call the automation webhook directly from the browser.** Send the form to your own endpoint, which validates the data and forwards it using a secret.

### Frontend (`src/components/LeadForm.tsx`)

```tsx
const [formError, setFormError] = useState("");
const [submitting, setSubmitting] = useState(false);
const [referenceId, setReferenceId] = useState<string | null>(null);

const handleFormSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormError("");

  // Client-side checks are for user feedback only. The server must repeat them.
  if (!fullName.trim() || fullName.trim().length < 2) return setFormError("Please enter your full name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setFormError("Please enter a valid email address.");
  if (phone.trim().length < 7) return setFormError("Please enter a valid phone number.");

  setSubmitting(true);
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        custom1: custom1,
        consent: consentChecked, // explicit opt-in checkbox, required
      }),
    });
    if (!res.ok) throw new Error(`Lead request failed: ${res.status}`);
    const data = await res.json();
    setReferenceId(data.referenceId);
  } catch (err) {
    console.error(err);
    // Never show a success state on failure.
    setFormError("We could not submit your request. Please try again or call us at " + CLIENT.phone + ".");
  } finally {
    setSubmitting(false);
  }
};
```

Show the success state only when `referenceId` is set. Use wording such as "Request received. Reference: REF-XXXX. We will confirm within [X] hours." Do not use "verified" or "active."

### Server function (`api/lead.ts`)

```ts
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });

  const body = await req.json().catch(() => null);
  if (!body) return new Response("Bad request", { status: 400 });

  // Repeat validation on the server. Never trust the browser.
  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  if (fullName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 7 || body.consent !== true) {
    return new Response("Invalid input", { status: 422 });
  }

  // Server-generated, unpredictable reference. Not Math.random.
  const referenceId = "REF-" + crypto.randomUUID().slice(0, 8).toUpperCase();

  const forward = await fetch(process.env.LEAD_WEBHOOK_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Lead-Token": process.env.LEAD_WEBHOOK_TOKEN!, // checked by the automation scenario
    },
    body: JSON.stringify({ fullName, email, phone, custom1: body.custom1 ?? null, referenceId, submittedAt: new Date().toISOString() }),
  });

  if (!forward.ok) return new Response("Upstream error", { status: 502 });
  return Response.json({ referenceId });
}
```

The function signature above uses the Web `Request`/`Response` style. Confirm it against your host's current docs for the runtime you choose (Vercel's Node and Edge runtimes differ), and test the endpoint with a real POST before relying on it.

Store `LEAD_WEBHOOK_URL` and `LEAD_WEBHOOK_TOKEN` in the hosting provider's environment settings. Do not commit them. In the automation scenario, add a filter that rejects requests whose `X-Lead-Token` header does not match.

### Data handling

- Store leads in a database with row-level security, not in a shared spreadsheet, for any real client.
- Include a privacy notice link and the consent checkbox next to the form. Do not pre-tick it.
- Send confirmation emails only after the consent check passes. Include an unsubscribe option on marketing emails.

## 6. Animation CSS (`src/index.css`)

```css
@import "tailwindcss";

@keyframes marqueeGlide {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-marquee-glide {
  display: flex;
  width: max-content;
  animation: marqueeGlide 38s linear infinite;
  will-change: transform;
}

.animate-marquee-glide:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee-glide {
    animation: none;
  }
}
```

## 7. Hero frame pipeline (run when the client supplies a video)

```bash
mkdir -p public/assets/hero_frames temp_jpg_frames

# Extract frames at 720p
ffmpeg -i path/to/client_hero_video.mp4 -vf "scale=1280:720" -q:v 3 -f image2 "temp_jpg_frames/frame_%03d.jpg"

# Convert to lightweight WebP
ffmpeg -i "temp_jpg_frames/frame_%03d.jpg" -c:v libwebp -lossless 0 -q:v 70 "public/assets/hero_frames/frame_%03d.webp"

# Clean up
rm -rf temp_jpg_frames

# Verify: count should match the frame total in config, and frame_001 must exist
ls public/assets/hero_frames | wc -l
ls public/assets/hero_frames/frame_001.webp
```

Also produce a poster image and a short mobile MP4 (around 1 MB) for the mobile video. Compress before committing.

## 8. Pre-delivery checklist

Do not hand over the site until every item passes.

- [ ] `npm run build` completes with no errors.
- [ ] Images are imported in components (`import img from "./x.jpg"`) or placed in `public/`. Never reference `/src/assets/...` as a string. Vite does not copy those files into `dist/`, so they break in production.
- [ ] Verify every image referenced in code exists in the build: run `grep -o '/src/assets[^"'"'"' ]*' dist/assets/*.js` and expect no output.
- [ ] `npm run preview` shows every image, video, and frame loading. Check the browser console for 404s.
- [ ] Test the live deployment in a real browser after each deploy. Do not rely on the build alone.
- [ ] The hero shows a frame on first load, before any scrolling.
- [ ] Mobile layout works at 375px width. No horizontal scroll on any page.
- [ ] Form errors appear for empty, short, or invalid input. A failed submit shows an error, not a success state.
- [ ] Run `grep -ri "webhook\|token\|api_key" dist/`. No secret values should appear in the built files.
- [ ] No "verified," "active," "guaranteed," or unsourced statistics in the copy.
- [ ] Every testimonial, credential, and staff bio has written client approval, or the section is removed.
- [ ] Placeholders in `client.ts` are all replaced or the related section is removed.
- [ ] The demo notice is visible if this is not a live client build.
- [ ] No `.env*` files, `node_modules`, `dist`, or media folders you don't use are in the repository.
- [ ] Reduced motion setting disables the scrub, typewriter, and marquee.

## 9. Handover notes to include

When you deliver a build, list:

1. Every placeholder the client still needs to supply.
2. Which sections were removed and why.
3. Which third-party services the site depends on (hosting, automation tool, email sender, database) and who owns each account.
4. Monthly running costs the client will pay directly, if any.
5. What the lead flow does and does not do. For example: "Submissions are stored and emailed to you. Membership or payment is not active until you confirm it."

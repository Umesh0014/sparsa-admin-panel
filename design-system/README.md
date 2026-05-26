# Sparsa AI · Design System

Design tokens, components and a UI-kit recreation of the Daily Feed surface for **Sparsa AI** — an Agentic Digital Workforce platform for the industrial enterprise. Sparsa builds AI agents that triage email/Slack/Salesforce traffic, summarize what matters, and offer one-click actions for revenue ops teams.

## Sources

- **Live demo URL** — [sparsa-ai.com/demos/arcserve](https://sparsa-ai.com/demos/arcserve) — Revenue Operations Intelligence dashboard built by Sparsa for Arcserve. **This is the source of truth for the brand palette and editorial type.** A screenshot is preserved at `_source/daily_feed-1.png`.
- **Admin codebase** — `/[Sparsa AI] Admin/` (local mount) — a separate Sparsa-built admin product ("RFQ Product"). The bundle is fully minified and was rendered + inspected via the DOM to extract structural patterns (sidebar, action rows, etc.). Preserved at `_source/admin/`. Its visual language differs noticeably from the live brand — use it as evidence of supported product surfaces, not as the brand reference.

If you reload this project later: re-attach the local folder via the Import menu so `local_ls("[Sparsa AI] Admin")` works again.

## Index

| File / Folder | Purpose |
|---|---|
| **`colors_and_type.css`** | The complete token sheet — colors, type ramp, shadows, spacing, radii. Import this anywhere. |
| **`assets/`** | Logo mark variants (dark, light), wordmark lockup. |
| **`preview/`** | 21 small cards rendered into the Design System tab — one card per concept (palettes, type, components). |
| **`ui_kits/daily_feed/`** | The hero product surface, recreated as editable JSX. `index.html` is the demo; the components are reusable. See `ui_kits/daily_feed/README.md`. |
| **`SKILL.md`** | Cross-compatible with Claude Code Agent Skills. Drop the folder into `.claude/skills/sparsa-design/` to invoke. |
| **`_source/`** | Source screenshots and the admin app bundle, for reference only — not part of the system. |

## Content fundamentals

The voice is **terse, calm, advisory** — like a chief of staff briefing you at 8am. Sparsa is not a chat assistant; it does not perform excitement.

- **First-person plural is avoided.** The product talks *about* what's happening (third person) and *to* the user (second person). Never "we" or "I."
- **Address the user by name.** "Good morning, Saurabh." — this is the literal first line of the product every day.
- **Quantify everything.** Customer values, ARR, days-to-renewal, percentages, dollar amounts, item counts. Numbers prove the AI did its homework.
- **Sentence case headlines.** "RE: Backup failure on production cluster — URGENT" reads like an actual email subject, because it is. Don't title-case AI-generated content; let it sound human-written.
- **Em dashes are common** ("47 days — resolution speed directly impacts retention.") and connect a fact to its implication.
- **Strong inline emphasis with `<strong>`**: dollar amounts, deadlines, named customers, the consequence. Bold ink (`#1E2B22`) inside body grey (`#4A4E48`). This is the visual rhythm of every AI Summary.
- **No emoji, no exclamation points, no sales language.** "ASAP", "URGENT", "Act now" are okay because they're functional labels; "Awesome!", "Let's go!", "🚀" are not.
- **Uppercase eyebrows** label everything — `CRITICAL`, `EMAIL`, `ACT NOW`, `AI SUMMARY`. 0.10em letter-spacing, never bold-shouty colors except terracotta for urgent.

Example AI Summary (verbatim shape):
> **GlobalMed ($820K ARR)** experienced a backup failure on their production VMware cluster last night. Tom is requesting an emergency call with SE team. **Renewal is in 47 days** — resolution speed directly impacts retention.

Three sentences, three bold spans, one em-dash. That's the canonical form.

## Page layout

Every product surface uses the same shell — there's only one page width. The shell width never changes; only the *body* layout flips between two patterns depending on whether you're listing things or focused on one thing.

- **Fixed-width centered page.** The shell is **1400px wide**, centered in the viewport (`margin: 0 auto`). Below 1400px the page still renders at 1400 — it does not collapse responsively. Token: `--page-w: 1400px`.
- **Vertical padding inside the shell** is `--page-pad-y` (32px).
- **Gutter between columns** is `--col-gap: 32px` (`var(--space-8)`).

### Pattern A — List / dashboard (25 / 75)

Default for any surface with a persistent nav rail — dashboards, queues, settings.

- **Two-column grid: 25% / 75%.** Sidebar (`25%`) + main (`75%`). `display: grid; grid-template-columns: 25% 75%;`. Tokens: `--col-left-pct`, `--col-right-pct`.
- **Sidebar contents** — brand block, primary navigation grouped under uppercase eyebrows (`INBOX`, `SOLUTIONS`), signed-in user block pinned to the bottom of the column via `margin-top: auto` (so it always rides the 25% column, regardless of nav length).
- **Main column contents** — page title (Inter 700 / 32px / `-0.022em` tracking) with a one-line subtitle in `--fg-3`, top-right pill-button for the page's primary external action, then content sections stacked with `--space-8` between them.
- **No top header bar.** Page title lives in the right column, not in chrome above it.

See `preview/page-layout.html`.

### Pattern B — Detail / workflow (header + 50 / 50)

Use when the user is focused on a single record (an RFQ, a ticket, a deal). The nav rail is *replaced* by a thin **page bar** with a back arrow + record title, and the body becomes a balanced 50 / 50 split.

- **Page bar** at the top of the shell — back button (36×36px, 10px-radius outline) + record title (Inter 700 / 28px), separated from the body by a 1px `--border` rule. ~20px vertical padding.
- **Body grid: 50 / 50.** `grid-template-columns: 1fr 1fr;`. Both columns are the same width; the gap (`--col-gap`, 32px) is the same as Pattern A.
- **Left column** = conversational surface (chat with the AI agent, structured turns, system messages, user replies). Message composer pins to the bottom of the column via `margin-top: auto`. Suggested-reply pills sit directly under the composer.
- **Right column** = structured artifact (tabs for stages of the workflow — *Product Match / Lead Time / Pricing / Quote draft / Approval* — then summary tables and detail cards stacked with `--space-6` between them).
- This pattern is the *only* place the page bar (back + title) is allowed. List / dashboard surfaces don't get one.

See `preview/page-layout-detail.html`.

## Visual foundations

- **Editorial, not enterprise SaaS.** The brand reads as a calm advisory product. The brand mark — a woven six-ribbon knot in forest green, terracotta tan, sage and pale peach — carries the editorial weight; type stays quiet sans. Warm cream paper signals *briefing*, not *dashboard*.
- **Color philosophy is restrained:** forest green is the *only* chrome color. Terracotta is the *only* alarm color. Everything else is paper, ink, and warm neutrals. There are no purple gradients, no rainbow status systems, no soft pastels.
- **Type:** **Inter is the only typeface in the system** — 400/500/600/700/800. Display and metric numbers are heavyweight (700) with tight tracking (`-0.022em`) and `font-variant-numeric: tabular-nums lining-nums` so columns line up. IDs and timestamps that previously used JetBrains Mono now use Inter 500 with `tabular-nums` for the same alignment. There is no serif and no mono in the stack.
- **Background = warm cream paper (`#FBF4F1`)**, not white. Cards are pure white over cream, which gives them genuine elevation without resorting to shadow tricks.
- **Borders are warm tan (`#E7D9D0`)**, not cool gray. This is what keeps the system from feeling clinical.
- **Navigation is a side rail, never a top bar.** Sparsa products use a left-side vertical nav for primary navigation; the top of the page is reserved for content (page title, breadcrumb, contextual actions). Do not introduce horizontal nav tabs or a dark top header.
- **Layout = single centered column (~900px)** for the Daily Feed. It reads top-to-bottom like a newspaper page.
- **Urgency lives in the chip and the eyebrow, never in a colored rail or fill.** No left-edge accents on cards. A small terra `ACT NOW` pill plus a terra `CRITICAL` eyebrow is enough.
- **Pill is the dominant shape** — buttons, tabs, status chips, the LIVE indicator, the filter row, the "21" notification count. Cards, inputs, and metric blocks use moderate radii (**8px** default, 10–14px reserved for large surfaces). Nothing is sharp-cornered.
- **Shadows are warm and minimal:** `0 1px 2px rgba(31, 25, 18, 0.04)` — almost invisible. The brand leans on borders and contrast, not depth.
- **Hover** = slight darken (`--green-deep #324A38` for buttons; `--paper-sunken #F4EAE3` for rows). **Active/pressed** = same darken plus a 1px inset. **Focus** = 1px forest border + 3px `rgba(61, 89, 67, 0.15)` soft halo.
- **Transparency & blur** are not used; the brand is solid and printed-feeling.
- **No animation tropes** — no bounce, no spring, no spinning gradients. Linear `cubic-bezier(.2,.6,.2,1)` 150–250ms is enough for any state change. The LIVE pill has a subtle glow on its dot; that's the only ambient motion.
- **Imagery / illustrations** — none in the live demo. Iconography is custom inline SVGs at 1.4 stroke weight (see `preview/iconography.html`). No illustrations, no stock photography. If you need a logo for a client (Arcserve, GlobalMed, etc.) use a text wordmark, not a fabricated logo.

## Iconography

- **Phosphor Icons, Regular weight, only.** 1500+ icon catalog. A curated subset of ~20 commonly-used glyphs is checked into `assets/icons/` as 32×32 SVGs with `currentColor` fill. For anything outside that subset, load the full catalog from the CDN: `<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2/src/regular/style.css">` then `<i class="ph ph-envelope"></i>`.
- **Sizes:** 14 / 16 / 20 (default) / 24 / 32 px. Match icon size to neighbouring text size — never larger than the cap-height of the type next to it.
- **Color via `currentColor`.** Set the icon's color through the parent's `color` property — `--fg-1` for ink, `--fg-3` for neutral meta, `--terra` for critical, `--terra-tan` for AI/insight content, `--success` for resolved.
- **Do not mix weights.** Sparsa uses Phosphor *Regular* only. The Thin / Bold / Fill / Duotone weights from the same family are off-brand.
- **No emoji** in product surfaces. The internal RFQ admin product *does* use emoji in its sidebar (📬 ⏳) — that's a different product carried over from a prior phase; new work follows the Phosphor rule.
- **Logos for client demos** (Arcserve, GlobalMed in the screenshot) should be real assets — copy them in, don't draw them. If a logo isn't available, fall back to a typeset name.

## Typography

**Inter only — 400, 500, 600, 700, 800.** Loaded once from the CDN by `colors_and_type.css`.

- Display & H2: Inter 700, tight (`-0.022em`).
- Big metric numbers: Inter 700 with `font-variant-numeric: tabular-nums lining-nums` so a column of `$4.2M / 108% / $820K` lines up to the digit.
- IDs / timestamps (e.g. `fi-01`, `RFQ-2026-00124`, `06:12`): Inter 500 + `tabular-nums`, slight positive tracking (`0.01em`). This replaces the previous JetBrains Mono treatment.
- Body: Inter 400 at 15/150% with inline `<strong>` for dollar amounts, deadlines, named customers.
- Eyebrows: Inter 600 at 11px, `0.10em` letter-spacing, uppercase. Terra for `CRITICAL`/`ACT NOW`, `fg-3` (warm gray) for everything else.

## Caveats

## Logo & brand mark

The SPARSA mark is a **woven six-ribbon knot** in four flat colors: forest green `#3D5943`, terracotta tan `#BD7A5E`, sage `#BFD2B5`, and pale peach `#F0CBB6`. The **primary lockup** sets `Sparsa AI` in title case, heavyweight sans, deep forest `#31382E` — see `assets/logo-lockup-horizontal.png` (raster) and `assets/logo-lockup-horizontal.svg` (vector text + embedded square mark, drops into Figma cleanly).

| File | Use |
|---|---|
| `logo-mark.png` | Square knot mark only (2744²) — favicons, app icon, small chrome |
| `logo-lockup-horizontal.png` / `.svg` | Mark + "Sparsa AI" in a row. The full lockup — use everywhere by default. |

Do not redraw the mark in SVG; always reference the bitmap (or the SVG, which embeds it). Minimum mark size is 24px; minimum horizontal lockup is 28px tall. Keep `0.5× mark-height` of clear space on all sides.

## Caveats

- The marketing site at sparsa-ai.com was unreachable for fetch beyond meta tags — only the Arcserve demo was visible. Brand foundations are extrapolated from that single demo.
- The RFQ admin codebase represents a separate Sparsa product with its own visual language (cool gray, sans-only). It is preserved in `_source/admin/` for reference but is **not** the brand reference.
- Mobile / narrow layouts are not represented in this kit.

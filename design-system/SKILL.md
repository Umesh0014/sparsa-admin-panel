---
name: sparsa-design
description: Use this skill to generate well-branded interfaces and assets for Sparsa AI, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files — especially `colors_and_type.css` (foundation tokens) and `ui_kits/daily_feed/` (canonical surface).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

Key conventions for Sparsa AI:

- Editorial tone. Forest green chrome (`#3D5943`), terracotta accents (`#B33A28`), warm cream paper background (`#FBF4F1`), white cards. The woven six-ribbon brand mark in `assets/logo-*.png` carries the editorial weight.
- **Inter is the only typeface.** 400–800. Display + metrics at Inter 700 with `font-variant-numeric: tabular-nums lining-nums` and tight tracking. IDs and timestamps use Inter 500 + `tabular-nums` (no mono, no serif).
- Use the "AI Summary" block pattern (warm paper card with terra border and small pill) for any AI-generated context — never present AI output without it.
- Address the user by name. Quantify everything. No emoji. No "we"/"I". Strong inline emphasis on dollar amounts, deadlines, and customer names inside otherwise-quiet body copy.
- Pill is the dominant shape for interactive elements; cards use 10–14px radii.

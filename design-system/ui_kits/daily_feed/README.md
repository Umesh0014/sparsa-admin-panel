# Daily Feed — UI kit

The hero surface of Sparsa AI's **Revenue Operations Intelligence** product. A morning briefing that triages everything that hit the user's email, Slack, and CRM since yesterday, ranks by urgency, and offers AI-summarized context with one-click actions.

This kit recreates that surface with editable, well-factored JSX components.

## Files

| File | What it is |
|---|---|
| `index.html` | The full Daily Feed screen — hero greeting + metric row + filter pills + critical/decisions sections + 5 feed cards with AI summaries |
| `Header.jsx` | `<Header/>` (forest green top bar with logo, LIVE pill, avatar) + `<NavTabs/>` (Dashboard / AI Insights / Chat / Daily Feed) |
| `MetricCard.jsx` | `<MetricRow/>` + `<MetricCard eyebrow value sub tone/>` — the 4-up KPI strip |
| `FilterPills.jsx` | `<FilterPills filters active onSelect/>` — channel filter row |
| `FeedCard.jsx` | `<FeedCard id channel author time urgency subject summary buttons critical/>` plus the supporting `<AISummary/>`, `<ActionButton/>`, `<UrgencyChip/>` and `<ChannelBadge/>` |
| `SectionLabel.jsx` | `<SectionLabel tone count>...</SectionLabel>` — the "CRITICAL · NEEDS ATTENTION NOW" rule |

## Design notes — pulled directly from the live demo

- **Centered single column** (~900px), not a sidebar dashboard. Reads like a morning newsletter.
- **Inter throughout, no serif.** The greeting and big metric numbers are heavyweight Inter (700) with tight tracking and tabular numerals; everything else is regular Inter (400–600). The brand mark itself carries the editorial weight — type stays quiet.
- **Forest green (#3D5943)** is the chrome — only used for the header bar, primary buttons, active tab pill, and the wordmark next to the brand mark.
- **Terracotta (#B33A28)** is reserved for *critical* and *act now* — left-rail on the card, eyebrow label, urgency chip. Never as a decorative accent.
- **AI Summary block** has its own distinct surface — warm paper (`#FAF5F2`) + terra border + a small "AI Summary" pill. Always inside a parent card, never floating.
- **Pill buttons everywhere** (`border-radius: 999px`). Primary = filled forest green. Ghost = transparent with cream-tan border. Danger = soft terra fill.

## What this kit doesn't recreate

- The non-Daily-Feed tabs (Dashboard, AI Insights, Chat) — they were not in the screenshot.
- Real interactivity beyond tab/filter toggling — the AI actions, search, deeper drill-ins are stubbed.
- The mobile layout. The current min-width is desktop; the live product likely degrades cleanly but we don't have evidence of how.

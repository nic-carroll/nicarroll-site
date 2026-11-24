# Nic Carroll Brand Guide

Version 1.0, November 2026. This file is the single source of truth for the Nic Carroll personal brand. People and AI agents should both follow it.

## Who the brand is for

Nic Carroll, Ed.S., CISSP, CETL. Innovative and visionary executive technology leader who has served as CIO, CTO, and CISO.

Brand line: Innovation that scales. Security that holds. Leadership that delivers.

## The logo

The mark is drawn from the way Nic signs his N: a sweep up from the lower left, a sharp peak, a straight drop, and a long rising finish. The loop around it is the C.

| Use | File name starts with | When |
|---|---|---|
| Primary mark | `nic-carroll-primary-loop` | Default everywhere: site headers, profile pictures, slide corners |
| Signature N | `nic-carroll-signature-n` | Very small sizes and places where the loop would blur, such as a 16 pixel icon |
| Lockup | `nic-carroll-lockup` | When the name must appear with the mark: email signatures, letterhead, title slides |

Versions of each: navy tile, light tile, transparent for dark backgrounds, transparent for light backgrounds, and one color navy or white.

### Logo rules

1. Keep clear space around the mark equal to one quarter of its width.
2. Smallest size: 24 pixels for the primary mark, 16 pixels for the Signature N, 160 pixels wide for the lockup.
3. On navy or dark photos use the white N with the amber loop. On white or light backgrounds use the navy N with the amber loop.
4. Do not stretch, rotate, recolor, outline, or add shadows to the mark.
5. Do not place the mark on busy photos without a navy or white tile behind it.
6. Do not put the mark inside a circle or ring. That version was rejected.
7. Do not retype the N in a font. Always use the supplied files.

## Colors

| Name | Hex | Use |
|---|---|---|
| Navy | `#0c1a2e` | Primary. Headers, hero areas, the logo tile |
| Navy 2 | `#13263f` | Gradients and raised surfaces on navy |
| Navy 3 | `#1c3354` | Gradient ends, borders on navy |
| Amber | `#f2b43c` | Accent. The loop, primary buttons, key numbers on navy |
| Amber Ink | `#8a5d00` | Amber toned text on light backgrounds |
| Sky | `#8fb8de` | Secondary accent on navy |
| Sky Soft | `#e4eef8` | Chips and quiet highlights on light backgrounds |
| Link Blue | `#1f5f9e` | Links and subtitles on light backgrounds |
| Paper | `#f3f5f8` | Page background |
| Surface | `#ffffff` | Cards |
| Ink | `#0f1c2e` | Body text |
| Ink Soft | `#4d5b6e` | Secondary text |
| Line | `#d9e0e9` | Borders and dividers |

### Contrast, measured

| Pair | Ratio | Result |
|---|---|---|
| White on Navy | 17.5 to 1 | Passes AAA |
| Amber on Navy | 9.5 to 1 | Passes AAA |
| Navy on Amber | 9.5 to 1 | Passes AAA. Use for amber buttons |
| Ink on Paper | 15.7 to 1 | Passes AAA |
| Ink Soft on White | 6.9 to 1 | Passes AA |
| Amber Ink on White | 5.8 to 1 | Passes AA |
| Link Blue on White | 6.6 to 1 | Passes AA |
| Amber on White | 1.8 to 1 | Fails. Never use amber for text on light backgrounds |

Color balance: about 60 percent navy or paper, 30 percent white surfaces, 10 percent amber. Amber is an accent, not a background for large areas.

## Color schemes

The brand has four approved schemes. Navy and Amber is the default. The website has a picker in the top bar that switches between them, and the logo loop follows the active accent.

| Scheme | Dark | Accent on dark | Button fill | Button text | Secondary | Link on light |
|---|---|---|---|---|---|---|
| Navy and Amber (default) | `#0c1a2e` | `#f2b43c` | `#f2b43c` | `#0c1a2e` | `#8fb8de` | `#1f5f9e` |
| Red, White, and Blue | `#0a2342` | `#ff6b6b` | `#c8102e` | `#ffffff` | `#c8d0da` | `#1d4ed8` |
| Blue and Silver | `#0b2a5b` | `#c8d0da` | `#c8d0da` | `#0b2a5b` | `#93c5fd` | `#1d4ed8` |
| Graphite, Red, and Silver | `#111827` | `#ff6b6b` | `#c8102e` | `#ffffff` | `#c8d0da` | `#b3202e` |

True red (`#c8102e`) is used for filled buttons with white text. On dark backgrounds red text and lines use the lighter `#ff6b6b`, because true red on navy fails contrast.

### Rules every scheme must pass

A new scheme may only be added if `tokens/check-schemes.py` passes. The rules:

1. Accent on the dark color: at least 4.5 to 1.
2. Text on the accent button fill: at least 4.5 to 1.
3. White on the dark color: at least 7 to 1.
4. Secondary tone on the dark color: at least 4.5 to 1.
5. Link color and accent ink on the page background: at least 4.5 to 1.
6. Each scheme keeps the same roles: one dark, one accent, one secondary, one page background. Only the values change, never the layout, fonts, or shapes.

## Type

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headlines and numbers | Bricolage Grotesque | 700 | Tight letter spacing, about minus 2 percent |
| Body and labels | Public Sans | 400, 500, 600 | 17 pixel body, 1.65 line height on the web |
| Eyebrows and chips | Public Sans | 600 to 700 | Uppercase with wide letter spacing, 12 to 13 pixels |

Both fonts are open source under the SIL Open Font License and are included in `fonts/`. If they are not available, fall back to Arial Narrow for headlines and the system sans serif for body.

## Design system

New websites follow Material Design 3, light scheme, using these brand colors as the color roles: Navy as primary, Amber as tertiary accent, Paper as surface. Shapes: 12 pixel corners on cards, 16 on large cards, 28 on dialogs, full pills for buttons and chips.

## Voice and writing

1. Plain words and short sentences. Lead with the result, then how.
2. Never use em dashes or dashes. Use commas, periods, or the word "to".
3. Title Case for headings and buttons.
4. Name the employer as "Georgia Southern University", never an abbreviation, in public writing.
5. Lead with outcomes that matter to a board: leading, saving money, delivering at scale, and security. Do not lead with how many tools were built.
6. Numbers must be true and sourced. Never claim something that is planned as finished.
7. Never show real systems, people, or records from an employer. Demo screens use the fictional Oakhaven name and invented data.

## Signature facts

Use these exactly when a short proof point is needed.

1. $1.5M saved, 30 percent of technology spending in year one.
2. $12M of school safety systems delivered across 44+ sites.
3. 4,000+ products reviewed in six months with a rebuilt review process.
4. A perfect CMMC Level 2 score, with all 110 controls met.

## What is in this package

| Folder | Contents |
|---|---|
| `logos/svg` | Every logo as a scalable SVG |
| `logos/png` | PNG exports: marks at 1024 and 256 pixels, lockups at 1680 pixels wide, transparent where the name says so |
| `favicon` | Browser and app icons: `favicon.ico`, `favicon.svg`, and PNGs at 32, 180, 192, and 512 pixels |
| `fonts` | Bricolage Grotesque and Public Sans as variable web fonts |
| `tokens` | `brand.css` (CSS variables), `colors.json`, `schemes.css` (the four schemes), and `check-schemes.py` (the contrast checker) |
| `skill/nic-carroll-brand` | `SKILL.md`, the same rules written for AI agents |
| `Brand_Guide.pdf` | A three page visual guide |

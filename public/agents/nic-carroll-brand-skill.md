---
name: nic-carroll-brand
description: Apply Nic Carroll's personal brand (logo, colors, fonts, voice) whenever building or editing his websites, resumes, slide decks, documents, graphics, or public writing about him.
---

# Nic Carroll Brand

Follow these rules for anything that carries Nic Carroll's name. The full guide is `BRAND.md` in the brand package. The logo files, fonts, and tokens are in the same package.

## Before you build

1. Use the supplied logo files. Never redraw or retype the mark.
2. Load the colors and fonts from `tokens/brand.css`, or copy the values below.
3. New websites use Material Design 3, light scheme, with the brand colors as the color roles.

## Logo

* Primary mark: the signature N with the amber loop (`nic-carroll-primary-loop-*`). Default choice.
* Signature N alone (`nic-carroll-signature-n-*`): only below 24 pixels.
* Lockup (`nic-carroll-lockup-*`): when the name must sit beside the mark.
* On dark: white N, amber loop. On light: navy N, amber loop.
* Clear space of one quarter of the mark's width. No stretching, rotating, recoloring, outlines, or shadows.
* Never place the mark inside a circle or ring.

## Colors

Navy `#0c1a2e` (primary), Navy 2 `#13263f`, Navy 3 `#1c3354`, Amber `#f2b43c` (accent), Amber Ink `#8a5d00` (amber toned text on light), Sky `#8fb8de`, Sky Soft `#e4eef8`, Link Blue `#1f5f9e`, Paper `#f3f5f8`, Surface `#ffffff`, Ink `#0f1c2e`, Ink Soft `#4d5b6e`, Line `#d9e0e9`.

* Amber text is allowed on navy only. On light backgrounds use Amber Ink.
* Amber buttons carry navy text.
* Keep amber to about 10 percent of any layout.

## Color schemes

Four approved schemes: Navy and Amber (default), Red, White, and Blue, Blue and Silver, and Graphite, Red, and Silver. Values are in `tokens/schemes.css`. Use the default unless Nic asks for another.

* Red: true red `#c8102e` for filled buttons with white text. On dark backgrounds use `#ff6b6b` for red text and lines.
* Never invent a scheme without running `tokens/check-schemes.py`. Accent on dark, text on buttons, and links on light must all reach 4.5 to 1, and white on dark must reach 7 to 1.
* A scheme changes color values only. Layout, fonts, shapes, and the logo drawing stay the same.

## Type

* Headlines and numbers: Bricolage Grotesque, weight 700, tight letter spacing.
* Body and labels: Public Sans, weights 400 to 600.
* Eyebrows and chips: Public Sans, uppercase, wide letter spacing.

## Writing

* Plain words, short sentences, result first.
* Never use em dashes or dashes anywhere.
* Title Case for headings and buttons.
* Write "Georgia Southern University" in full.
* Lead with leadership, savings, delivery at scale, and security. Do not lead with a count of tools.
* Every number must be true. Never describe planned work as finished.
* Never show real employer systems, people, or records. Demo screens use the fictional Oakhaven name with invented data.

## Check before you finish

1. Is the right logo version on this background?
2. Does any amber text sit on a light background? Change it to Amber Ink.
3. Are there any dashes in the text? Remove them.
4. Is every number one of the approved facts or backed by a source?

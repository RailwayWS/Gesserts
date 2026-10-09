---
version: alpha
name: Kokerboom Dusk
description: Design system for Gesserts Guesthouse (Pension Gessert), a seven-room bed and breakfast in Keetmanshoop, southern Namibia.
colors:
  primary: "#A8481F"
  primary-hover: "#8E3A17"
  on-primary: "#FFFFFF"
  sun: "#E8A24E"
  dusk: "#2A1F19"
  night: "#17120E"
  night-raised: "#221A15"
  night-line: "#3E3128"
  night-field: "#5A4838"
  dune: "#8E4A2B"
  ridge: "#5E301F"
  silhouette: "#17120E"
  fig: "#2F4229"
  fig-leaf: "#6C8A4A"
  fig-ink: "#3F5A36"
  dry-leaf: "#C98A3E"
  pollen: "#D9C27A"
  sand: "#F1E9DC"
  sand-deep: "#E8DDCC"
  sand-line: "#D9CBB6"
  ink: "#241C17"
  ink-soft: "#5E4E40"
  ink-mute: "#6B5B4B"
  on-dark: "#F4ECDF"
  on-dark-soft: "#DCCFBC"
  on-dark-mute: "#B9AA94"
  on-fig: "#F1EBDD"
  on-fig-soft: "#D3D9C4"
  error: "#9B2C1F"
  error-on-dark: "#EE9073"
typography:
  display-hero:
    fontFamily: Instrument Serif
    fontSize: 112px
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Instrument Serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.1
  numeral:
    fontFamily: Instrument Serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1
  price:
    fontFamily: Instrument Serif
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1
  wordmark:
    fontFamily: Instrument Serif
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1
  body-lg:
    fontFamily: Figtree
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Figtree
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Figtree
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: Figtree
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  label-caps:
    fontFamily: Figtree
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.14em
rounded:
  frame: 6px
  field: 6px
  panel: 10px
  pill: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 64px
  section: 120px
  gutter: 16px
  margin: 32px
  margin-phone: 16px
  max-width: 1240px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    height: 48px
    padding: 22px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-ghost-dark:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    height: 48px
  button-light:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
    typography: "{typography.label-md}"
    rounded: "{rounded.pill}"
    height: 44px
  nav-link:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.label-md}"
  hero:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark}"
    typography: "{typography.display-hero}"
  hero-eyebrow:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.sun}"
    typography: "{typography.label-caps}"
  hero-lede:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-lg}"
  landscape-far:
    backgroundColor: "{colors.dune}"
  landscape-mid:
    backgroundColor: "{colors.ridge}"
    textColor: "{colors.on-dark}"
  landscape-ground:
    backgroundColor: "{colors.silhouette}"
    textColor: "{colors.on-dark}"
  floating-leaf:
    backgroundColor: "{colors.fig-leaf}"
  floating-leaf-dry:
    backgroundColor: "{colors.dry-leaf}"
  section-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-lg}"
  section-sand-body:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.body-md}"
  section-sand-eyebrow:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
  section-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.headline-md}"
  section-night-caption:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark-mute}"
    typography: "{typography.body-sm}"
  distance-figure:
    backgroundColor: "{colors.night}"
    textColor: "{colors.sun}"
    typography: "{typography.numeral}"
  section-garden:
    backgroundColor: "{colors.fig}"
    textColor: "{colors.on-fig}"
    typography: "{typography.headline-lg}"
  section-garden-body:
    backgroundColor: "{colors.fig}"
    textColor: "{colors.on-fig-soft}"
    typography: "{typography.body-md}"
  section-garden-eyebrow:
    backgroundColor: "{colors.fig}"
    textColor: "{colors.pollen}"
    typography: "{typography.label-caps}"
  amenity-icon:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.fig-ink}"
  amenity-row:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.body-sm}"
  divider-sand:
    backgroundColor: "{colors.sand-line}"
    textColor: "{colors.ink}"
  rate-row:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    typography: "{typography.price}"
  note-card:
    backgroundColor: "{colors.sand-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.headline-sm}"
    rounded: "{rounded.panel}"
    padding: 24px
  photo-frame:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.frame}"
  chip:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
  form-panel:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.panel}"
    padding: 36px
  input:
    backgroundColor: "{colors.dusk}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.field}"
    height: 48px
  input-border:
    backgroundColor: "{colors.night-field}"
  input-error:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.error-on-dark}"
    typography: "{typography.body-sm}"
  field-error-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  footer:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.wordmark}"
  footer-line:
    backgroundColor: "{colors.night-line}"
    textColor: "{colors.on-dark}"
---

# Gesserts Guesthouse — Kokerboom Dusk

## Overview

Pension Gessert is a seven-room bed and breakfast on the B1 through southern Namibia. Its guests arrive in the late afternoon after hours of driving through the Karas region, and the place they arrive at is a shaded garden under a huge wild fig. The design system tells that story in one move: **the site begins at dusk in the Kalahari and walks you into the garden.**

The hero is a flat, poster-like southern landscape (sky, low sun, two dune ridges and a ground line of quiver trees, *kokerbome*, which grow in a forest 25 km from the house). Scrolling sets the sun. Fig leaves drift over it, the only "floating" element, and they come from the house's own tree. Everything below the hero alternates between three grounds that exist on site: **sand** (the driveway and paving), **night** (the sky after check-in closes at 19:00) and **fig** (the garden canopy).

The intended first-second feeling is *arriving somewhere personal at the end of a long road*: warm, quiet, owner-run. Not a resort. Not a booking platform.

**What this direction gives up:**
- **No glamour photography.** The real photos are small, honest snapshots, so they're framed like prints in an album rather than stretched full-bleed.
- **No white anywhere.** The brightest surface is sand.
- **No density.** It's a brochure for seven rooms, read once on a phone before a road trip, so generous spacing wins over fitting more in.
- **No playful palette.** Every hue is either earth, foliage or the light of the hour.

How it avoids looking like other guesthouse sites: those default to a full-bleed slider, a white page, a blue "Book now" and a TripAdvisor badge row. This system has no image slider, no white, no blue and no stock iconography of beds and towels.

## Colors

The palette is sampled from the hour the guests arrive.

- **Clay (`primary`, #A8481F):** the colour of the Karas dunes once the sun is low. It's the *only* interaction colour: primary buttons, the enquiry submit, and the small uppercase eyebrows on sand sections. Keep it under 5% of any screen. Hover deepens to `primary-hover` (#8E3A17), and white text on it passes AAA.
- **Low sun (`sun`, #E8A24E):** the sun disc itself. It's used only on dark grounds, for the hero's second headline line, distance numerals, eyebrows on night/dusk and focus rings. It never sits on sand, where it fails contrast and loses its meaning as "light in the dark".
- **Dusk (`dusk`, #2A1F19) and Night (`night`, #17120E):** warm browns, not navy or charcoal. Dusk is the hero sky and the breakfast room. Night is the distance strip, booking and footer. `night-raised` (#221A15) lifts the form panel, `night-line` (#3E3128) draws the hairlines and `night-field` (#5A4838) draws input borders.
- **Dune (`dune`, #8E4A2B), Ridge (`ridge`, #5E301F), Silhouette (`silhouette`, #17120E):** reserved for the landscape layers, back to front, each darker than the one behind it. They are never used for UI chrome.
- **Fig (`fig`, #2F4229):** the garden section's ground, the colour of shade under the canopy. `fig-leaf` (#6C8A4A) and `dry-leaf` (#C98A3E) colour the floating leaves, and `fig-ink` (#3F5A36) is the stroke colour for every icon on sand. `pollen` (#D9C27A) is the eyebrow colour on fig.
- **Sand (`sand`, #F1E9DC):** the paving outside the guest rooms. It's the light ground of the site. `sand-deep` (#E8DDCC) is for note cards and `sand-line` (#D9CBB6) for hairline dividers.
- **Ink (`ink`, #241C17):** all text on sand. `ink-soft` (#5E4E40) is for body paragraphs and `ink-mute` (#6B5B4B) for secondary lines. All of them pass AA on sand.
- **On-dark text:** `on-dark` (#F4ECDF) for headlines, `on-dark-soft` (#DCCFBC) for body and `on-dark-mute` (#B9AA94) for captions. On fig, use `on-fig` (#F1EBDD) and `on-fig-soft` (#D3D9C4).
- **Error (`error`, #9B2C1F; `error-on-dark`, #EE9073):** an iron-oxide red from the same family as clay. Use `error` on sand and `error-on-dark` inside the dark enquiry panel. It's for validation text only, never a fill.

Section order on the home page alternates grounds: dusk → night → sand → sand → dusk → fig → sand → night. Never put two dark sections of the same ground next to each other without a sand section between them, except the route strip directly under the hero, which reads as the ground the hero stands on.

## Typography

Two typefaces from two different classifications:

- **Instrument Serif** (display): a condensed, high-contrast serif with a hand-cut italic. It does all of the talking: headlines, distances, prices, the wordmark. It's used at a single weight (400). Emphasis comes from *italic* and colour, never bold. The hero's second line is always italic in `sun`.
- **Figtree** (text): a friendly, open grotesque, chosen over Inter because its rounded terminals match the homely register, and because a fig tree is the house's landmark. Only **400 and 600** are used, so the gap between weights reads as a decision.

Scale: the display end is hand-tuned and runs 112 / 64 / 48 / 32. Body runs 19 / 16 / 14 on a ~1.2 ratio. Display sizes are fluid with `clamp()`: the hero from 56 to 112px, section headlines from 40 to 64px. Tracking is −0.01em on all serif sizes and +0.14em on `label-caps`, the uppercase eyebrow above every section title. Line height tightens as size grows: 0.95 for the hero, 1.6 for body.

Numbers carry real information here (kilometres, prices in Namibian dollars, check-in hours), so they're set in the serif at headline size, with the unit small and muted beside them (`170 km`, `N$ 2,450`).

## Layout

- A single centred container, max 1240px, with 32px side margins (16px on phones). Inside it, the layout is **asymmetric**: text blocks sit on one side and overlapping photo collages on the other, and the side flips between sections. There are no centred hero stacks and no symmetrical three-column feature grids.
- Two-part sections are flex rows with `flex-wrap: wrap` and flex-basis around 420–520px, so they stack naturally on a phone with no breakpoint code.
- Spacing is on an 8px base: 16 / 24 / 48 / 64 inside sections and 120px between sections. Section headers are a split row, with the title and eyebrow on the left and a short paragraph bottom-aligned on the right.
- Photo collages overlap: a large frame plus one or two smaller frames offset at a corner, the smaller ones bordered in the section's ground colour so they read as prints laid on a table.
- Ruled lists (amenities, rates, contact numbers) use a hairline top border per row instead of cards.

## Elevation & Depth

Depth comes from **the landscape and from overlap**, not from shadows on UI.

- The hero's depth is literal: five flat-colour parallax layers, each darker toward the viewer.
- Photo frames overlap one another and are set apart by a 6–8px border in the section ground.
- Only the hero's tilted photo cards have a shadow: a long, soft, downward shadow (`0 30px 60px -20px` at 60% black), as if lit by a low sun. Nothing else gets a shadow.
- The form panel lifts off night with a tonal step (`night-raised`), not a shadow.

## Shapes

Radius depends on what an element is, not one value for everything:

- **Pill (`pill`):** anything you press: buttons, the nav call to action and the breakfast chips. Pills are the only fully rounded shape.
- **Frame and field (`frame`, `field`, 6px):** photographs and inputs. Nearly square, like printed snapshots and paper forms.
- **Panel (`panel`, 10px):** note cards and the enquiry form panel.
- **Organic:** the only curves outside that scale are the dune ridges, quiver tree rosettes and fig leaf lobes, all drawn as flat SVG.

Photos may be rotated by 2–4° in the hero only. Rotated photos anywhere else become a scrapbook gimmick.

## Components

- **Buttons:** `button-primary` is clay with white text, used once or twice per section at most. `button-ghost-dark` is the secondary action on dark grounds, with a 1px #6B5646 border. `button-light` is the sand pill in the nav. All buttons press to `scale(0.97)`.
- **Hero:** five landscape layers (`landscape-far`, `landscape-mid`, `landscape-ground` plus sky and sun), five floating fig leaves (`floating-leaf`, `floating-leaf-dry`), then the copy block (`hero-eyebrow`, `hero` display line, `hero-lede`) and a two-photo stack. The sun sits behind the copy on the left, so its disc is a low-opacity glow there rather than solid.
- **Distance strip:** four columns, each with a `distance-figure` numeral, a place name and a caption. It's the site's "features" row, made from real geography instead of icons.
- **Amenity row:** an inline stroke icon in `fig-ink`, a 600-weight title and a 14px caption, ruled by `divider-sand`.
- **Rates:** prices are not published on the site. The section says breakfast is included and points guests to the enquiry form for a quote.
- **Note card:** `sand-deep`, used for check-in, check-out, laundry and dinner rules.
- **Chip:** an outlined pill on dusk for breakfast items. It's not interactive.
- **Enquiry form:** a `form-panel` holding `input` fields with visible labels above them (never placeholder-only), a 2px `sun` focus ring, and `input-error` text below the field.
- **Footer:** the serif wordmark with a tiny quiver tree mark in `sun`, on night, with a `footer-line` top rule.

Icons are 1.8px-stroke line icons drawn on a 24px grid with round caps. Never use filled icon tiles, emoji or tinted rounded squares behind icons.

## Motion

Motion has one theme: **the passing of an evening.** Three kinds exist, and nothing else animates.

1. **Hero parallax** (scroll-linked, linear, transform only, over the first 900px of scroll): sky +70px, sun +280px (it sets), far dune +150px, mid ridge +70px, ground 0 (the anchor), copy −90px, photo cards −170px, leaves −220 / −380px.
2. **Leaf drift** (ambient): 9–16s `ease-in-out` loops of 10–18px drift and 12–22° sway, with negative delays so no two leaves move in sync. There are at most five leaves in the hero and two in the garden.
3. **Feedback:** a button press is `scale(0.97)` over 160ms with `cubic-bezier(0.23, 1, 0.32, 1)`. Hover colour changes take 180ms `ease`.

Section reveals, if added, are a single short rise (≤12px, ≤500ms, ease-out, once) on section headers only. Body text, list rows and every card don't fade in. With `prefers-reduced-motion`, all movement stops and the layout reads complete at rest.

## Do's and Don'ts

- **Do** keep clay as the only interactive colour. If something needs emphasis, use serif size, italic or `sun` on dark.
- **Don't** introduce blue, purple, teal or any gradient wash. The sky is a flat colour, and the sun's halo is concentric rings at low opacity, not a radial gradient.
- **Don't** use pure white (#FFFFFF) as a surface or pure black as text. White exists only as text on clay.
- **Do** write copy in the owners' voice and from the facts on record (seven rooms, a famous breakfast, the fig tree, real distances). Never invent awards, statistics or testimonials.
- **Don't** build an image slider or carousel, or show photos full-bleed. The source photos are about 400px wide, so show them at roughly 1–1.5× and in overlapping frames.
- **Don't** add new floating decorations (stars that twinkle, sparkles, birds, dust). Fig leaves are the only floating object, because they come from the house's tree.
- **Do** keep the quiver tree as the site's mark: the hero ground line, the footer glyph and the favicon.
- **Don't** use three-column icon-card grids, tinted icon tiles, or `rounded-2xl` cards with drop shadows.
- **Do** keep only Figtree 400/600 and Instrument Serif 400. Never bold the serif.
- **Don't** add `sun` to sand sections, and don't add `pollen` outside the garden.
- **Do** give every image descriptive alt text of what's actually in the photo, and keep all touch targets at least 44px.
- **Don't** fade in text on scroll or stagger list items. Motion belongs to the landscape, not the content.

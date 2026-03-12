## 🎨 Design Update — Swiss Modernism

### Overview

Redesigned the visual language of `tootmisjuhtimine.ee` from a **Smart Factory / Industry 4.0 cyberpunk aesthetic** toward **Swiss International Typographic Style** — the design tradition of Helvetica, Neue Grafik, and ETH Zürich publications.

The core idea: let the training content speak. No decorative chrome, no neon, no glassmorphism. Rigorous grid, confident whitespace, one accent colour.

---

### What Changed

#### Shape System
All rounded corners on UI elements removed in favour of strict right angles. Cards, buttons, form inputs, tabs, badges, gallery items — everything is now square-edged. Circular elements (`border-radius: 50%`) on icon containers and indicator dots are preserved as structural, not decorative.

**Before → After**
```
Cards:       border-radius: 8px   →  border-radius: 0
Buttons:     border-radius: 3px   →  border-radius: 0
Inputs:      border-radius: 6px   →  border-radius: 0
Tabs:        border-radius: 6px   →  border-radius: 0
Badges:      border-radius: 8px   →  border-radius: 0
```

#### Typography *(planned — Next.js migration)*
| Role | Old | New |
|---|---|---|
| Display / H1 | Exo 2, bold | IBM Plex Serif, italic light |
| Headings | Exo 2, bold | IBM Plex Serif, italic light |
| Body | Rajdhani | Inter |
| Labels / eyebrows | Exo 2 | Inter, uppercase |
| Numbers / data | Share Tech Mono | IBM Plex Mono |

#### Colour Palette *(planned — Next.js migration)*
| Token | Value | Usage |
|---|---|---|
| `--sw-paper` | `#F5F4F0` | Page background |
| `--sw-dark` | `#1A1A18` | Primary text |
| `--sw-ink` | `#3A3A36` | Secondary text |
| `--sw-muted` | `#7A7972` | Labels, captions |
| `--sw-mid` | `#C8C6BF` | Borders, hairlines |
| `--sw-red` | `#D0021B` | Single accent — CTA only |

One accent colour. Used on: primary CTA button, one stat number per block, featured card top border, footer top rule. Nowhere else.

#### Layout *(planned — Next.js migration)*
- 12-column macro grid throughout
- Section padding: `120px 0` desktop, `80px 0` mobile
- Card gaps: `1px` shared border hairlines, not CSS `gap`
- All section headers left-aligned by default (centered only on testimonials and gallery)
- Short `3px` red rule below every section title — the only decorative element permitted

#### Removed *(planned — Next.js migration)*
- All `backdrop-filter` / `blur()` glassmorphism effects
- Animated background CSS grids (`body::before`, `body::after`)
- All `radial-gradient` decorative backgrounds
- `text-shadow`, coloured `box-shadow`
- Keyframe animations: `glowpulse`, `neonflicker`, `datapulse`, `scanline`, `hexspin`, `orbit`, `flowline`
- Circular icon containers with coloured fill — replaced with typographic index numbers (`01`, `02`, `03 …`)
- Rotating diagonal badge — replaced with flat inline label

---

### Files

| File | Description |
|---|---|
| `main-swiss-modernism.html` | Current HTML prototype with shape system applied |
| `cursor-prompt-swiss-modernism.md` | Full Cursor AI prompt for the Next.js migration |
| `plan-nextjs-tootmisjuhtimine.md` | Step-by-step Next.js build plan (30 steps, 6 phases) |

---

### Design Principles Applied

> *"The grid system is an aid, not a guarantee."* — Josef Müller-Brockmann

1. **Grid first** — every element lives on a rigorous column grid
2. **Typography is the design** — type carries hierarchy and emotion, not colour
3. **Whitespace is structure** — negative space signals confidence
4. **Geometry over decoration** — rectangles, hairlines, ruled rules only
5. **One accent colour** — everything else is black, white, grey
6. **Content does the heavy lifting** — no decorative chrome needed

---

### Status

- [x] Shape system — all non-circular `border-radius` → `0`
- [x] Cursor AI prompt — full design system documented
- [x] Next.js build plan — 30 steps across 6 phases
- [ ] Typography migration — IBM Plex Serif + Inter + IBM Plex Mono
- [ ] Colour palette migration — `--sw-*` token system
- [ ] Remove glassmorphism and glow effects
- [ ] 12-column grid layout
- [ ] Component library — cards, buttons, section headers
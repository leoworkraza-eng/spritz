# Spritz Barcelona — Client Website

Cocktail bar behind the Cathedral, Ciutat Vella, Barcelona. Since 2007.

Plain HTML/CSS/JS — no build step. Deploys to Vercel/Cloudflare Pages as-is.

## Structure

| Thing | File |
|---|---|
| Menu data | `script.js` → `SPRITZES`, `COCKTAILS`, `TAPAS`, `COMBOS`, `BEBIDAS` |
| Hours | `script.js` → `renderHours()` ⚠️ placeholder, confirm with owner |
| Theme / palette | `styles.css` → `:root` |
| Copy & sections | `index.html` |
| Web-ready images | `assets/web/` (originals in `assets/`) |
| `preview.html` | self-contained preview build — regenerate with the inline script in the project notes; not deployed |

## Before launch — TODO

- [ ] Confirm real opening hours with owner (currently a guess)
- [ ] Resolve price discrepancy: neon sign says 4,50€, letterboard says 4,80€
- [ ] Get owner's phone/WhatsApp (none published on site — intentional until confirmed)
- [ ] Google Business Profile + Apple Business Connect AFTER domain is live
- [ ] Photos: several shots flagged for text/people cleanup

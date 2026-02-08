# Specification

## Summary
**Goal:** Replace existing/placeholder TrueVision branding with the official TrueVision Digital Agency logo across the site, ensuring consistent usage, alignment, and visibility on the premium dark + neon theme.

**Planned changes:**
- Add the official TrueVision logo exports as static assets and reference them via a centralized config (logo paths + alt text) so components don’t hardcode filenames.
- Update the header/navbar to use the centrally-configured official logo with responsive sizing/placement and a link to Home.
- Update the footer branding block to use the centrally-configured official logo with appropriate sizing and alignment with brand text.
- Replace any remaining hardcoded references to the previous logo asset with the centralized logo config (keeping any explicit fallback only if needed).

**User-visible outcome:** The site header, footer, and other branding areas consistently display the official TrueVision Digital Agency logo with clear contrast and proper alignment across mobile and desktop.

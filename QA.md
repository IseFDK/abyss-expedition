# ABYSS verification

## Local checks

- Production build: passed (Vite 7, Node 24)
- 12 static content routes emitted, plus noindex viewport QA harness
- Reversible depth/anchor mapping unit tests: passed
- Initial independent review found a depth/chapter mismatch; corrected to piecewise 0/200/1000/4000/4800 depth stops and inverted anchor mapping
- All fonts and visual runtime assets self-hosted; hero optimized to ~101 KB WebP

## Environment limits

The cloud CDP browser has no usable WebGL (the supplied LUMEN reference also shows its fallback there). It cannot open localhost. An isolated headless Chromium QA run was attempted but its socket creation is prohibited by the execution environment, including one approved escalation. No security or access restriction was bypassed.

Consequently, 3D source/geometry and depth-state checks are distinct from rendered WebGL QA. Do not interpret a build or fallback review as verification of actual GPU rendering, frame rate, touch gestures, or cross-browser behavior.

## Public browser QA

Pending publication. Intended checks: each route, 320/390/768/1440 iframe viewports, navigation/repeated flows/Back, filters/empty/reset, detail pages, menu/Escape, vehicle controls, motion toggle, direct deep links, raster fallback, no missing assets.

## Deployment

Pending final source publication, Source integrity workflow, and GitHub Pages build/deploy verification for the exact final commit.

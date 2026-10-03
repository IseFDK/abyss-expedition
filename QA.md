# ABYSS verification

Tested on 2026-10-03 UTC. Public content tested at commit `300c89eac1d490b84e415e79d65bd3b768943f04`. The subsequent documentation/license commit does not change the website output.

## Passed

- Six Node source/data tests: correct ocean-layer boundaries, monotonic/reversible depth mapping, exact anchor mapping, complete eight-record dossiers, overlapping depth filters, and all generated route assets
- Production build, plus GitHub Actions **Source integrity** build/reproducibility check
- GitHub Pages **pages build and deployment** for the exact tested content commit
- Direct public home, expedition, atlas, vehicle and all eight dossier URLs; correct titles and source links
- Same-origin iframe viewport QA at **320 / 390 / 768 / 1440**: no horizontal content overflow across route families (scrollbar-adjusted widths 305 / 375 / 753 / 1425)
- Screenshot inspection of mobile and desktop layouts, including the longest Russian species headings
- Mobile menu open/close, Escape, focus restoration and repeated use
- Scroll narrative anchors read exactly **0 / 600 / 2000 / 4800 m**; reverse descent returns to 0; chapters match ocean zones
- Motion toggle repeats correctly; reduced-motion mode makes anchor scrolling instant
- Cross-page descent link, direct hash/reload stabilization, browser Back/Forward
- Atlas Latin/Russian search, empty state, empty reset, clear filters, category counts **3/1/2/2**, depth-overlap counts **6/6/3**
- Dossier navigation and browser Back preserve the previous category filter
- Vehicle keyboard tabs (Right/Down/End/Home), selected tab/focus/panel updates, and reset
- When WebGL is unavailable, a meaningful archive illustration appears; decomposition slider is disabled and the unavailable label survives reset
- Independent scientific review against NOAA and all eight current MBARI profiles

## Corrected during review

Depth/chapter mismatch; inverted anchor positioning; ranges above 6,000 m; long Russian compound heading wrapping; context-loss fallback visibility; BFCache lifecycle; six-thruster/spherical-hull consistency; selected-system bounding-box transform; archive-mode reset label; stale QA script reference.

## Verification limits

The cloud CDP browser reports `GL_VENDOR = Disabled` / `GL_RENDERER = Disabled`. The supplied LUMEN reference also shows its fallback there. Actual rendered **WebGL appearance, frame rate, camera composition and model decomposition remain unverified**. Source/geometry review, build success and fallback testing do not establish GPU-rendered correctness.

CDP cannot open localhost. An isolated headless Chromium test was attempted but socket creation is prohibited by this execution environment, including one reviewed escalation; no restriction was bypassed. Public Pages was used for live UI QA instead.

The viewport harness tests real media queries in an iframe, not physical phones. Safari/Firefox, hardware touch, screen-reader interaction and 200% text/zoom behavior were not verified. Browser zoom key commands had no effect, so no zoom pass is claimed.

## Deployment evidence

- Live: https://isefdk.github.io/abyss-expedition/
- Repository: https://github.com/IseFDK/abyss-expedition
- Tested content commit: https://github.com/IseFDK/abyss-expedition/commit/300c89eac1d490b84e415e79d65bd3b768943f04
- Source integrity success: https://github.com/IseFDK/abyss-expedition/actions/runs/37154026687
- Pages deployment success: https://github.com/IseFDK/abyss-expedition/actions/runs/37154025691

GitHub Pages serves **main /docs**. Runtime assets and fonts are self-hosted. The noindex `qa.html` test harness is deliberately absent from navigation.

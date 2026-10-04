# ABYSS

**An original deep-ocean digital expedition by IseFDK.**

Live: https://isefdk.github.io/abyss-expedition/

ABYSS combines an authored Russian-language narrative, a scroll-driven procedural Three.js submersible, an eight-record scientific field atlas, and an explodable vehicle concept. The expedition and NEREID vehicle are fictional; the ocean zones and animal records are source-grounded.

## Explore

- **Descent** — four reversible scroll stages, mapped to scientifically appropriate depth zones, animated camera/vehicle/particle/light states, depth and approximate pressure readouts
- **Expedition** — route, observation notes, non-disturbance protocol, primary sources and clear boundaries of the concept
- **Field atlas** — eight original species-specific illustrations, Russian/Latin search, animal-group and overlapping-depth filters, meaningful empty/reset states, query-preserving browser navigation
- **Species dossiers** — eight actual static routes with larger illustrated specimen headers, size/habitat/depth ranges, detailed adaptations, observation notes, individual MBARI sources
- **NEREID** — procedural 3D assembly, controllable exploded view, keyboard-accessible system tabs and reset; conceptual engineering explicitly disclosed

## Run

Node 24 and npm are used. There is no backend, paid service, analytics, authentication, or runtime external data dependency.

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm test
npm run build
npm run preview -- --host 127.0.0.1
```

Production output is committed to `docs/`. GitHub Pages serves `main /docs`. All application assets and fonts are local and use the repository base path. `scripts/finalize.mjs` creates the eight dossier routes, sitemap, and `.nojekyll`.

## Art and content

- Hero: original built-in image-generation output, visually checked; exact prompt/provenance under `assets/`. The lossless source PNG is retained in the build workspace; the optimized WebP is committed
- Creature artwork: eight original generated artistic interpretations, checked for gross species-recognition traits against MBARI references. Illustrated feet/filament-tip errors were corrected before integration. These are not scientific photographs or exact anatomical plates; arm overlap, fine structures and relative scale are not validated. Exact prompts and provenance are in `assets/species-art-provenance.json`; eight optimized content-hashed WebPs total 321,534 bytes
- Runtime hero: 101 KB WebP, at `public/images/`
- 3D: procedural geometry authored in `src/scene.js`, not a downloaded product or certified vehicle model
- Copy: original Russian editorial writing, scientific records sourced to MBARI; zones/light sourced to NOAA
- Fonts: self-hosted Manrope Variable, distributed by Fontsource with its upstream OFL license
- Reference studies: Unifiers of Japan and LUMEN, inspected for scroll behavior only; their design, artwork, copy, and code were not reused

## Accessibility and resilience

Semantic route navigation, skip link, visible focus, mobile menu, native range/select controls, keyboard system tabs, reduced-motion support, and a meaningful raster fallback when WebGL is unavailable. The same content remains available outside the motion sequence.

The unlinked `qa.html` is a noindex same-origin viewport test harness with 320/390/768/1440 widths. It is not part of user navigation.

See [QA.md](QA.md) for checks, deployment evidence, and honest verification limits.

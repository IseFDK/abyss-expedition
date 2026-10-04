# ABYSS atlas illustration revision

Scope: user-requested visual association in the species atlas and dossiers. Only ABYSS is being revised; other projects await the user's review.

## Local and asset checks

- Eight distinct original generated artworks: vampire squid, barreleye, giant phantom jelly, sea pig, bloody-belly comb jelly, bigfin squid, Riftia and strawberry squid
- Distinguishing visible anatomy source-checked against each MBARI profile and gallery, with independent visual review
- Corrected branched sea-pig walking feet, vampire feeding-filament tassels and extra Magnapinna arms
- Eight 800×600 WebPs, 13–52 KB each, 321,534 bytes combined; content hashes in filenames
- Explicit artistic-illustration labels in atlas and detail views; no photographic or exact-anatomical-plate claim; sensible per-species alt text
- Seven source/data/artifact tests passed, including unique artwork hashes and production asset existence
- Production build passed; main story, mission/vehicle content and filters retained

## Public browser QA

Passed on 2026-10-04 UTC at content commit `68d70cadafa13bcf18a1d546c54641b5951db8ce` and viewport-harness commit `1b91704303a00c1561984d9602a94506f6300f59`:

- All eight live atlas artworks and all eight dossier artworks load at natural 800×600, with correct unique hashed src, matching species name, alt text and MBARI source
- Desktop screenshot review of the illustrated atlas and dossier header; mobile screenshot review of atlas rows and the representative vampire dossier
- Atlas and representative dossier at 320/390/768/1440: clientWidth equals scrollWidth (305/375/753/1425 after scrollbar); no clipping or overlap observed
- All eight dossier art/source associations independently checked on desktop; exact-width detail screenshots use the representative shared vampire layout
- Latin search returns the correct illustrated record; cephalopod plus abyss filter returns Magnapinna; nonsense query yields the empty state; reset restores all eight and clears query/type/zone
- Dossier navigation and browser Back retain query filters
- Mobile menu/Escape/focus restoration, reduced-motion toggle and 4,800 m depth anchor regression pass
- Source integrity and GitHub Pages both succeeded for the tested content and harness commits

The pre-existing browser iframe initially served cached old HTML. The unlinked noindex harness now accepts a revision query and forwards it to iframe page requests; production image filenames are already content-hashed. Fresh public requests were verified.

## Limits

Artistic gross morphology is recognizable, but fine anatomy is idealized and some arm counts are perspective-occluded. Depictions are not relative-scale comparisons. Physical-device and cross-browser testing are outside the available browser verification. Existing WebGL-rendering limitation is unchanged and unrelated to these new static illustrations.

## Verified links

- Atlas: https://isefdk.github.io/abyss-expedition/atlas.html
- Content CI: https://github.com/IseFDK/abyss-expedition/actions/runs/37186669450
- Content Pages: https://github.com/IseFDK/abyss-expedition/actions/runs/37186669173
- Harness CI: https://github.com/IseFDK/abyss-expedition/actions/runs/37187073467
- Harness Pages: https://github.com/IseFDK/abyss-expedition/actions/runs/37187073350

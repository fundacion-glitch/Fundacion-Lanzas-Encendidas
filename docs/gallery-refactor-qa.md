# Institutional gallery refactor — implementation and QA

Date: 2026-09-28. Tested the local production build using headless Chromium at 1440, 768, 390 and 320 CSS pixels, each with a 900px viewport height. This report does not claim physical-device, Safari/Firefox, screen-reader, or deployed-site testing.

## Files in this refactor

Created:
- `app/galeria/page.tsx`
- `components/media-gallery.tsx`
- `components/media-lightbox.tsx`
- `data/gallery-presentation.ts`
- `docs/gallery-refactor-qa.md`

Modified:
- `app/page.tsx`
- `app/proyectos/page.tsx`
- `app/proyectos/[slug]/page.tsx`
- `app/transparencia/page.tsx`
- `app/sitemap.ts`
- `config/site.ts`
- `app/globals.css`

Other pre-existing working-tree changes were not part of this refactor. No archive directory was created. The legacy project data, types, project card/explorer, previous gallery/video components, and sharing component remain available internally. Their former public route renderers are preserved in Git history.

## Media presentation

`data/gallery-media.ts` remains unchanged and provides all 18 photographs and four videos. `data/gallery-presentation.ts` contains only editorial selection/order, with no invented descriptive metadata.

Opening order: gallery-01, gallery-14, gallery-video-03, gallery-09, gallery-07, gallery-10, gallery-18, gallery-16, gallery-video-01, gallery-08, gallery-03, gallery-04. This is ten photographs and two videos. “Ver más” reveals the remaining eight photographs and two videos, once each, and focuses the first newly revealed tile.

The homepage uses the first six items: five photographs and one video. Its approved real hero is unchanged. Its main work CTA and “Ver galería completa” lead to `/galeria`. Demo cards, the Batey feature, and the old conceptual gallery/video teaser no longer render.

Desktop/tablet layouts alternate wider and narrower columns; narrow mobile layouts follow the same editorial order in one column. Every image uses its full aspect ratio, including the collage. Portrait widths are bounded; video posters are not enlarged beyond their prepared width. Images/posters lazy-load with dimensions reserved. Videos do not exist in the DOM until opened. Native controls require explicit playback; neither opening nor advancing to a video autoplays it. Closing/changing media pauses and unloads the prior video. Null captions/activity/date/alt fields remain null; no dates or named activities are inferred from filenames. Neutral accessible control names identify media type and position.

## Routes, metadata and institutional content

| Route | HTTP behavior | 1440 | 768 | 390 | 320 |
| --- | --- | --- | --- | --- | --- |
| `/` | 200 | Pass | Pass | Pass | Pass |
| `/galeria` | 200 | Pass | Pass | Pass | Pass |
| `/proyectos` | 307 → `/galeria` | Pass | Pass | Pass | Pass |
| `/proyectos/batey-cambelaches` | 307 → `/galeria` | Pass | Pass | Pass | Pass |
| `/proyectos/mochilas-con-proposito` | 307 → `/galeria` | Pass | Pass | Pass | Pass |
| `/proyectos/mesa-compartida` | 307 → `/galeria` | Pass | Pass | Pass | Pass |
| `/proyectos/red-de-esperanza` | 307 → `/galeria` | Pass | Pass | Pass | Pass |
| `/proyectos/unknown-gallery-qa` | 404 | Pass | Pass | Pass | Pass |
| `/transparencia` | 200 | Pass | Pass | Pass | Pass |

All 36 route/viewport checks passed without horizontal page overflow. Desktop/mobile navigation and footer use the centralized Galería link. Project names/demo cards and links to retired project detail pages were absent from tested rendered pages. No project names/demo content were found in the final production client/server bundles.

The gallery canonical is `/galeria`, with separate title/description and a real Foundation WebP as its Open Graph/Twitter preview. The sitemap includes `/galeria` and excludes all `/proyectos` URLs. Retired routes no longer export project metadata or generate static project pages.

Transparency no longer imports project data or renders project records, beneficiaries/results, or active-project lists. Its institutional information, governance, document categories and Estatutos access remain. The Voluntariado y jornadas section links to the gallery and explains that media complements rather than replaces formal reporting. No invented impact numbers were added.

## Interaction checks

Passed at all four widths:
- Initial count 12 = 10 photos + 2 videos; expanded count 22 = 18 photos + 4 videos; no duplicate IDs.
- “Ver más” expands and focuses the first new tile.
- Enter opens a photo; previous/next buttons and arrow keys navigate.
- Tab stays inside the dialog; Escape closes it and restores focus to the originating tile, including after changing media.
- Dialog fits the viewport; complete image ratios are preserved, including the flattened collage.
- All photo/poster images decode successfully when scrolled into view.
- No video elements or MP4 requests before media selection.
- All four videos open paused, play successfully, and are paused/unloaded when navigating away.
- Closing an actively playing video removes its player and stops playback.
- Native video keyboard Space play/pause and Escape close work.
- Homepage contains exactly five real photo tiles and one real video tile; approved hero remains.
- Mobile menu and desktop navigation reach `/galeria`; footer links point to `/galeria`.
- No uncaught page JavaScript errors in the final responsive suite.

Automated checks:
- `tsc --noEmit --incremental false`: PASS.
- `npm run lint`: PASS.
- `npm run build`: PASS. Vinext prints its existing informational limitation about automatic route classification.
- SHA-256 comparison: all 22 original media files still match the manifest.
- Manifest descriptive placeholders remain null.

Browser tooling and screenshots were kept in `/private/tmp/foundation-gallery-qa`; no application dependency changes were needed. A stale local asset index during an in-place rebuild was resolved by restarting the local production server; the final suite ran against that restarted build.

## Remaining public photography and references

No formal/demo project records remain publicly rendered. General institutional wording about projects remains in Participa, solidarity product descriptions/approved cause categories, and transparency copy/pending report categories. These are not demo campaigns and do not publish project names, targets, or results.

The following conceptual photographs deliberately remain unchanged:

| Asset | Public location |
| --- | --- |
| `/images/placeholders/volunteer-packing.png` | Homepage Quiénes somos; Nosotros hero; Participa hero; Contacto hero |
| `/images/placeholders/community-service-hero.png` | Nosotros introduction; Donar hero; Transparencia hero |

This is two unique conceptual photographic assets in seven placements. They appear synthetic, but AI generation provenance remains unverified. `children-learning.png` remains in legacy files but no longer feeds active public pages. The two generic product illustrations (`solidarity-polo.svg`, `solidarity-cap.svg`) remain in Participa. No new AI or stock photography was introduced.

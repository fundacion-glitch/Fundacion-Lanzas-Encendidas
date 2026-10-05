# Public-facing image migration audit

Audit date: 2026-09-28. This is a source-based audit of the current workspace, not a claim about the deployed website. No application UI, image references, originals, optimized images, posters, or media manifest were changed for this audit.

## Scope and counting

Inspected route components, shared image components, project/product data, CSS crop rules, README/checklist provenance, the three conceptual PNGs, and the previously reviewed 18 original Foundation photographs. The approved `/images/home/community-hero.webp` is REAL/APPROVED and excluded from replacement candidates. Logos, brand marks, icons, and favicon are not photographs and are excluded. `merch-reference.jpg` and `community-hero.png` are not referenced by current public route image components. The newly prepared media manifest is not yet connected to the UI.

“Visible placement” means a default rendered image location across all public routes, including below-the-fold images, all projects under the default Todos filter, and disabled video thumbnails. It does not mean simultaneous viewport visibility. Closed lightbox enlargements are not counted a second time. Four project Open Graph and four Twitter image references are listed as migration dependencies, not extra on-page placements.

| Current asset, under `/images/placeholders/` | Classification | Default placements |
| --- | --- | ---: |
| children-learning.png | Confirmed conceptual photographic placeholder; appears synthetic, AI provenance unverified | 26 |
| volunteer-packing.png | Confirmed conceptual photographic placeholder; appears synthetic, AI provenance unverified | 21 |
| community-service-hero.png | Confirmed conceptual photographic placeholder; appears synthetic, AI provenance unverified | 20 |
| solidarity-polo.svg | Generic product illustration, explicitly not the final product; not photography | 1 |
| solidarity-cap.svg | Generic product illustration, explicitly not the final product; not photography | 1 |
| **Total** | **5 unique placeholder assets** | **69** |

AI/generated count: **3 likely AI photographic assets in 67 placements; 0 independently confirmed as AI-generated**. README, alt text, and captions establish their conceptual/temporary status, but no generation records or identifying PNG text metadata establish their production method. Appearance alone is not proof. Do not add AI and conceptual totals together: the three likely AI images are a subset of the conceptual inventory.

Confirmed conceptual/placeholder count: **3 photographic assets / 67 placements**, plus **2 product illustrations / 2 placements**, totaling **5 assets / 69 placements**.

Route reconciliation: `/` 12; `/proyectos` 5; each of the four project detail routes 11; `/nosotros` 2; `/participa` 3; `/donar` 1; `/transparencia` 1; `/contacto` 1. `/privacidad` has no photographic placeholder.

**11 placements can receive confident content matches from the existing gallery:** homepage introduction (1), homepage gallery (6), Nosotros introduction (1), and Proyectos/Participa/Donar generic heroes (3). These use 11 distinct real photos. Confidence concerns subject and feasible composition; final desktop/mobile crop inspection is still required during a future implementation. No match claims a date, named event, named participant, partnership, or measured result.

**58 placements are not approved as direct replacements:** they need event provenance, real campaign documentation, a matching video, product photography, or a better composition. Many are repeated uses of the same data, so this does not imply 58 new photographs.

## Real-source key

All filenames below are in `public/images/galeria/fotos`. WebP IDs refer to `public/images/galeria/optimized/gallery-NN.webp`; the existing `data/gallery-media.ts` preserves the exact mappings. Use the optimized copy in a future implementation, never overwrite the original.

| Key | Original filename | Upright source dimensions | Visible subject and limitation |
| --- | --- | --- | --- |
| R01 | 2181c302-f3e5-4d2a-90a4-c8e914bfdd36.JPG | 1600 × 1142 | Gift presentation; clear central subjects, peripheral people near edges |
| R02 | 2372f86c-fd8d-4ecb-b14c-137312876fcb.JPG | 4032 × 3024 | Group holding food bags; dark faces and bright left background |
| R03 | 3f12301c-00f9-475b-b20f-43a0cfb59706.JPG | 1600 × 1200 | Community distribution/activity indoors; central participants, roof above |
| R04 | 77298979-40FA-4B70-BAAC-A1282A7CF001.JPG | 1284 × 2282 | Flattened construction collage; must remain uncropped; unsuitable for current cover-cropped cards/heroes |
| R05 | 8303f24b-20b3-4c24-84f5-e5ddd96acff3 (1).JPG | 1200 × 1600 | Group with supplies; portrait, edge participants and moving children complicate crops |
| R06 | IMG_3859.jpg | 3024 × 4032 | Shopping cart of food supplies; tilted, no evidence of a specific delivery |
| R07 | IMG_7856.jpg | 4032 × 3024 | Construction materials and community setting; does not prove completed housing |
| R08 | IMG_8359.jpg | 4032 × 3024 | Children/group with gifts; not proof of schooling, school-supply delivery, or a named event |
| R09 | IMG_8367.jpg | 4032 × 3024 | Person arranging food bags; strong logistics/donation subject, person toward left |
| R10 | IMG_9055.jpg | 3024 × 4032 | Volunteers portioning meals; camera tilt and foreground obstruction |
| R11 | PHOTO-2026-09-02-18-59-23.jpg | 900 × 1600 | Person with walking aid amid debris; soft/tilted, unsuitable as generic positive hero or claimed completed intervention |
| R12 | WhatsApp Image 2026-09-28 at 9.17.27 AM.jpeg | 960 × 1280 | Presentation of baby supplies indoors; moderate resolution; no medical-service claim justified |
| R13 | WhatsApp Image 2026-09-28 at 9.17.37 AM.jpeg | 720 × 1280 | Person carrying supplies; soft, face in shadow; avoid large feature use |
| R14 | WhatsApp Image 2026-09-28 at 9.17.52 AM.jpeg | 960 × 1280 | Two people with baby supplies; useful compact card, limited enlargement |
| R15 | WhatsApp Image 2026-09-28 at 9.18.04 AM.jpeg | 960 × 1280 | Supply handover; uneven light, downward-facing subjects; alternate small card |
| R16 | d3f8119f-09be-475f-a641-700417523498.JPG | 3024 × 4032 | Two people with a food bag; portrait, shadowed faces, good contextual human interaction |
| R17 | f4649d99-9923-4809-87f5-6edef821f0bb.JPG | 1600 × 1142 | Three central people with gift; relatively sharp; no named-event attribution |
| R18 | f97e3bbe-2edb-47fd-ad5e-d0ea821c8d64.JPG | 1600 × 1066 | Face-painting activity; supports recreation, not formal education |

## Responsive and editorial constraints

- InternalHero uses full-width `object-cover`, low image opacity and a dark left-to-right overlay. Its height grows with text, particularly on mobile. A desktop-wide crop and a narrow mobile crop must both keep the actual action legible. Images with text-space on the left and subjects in a central/right safe zone are preferable. A photo behind a dark overlay is contextual, not documentary proof of the text.
- Project cards are 4:3. Detail heroes are at least 70svh and full viewport width. Video thumbnails are 16:9. Each needs its own crop assessment; one `project.image` currently feeds all three plus social previews.
- The homepage introduction is 4:5, Nosotros introduction is square, and the Cambelaches feature is at least 520/620px high. A landscape-to-portrait cover crop can remove most participants.
- GalleryLightbox duplicates its three supplied items into six tiles. Desktop tile 1 is tall and tile 4 spans both columns; mobile tiles 1 and 4 are wide. Matching the six homepage recommendations requires six distinct records and a future adjustment to the duplication behavior; merely replacing the three shared sources will still repeat photos. Enlargements already use `object-contain`.
- Use upper/subject-aware crops for supply handovers so heads and supplies remain together. R12/R14 should remain modest-size tiles; never upscale to a wide hero. The gallery lightbox can show their whole native-resolution frame.
- R04 must use an uncropped presentation if selected later. It is intentionally not assigned to any current cover-cropped slot.
- Existing conceptual alt text, badges, captions and source notes will need accurate editorial revision when replacements are eventually approved. Do not infer activity names or dates from filenames. No such text has been changed here.
- The Batey record explicitly says event photos are unconfirmed. A real Foundation photo is not automatically evidence of Batey Cambelaches. The other three projects are explicitly DEMO_PROJECT records, including demonstration financial/status data. Replacing their imagery does not validate those campaigns.

## Acquisition plan: 17 additional real photographs

This is a practical minimum for a diverse migration, not a requirement to fill every repeated tile. Obtain existing event archives where possible; do not recreate historical evidence. If an existing gallery image can be verified as belonging to the actual event, it may satisfy the corresponding brief without a new shoot.

| Brief | Quantity | What to obtain |
| --- | ---: | --- |
| N1: institutional community group | 1 | Wide horizontal Foundation activity/group photograph, subjects central/right, quiet space on left; retain a meaningful central group in a narrow mobile crop. For Nosotros hero. |
| N2: contact/team interaction | 1 | Horizontal photograph of actual Foundation volunteers welcoming or speaking with someone, central/right grouping and left text-space. Do not imply unrelated people are official contact staff. |
| N3: accountable handling of resources | 1 | Horizontal photograph of actual volunteers checking/counting an inventory or documenting a donation handover; show the action clearly without relying on readable private paperwork. Context for Transparencia, not proof of financial compliance. |
| N4: actual sale polo | 1 | Approved current Foundation polo, front/three-quarter view, complete garment and branding, neutral background and 4:3-safe framing. |
| N5: actual sale cap | 1 | Approved current Foundation cap, complete product and readable embroidery, neutral background and 4:3-safe framing. |
| N6: Batey Cambelaches archive | 3 | Verified wide establishing/group frame; educational/recreational activity frame; food/school-supply handover frame from that actual visit. Record event provenance. Obtain a portrait-capable action composition for the homepage story. |
| N7: school campaign, when real | 3 | Actual school-supply/backpack preparation; actual handover; wide community/participant context. Only after campaign existence and the image-to-campaign relationship are documented. Toys/face painting are not equivalent. |
| N8: food campaign, when real | 3 | Actual campaign packing; actual handover; wider volunteer/community scene. Existing R02/R09/R10 can reduce this need only if their relationship to that campaign is established. |
| N9: partnership activity, when real | 3 | Actual Foundation/partner collaboration; joint action; wide group from the documented partnership. A generic gathering or hospital setting does not prove an institutional alliance. |
| **Total additional still photographs** | **17** | **5 institutional/product photographs + 12 event/campaign photographs** |

Separately, five video locations need matching poster frames from verified videos: the institutional video and one video for each of the four project records. These are **five poster-frame requirements**, not five additional still-photo shoots. No existing still proves the contents of an absent video. The four prepared portrait MP4 posters should only accompany their corresponding clips; they are not verified institutional/project-video replacements. If those video sections are later omitted, no poster acquisition is needed for them.

Three documented frames per event are preferable to six duplicated or unrelated frames. If a future design insists on six unique evidence tiles for all four projects, expand N6–N9 from three to six each: **29 total additional stills**, subject to verified existing-photo reuse. Do not commission photographs for fictional campaigns merely to populate the current demo pages.

## Reuse and attribution risks

The recommended 11 immediate matches deliberately use 11 different gallery files. Reserve R09 for the Donar hero instead of also using it on the homepage, Participa, Nosotros and Mesa. R08 is a tempting generic children/group image, but repeating it across education, every gallery and project covers would both reduce diversity and overstate what it documents. R07 and the construction portion of R04 show overlapping material; avoid presenting both as separate achievements.

The homepage gallery currently reads `projects[0].gallery`, and every project uses the same `activityGallery` array. A global replacement there would spread unrelated real photos into four sections explicitly labeled “Evidencia visual.” This must be separated in a future implementation. Changing one project cover propagates to its detail hero, thumbnail, cards on other routes, and social previews. Reuse within the same verified project is coherent; reuse across unrelated projects is not.

## Migration table

Current image abbreviations: C = `/images/placeholders/children-learning.png`; V = `/images/placeholders/volunteer-packing.png`; S = `/images/placeholders/community-service-hero.png`. C/V/S are conceptual photographic placeholders with likely, unverified AI origin. Rxx is the exact original and optimized mapping in the source key above. “Confident” still requires final responsive visual QA. No replacements are implemented.

| Route/section | Current image | Current image type | Recommended real replacement | Suitability | Additional photo needed |
| --- | --- | --- | --- | --- | --- |
| `/` — approved homepage hero (excluded from totals) | `/images/home/community-hero.webp` | REAL / APPROVED | Keep existing image | Explicitly approved; do not treat as artificial | No |
| `/` — Quiénes somos | V | Conceptual photo | R16 / gallery-16.webp | Confident: human interaction and food support match general assistance copy; portrait fits 4:5 with small vertical trim; faces are shadowed but readable | No |
| `/` — Batey Cambelaches feature | C | Conceptual photo tied to named event | No verified match; R08/R05 are only candidates if event identity is confirmed | Event attribution missing; tall feature needs a meaningful portrait-safe action crop; toys do not establish every claim about this visit | **NEEDS ADDITIONAL REAL PHOTO** — N6, verified visit action frame |
| `/` — gallery tile 1 | C | Conceptual photo | R18 / gallery-18.webp | Confident for general recreation: two principal subjects can remain in a central crop; check tall desktop and wide mobile versions | No |
| `/` — gallery tile 2 | V | Conceptual photo | R14 / gallery-14.webp | Confident for general supply support; small tile only; preserve both faces and basket with an upper crop | No |
| `/` — gallery tile 3 | S | Conceptual photo | R10 / gallery-10.webp | Confident for food preparation; portrait source allows a focused meal-preparation crop; tilted composition limits polish | No |
| `/` — gallery tile 4, wide | C | Conceptual photo | R07 / gallery-07.webp | Confident for general community/construction context; landscape suits wide slot; avoid a caption claiming completed housing | No |
| `/` — gallery tile 5 | V | Conceptual photo | R06 / gallery-06.webp | Confident as supplies/procurement detail; source has ample pixels for crop; not evidence of delivery | No |
| `/` — gallery tile 6 | S | Conceptual photo | R12 / gallery-12.webp | Confident for general supply presentation; modest-size crop must retain people and supplies; no clinical-care claim | No |
| `/` — Video institucional thumbnail | S | Conceptual video placeholder | Frame from the actual approved institutional video | A general still does not establish the promised video; no configured video ID | **NEEDS ADDITIONAL REAL PHOTO** — matching institutional-video frame, separate from 17 stills |
| `/nosotros` — hero | V | Conceptual photo | No strong distinct current match; R08 is a conditional fallback | Broad group subject fits copy, but current R08 group is edge-to-edge and crops poorly behind a wide-to-tall hero; avoid repeating other heroes | **NEEDS ADDITIONAL REAL PHOTO** — N1, wide group with left text-space |
| `/nosotros` — Quiénes somos square image | S | Conceptual photo | R01 / gallery-01.webp | Confident: clear gift/support scene; square crop can retain central child and two principal participants, omitting peripheral people | No |
| `/proyectos` — generic index hero | C | Conceptual photo | R17 / gallery-17.webp | Confident for general activity overview, not education specifically; three central subjects, good detail; keep faces/gift in responsive crops | No |
| `/participa` — hero | V | Conceptual photo | R03 / gallery-03.webp | Confident for participation in community assistance; central activity is usable across crops; do not describe as volunteer packing | No |
| `/participa#articulos-solidarios` — Poloshirts | `/images/placeholders/solidarity-polo.svg` | Generic product illustration | None | Wearing a shirt in an activity photo does not identify the actual sale model, cut or branding; product is displayed uncropped in 4:3 | **NEEDS ADDITIONAL REAL PHOTO** — N4, approved polo product photo |
| `/participa#articulos-solidarios` — Gorras | `/images/placeholders/solidarity-cap.svg` | Generic product illustration | None | Gallery caps are incidental/partly obscured and do not establish the model sold; need full product view | **NEEDS ADDITIONAL REAL PHOTO** — N5, approved cap product photo |
| `/donar` — hero | S | Conceptual photo | R09 / gallery-09.webp | Confident for practical donated resources; high-resolution landscape; keep bags/action visible under overlay, check left-side volunteer on mobile | No |
| `/transparencia` — hero | S | Conceptual photo | None directly supports the documentation/accountability action | Food bags demonstrate activity, not inventory checking or financial accountability; avoid treating R09 as proof of controls | **NEEDS ADDITIONAL REAL PHOTO** — N3, documented inventory/handover process |
| `/contacto` — hero | V | Conceptual photo | None strongly supports actual contact/team interaction | Do not imply a recipient or unrelated person is an official representative; portrait supply photos are poor wide backgrounds | **NEEDS ADDITIONAL REAL PHOTO** — N2, actual volunteer welcome/conversation |
| Batey cover cards: `/`, `/proyectos`, and related cards on the other 3 detail routes (5 placements) | C | Conceptual named-event cover | R08 or R05 only after verified Batey attribution; otherwise N6 | 4:3 R08 composition is technically useful, but provenance is missing; R05 portrait would lose participants in a card crop | **NEEDS ADDITIONAL REAL PHOTO** — N6 verified wide visit frame, or verified existing match |
| `/proyectos/batey-cambelaches` — hero | C | Conceptual named-event cover | Same verified N6 event cover | 70svh hero requires desktop and mobile safe zones; do not use an unverified generic children scene | **NEEDS ADDITIONAL REAL PHOTO** — N6 |
| `/proyectos/batey-cambelaches` — Evidencia visual, 6 tiles | C/V/S, each twice | Conceptual evidence placeholders | Verified N6 event set only | R03/R05/R08 may be checked for provenance, not assumed; use distinct event frames instead of repeated generic assets | **NEEDS ADDITIONAL REAL PHOTO** — N6, three verified complementary event frames |
| `/proyectos/batey-cambelaches` — video thumbnail | C | Conceptual video placeholder | Actual verified Batey video frame | Must match the future video; no video is configured | **NEEDS ADDITIONAL REAL PHOTO** — matching video frame |
| Mochilas cover cards: `/`, `/proyectos`, and related cards on the other 3 detail routes (5 placements) | C | Demo campaign photo | None; R08/R18 do not show a backpack/school-supply campaign | Gifts and face painting cannot substitute for educational-campaign evidence | **NEEDS ADDITIONAL REAL PHOTO** — N7, when campaign is real |
| `/proyectos/mochilas-con-proposito` — hero | C | Demo campaign photo | Verified N7 campaign cover | Wide school-supply action with mobile-safe focal subject; current gallery does not establish it | **NEEDS ADDITIONAL REAL PHOTO** — N7 |
| `/proyectos/mochilas-con-proposito` — Evidencia visual, 6 tiles | C/V/S, each twice | Demo evidence placeholders | Verified N7 set only | No existing photo establishes this campaign; do not borrow another event's evidence | **NEEDS ADDITIONAL REAL PHOTO** — N7, three complementary campaign frames |
| `/proyectos/mochilas-con-proposito` — video thumbnail | C | Demo video placeholder | Matching actual campaign-video frame | No actual project video is configured | **NEEDS ADDITIONAL REAL PHOTO** — matching video frame, once campaign exists |
| Mesa cover cards: `/`, `/proyectos`, and related cards on the other 3 detail routes (5 placements) | V | Demo campaign photo | R09 is a thematic candidate only; not approved as this campaign's photo | Excellent food-logistics subject and 4:3 crop, but campaign is fictitious/unannounced; reserve R09 for Donar to avoid repetition | **NEEDS ADDITIONAL REAL PHOTO** — N8, or verified relationship plus explicit contextual labeling |
| `/proyectos/mesa-compartida` — hero | V | Demo campaign photo | R09/R02 only if campaign relationship is documented; otherwise N8 | Subject matches food assistance but cannot validate campaign identity/status; R02 also has weak face exposure | **NEEDS ADDITIONAL REAL PHOTO** — N8 |
| `/proyectos/mesa-compartida` — Evidencia visual, 6 tiles | C/V/S, each twice | Demo evidence placeholders | N8; R02/R09/R10 are candidates only with provenance | Existing photos show food support, not proof of this named campaign | **NEEDS ADDITIONAL REAL PHOTO** — N8, three verified complementary campaign frames |
| `/proyectos/mesa-compartida` — video thumbnail | V | Demo video placeholder | Matching actual campaign-video frame | Do not use a food still to imply an absent campaign video | **NEEDS ADDITIONAL REAL PHOTO** — matching video frame, once campaign exists |
| Red cover cards: `/proyectos` and related cards on the other 3 detail routes (4 placements) | S | Demo partnership photo | None | Community groups and hospital visitors do not establish a Foundation partnership or corporate alliance | **NEEDS ADDITIONAL REAL PHOTO** — N9, actual joint activity |
| `/proyectos/red-de-esperanza` — hero | S | Demo partnership photo | Verified N9 joint-activity frame | Need actual partner collaboration, horizontal safe composition; no suitable proven gallery match | **NEEDS ADDITIONAL REAL PHOTO** — N9 |
| `/proyectos/red-de-esperanza` — Evidencia visual, 6 tiles | C/V/S, each twice | Demo evidence placeholders | Verified N9 set only | A generic group photo cannot support a named alliance or the demo “Meta alcanzada” status | **NEEDS ADDITIONAL REAL PHOTO** — N9, three complementary partnership frames |
| `/proyectos/red-de-esperanza` — video thumbnail | S | Demo video placeholder | Matching actual partnership-video frame | No actual project video is configured | **NEEDS ADDITIONAL REAL PHOTO** — matching video frame, once partnership exists |
| Four project routes — Open Graph and Twitter previews (8 metadata references; excluded from on-page counts) | C for Batey/Mochilas, V for Mesa, S for Red | Conceptual/demo social preview | Same verified project cover recommended above | Inherits project.image; review a wide social-preview crop separately and preserve actual attribution | Same N6–N9; no additional unique still beyond those sets |

## Evidence and verification

- `README.md:30,41`: placeholder assets explicitly designated temporary conceptual imagery, not evidence.
- `app/page.tsx:22,48,72,110,127,134`: homepage shared gallery, introduction, project cards, Batey story, gallery and video.
- `data/projects.ts:3`: three-image activityGallery shared by all four projects; project image, demo flags, provenance, featured and related selectors in the same file.
- `components/gallery-lightbox.tsx:16`: three inputs duplicated into six visible tiles; lightbox is a second presentation of those same images.
- `components/internal-hero.tsx:6`, `components/project-card.tsx:20`, `components/video-embed.tsx:22`, `app/globals.css:92`: crop and responsive constraints.
- `app/proyectos/[slug]/page.tsx:30,52,92,94,100`: social metadata, hero, evidence gallery, video and related cards.
- `data/solidarity-articles.ts`, `components/solidarity-article-card.tsx`: two explicitly generic, non-final product illustrations.
- Counts were reconciled programmatically against project arrays, featured/related selection and gallery repetition. Photo recommendations use visible content and measured dimensions from the media inventory; no event identity was inferred.
- This audit does not include browser screenshot testing. Responsive judgments are based on image composition and actual component/CSS rules; test crops in a future implementation. No UI changes or new runtime code were made, so no new TypeScript behavior is introduced.

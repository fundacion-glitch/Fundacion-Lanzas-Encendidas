import { galleryMedia } from "@/data/gallery-media";

// Editorial order only: these selections do not assign activity names or dates.
const openingIds = [
  "gallery-01", "gallery-14", "gallery-video-03", "gallery-09",
  "gallery-07", "gallery-10", "gallery-21", "gallery-20",
  "gallery-video-01", "gallery-19", "gallery-03", "gallery-04",
];
const opening = openingIds.map((id) => {
  const item = galleryMedia.find((media) => media.id === id);
  if (!item) throw new Error(`Missing gallery media: ${id}`);
  return item;
});

export const galleryItems = [
  ...opening,
  ...galleryMedia.filter((media) => !openingIds.includes(media.id)),
];
export const homepageGalleryItems = opening.slice(0, 6);
export const initialGalleryCount = 12;

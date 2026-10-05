import { galleryMedia } from "@/data/gallery-media";

// Public photographs come from the real Foundation gallery. These descriptions
// identify visible content only; they do not assign events, dates or identities.
function photograph(id: string, alt: string, position = "50% 50%") {
  const image = galleryMedia.find((item) => item.id === id);
  if (!image || image.type !== "image") throw new Error(`Missing Foundation photograph: ${id}`);
  return { src: image.src, width: image.width, height: image.height, alt, position };
}

export const sitePhotography = {
  homeAbout: photograph("gallery-17", "Una niña y dos mujeres posan junto a un regalo envuelto"),
  aboutHero: photograph("gallery-01", "Una niña sostiene un regalo junto a varias mujeres", "50% 40%"),
  aboutIntroduction: photograph("gallery-21", "Niños y niñas muestran juguetes junto a una mujer y una niña pequeña"),
  participateHero: photograph("gallery-03", "Personas reunidas en un salón, con dos mujeres de pie frente al grupo", "55% 45%"),
  donateHero: photograph("gallery-09", "Una mujer organiza bolsas de alimentos sobre el suelo", "50% 60%"),
  contactHero: photograph("gallery-02", "Un grupo de personas muestra bolsas con alimentos", "50% 45%"),
} as const;

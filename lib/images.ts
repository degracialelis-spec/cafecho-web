/**
 * Imágenes del sitio. Las importaciones estáticas generan automáticamente
 * el tamaño y el `blurDataURL` para `placeholder="blur"`.
 * Para agregar una: cópiala a /public/images, impórtala aquí y úsala por su clave en `lib/content.ts`.
 */
import heroBanner from "@/public/images/hero-banner.jpg";
import keyVisual from "@/public/images/key-visual.jpg";
import macroBean from "@/public/images/macro-bean.jpg";
import lifestyleCafe from "@/public/images/lifestyle-cafe.jpg";
import lifestyleFriends from "@/public/images/lifestyle-friends.jpg";
import originCopan from "@/public/images/origin-copan.jpg";
import pointOfSale from "@/public/images/point-of-sale.jpg";
import variants from "@/public/images/variants.jpg";
import packDarkWhite from "@/public/images/pack-dark-white.jpg";

export const images = {
  heroBanner,
  keyVisual,
  macroBean,
  lifestyleCafe,
  lifestyleFriends,
  originCopan,
  pointOfSale,
  variants,
  packDarkWhite,
} as const;

export type ImageKey = keyof typeof images;

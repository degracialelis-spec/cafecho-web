/**
 * Geometría del isotipo y del sello de Cafecho.
 * TODO: reemplazar por el SVG oficial del diseñador.
 *
 * Recreación fiel a la hoja de identidad: grano ovalado con la línea central en S,
 * la mitad inferior rellena como chocolate derramado, dentro de un escudo
 * con un patrón de líneas finas. viewBox del isotipo: 0 0 100 120.
 *
 * Este archivo no importa nada: lo usan los componentes React y también
 * `scripts/export-brand.ts`, que genera los SVG estáticos de /public/brand.
 */

export const ISO_VIEWBOX = "0 0 100 120";

export const shieldOuter =
  "M50 3 C64 8 78 10 93 10 L93 58 C93 86 74 104 50 117 C26 104 7 86 7 58 L7 10 C22 10 36 8 50 3 Z";

export const shieldInner =
  "M50 8.5 C63 13 76 15 88.5 15 L88.5 58 C88.5 83 71 99 50 111.5 C29 99 11.5 83 11.5 58 L11.5 15 C24 15 37 13 50 8.5 Z";

export const bean = { cx: 50, cy: 60, rx: 28, ry: 36, rotate: -8 };

/** Ola de chocolate: todo lo que queda debajo se rellena con el color de tinta. */
export const chocolate =
  "M10 72 C22 77 34 74 44 67 C53 61 62 60 72 57 C80 54.5 86 50 92 46 L92 112 L10 112 Z";

/** Línea central del grano, en S. */
export const crease = "M55 25.5 C43 36 58 50 47 66";

/** Brillo sobre el chocolate. */
export const highlight = "M71 70 C70.5 81 65 90 56 94";

/** Líneas diagonales del patrón del escudo (rombos finos). */
export function latticeLines(step = 7): string {
  const parts: string[] = [];
  for (let i = -120; i <= 120; i += step) {
    parts.push(`M${i} 0 L${i + 120} 120`, `M${i + 120} 0 L${i} 120`);
  }
  return parts.join(" ");
}

export type IsoColors = {
  /** Contorno del grano, chocolate y línea central. */
  ink: string;
  /** Relleno de la mitad superior del grano (normalmente el color del fondo). */
  paper: string;
  /** Escudo y patrón. */
  line: string;
};

export const isoPalettes = {
  positive: { ink: "#2B1810", paper: "#F5EBDD", line: "#B08D57" },
  negative: { ink: "#F5EBDD", paper: "#2B1810", line: "#B08D57" },
  premium: { ink: "#B08D57", paper: "#0F0A07", line: "#B08D57" },
} satisfies Record<string, IsoColors>;

export type IsoVariant = keyof typeof isoPalettes;

/** Solo el grano (contorno, chocolate, línea central y brillo), en coordenadas del isotipo. */
export function beanMarkup(c: IsoColors, id: string): string {
  const { cx, cy, rx, ry, rotate } = bean;
  const t = `rotate(${rotate} ${cx} ${cy})`;
  return [
    `<defs><clipPath id="${id}-bean"><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="${t}"/></clipPath></defs>`,
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx + 3}" ry="${ry + 3}" transform="${t}" fill="${c.paper}"/>`,
    `<g clip-path="url(#${id}-bean)">`,
    `<rect x="0" y="0" width="100" height="120" fill="${c.paper}"/>`,
    `<path d="${chocolate}" fill="${c.ink}"/>`,
    `<path d="${highlight}" fill="none" stroke="${c.paper}" stroke-width="1.6" stroke-linecap="round" opacity="0.35"/>`,
    `</g>`,
    `<path d="${crease}" fill="none" stroke="${c.ink}" stroke-width="4.2" stroke-linecap="round"/>`,
    `<path d="${crease}" fill="none" stroke="${c.paper}" stroke-width="1.3" stroke-linecap="round"/>`,
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="${t}" fill="none" stroke="${c.ink}" stroke-width="3.2"/>`,
  ].join("");
}

/** Marcado SVG interno del isotipo (sin la etiqueta <svg>). `id` evita choques de clipPath. */
export function isotypeMarkup(c: IsoColors, id: string): string {
  return [
    `<defs><clipPath id="${id}-shield"><path d="${shieldInner}"/></clipPath></defs>`,
    `<path d="${shieldOuter}" fill="none" stroke="${c.line}" stroke-width="1.6"/>`,
    `<path d="${shieldInner}" fill="none" stroke="${c.line}" stroke-width="0.7" opacity="0.8"/>`,
    `<g clip-path="url(#${id}-shield)"><path d="${latticeLines()}" stroke="${c.line}" stroke-width="0.45" opacity="0.45" fill="none"/></g>`,
    beanMarkup(c, id),
  ].join("");
}

export const SEAL_VIEWBOX = "0 0 200 200";

/** Marcado del sello circular "CAFECHO · HECHO EN HONDURAS" (según el sello de la marca). */
export function sealMarkup(
  c: IsoColors & { ring: string; text: string },
  id: string,
  fonts = { serif: "'Bodoni Moda', Didot, Georgia, serif", sans: "Montserrat, Arial, sans-serif" },
): string {
  // Grano centrado en (100,100): el centro del grano en el isotipo es (50,60).
  const k = 0.98;
  const beanT = `translate(${100 - 50 * k} ${100 - 60 * k}) scale(${k})`;
  const diamond = (x: number) => `<path d="M${x} 94 L${x + 4.5} 100 L${x} 106 L${x - 4.5} 100 Z" fill="${c.ring}"/>`;
  return [
    `<defs>`,
    `<path id="${id}-top" d="M 30 100 A 70 70 0 0 1 170 100"/>`,
    `<path id="${id}-bottom" d="M 21 100 A 79 79 0 0 0 179 100"/>`,
    `<clipPath id="${id}-inner"><circle cx="100" cy="100" r="51"/></clipPath>`,
    `</defs>`,
    `<circle cx="100" cy="100" r="97" fill="${c.paper}" stroke="${c.ring}" stroke-width="3"/>`,
    `<circle cx="100" cy="100" r="91.5" fill="none" stroke="${c.ring}" stroke-width="1"/>`,
    `<g clip-path="url(#${id}-inner)" transform="rotate(0)"><g transform="translate(40 40)"><path d="${latticeLines(8)}" stroke="${c.line}" stroke-width="0.5" opacity="0.5" fill="none"/></g></g>`,
    `<circle cx="100" cy="100" r="51" fill="none" stroke="${c.ring}" stroke-width="2"/>`,
    `<text font-family="${fonts.serif}" font-size="30" font-weight="600" letter-spacing="2" fill="${c.text}" text-anchor="middle"><textPath href="#${id}-top" startOffset="50%">CAFECHO</textPath></text>`,
    `<text font-family="${fonts.sans}" font-size="12" font-weight="500" letter-spacing="2.2" fill="${c.text}" text-anchor="middle"><textPath href="#${id}-bottom" startOffset="50%">HECHO EN HONDURAS</textPath></text>`,
    diamond(26),
    diamond(174),
    `<g transform="${beanT}">${beanMarkup(c, `${id}-b`)}</g>`,
  ].join("");
}

/**
 * Genera los SVG estáticos de /public/brand y el favicon a partir de components/brand/geometry.ts.
 * Uso: npm run brand
 * TODO: reemplazar por el SVG oficial del diseñador.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import {
  ISO_VIEWBOX,
  SEAL_VIEWBOX,
  isoPalettes,
  isotypeMarkup,
  sealMarkup,
} from "../components/brand/geometry.ts";

const todo = "<!-- TODO: reemplazar por el SVG oficial del diseñador -->";
const svg = (vb: string, body: string, title: string, w?: number, h?: number) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}"${w ? ` width="${w}" height="${h}"` : ""} role="img" aria-label="${title}">${todo}<title>${title}</title>${body}</svg>\n`;

mkdirSync("public/brand", { recursive: true });

for (const [variant, colors] of Object.entries(isoPalettes)) {
  writeFileSync(
    `public/brand/isotype-${variant}.svg`,
    svg(ISO_VIEWBOX, isotypeMarkup(colors, "iso"), "Cafecho"),
  );
}
writeFileSync("public/brand/isotype.svg", svg(ISO_VIEWBOX, isotypeMarkup(isoPalettes.positive, "iso"), "Cafecho"));

// Logo horizontal: isotipo + palabra. El texto usa Bodoni Moda si está instalada.
const horizontal = (c: (typeof isoPalettes)["positive"], text: string) =>
  `<g>${isotypeMarkup(c, "h")}</g>` +
  `<text x="116" y="70" font-family="'Bodoni Moda', 'Playfair Display', Didot, Georgia, serif" font-size="64" font-weight="500" fill="${text}">Cafecho</text>` +
  `<text x="120" y="96" font-family="Montserrat, Arial, sans-serif" font-size="11.5" font-weight="600" letter-spacing="3.2" fill="${text}">CAFÉ &amp; CACAO · HONDURAS</text>`;
writeFileSync("public/brand/logo-horizontal.svg", svg("0 0 400 120", horizontal(isoPalettes.positive, "#2B1810"), "Cafecho"));
writeFileSync("public/brand/logo-horizontal-negative.svg", svg("0 0 400 120", horizontal(isoPalettes.negative, "#F5EBDD"), "Cafecho"));

const seal = (jade: boolean) =>
  sealMarkup({ ...isoPalettes.positive, ring: jade ? "#3BA8A0" : "#2B1810", text: "#2B1810" }, "seal");
writeFileSync("public/brand/seal.svg", svg(SEAL_VIEWBOX, seal(false), "Cafecho · Hecho en Honduras"));
writeFileSync("public/brand/seal-jade.svg", svg(SEAL_VIEWBOX, seal(true), "Cafecho · Hecho en Honduras"));

// Favicon (app/icon.svg): isotipo positivo sobre fondo crema.
writeFileSync(
  "app/icon.svg",
  svg("-10 0 120 120", `<rect x="-10" y="0" width="120" height="120" rx="14" fill="#F5EBDD"/>${isotypeMarkup(isoPalettes.positive, "fav")}`, "Cafecho"),
);
console.log("SVG de marca generados en public/brand y app/icon.svg");

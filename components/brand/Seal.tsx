// TODO: reemplazar por el SVG oficial del diseñador.
import { useId } from "react";
import { SEAL_VIEWBOX, isoPalettes, sealMarkup } from "./geometry";

type Props = { jade?: boolean; className?: string };

/** Sello circular "CAFECHO · HECHO EN HONDURAS". El jade solo se usa aquí. */
export function Seal({ jade = false, className }: Props) {
  const id = "seal" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const markup = sealMarkup(
    { ...isoPalettes.positive, ring: jade ? "#3BA8A0" : "#2B1810", text: "#2B1810" },
    id,
    {
      serif: "var(--font-bodoni), 'Bodoni Moda', Georgia, serif",
      sans: "var(--font-montserrat), Montserrat, Arial, sans-serif",
    },
  );
  return (
    <svg
      viewBox={SEAL_VIEWBOX}
      className={className}
      role="img"
      aria-label="Sello Cafecho, hecho en Honduras"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

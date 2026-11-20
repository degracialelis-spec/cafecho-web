// TODO: reemplazar por el SVG oficial del diseñador.
import { Isotype } from "./Isotype";
import type { IsoVariant } from "./geometry";
import { brand } from "@/lib/content";

type Props = {
  variant?: IsoVariant;
  layout?: "horizontal" | "vertical";
  paper?: string;
  className?: string;
};

const textColor: Record<IsoVariant, string> = {
  positive: "text-espresso",
  negative: "text-crema",
  premium: "text-dorado",
};

/** Logo de Cafecho: escudo + palabra. La palabra es texto real con Bodoni Moda. */
export function Logo({ variant = "negative", layout = "horizontal", paper, className = "" }: Props) {
  const vertical = layout === "vertical";
  return (
    <span
      className={`inline-flex items-center ${vertical ? "flex-col gap-3 text-center" : "gap-3"} ${textColor[variant]} ${className}`}
    >
      <Isotype variant={variant} paper={paper} className={vertical ? "h-24 w-auto" : "h-11 w-auto"} />
      <span className="flex flex-col leading-none">
        <span className={`font-serif font-medium ${vertical ? "text-5xl" : "text-[1.9rem]"}`}>{brand.name}</span>
        <span
          className={`mt-1.5 font-sans font-semibold uppercase ${vertical ? "text-[0.65rem] tracking-[0.25em]" : "text-[0.5rem] tracking-[0.22em]"}`}
        >
          {brand.descriptor}
        </span>
      </span>
    </span>
  );
}

// TODO: reemplazar por el SVG oficial del diseñador.
import { useId } from "react";
import { ISO_VIEWBOX, isoPalettes, isotypeMarkup, type IsoColors, type IsoVariant } from "./geometry";

type Props = {
  variant?: IsoVariant;
  /** Color de la mitad superior del grano; usa el color del fondo donde va el logo. */
  paper?: string;
  className?: string;
  title?: string;
};

export function Isotype({ variant = "positive", paper, className, title }: Props) {
  const id = "iso" + useId().replace(/[^a-zA-Z0-9]/g, "");
  const colors: IsoColors = { ...isoPalettes[variant], ...(paper ? { paper } : {}) };
  return (
    <svg
      viewBox={ISO_VIEWBOX}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: isotypeMarkup(colors, id) }}
    />
  );
}

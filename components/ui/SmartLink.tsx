import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Enlace interno. En el sitio normal es `next/link`.
 * En la vista previa estática (PREVIEW=1, ver README) es un <a> simple con rutas relativas,
 * porque esa vista previa se sirve desde una carpeta que no es la raíz del dominio.
 */
export const IS_PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";

export function previewHref(href: string) {
  if (!IS_PREVIEW) return href;
  if (href === "/") return "#";
  if (href.startsWith("/#")) return href.slice(1);
  if (href.startsWith("/producto/")) return "#producto";
  return href;
}

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

export default function SmartLink({ href, ...rest }: Props) {
  if (IS_PREVIEW) return <a href={previewHref(href)} {...rest} />;
  return <NextLink href={href} {...rest} />;
}

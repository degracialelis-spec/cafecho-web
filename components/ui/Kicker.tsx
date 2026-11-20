import type { ReactNode } from "react";

type Props = { children: ReactNode; tone?: "dark" | "light"; className?: string };

/** Etiqueta pequeña en mayúsculas. tone="light" para fondos crema (usa bronce por contraste). */
export function Kicker({ children, tone = "dark", className = "" }: Props) {
  return (
    <p
      className={`text-[0.7rem] font-semibold uppercase tracking-[0.25em] ${tone === "light" ? "text-bronce" : "text-dorado"} ${className}`}
    >
      {children}
    </p>
  );
}

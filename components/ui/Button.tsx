import Link from "@/components/ui/SmartLink";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "outline-dark";

const styles: Record<Variant, string> = {
  solid: "bg-dorado text-negro border-dorado hover:bg-cobre hover:border-cobre",
  outline: "border-dorado text-crema hover:bg-dorado hover:text-negro",
  "outline-dark": "border-espresso text-espresso hover:bg-espresso hover:text-crema",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export const buttonClass = (variant: Variant = "solid", className = "") =>
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${styles[variant]} ${className}`;

export function Button({ href, children, variant = "solid", className, external }: Props) {
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

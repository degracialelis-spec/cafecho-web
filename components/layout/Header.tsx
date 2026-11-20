"use client";

import Link from "@/components/ui/SmartLink";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { buttonClass } from "@/components/ui/Button";
import { headerCta, nav } from "@/lib/content";
import { MobileMenu } from "./MobileMenu";

/** Header fijo: transparente sobre el hero y espresso/95 con blur al hacer scroll. */
export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={`sticky top-0 z-40 -mb-20 transition-colors duration-500 ${
        scrolled ? "border-b border-dorado/20 bg-espresso/95 backdrop-blur-md" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="shrink-0">
          <Logo variant="negative" paper={scrolled ? "#2B1810" : "#1d110b"} />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-crema/90 transition-colors hover:text-cobre"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <Link href={headerCta.href} className={buttonClass("outline", "px-5 py-2.5")}>
              {headerCta.label}
            </Link>
          </span>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "@/components/ui/SmartLink";
import { useCallback, useEffect, useRef, useState } from "react";
import { Isotype } from "@/components/brand/Isotype";
import { buttonClass } from "@/components/ui/Button";
import { brand, headerCta, nav } from "@/lib/content";

/** Menú a pantalla completa para móvil. Escape cierra, el foco queda atrapado dentro. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !panel) return;
      const items = panel.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center rounded-sm border border-dorado/50 text-crema"
      >
        <span className="sr-only">Abrir menú</span>
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        hidden={!open}
        className="fixed inset-0 z-50 overflow-y-auto bg-negro px-6 pb-10 pt-6"
      >
        <div className="flex items-center justify-between">
          <Isotype variant="premium" className="h-12 w-auto" />
          <button
            type="button"
            onClick={close}
            className="flex size-11 items-center justify-center rounded-sm border border-dorado/50 text-crema"
          >
            <span className="sr-only">Cerrar menú</span>
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>
        <nav aria-label="Móvil" className="mt-12">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-dorado/20">
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl text-crema hover:text-cobre">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={headerCta.href} onClick={() => setOpen(false)} className={buttonClass("outline", "mt-10 w-full")}>
            {headerCta.label}
          </Link>
        </nav>
        <p className="mt-12 text-center font-serif text-lg italic text-dorado">{brand.slogan}</p>
      </div>
    </div>
  );
}

import Link from "@/components/ui/SmartLink";
import { Logo } from "@/components/brand/Logo";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { brand, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-negro text-crema">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Logo variant="negative" layout="vertical" paper="#0F0A07" className="lg:items-start lg:text-left" />
            <p className="font-serif text-xl italic text-dorado">{brand.slogan}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-dorado">{col.title}</h2>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {"external" in l && l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-crema/80 hover:text-cobre">
                          {l.label}
                          <span className="sr-only"> (abre en una pestaña nueva)</span>
                        </a>
                      ) : (
                        <Link href={l.href} className="text-crema/80 hover:text-cobre">
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <GoldDivider className="my-12" ornament />
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-crema/70 sm:flex-row sm:text-left">
          <p className="font-semibold uppercase tracking-[0.2em] text-crema/85">{brand.moderation}</p>
          <p>{brand.copyright}</p>
          <p>{brand.footerCredit}</p>
        </div>
      </div>
    </footer>
  );
}

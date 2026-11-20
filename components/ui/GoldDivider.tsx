type Props = { className?: string; ornament?: boolean };

/** Línea fina dorada (1px, dorado/40), con un rombo opcional al centro. */
export function GoldDivider({ className = "", ornament = false }: Props) {
  if (!ornament) return <hr className={`border-0 border-t border-dorado/40 ${className}`} />;
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-dorado/40" />
      <span className="size-1.5 rotate-45 border border-dorado" />
      <span className="h-px flex-1 bg-dorado/40" />
    </div>
  );
}

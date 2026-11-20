/** Escala de 1 a 5 con puntos (intensidad de café, dulzor). */
export function Meter({ label, value, max = 5 }: { label: string; value: number; max?: number }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-crema/75">{label}</span>
      <span role="img" aria-label={`${label}: ${value} de ${max}`} className="flex gap-1.5">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`size-2 rounded-full border border-dorado ${i < value ? "bg-dorado" : "bg-transparent"}`}
          />
        ))}
      </span>
    </div>
  );
}

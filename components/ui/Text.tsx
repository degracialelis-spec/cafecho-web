/** Muestra un texto y, si contiene "[PENDIENTE: ...]", marca esa parte visualmente. */
export function Text({ children }: { children: string }) {
  const parts = children.split(/(\[PENDIENTE[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[PENDIENTE") ? (
          <span key={i} className="pending">
            {p}
          </span>
        ) : (
          p
        ),
      )}
    </>
  );
}

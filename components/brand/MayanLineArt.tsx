/**
 * Ilustración de línea fina inspirada en el arte del empaque:
 * montañas, pirámide, estela maya, rama de café y mazorca de cacao.
 * Solo decorativa (aria-hidden). Úsala con baja opacidad.
 */
type Props = { className?: string };

const pyramidSteps = Array.from({ length: 7 }, (_, i) => {
  const w = 190 - i * 22;
  const x = 40 + (190 - w) / 2;
  const y = 232 - (i + 1) * 15;
  return { x, y, w };
});

const leaves = [
  { x: 478, y: 92, r: -35 },
  { x: 512, y: 70, r: 20 },
  { x: 548, y: 108, r: -10 },
  { x: 500, y: 128, r: 50 },
  { x: 560, y: 64, r: -50 },
];

export function MayanLineArt({ className }: Props) {
  return (
    <svg
      viewBox="0 0 620 240"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Montañas */}
      <path d="M0 175 L55 128 L95 150 L160 92 L215 140 L262 108 L318 150 L380 96 L430 132 L490 104 L540 140 L620 112" opacity="0.7" />
      <path d="M0 196 L70 160 L120 178 L190 138 L250 170 L300 146 L360 176 L420 140 L480 168 L560 150 L620 160" opacity="0.45" />
      {/* Pirámide escalonada */}
      {pyramidSteps.map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width={s.w} height="15" />
      ))}
      <path d="M125 232 L125 127 M145 232 L145 127" />
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M125 ${222 - i * 15} L145 ${222 - i * 15}`} />
      ))}
      <rect x="110" y="98" width="50" height="29" />
      <rect x="128" y="108" width="14" height="19" />
      <path d="M106 98 L164 98 M114 92 L156 92 L156 98 M114 92 L114 98" />
      {/* Estela */}
      <path d="M262 232 L262 120 Q262 102 282 102 Q302 102 302 120 L302 232" />
      <circle cx="282" cy="128" r="9" />
      <path d="M272 146 L292 146 M268 156 Q282 166 296 156 M270 172 L294 172 M274 182 L274 214 M290 182 L290 214 M278 192 L286 192 M278 204 L286 204" />
      <path d="M252 232 L312 232" />
      {/* Rama de café */}
      <path d="M440 210 C470 170 500 130 580 50" />
      {leaves.map((l, i) => (
        <g key={i} transform={`rotate(${l.r} ${l.x} ${l.y})`}>
          <ellipse cx={l.x} cy={l.y} rx="22" ry="8" />
          <path d={`M${l.x - 20} ${l.y} L${l.x + 20} ${l.y}`} opacity="0.6" />
        </g>
      ))}
      {[
        [474, 150], [482, 158], [470, 162], [522, 112], [530, 104], [528, 118],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" />
      ))}
      {/* Mazorca de cacao */}
      <g transform="rotate(-25 575 185)">
        <ellipse cx="575" cy="185" rx="16" ry="38" />
        <path d="M575 147 C569 170 569 200 575 223 M575 147 C581 170 581 200 575 223 M563 158 C559 180 560 200 566 216 M587 158 C591 180 590 200 584 216" opacity="0.7" />
      </g>
      <path d="M0 232 L620 232" opacity="0.6" />
    </svg>
  );
}

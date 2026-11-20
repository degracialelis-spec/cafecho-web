import type { AttributeIcon } from "@/lib/content";

const paths: Record<AttributeIcon, string> = {
  mountain: "M2 20 L9 9 L13 15 L16 11 L22 20 Z M7.5 11.5 L9 9 L10.5 11.5",
  cacao: "M12 2 C17 6 17 18 12 22 C7 18 7 6 12 2 Z M12 2 C10.5 8 10.5 16 12 22 M12 2 C13.5 8 13.5 16 12 22",
  percent: "M19 5 L5 19 M7 4.5 a2.5 2.5 0 1 0 0.01 0 M17 14.5 a2.5 2.5 0 1 0 0.01 0",
  bag: "M5 7 L19 7 L18 21 L6 21 Z M5 10 L19 10 M9 7 V5 a3 3 0 0 1 6 0 V7",
  sun: "M12 8 a4 4 0 1 0 0.01 0 M12 2 V4 M12 20 V22 M2 12 H4 M20 12 H22 M4.9 4.9 L6.3 6.3 M17.7 17.7 L19.1 19.1 M4.9 19.1 L6.3 17.7 M17.7 6.3 L19.1 4.9",
  star: "M12 3 L14.6 8.6 L20.6 9.3 L16.1 13.4 L17.3 19.4 L12 16.4 L6.7 19.4 L7.9 13.4 L3.4 9.3 L9.4 8.6 Z",
};

export function LineIcon({ name, className = "size-6" }: { name: AttributeIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round" className={className} aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

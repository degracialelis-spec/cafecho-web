"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Parallax muy leve: desplaza el contenido unos pocos % mientras la sección cruza la pantalla. */
export function Parallax({ children, strength = 8, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ ...(reduce ? {} : { y }), top: `-${strength + 1}%`, bottom: `-${strength + 1}%` }}
        className="absolute inset-x-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

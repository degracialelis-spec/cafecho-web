"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { announcements } from "@/lib/content";

export function AnnouncementBar() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (announcements.length < 2) return;
    const t = setInterval(() => setI((n) => (n + 1) % announcements.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative z-50 bg-negro text-crema">
      <p className="sr-only">{announcements.join(". ")}</p>
      <div
        aria-hidden="true"
        className="mx-auto flex h-9 max-w-7xl items-center justify-center overflow-hidden px-4 text-center text-[0.62rem] font-medium uppercase tracking-[0.22em] sm:text-[0.68rem]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={i}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.5 }}
            className="truncate"
          >
            {announcements[i]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

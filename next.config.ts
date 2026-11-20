import type { NextConfig } from "next";

// PREVIEW=1 genera una exportación estática con rutas relativas (vista previa compartible).
// Para Vercel no hace falta: usa el build normal.
const preview = process.env.PREVIEW === "1";

const nextConfig: NextConfig = {
  ...(preview
    ? { output: "export", assetPrefix: "/zzpreviewprefix", images: { unoptimized: true } }
    : { images: { formats: ["image/avif", "image/webp"] } }),
  env: { NEXT_PUBLIC_PREVIEW: preview ? "1" : "0" },
};

export default nextConfig;

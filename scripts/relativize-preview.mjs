// Convierte la exportación estática (out/) en rutas relativas, para servirla desde cualquier carpeta.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const P = "/zzpreviewprefix";
function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(html|js|css|txt|json)$/.test(f)) {
      let s = readFileSync(p, "utf8");
      if (!s.includes(P)) continue;
      // En CSS (out/_next/static/css/) las fuentes quedan en ../media/
      s = f.endsWith(".css") ? s.replaceAll(`${P}/_next/static/`, "../") : s.replaceAll(`${P}/`, "./").replaceAll(P, ".");
      writeFileSync(p, s);
    }
  }
}
walk("out");
console.log("out/ con rutas relativas");

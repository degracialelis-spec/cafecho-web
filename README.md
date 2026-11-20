# Cafecho — sitio web

Landing page de marca para **Cafecho**: granos de café de altura de Copán cubiertos de chocolate con cacao hondureño.
Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion. Sin carrito ni backend.

## Cómo correrlo

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción
npm run lint
npm run brand      # regenera los SVG de /public/brand y el favicon (app/icon.svg)
npm run preview    # exportación estática con rutas relativas en out/ (vista previa; solo la página principal)
```

Requiere Node 20 o más reciente (`npm run brand` usa Node 22.6+ porque ejecuta TypeScript directamente).

## Publicar en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. En vercel.com → **Add New… → Project** → importa el repositorio. Vercel detecta Next.js solo; no hay que configurar nada.
3. Sitio publicado en https://cafecho-web.vercel.app. Si cambias de dominio, actualiza `SITE_URL` en `lib/constants.ts`.

## Dónde editar

| Qué | Dónde |
|---|---|
| Todos los textos, productos, momentos, puntos de venta y sus estados | `lib/content.ts` |
| Precio sugerido (L40), cafeína (60 mg), peso, % cacao, redes, correo y WhatsApp | `lib/constants.ts` |
| Imágenes | `public/images/` + `lib/images.ts` |
| Colores y fuentes | `app/globals.css` (bloque `@theme`) y `app/layout.tsx` |
| Logo (isotipo, sello, horizontal) | `components/brand/geometry.ts` → luego `npm run brand` |

Los estados de los puntos de venta (`disponible`, `disponible-pronto`, `proximamente`, `mas-adelante`) se cambian en `whereToFind.stores`.

El formulario de contacto no tiene backend: si `CONTACT_EMAIL` está vacío solo muestra "Gracias"; si tiene un correo, abre el cliente de correo (`mailto:`). Hay un `TODO` en `components/sections/Contact.tsx` para conectarlo a un servicio de formularios.

## Pendientes

### Contenido marcado `[PENDIENTE]` (se ve en el sitio)
- Cuenta de TikTok: cuando exista, ponla en `SOCIAL.tiktokUrl` (`lib/constants.ts`) y el botón aparece solo.

### Contacto configurado
- Correo: `fer72616@gmail.com` · WhatsApp: `+502 4253 6045` · Instagram: `@cafecho_hn`.
- El WhatsApp es un número de Guatemala (+502), confirmado por el equipo.

### Imágenes que conviene regenerar o retocar (texto mal escrito en la bolsa)
Son imágenes generadas con IA. Los datos reales (60% cacao, Copán, 60 mg) siempre van en HTML.
- `hero-banner.jpg`: "Cacoo de Honduras", "seleíns", "per perción", "Conporro Hondurao". En el hero la parte baja de la bolsa queda oscurecida con un degradado.
- `key-visual.jpg`: "Caceo de Honduras", "solefng", "purción", "Consomo Inodorado".
- `lifestyle-cafe.jpg`: "Capán", "Cacco de Honduras", "calelog".
- `macro-bean.jpg`: texto de la bolsa desenfocado (aceptable).
- `lifestyle-friends.jpg`: "80% CACAO", "DSCURO", "CURIERTOS", "Goà", "seieling". La bolsa sale nítida, así que en Momentos se encuadra solo la parte de arriba (formato 5:4). **Conviene regenerarla con 60% CACAO.**
- `origin-copan.jpg`: "50% CACAO", "DECURO", "Capán", "50 mg". En Origen se encuadra la parte alta (montañas y ruinas) y la bolsa queda bajo un degradado oscuro. **Conviene regenerarla.**
- `point-of-sale.jpg`: casi todo correcto; la línea pequeña de abajo dice "Caceo" y "50 mg" (ilegible al tamaño del sitio).
- `variants.jpg`: "Caceo de Honduras", "inoderado". Se usa recortada (bolsa con leche) con la parte baja oscurecida. La bolsa con leche no indica % de cacao.
- `pack-dark-white.jpg`: "safeína", "inoderado". Solo se usa pequeña en el feed de Síguenos.

### Logo
El logo, el isotipo y el sello son recreaciones en SVG a partir de la hoja de identidad (`assets-reference/logo-identity-sheet.jpg`, no se publica).
**TODO: reemplazarlos por los SVG oficiales del diseñador.**

## Notas de contenido
- Información nutricional (`nutrition` en `lib/content.ts`): tomada de la etiqueta del empaque, porción de 10 g, 4 porciones por bolsa. Se usa la misma para las dos variantes.
- Chocolate con Leche: 60% cacao según el equipo (poco común en chocolate con leche; conviene confirmarlo con la receta).
- Las cifras de la sección "Lo que dice nuestro estudio" (77.8% y 65.1%, n = 63) vienen del estudio de mercado del equipo. En el informe, la pregunta del 65.1% combina el origen hondureño y la marca Zamorano.
- No hay testimonios, premios ni certificaciones. No se prometen beneficios de salud.
- El color jade (`jade`) solo se usa en el sello "Hecho en Honduras".

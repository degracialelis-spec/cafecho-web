/**
 * Datos de producto y enlaces que todavía pueden cambiar.
 * Cambia el valor aquí y se actualiza en todo el sitio.
 */

/** Precio sugerido de lanzamiento, en lempiras. Todavía puede cambiar. */
export const SUGGESTED_PRICE_LPS = 40;

/** Cafeína por porción, en mg (dato del empaque). */
export const CAFFEINE_MG_PER_SERVING = 60;

/** Peso neto de la bolsa individual, en gramos. */
export const NET_WEIGHT_G = 40;

/** Porcentaje de cacao de la línea oscura. */
export const DARK_CACAO_PERCENT = 60;

/** Porcentaje de cacao de la línea con leche (dato del equipo). */
export const MILK_CACAO_PERCENT = 60;

/** URL pública del sitio (para metadata y Open Graph). */
export const SITE_URL = "https://cafecho-web.vercel.app";

/** Redes sociales. Deja tiktokUrl vacío para ocultar TikTok en el sitio. */
export const SOCIAL = {
  instagramHandle: "@cafecho_hn",
  instagramUrl: "https://www.instagram.com/cafecho_hn/",
  tiktokUrl: "", // TODO: agregar cuando exista la cuenta, ej. "https://www.tiktok.com/@cafecho_hn"
} as const;

/**
 * Contacto. Mientras CONTACT_EMAIL esté vacío, el formulario solo muestra
 * un mensaje de "Gracias" y no envía nada.
 */
export const CONTACT_EMAIL = "fer72616@gmail.com";
/** Solo dígitos, con código de país (número de Guatemala, +502). */
export const CONTACT_WHATSAPP = "50242536045";
/** Cómo se muestra el número en la página. */
export const CONTACT_WHATSAPP_DISPLAY = "+502 4253 6045";

export const formatPrice = (lps: number) => `L${lps}`;

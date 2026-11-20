/**
 * TODO el contenido editable del sitio vive aquí.
 * Cambia textos, productos, estados de puntos de venta y enlaces sin tocar componentes.
 *
 * Reglas de contenido:
 * - No inventar testimonios, premios ni certificaciones.
 * - Lo que falta se marca con "[PENDIENTE: ...]" y se muestra tal cual en el sitio.
 * - No prometer beneficios de salud.
 */
import {
  CAFFEINE_MG_PER_SERVING,
  DARK_CACAO_PERCENT,
  MILK_CACAO_PERCENT,
  NET_WEIGHT_G,
  SOCIAL,
  SUGGESTED_PRICE_LPS,
} from "./constants";
import type { ImageKey } from "./images";

export const brand = {
  name: "Cafecho",
  descriptor: "Café & Cacao · Honduras",
  slogan: "La energía del café, el placer del chocolate.",
  moderation: "Consumo moderado. Contiene cafeína.",
  footerCredit: "Un proyecto de estudiantes de Zamorano",
  copyright: "© 2026 Cafecho · Café & Cacao · Honduras",
};

export const announcements = [
  "Café de Copán · Cacao de Honduras · Hecho en Honduras",
  "Bolsa individual de 40 g, resellable",
  "Pronto en el puesto de ventas de Zamorano",
];

export const nav = [
  { label: "Producto", href: "/#producto" },
  { label: "Origen", href: "/#origen" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Momentos", href: "/#momentos" },
  { label: "Dónde encontrarnos", href: "/#donde-encontrarnos" },
  { label: "Contacto", href: "/#contacto" },
];

export const headerCta = { label: "Conócenos", href: "/#ingredientes" };

export const hero = {
  kicker: "Granos de café cubiertos de chocolate",
  title: "La energía del café, el placer del chocolate.",
  subtitle:
    "Café de altura de las montañas de Copán, envuelto en cacao hondureño. Un bocado pequeño para tu tarde.",
  primary: { label: "Descubre Cafecho", href: "/#producto" },
  secondary: { label: "Nuestro origen", href: "/#origen" },
  imageDesktop: "heroBanner" as ImageKey,
  imageMobile: "keyVisual" as ImageKey,
  altDesktop:
    "Granos de café cubiertos de chocolate sobre una mesa de madera, junto a una rama de café, una mazorca de cacao abierta, una taza de cobre y una bolsa de Cafecho.",
  altMobile:
    "Bolsa de Cafecho Chocolate Oscuro junto a un bowl de granos de café cubiertos de chocolate y una planta de café.",
};

export type AttributeIcon = "mountain" | "cacao" | "percent" | "bag" | "sun" | "star";

export const attributes: { label: string; icon: AttributeIcon }[] = [
  { label: "Café de altura de Copán", icon: "mountain" },
  { label: "Cacao hondureño", icon: "cacao" },
  { label: `${DARK_CACAO_PERCENT}% cacao`, icon: "percent" },
  { label: "Bolsa resellable", icon: "bag" },
  { label: "Energía natural del café", icon: "sun" },
  { label: "Hecho en Honduras", icon: "star" },
];

export const ingredients = {
  kicker: "Dos ingredientes",
  title: "Dos ingredientes, un mismo origen.",
  paragraphs: [
    "Adentro, un grano entero de café de altura de la región de Copán, tostado hasta que suelta su aroma. Afuera, una capa de chocolate hecho con cacao de Honduras.",
    "El café pone la energía y el carácter. El chocolate pone la calma y la dulzura. Juntos se muerden en un solo bocado: primero el cacao, después el crujiente del grano.",
  ],
  highlights: [
    { label: "Café", value: "Copán, Honduras" },
    { label: "Cacao", value: "Honduras" },
  ],
  image: "macroBean" as ImageKey,
  alt: "Primer plano de un grano de café cubierto de chocolate partido por la mitad, que deja ver el grano tostado dentro de la capa de chocolate.",
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  badge?: string;
  cacao: string;
  weight: string;
  caffeine: string;
  price: string;
  /** Frase corta para empaque o Instagram. */
  tagline: string;
  flavorNotes: string;
  description: string;
  /** Escalas de 1 a 5. */
  coffeeIntensity: number;
  sweetness: number;
  /** Perfil de sabor para la ficha de producto. */
  profile: { label: string; value: string }[];
  /** null = no hay foto todavía; se muestra un panel de marca con [PENDIENTE]. */
  image: ImageKey | null;
  imagePosition?: string;
  alt: string;
  details: { label: string; value: string }[];
};

const commonDetails = (cacaoPercent: number) => [
  { label: "Contenido neto", value: `${NET_WEIGHT_G} g · bolsa individual resellable` },
  { label: "Cacao", value: `${cacaoPercent}%` },
  { label: "Cafeína", value: `~${CAFFEINE_MG_PER_SERVING} mg por porción` },
  { label: "Vida útil", value: "6 meses · lote y fecha de vencimiento impresos en el empaque" },
  { label: "Registro sanitario", value: "En trámite" },
];

/**
 * Información nutricional (fuente: etiqueta del empaque). Igual para las dos variantes
 * mientras no haya una etiqueta por variante.
 */
export const nutrition = {
  servingSize: "10 g",
  servingsPerPack: 4,
  energy: "51.1 kcal",
  rows: [
    { label: "Grasas totales", value: "2.58 g" },
    { label: "Carbohidratos", value: "5.96 g" },
    { label: "Fibra dietética", value: "1.30 g" },
    { label: "Proteínas", value: "0.98 g" },
    { label: "Sodio", value: "3.68 mg" },
  ],
  usage:
    "Listo para consumir. Disfrútalo como snack o para acompañar el café. Consumir con moderación; contiene cafeína. No recomendado para personas sensibles a la cafeína.",
  storage:
    "Mantener en un lugar fresco, seco y protegido de la luz solar. Cerrar bien después de abrir. No consumir si el empaque está abierto, perforado o alterado.",
};

export const products: Product[] = [
  {
    slug: "chocolate-oscuro",
    name: "Chocolate Oscuro",
    shortName: "Oscuro",
    badge: "Favorito",
    cacao: `${DARK_CACAO_PERCENT}% cacao`,
    weight: `${NET_WEIGHT_G} g`,
    caffeine: `~${CAFFEINE_MG_PER_SERVING} mg de cafeína por porción`,
    price: `Precio sugerido: L${SUGGESTED_PRICE_LPS}`,
    tagline: "Intenso y profundo: cacao 60% y café de altura en un solo bocado.",
    flavorNotes: "Cacao tostado, café espresso, un toque de frutos secos",
    description: "Cacao intenso y poco dulce. Un amargor elegante y largo, con el café bien presente.",
    coffeeIntensity: 4,
    sweetness: 2,
    profile: [
      { label: "Primera impresión", value: "Cacao intenso, poco dulce" },
      { label: "Notas principales", value: "Cacao tostado, café espresso, un toque de frutos secos" },
      { label: "Final", value: "Amargor elegante y largo, con el café bien presente" },
      { label: "Textura", value: "Chocolate firme y grano crujiente" },
      { label: "Para quién", value: "Para quien toma café negro o espresso" },
    ],
    // key-visual combina con la tarjeta oscura; pack-dark-white (fondo blanco) se usa en el feed de Síguenos.
    image: "keyVisual",
    imagePosition: "78% 38%",
    alt: "Bolsa de Cafecho Chocolate Oscuro, 60% cacao, junto a un bowl de granos cubiertos de chocolate.",
    details: commonDetails(DARK_CACAO_PERCENT),
  },
  {
    slug: "chocolate-con-leche",
    name: "Chocolate con Leche",
    shortName: "Con Leche",
    // Dato confirmado por el equipo: 60% cacao (poco común en chocolate con leche; revisar con la receta).
    cacao: `${MILK_CACAO_PERCENT}% cacao`,
    weight: `${NET_WEIGHT_G} g`,
    caffeine: `~${CAFFEINE_MG_PER_SERVING} mg de cafeína por porción`,
    price: `Precio sugerido: L${SUGGESTED_PRICE_LPS}`,
    tagline: "Suave y cremoso: dulzura de leche con un final de café hondureño.",
    flavorNotes: "Caramelo, leche, vainilla suave",
    description: "Dulce, cremoso y suave. El chocolate se derrite rápido y el café aparece al final.",
    coffeeIntensity: 2,
    sweetness: 4,
    profile: [
      { label: "Primera impresión", value: "Dulce, cremoso, suave" },
      { label: "Notas principales", value: "Caramelo, leche, vainilla suave" },
      { label: "Final", value: "Corto y dulce; el café aparece al final, ligero" },
      { label: "Textura", value: "Chocolate suave que se derrite rápido y grano crujiente" },
      { label: "Para quién", value: "Para quien toma café con leche o lattes, o busca un antojo" },
    ],
    // Recorte de la mitad derecha de variants.jpg (la bolsa con leche).
    image: "variants",
    imagePosition: "92% 50%",
    alt: "Bolsa de Cafecho Chocolate con Leche junto a granos cubiertos de chocolate con leche.",
    details: commonDetails(MILK_CACAO_PERCENT),
  },
];

export const productsSection = {
  kicker: "Producto",
  title: "Dos maneras de empezar la tarde.",
  intro:
    "Bolsa individual de 40 g, en doypack resellable con barrera de humedad. Ábrela, toma un puñado y guárdala para después.",
  cta: "Ver detalles",
};

export const process = {
  kicker: "Proceso",
  title: "Del cafetal a tu bolsa.",
  steps: [
    {
      title: "Seleccionamos",
      text: "Escogemos granos de café de altura de la región de Copán.",
    },
    {
      title: "Tostamos",
      text: "Tostamos el grano entero para despertar su aroma y su crujiente.",
    },
    {
      title: "Cubrimos",
      text: "Lo envolvemos en chocolate templado hecho con cacao de Honduras.",
    },
    {
      title: "Empacamos",
      text: "Lo cerramos en una bolsa resellable que lo protege de la humedad.",
    },
  ],
};

export const origin = {
  kicker: "Origen",
  title: "Copán, Honduras.",
  paragraphs: [
    "En el occidente de Honduras, las montañas de Copán guardan neblina por la mañana y sol por la tarde. Ahí crece el café de altura que usamos.",
    "Es la misma tierra donde floreció la ciudad maya de Copán. Esa herencia nos inspira: hacer algo pequeño, con cuidado, y con orgullo de dónde viene.",
    "Lo cubrimos con chocolate de cacao hondureño. Dos ingredientes de aquí, en un solo grano.",
  ],
  image: "originCopan" as ImageKey | null,
  alt: "Bolsa de Cafecho sobre una piedra en el sitio maya de Copán, con montañas y neblina al fondo.",
  imageNote: "[PENDIENTE: foto de origen en Copán (origin-copan.jpg)]",
};

export const moments = {
  kicker: "Momentos Cafecho",
  title: "Para la tarde que todavía no termina.",
  intro:
    "Cafecho es la energía del café en un bocado. Una alternativa a las bebidas energéticas, con café de verdad y chocolate de verdad.",
  items: [
    {
      title: "La pausa de la tarde",
      text: "Cuando baja el ritmo después del almuerzo y todavía queda la mitad del día.",
    },
    {
      title: "Mientras estudias",
      text: "Un puñado al lado del cuaderno, sin levantarte por otra taza.",
    },
    {
      title: "Entre reuniones",
      text: "Cabe en la mochila o en el bolsillo del saco. Se abre y se vuelve a cerrar.",
    },
  ],
  images: [
    {
      // Encuadre superior a propósito: la bolsa de esta foto dice "80% CACAO" y "DSCURO" (error de la IA).
      key: "lifestyleFriends" as ImageKey,
      position: "50% 0%",
      alt: "Un joven sonríe mientras toma un grano de una bolsa de Cafecho en una mesa de cafetería con cuadernos y una laptop.",
    },
    {
      key: "lifestyleCafe" as ImageKey,
      position: "50% 70%",
      alt: "Bolsa de Cafecho, un plato con granos cubiertos de chocolate y una taza de café sobre la barra de una cafetería.",
    },
  ],
  note: "Consumo moderado. Contiene cafeína.",
};

export const research = {
  kicker: "Lo que dice nuestro estudio",
  title: "Lo preguntamos antes de lanzarlo.",
  stats: [
    {
      value: "77.8%",
      text: "de las personas encuestadas dijo que compraría Cafecho.",
    },
    {
      value: "65.1%",
      text: "dijo que el origen hondureño influye en su decisión de compra.",
    },
  ],
  source: "Fuente: estudio de mercado del equipo Cafecho, 2026, n = 63.",
};

export type StoreStatus = "disponible-pronto" | "proximamente" | "mas-adelante" | "disponible";

export const statusLabels: Record<StoreStatus, string> = {
  disponible: "Disponible",
  "disponible-pronto": "Disponible pronto",
  proximamente: "Próximamente",
  "mas-adelante": "Más adelante",
};

export const whereToFind = {
  kicker: "Dónde encontrarnos",
  title: "Empezamos cerca de casa.",
  intro:
    "Lanzamos primero en Zamorano y en universidades, con degustaciones. Después vamos a la ciudad.",
  stores: [
    { name: "Puesto de ventas Zamorano", detail: "Con degustaciones", status: "disponible-pronto" },
    { name: "Kioscos universitarios", detail: "Lanzamiento piloto", status: "proximamente" },
    {
      name: "Tiendas de conveniencia y gasolineras",
      detail: "Distrito Central, Tegucigalpa",
      status: "proximamente",
    },
    { name: "Supermercados", detail: "En todo el país", status: "mas-adelante" },
  ] as { name: string; detail: string; status: StoreStatus }[],
  image: "pointOfSale" as ImageKey,
  imagePosition: "50% 60%",
  alt: "Exhibidor de mostrador con bolsas de Cafecho en la barra de una cafetería, junto a un bowl de granos.",
};

export const corporate = {
  kicker: "Regalos corporativos y eventos",
  title: "Un detalle hondureño para tu equipo.",
  text: "Bolsas individuales para regalos de fin de año, conferencias, reuniones y eventos de empresa. Cuéntanos qué necesitas y armamos la propuesta.",
  cta: { label: "Escríbenos", href: "/#contacto" },
};

export const social = {
  kicker: "Síguenos",
  title: "Cafecho en tu feed.",
  handle: SOCIAL.instagramHandle,
  instagramUrl: SOCIAL.instagramUrl,
  tiktokUrl: SOCIAL.tiktokUrl,
  feed: [
    { key: "macroBean" as ImageKey, alt: "Grano de café cubierto de chocolate partido por la mitad.", position: "60% 75%" },
    { key: "packDarkWhite" as ImageKey, alt: "Bolsa de Cafecho Chocolate Oscuro sobre fondo blanco.", position: "50% 20%" },
    { key: "heroBanner" as ImageKey, alt: "Rama de café con frutos rojos y una mazorca de cacao abierta.", position: "50% 60%" },
    { key: "pointOfSale" as ImageKey, alt: "Exhibidor de Cafecho en el mostrador de una cafetería.", position: "50% 55%" },
    { key: "originCopan" as ImageKey, alt: "Montañas con neblina y el sitio maya de Copán.", position: "50% 15%" },
    { key: "lifestyleFriends" as ImageKey, alt: "Amigos estudiando en una cafetería con una bolsa de Cafecho.", position: "50% 15%" },
  ],
};

export const contact = {
  kicker: "Contacto",
  title: "Hablemos.",
  intro:
    "Pedidos corporativos, puntos de venta o una pregunta sobre Cafecho. Te respondemos pronto.",
  inquiryTypes: [
    { value: "general", label: "Consulta general" },
    { value: "corporativo", label: "Pedido corporativo" },
    { value: "punto-de-venta", label: "Quiero vender Cafecho" },
  ],
  emailLabel: "[PENDIENTE: correo de contacto]",
  whatsappLabel: "[PENDIENTE: número de WhatsApp]",
  thanks: "¡Gracias! Recibimos tu mensaje y te escribiremos pronto.",
};

export const footer = {
  columns: [
    {
      title: "Producto",
      links: [
        { label: "Chocolate Oscuro", href: "/producto/chocolate-oscuro" },
        { label: "Chocolate con Leche", href: "/producto/chocolate-con-leche" },
        { label: "Dónde encontrarnos", href: "/#donde-encontrarnos" },
      ],
    },
    {
      title: "Marca",
      links: [
        { label: "Origen", href: "/#origen" },
        { label: "Proceso", href: "/#proceso" },
        { label: "Regalos corporativos", href: "/#corporativo" },
        { label: "Contacto", href: "/#contacto" },
      ],
    },
    {
      title: "Síguenos",
      links: [
        { label: "Instagram", href: SOCIAL.instagramUrl, external: true },
        ...(SOCIAL.tiktokUrl ? [{ label: "TikTok", href: SOCIAL.tiktokUrl, external: true }] : []),
      ],
    },
  ],
};

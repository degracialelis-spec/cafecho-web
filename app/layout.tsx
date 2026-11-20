import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600"],
});

const title = "Cafecho — Granos de café cubiertos de chocolate | Hecho en Honduras";
const description =
  "Granos de café de altura de Copán cubiertos de chocolate con cacao hondureño. La energía del café, el placer del chocolate. Hecho en Honduras.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "es_HN",
    type: "website",
    siteName: "Cafecho",
    images: [{ url: "/images/key-visual.jpg", width: 1611, height: 2000, alt: "Bolsa de Cafecho Chocolate Oscuro con granos de café cubiertos de chocolate." }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/images/key-visual.jpg"] },
};

export const viewport: Viewport = { themeColor: "#2B1810" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-HN" className={`${bodoni.variable} ${montserrat.variable}`}>
      <body>
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-sm bg-dorado px-4 py-2 text-sm font-semibold text-negro focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <AnnouncementBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

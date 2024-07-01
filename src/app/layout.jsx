import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const robo = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Periferia Digital",
  description: "Una perspectiva digital para escalar tu negocio!",
  metadata: {
    meta: [
      { property: 'og:site_name', content: 'Periferia digital' },
      { property: 'og:title', content: 'Periferia Digital' },
      { property: 'og:description', content: 'Una perspectiva digital para escalar tu negocio!' },
      { property: 'og:image', itemprop: 'image', content: 'http://pollosweb.wesped.es/programa_pollos/play.png' },
      {property: "og:image:width", content: "1472"},
      {property: "og:image:height", content:"832" },
      { property: 'og:type', content: 'website' },
      { property: 'og:updated_time', content: '1440432930' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={robo.className}>
        {children}
        <Analytics
        /></body>
    </html>
  );
}

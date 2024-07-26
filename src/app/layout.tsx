import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import type { Metadata } from "next";

// Definición del tipo para OpenGraph
interface OpenGraphImageProps {
  url: string;
  alt: string;
}

interface OpenGraphMetadataProps {
  siteName: string;
  title: string;
  description: string;
  images: OpenGraphImageProps[];
  type: string;
  updatedTime: string;
}

// Definición del tipo para metadata
interface MetadataProps {
  title: string;
  description: string;
  openGraph: OpenGraphMetadataProps;
}

const robo: { className: string } = Roboto({ subsets: ["latin"], weight: '400' });

// Definición de metadata
export const metadata: Metadata = {
  title: "Periferia Digital",
  description: "Una perspectiva digital para escalar tu negocio!",
  openGraph: {
    siteName: "Periferia Digital",
    title: "Periferia Digital",
    description: "Una perspectiva digital para escalar tu negocio!",
    images: [
      {
        url: "https://drive.google.com/file/d/1UFr-U158IkZ3DBfTmYyiBtdVuMljKGZj/view?usp=drive_link",
        alt: "Periferia Digital"
      }
    ],
    type: "website",
    // Consider replacing this with a named constant or dynamic value
  }
};

// Definición de las propiedades del layout
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={robo.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
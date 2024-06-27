import "./globals.css";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const robo = Roboto({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Periferia digital",
  description: "Una perspectiva digital para escalar tu negocio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robo.className}>
        {children}
        <Analytics
        /></body>
    </html>
  );
}

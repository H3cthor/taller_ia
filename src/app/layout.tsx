import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taller de Inteligencia Artificial | UTSJR",
  description: "Innovación con Impacto Real. Proyectos transversales de Inteligencia Artificial y tecnologías emergentes para resolver problemas reales en la Universidad Tecnológica de San Juan del Río.",
  keywords: ["IA", "Inteligencia Artificial", "UTSJR", "Proyectos Universitarios", "Realidad Virtual", "Innovación", "San Juan del Río"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

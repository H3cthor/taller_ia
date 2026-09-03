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
  title: "Centro de Innovación e IA Aplicada | UTSJR",
  description: "Innovación con Impacto Real. Proyectos transversales de Inteligencia Artificial, Robótica, Automatización y tecnologías emergentes para todas las carreras de la Universidad Tecnológica de San Juan del Río.",
  keywords: ["IA", "Inteligencia Artificial", "UTSJR", "Centro de Innovación", "Proyectos Universitarios", "Mecatrónica", "TI", "San Juan del Río"],
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

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Archivo, Archivo_Black } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

// Fonte da marca Golf Fox (landing). Archivo = corpo, Archivo Expanded = display.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

// Companheira de display (par tipográfico): Archivo Black para títulos/números de impacto.
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-archivo-black",
});

const isVercelRuntime = process.env.VERCEL === "1";

export const metadata: Metadata = {
  metadataBase: new URL("https://golffox.com.br"),
  title: {
    default: "GOLF FOX - Gestão de Fretamento Corporativo",
    template: "%s | GOLF FOX",
  },
  description:
    "GOLF FOX é a plataforma de gestão de fretamento corporativo para rotas, check-in, operação em tempo real, custos, auditoria e relatórios.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${archivo.variable} ${archivoBlack.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        {isVercelRuntime ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}

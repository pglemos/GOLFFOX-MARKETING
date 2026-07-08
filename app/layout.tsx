import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Archivo, Archivo_Black } from "next/font/google";
import Script from "next/script";
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

// Google Tag Manager — container da GOLF FOX. As tags (ex.: conversão do Google Ads)
// são gerenciadas dentro do próprio GTM. Só carrega em deploys da Vercel para não
// poluir os dados com tráfego de desenvolvimento local.
const GTM_ID = "GTM-MWGM5D63";

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
        {isVercelRuntime ? (
          <>
            {/* Google Tag Manager */}
            <Script id="gtm-base" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
        {children}
        {isVercelRuntime ? (
          <>
            <Analytics
              scriptSrc="/_vercel/insights/script.js"
              viewEndpoint="/_vercel/insights/view"
              eventEndpoint="/_vercel/insights/event"
              sessionEndpoint="/_vercel/insights/session"
            />
            <SpeedInsights
              scriptSrc="/_vercel/speed-insights/script.js"
              endpoint="/_vercel/speed-insights/vitals"
            />
          </>
        ) : null}
      </body>
    </html>
  );
}

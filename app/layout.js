import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { MultiJsonLd } from "../components/JsonLd";
import { generateFullSchema } from "./schema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estudio Villa & Asociados - Servicios Legales en Argentina",
  description: "Estudio jurídico especializado en derecho civil, comercial y laboral. Ofrecemos servicios legales profesionales y personalizados en Argentina.",
  keywords: "abogados, estudio jurídico, derecho civil, derecho comercial, derecho laboral, Argentina, Buenos Aires",
  authors: [{ name: "Estudio Villa & Asociados" }],
  creator: "Estudio Villa & Asociados",
  publisher: "Estudio Villa & Asociados",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://robertovillayasociados.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Estudio Villa & Asociados - Servicios Legales en Argentina",
    description: "Estudio jurídico especializado en derecho civil, comercial y laboral. Ofrecemos servicios legales profesionales y personalizados en Argentina.",
    url: 'https://robertovillayasociados.com.ar',
    siteName: 'Estudio Villa & Asociados',
    images: [
      {
        url: '/VillaLogo.png',
        width: 800,
        height: 600,
        alt: 'Estudio Villa & Asociados Logo',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Estudio Villa & Asociados - Servicios Legales en Argentina",
    description: "Estudio jurídico especializado en derecho civil, comercial y laboral en Argentina.",
    images: ['/VillaLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
    yandex: 'tu-yandex-verification-code',
    yahoo: 'tu-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Schema JSON-LD para SEO */}
        <MultiJsonLd schemas={generateFullSchema()} />
        
        {/* Meta tags adicionales */}
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Buenos Aires" />
        <meta name="ICBM" content="-34.6037, -58.3816" />
        
        {/* Preconnect para mejor performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
} 
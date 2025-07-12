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
        type: 'image/png',
      },
      {
        url: '/apple-icon-180x180.png',
        width: 180,
        height: 180,
        alt: 'Estudio Villa & Asociados Icon',
        type: 'image/png',
      },
      {
        url: '/android-icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'Estudio Villa & Asociados Android Icon',
        type: 'image/png',
      }
    ],
    locale: 'es_AR',
    type: 'website',
    countryName: 'Argentina',
    emails: ['estudio@robertovillayasociados.com.ar'],
    phoneNumbers: ['+54-11-2649-3333'],
    streetAddress: '25 de Mayo 577',
    locality: 'Buenos Aires',
    region: 'Buenos Aires',
    postalCode: 'C1043',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Estudio Villa & Asociados - Servicios Legales en Argentina",
    description: "Estudio jurídico especializado en derecho civil, comercial y laboral en Argentina. Mediación, sucesiones y planificación sucesoria.",
    images: [
      {
        url: '/VillaLogo.png',
        alt: 'Estudio Villa & Asociados Logo',
        width: 800,
        height: 600,
      },
      {
        url: '/android-icon-192x192.png',
        alt: 'Estudio Villa & Asociados Icon',
        width: 192,
        height: 192,
      }
    ],
    creator: '@estudiovilla',
    site: '@estudiovilla',
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
  other: {
    'msapplication-TileColor': '#1D2D44',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'theme-color': '#1D2D44',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Estudio Villa & Asociados',
    'application-name': 'Estudio Villa & Asociados',
    'msapplication-config': '/browserconfig.xml',
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
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
        <link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        
        {/* Windows Icons */}
        <meta name="msapplication-TileColor" content="#1D2D44" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#1D2D44" />
        
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
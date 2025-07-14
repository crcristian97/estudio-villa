import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import WhatsAppButton from "../../components/WhatsAppButton";
import { MultiJsonLd } from "../../components/JsonLd";
import { generateFullSchema } from "../schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Estudio Jurídico Villa & Asociados | Derecho Societario y Penal",
  description:
    "Abogados especializados en conflictos societarios, sucesiones complejas, derecho penal y civil. Consultas personalizadas en Buenos Aires y todo el país.",
  icons: {
    icon: [{ rel: "icon", url: "/favicon.ico" }],
  },
  openGraph: {
    title: "Estudio Jurídico Villa & Asociados",
    description:
      "Asesoría legal estratégica para empresas, abogados y particulares. Consultas sin compromiso y soluciones legales efectivas.",
    url: "https://www.tu-dominio.com",
    siteName: "Estudio Jurídico Villa & Asociados",
    images: [
      {
        url: "https://www.tu-dominio.com/img/og-estudio-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Jurídico Villa & Asociados",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Villa & Asociados",
    description:
      "Consultas estratégicas en derecho societario, penal, sucesorio y más. Atención a empresas y profesionales.",
    images: ["https://www.tu-dominio.com/img/og-estudio-villa.jpg"],
  },
  alternates: {
    canonical: "https://www.tu-dominio.com",
  },
  publisher: "Estudio Jurídico Villa & Asociados",
  authors: [
    {
      name: "Dr. Juan Villa",
      url: "https://www.tu-dominio.com/equipo/juan-villa",
    },
    {
      name: "Estudio Jurídico Villa & Asociados",
      url: "https://www.tu-dominio.com",
    },
  ],
};

export default async function Layout({ children, params }) {
  // Await params if it's a Promise (Next.js dynamic route fix)
  const resolvedParams = typeof params?.then === "function" ? await params : params;
  return (
    <html lang={resolvedParams.lang}>
      <head>
        {/* Canonical, publisher, author meta tags */}
        <link rel="canonical" href="https://www.tu-dominio.com" />
        <meta name="publisher" content="Estudio Jurídico Villa & Asociados" />
        <meta name="author" content="Dr. Juan Villa, Estudio Jurídico Villa & Asociados" />
        {/* Schema JSON-LD para SEO */}
        <MultiJsonLd schemas={generateFullSchema()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

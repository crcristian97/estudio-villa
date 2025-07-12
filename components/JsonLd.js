'use client';
import Script from 'next/script';

// Componente para renderizar Schema JSON-LD
export function JsonLd({ data }) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}

// Componente para múltiples schemas
export function MultiJsonLd({ schemas }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}

// Componente específico para organización
export function OrganizationJsonLd({ data }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Villa & Asociados",
    "description": "Estudio jurídico especializado en derecho civil, comercial y laboral en Argentina.",
    "url": "https://robertovillayasociados.com.ar",
    "logo": "https://robertovillayasociados.com.ar/VillaLogo.png",
    "email": "estudio@robertovillayasociados.com.ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    }
  };

  return (
    <JsonLd data={{ ...defaultData, ...data }} />
  );
}

// Componente específico para FAQ
export function FaqJsonLd({ questions }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return <JsonLd data={schema} />;
}

// Componente específico para breadcrumbs
export function BreadcrumbJsonLd({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <JsonLd data={schema} />;
}

// Componente específico para contacto
export function ContactJsonLd({ data }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - Estudio Villa & Asociados",
    "description": "Página de contacto del Estudio Villa & Asociados.",
    "url": "https://robertovillayasociados.com.ar/#contacto",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "estudio@robertovillayasociados.com.ar",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  return <JsonLd data={{ ...defaultData, ...data }} />;
}

// Componente específico para servicios
export function ServiceJsonLd({ services }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Villa & Asociados",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Legales",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  };

  return <JsonLd data={schema} />;
}

// Componente específico para local business
export function LocalBusinessJsonLd({ data }) {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Estudio Villa & Asociados",
    "description": "Estudio jurídico especializado en derecho civil, comercial y laboral en Argentina.",
    "url": "https://robertovillayasociados.com.ar",
    "email": "estudio@robertovillayasociados.com.ar",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Buenos Aires",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return <JsonLd data={{ ...defaultData, ...data }} />;
} 
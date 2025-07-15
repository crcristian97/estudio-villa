// Schema JSON-LD para Estudio Villa & Asociados
// Mejora el SEO y ayuda a los motores de búsqueda a entender el contenido

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Estudio Villa & Asociados",
  "alternateName": "Estudio Villa",
  "description": "Estudio jurídico especializado en derecho civil, comercial y laboral. Ofrecemos servicios legales profesionales y personalizados en Argentina.",
  "url": "https://robertovillayasociados.com.ar",
  "logo": "https://robertovillayasociados.com.ar/VillaLogo.png",
  "image": "https://robertovillayasociados.com.ar/VillaLogo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR",
    "addressLocality": "Buenos Aires",
    "addressRegion": "Buenos Aires",
    "addressCountry": "Argentina"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "estudio@robertovillayasociados.com.ar",
    "availableLanguage": ["Spanish", "English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/estudio-villa-asociados",
    "https://www.facebook.com/estudiovillaasociados"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Argentina"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -34.6037,
      "longitude": -58.3816
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios Legales",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Derecho Civil",
          "description": "Asesoramiento en contratos, responsabilidad civil, derecho de familia y sucesiones"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Derecho Comercial",
          "description": "Constitución de sociedades, contratos comerciales, derecho societario"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Derecho Laboral",
          "description": "Asesoramiento en relaciones laborales, despidos, accidentes de trabajo"
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Estudio Villa & Asociados",
  "url": "https://robertovillayasociados.com.ar",
  "description": "Sitio web oficial del Estudio Villa & Asociados. Servicios legales profesionales en Argentina.",
  "publisher": {
    "@type": "LegalService",
    "name": "Estudio Villa & Asociados"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://robertovillayasociados.com.ar/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://robertovillayasociados.com.ar"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Sobre la firma",
      "item": "https://robertovillayasociados.com.ar/#sobre-la-firma"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Qué hacemos",
      "item": "https://robertovillayasociados.com.ar/#que-hacemos"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cómo trabajamos",
      "item": "https://robertovillayasociados.com.ar/#como-trabajamos"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Contacto",
      "item": "https://robertovillayasociados.com.ar/#contacto"
    }
  ]
};
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Trabajan únicamente en la Ciudad Autónoma de Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Actuamos tanto en CABA como en diversas jurisdicciones del interior del país."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la mediación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una herramienta legal para resolver conflictos sin juicio, con intervención de un tercero imparcial. Promueve acuerdos más rápidos, confidenciales y sostenibles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se inicia un litigio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con una demanda judicial. Pero antes evaluamos si existen vías alternativas más eficaces. Te guiamos en cada paso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen consultas iniciales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La primera consulta nos permite entender tu situación y proponerte un plan de acción sin compromiso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo consultar sin tener un juicio iniciado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Ofrecemos orientación preventiva para resolver conflictos antes de que escalen a instancias judiciales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de conflictos resuelven?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Especialmente aquellos donde se cruzan intereses patrimoniales, familiares y empresariales. Somos expertos en resolver lo que parece no tener solución."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura un proceso legal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del caso. Algunos se resuelven en semanas con acuerdos, otros pueden durar años si van a juicio. Siempre te mantenemos informado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si los herederos no se ponen de acuerdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuando hay desacuerdos entre herederos, especialmente si hay bienes complejos o empresas de por medio, es fundamental contar con asesoramiento jurídico. Podemos facilitar acuerdos a través de mediación o, si es necesario, representar en juicio para resguardar tus derechos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reclamar una herencia si sospecho que me ocultaron bienes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Existen herramientas legales como la colación hereditaria o la reducción de donaciones inoficiosas para equilibrar lo recibido por todos los herederos. Investigamos operaciones sospechosas y te ayudamos a defender tu porción legítima."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si hay una empresa dentro de la herencia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuando el patrimonio hereditario incluye participaciones en sociedades, es clave analizar el vínculo entre los herederos y los socios. Actuamos para evitar bloqueos societarios y conflictos entre familiares que también son socios."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede evitar llegar a juicio en una sucesión complicada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Diseñamos acuerdos anticipados, pactos sucesorios y protocolos familiares que permiten resolver de forma extrajudicial. Nuestro enfoque busca preservar los vínculos personales sin resignar tus derechos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué implica una causa en el fuero penal económico o tributario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Este tipo de causas suelen estar vinculadas a presuntos delitos financieros, cambiarios, evasión impositiva o infracciones ante organismos como la AFIP o el Banco Central. Brindamos asesoramiento integral, estrategia de defensa y representación en todas las instancias del proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿También asesoran a empresas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Contamos con amplia experiencia en el asesoramiento y defensa de empresas en temas penales y tributarios, incluyendo sumarios ante el BCRA y la AFIP, análisis de riesgos penales y litigios complejos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la planificación sucesoria y por qué debería hacerla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un proceso legal que permite organizar el destino de tu patrimonio antes del fallecimiento, evitando conflictos futuros. Es especialmente útil si tenés bienes valiosos, empresas familiares o hijos de diferentes vínculos. Es posible establecer reglas claras de administración, reparto o usufructo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué situaciones complejas pueden surgir en una sucesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ocultamiento o simulación de bienes.\nDonaciones encubiertas que perjudican a otros herederos.\nEmpresas familiares bloqueadas por desacuerdos.\nFalta de protocolos entre herederos que también son socios.\nDisputas por el uso o la partición de bienes indivisos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se resuelve una sucesión con conflictos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde el estudio, analizamos el caso, diseñamos una estrategia jurídica y buscamos acuerdos duraderos. Si no es posible negociar, representamos tus intereses ante la justicia para lograr una solución justa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el rol del abogado en estos casos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El abogado no solo litiga: facilita acuerdos, protege tus derechos y busca soluciones que contemplen tanto lo jurídico como lo humano. En casos de familias empresarias, actuamos con sensibilidad, visión estratégica y conocimiento interdisciplinario."
      }
    }
  ]
}


export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contacto - Estudio Villa & Asociados",
  "description": "Página de contacto del Estudio Villa & Asociados. Contáctanos para consultas legales.",
  "url": "https://robertovillayasociados.com.ar/#contacto",
  "mainEntity": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "estudio@robertovillayasociados.com.ar",
    "availableLanguage": ["Spanish", "English"],
    "areaServed": {
      "@type": "Country",
      "name": "Argentina"
    }
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Estudio Villa & Asociados",
  "description": "Estudio jurídico especializado en derecho civil, comercial y laboral en Argentina.",
  "url": "https://robertovillayasociados.com.ar",
  "telephone": "+54-11-2649-3333",
  "email": "estudio@robertovillayasociados.com.ar",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "25 de Mayo 577",
    "addressLocality": "Buenos Aires",
    "addressRegion": "Buenos Aires",
    "postalCode": "C1043",
    "addressCountry": "AR"
  },
  
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "currenciesAccepted": "ARS"
};

// Función para generar el schema completo
export function generateFullSchema() {
  return [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema,
    contactPageSchema,
    localBusinessSchema
  ];
}

// Función para generar schema específico por página
export function generatePageSchema(pageType) {
  switch (pageType) {
    case 'home':
      return [organizationSchema, websiteSchema, breadcrumbSchema];
    case 'contact':
      return [contactPageSchema, localBusinessSchema];
    case 'faq':
      return [faqSchema];
    case 'services':
      return [organizationSchema];
    default:
      return [organizationSchema];
  }
} 
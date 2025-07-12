export default function sitemap() {
  const baseUrl = 'https://robertovillayasociados.com.ar';
  
  // Generar sitemap para cada idioma soportado
  const languages = ['es', 'en'];
  const sitemapEntries = [];
  
  languages.forEach(lang => {
    const langUrl = lang === 'es' ? baseUrl : `${baseUrl}/${lang}`;
    
    sitemapEntries.push(
      {
        url: langUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${langUrl}/#sobre-la-firma`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${langUrl}/#que-hacemos`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${langUrl}/#como-trabajamos`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${langUrl}/#noticias`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${langUrl}/#contacto`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${langUrl}/#faq`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      }
    );
  });
  
  return sitemapEntries;
} 
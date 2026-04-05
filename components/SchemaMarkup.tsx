export function SchemaMarkup() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "E‑Vinetka",
    url: "https://e-vinetka.kz",
    sameAs: ["https://www.instagram.com/evinetka/"],
    description:
      "Цифровой выпускной альбом нового поколения в Казахстане",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E‑Vinetka",
    url: "https://e-vinetka.kz",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Цифровой выпускной альбом",
    provider: {
      "@type": "Organization",
      name: "E‑Vinetka",
    },
    description:
      "Создание приватных цифровых выпускных альбомов для школ и университетов Казахстана",
    areaServed: {
      "@type": "Country",
      name: "Kazakhstan",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KZT",
      lowPrice: "5900",
      highPrice: "12900",
      offerCount: "3",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}

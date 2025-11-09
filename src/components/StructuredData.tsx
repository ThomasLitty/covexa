const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Covexa",
    "url": "https://covexa.ai",
    "logo": "https://covexa.ai/og-hero.png",
    "description": "Enterprise emotional health infrastructure that connects well-being to performance through Flourish and Focus modules. Governed people analytics for CHROs and Boards.",
    "foundingDate": "2024",
    "industry": "Enterprise Software",
    "sameAs": []
  };

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Covexa",
    "description": "Enterprise emotional health infrastructure that connects well-being to performance. Flourish and Focus modules deliver governed people analytics.",
    "url": "https://covexa.ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder"
    },
    "provider": {
      "@type": "Organization",
      "name": "Covexa",
      "url": "https://covexa.ai"
    },
    "featureList": [
      "Emotional health tracking",
      "Productivity intelligence", 
      "ESG reporting integration",
      "Burnout risk detection",
      "People analytics",
      "Well-being measurement",
      "ISO 45003 compliance",
      "Enterprise data governance"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Enterprise HR and Executive Teams"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://covexa.ai/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
};

export default StructuredData;
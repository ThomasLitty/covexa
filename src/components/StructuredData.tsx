const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Covexa",
    "url": "https://covexa.ai",
    "logo": "https://covexa.ai/og-hero.png",
    "description": "Private, compliance-ready intelligent AI GTM execution layer that coordinates apps, agents, and actions across your entire revenue stack.",
    "foundingDate": "2024",
    "industry": "Software",
    "sameAs": []
  };

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Covexa",
    "description": "Private, compliance-ready intelligent AI GTM execution layer that coordinates apps, agents, and actions across your entire revenue stack.",
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
      "AI-powered GTM execution",
      "CRM data unification", 
      "Compliance-first automation",
      "Multi-agent orchestration",
      "Real-time intent signals",
      "Email automation",
      "Lead enrichment",
      "Revenue analytics"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "B2B Sales Teams"
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
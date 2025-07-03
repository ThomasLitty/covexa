const StructuredData = () => {
  const structuredData = {
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
      "Real-time intent signals"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
import { useEffect } from "react";

const TextContentExtractor = () => {
  useEffect(() => {
    // Add structured text content to window for GPT access
    const pageContent = {
      title: "Covexa – The Emotional Health Infrastructure for Enterprises",
      description: "Governed infrastructure that connects emotional well-being to business performance through Flourish and Focus modules.",
      sections: {
        hero: "The Emotional Health Infrastructure for Enterprises - Measure what matters: from how people feel to how they perform.",
        modules: "Flourish (Well-being Intelligence) - Quantifies organizational well-being and resilience. Focus (Productivity Intelligence) - Correlates performance data with well-being indicators to prevent burnout.",
        infrastructure: [
          "EchoPulse Engine - Data fusion layer",
          "Governed Analytics - Role-based dashboards", 
          "Privacy-First Design - Anonymized aggregation",
          "Enterprise Integration - HRIS and collaboration tools"
        ],
        features: [
          "Emotional health tracking",
          "Productivity intelligence", 
          "ESG reporting integration",
          "Burnout risk detection",
          "ISO 45003 compliance",
          "People analytics",
          "Well-being measurement",
          "ROI tracking"
        ],
        integrations: ["Slack", "Workday", "Microsoft 365", "Culture Amp", "BambooHR", "Salesforce", "Qualtrics", "SAP SuccessFactors"],
        cta: "Join the Waitlist - Be the first to experience Covexa's emotional health infrastructure"
      }
    };

    // Make content globally accessible
    (window as any).covexaContent = pageContent;
    
    // Add to document for GPT scraping
    const contentDiv = document.createElement('div');
    contentDiv.id = 'gpt-readable-content';
    contentDiv.style.display = 'none';
    contentDiv.innerHTML = `
      <h1>${pageContent.title}</h1>
      <p>${pageContent.description}</p>
      <section>
        <h2>Hero Section</h2>
        <p>${pageContent.sections.hero}</p>
      </section>
      <section>
        <h2>Platform Modules</h2>
        <p>${pageContent.sections.modules}</p>
      </section>
      <section>
        <h2>Infrastructure</h2>
        <ul>${pageContent.sections.infrastructure.map(f => `<li>${f}</li>`).join('')}</ul>
      </section>
      <section>
        <h2>Features</h2>
        <ul>${pageContent.sections.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </section>
      <section>
        <h2>Integrations</h2>
        <ul>${pageContent.sections.integrations.map(i => `<li>${i}</li>`).join('')}</ul>
      </section>
      <section>
        <h2>Call to Action</h2>
        <p>${pageContent.sections.cta}</p>
      </section>
    `;
    
    document.body.appendChild(contentDiv);
  }, []);

  return null;
};

export default TextContentExtractor;
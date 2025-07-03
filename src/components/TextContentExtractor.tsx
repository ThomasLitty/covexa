import { useEffect } from "react";

const TextContentExtractor = () => {
  useEffect(() => {
    // Add structured text content to window for GPT access
    const pageContent = {
      title: "Covexa – The AI Agent System for Modern GTM",
      description: "Private, compliance-ready intelligent AI GTM execution layer that coordinates apps, agents, and actions across your entire revenue stack.",
      sections: {
        hero: "The AI Agent System for Modern GTM - Covexa is your GTM execution layer — unify messy data, accelerate campaign creation, and orchestrate AI-powered outreach that leverages real-time intent signals and works across the tools your team already uses.",
        agents: "Meet our AI agents: ORRA (Orchestration), MIRA (Market Intelligence), VARA (Voice & Relationship), LIA (Lead Intelligence), LEXA (Lead Extraction), TORA (Task Orchestration), and NIRA (Revenue Intelligence)",
        features: [
          "AI-powered GTM execution",
          "CRM data unification", 
          "Compliance-first automation",
          "Multi-agent orchestration",
          "Real-time intent signals",
          "Email automation",
          "Lead enrichment",
          "Revenue analytics"
        ],
        integrations: ["Slack", "HubSpot", "Gmail", "ZoomInfo", "Clearbit", "Salesforce", "6sense", "Bombora"],
        cta: "Join the Waitlist - Be the first to experience Covexa's AI-powered GTM platform"
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
        <h2>AI Agents</h2>
        <p>${pageContent.sections.agents}</p>
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
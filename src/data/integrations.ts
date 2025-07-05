export interface Integration {
  name: string;
  icon: string;
  alt: string;
}

export const integrations: Integration[] = [
  { 
    name: "Slack", 
    icon: "/lovable-uploads/1baa1fa2-cfe6-4ec4-bcf5-18661df0c49d.png",
    alt: "Slack integration - Connect Covexa with Slack for seamless team communication and notifications"
  },
  { 
    name: "HubSpot", 
    icon: "/lovable-uploads/edb4a77e-7c00-4ed1-a948-bb75153f3c9f.png",
    alt: "HubSpot CRM integration - Sync data seamlessly with HubSpot for unified customer management"
  },
  { 
    name: "Gmail", 
    icon: "/lovable-uploads/cbee93df-3279-4077-852d-3527912d35c8.png",
    alt: "Gmail integration - Send and manage emails directly through Covexa with Gmail connectivity"
  },
  { 
    name: "ZoomInfo", 
    icon: "/lovable-uploads/4e39d334-f02f-4ff2-8fe7-5faab452d263.png",
    alt: "ZoomInfo integration - Access comprehensive contact and company data through ZoomInfo"
  },
  { 
    name: "Clearbit", 
    icon: "/lovable-uploads/0575a304-6d6d-4d75-a303-b43850b14f46.png",
    alt: "Clearbit integration - Enrich customer data with Clearbit's business intelligence platform"
  },
  { 
    name: "Salesforce", 
    icon: "/lovable-uploads/c7471250-284f-4fa5-80d0-a6dfb60a933d.png",
    alt: "Salesforce CRM integration - Connect with Salesforce for complete sales pipeline management"
  },
  { 
    name: "6sense", 
    icon: "/lovable-uploads/ace93169-8927-4bc5-b35d-3d32181ccf7e.png",
    alt: "6sense integration - Leverage 6sense intent data for predictive sales and marketing insights"
  },
  { 
    name: "Bombora", 
    icon: "/lovable-uploads/a8a82d48-5586-40b8-a03f-3e37baf58c33.png",
    alt: "Bombora integration - Access intent data and company surge insights through Bombora"
  }
];
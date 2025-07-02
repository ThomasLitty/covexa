
import { useEffect, useState } from "react";

const Integrations = () => {
  const integrations = [
    { 
      name: "Slack", 
      icon: (
        <img 
          src="/lovable-uploads/1baa1fa2-cfe6-4ec4-bcf5-18661df0c49d.png" 
          alt="Slack" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "HubSpot", 
      icon: (
        <img 
          src="/lovable-uploads/edb4a77e-7c00-4ed1-a948-bb75153f3c9f.png" 
          alt="HubSpot" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "Gmail", 
      icon: (
        <img 
          src="/lovable-uploads/cbee93df-3279-4077-852d-3527912d35c8.png" 
          alt="Gmail" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "ZoomInfo", 
      icon: (
        <img 
          src="/lovable-uploads/4e39d334-f02f-4ff2-8fe7-5faab452d263.png" 
          alt="ZoomInfo" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "Clearbit", 
      icon: (
        <img 
          src="/lovable-uploads/0575a304-6d6d-4d75-a303-b43850b14f46.png" 
          alt="Clearbit" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "Salesforce", 
      icon: (
        <img 
          src="/lovable-uploads/c7471250-284f-4fa5-80d0-a6dfb60a933d.png" 
          alt="Salesforce" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "6sense", 
      icon: (
        <img 
          src="/lovable-uploads/ace93169-8927-4bc5-b35d-3d32181ccf7e.png" 
          alt="6sense" 
          className="w-16 h-16 object-contain"
        />
      )
    },
    { 
      name: "Bombora", 
      icon: (
        <img 
          src="/lovable-uploads/a8a82d48-5586-40b8-a03f-3e37baf58c33.png" 
          alt="Bombora" 
          className="w-16 h-16 object-contain"
        />
      )
    }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Works With the Tools
            <span className="text-blue-600"> You Already Use</span>
          </h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
            <p>
              Covexa connects to your GTM ecosystem — integrating with CRMs like HubSpot and Salesforce, enrichment providers like ZoomInfo and Clearbit, and intent data platforms like 6sense, Bombora, and G2.
            </p>
            <p>
              It works through lightweight apps in Slack, Gmail, Chrome, Outlook, and mobile — all powered by Covexa's cloud agents that orchestrate campaigns, ensure compliance, and track performance.
            </p>
            <p className="font-medium">
              Wherever you work, Covexa activates. No tab overload. No platform lock-in.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden">
          <div className="flex space-x-8" style={{
            animation: 'scroll 30s linear infinite',
            animationPlayState: 'running'
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {duplicatedIntegrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-32 h-32"
              >
                <div className="transition-transform duration-300 hover:scale-110">
                  {integration.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Integrations;

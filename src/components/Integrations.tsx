
import { useEffect, useState, useRef } from "react";
import LazyImage from "./LazyImage";

const Integrations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const integrations = [
    { 
      name: "Slack", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/1baa1fa2-cfe6-4ec4-bcf5-18661df0c49d.png" 
          alt="Slack integration - Connect Covexa with Slack for seamless team communication and notifications"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "HubSpot", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/edb4a77e-7c00-4ed1-a948-bb75153f3c9f.png" 
          alt="HubSpot CRM integration - Sync data seamlessly with HubSpot for unified customer management"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "Gmail", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/cbee93df-3279-4077-852d-3527912d35c8.png" 
          alt="Gmail integration - Send and manage emails directly through Covexa with Gmail connectivity"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "ZoomInfo", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/4e39d334-f02f-4ff2-8fe7-5faab452d263.png" 
          alt="ZoomInfo integration - Access comprehensive contact and company data through ZoomInfo"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "Clearbit", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/0575a304-6d6d-4d75-a303-b43850b14f46.png" 
          alt="Clearbit integration - Enrich customer data with Clearbit's business intelligence platform"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "Salesforce", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/c7471250-284f-4fa5-80d0-a6dfb60a933d.png" 
          alt="Salesforce CRM integration - Connect with Salesforce for complete sales pipeline management"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "6sense", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/ace93169-8927-4bc5-b35d-3d32181ccf7e.png" 
          alt="6sense integration - Leverage 6sense intent data for predictive sales and marketing insights"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    },
    { 
      name: "Bombora", 
      icon: (
        <LazyImage 
          src="/lovable-uploads/a8a82d48-5586-40b8-a03f-3e37baf58c33.png" 
          alt="Bombora integration - Access intent data and company surge insights through Bombora"
          className="w-16 h-16"
          width={64}
          height={64}
        />
      )
    }
  ];

  // Triple the array for smoother infinite loop
  const tripleIntegrations = [...integrations, ...integrations, ...integrations];

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section ref={containerRef} className="py-20 bg-gray-50">
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
          <div 
            ref={scrollRef}
            className="flex space-x-8 animate-scroll"
            style={{
              animationPlayState: isVisible && !isPaused ? 'running' : 'paused',
              willChange: 'transform'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {tripleIntegrations.map((integration, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-32 h-32 hover:scale-105"
              >
                <div className="transition-transform duration-300">
                  {integration.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            animation: seamless-scroll 45s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
        
        @keyframes seamless-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

export default Integrations;

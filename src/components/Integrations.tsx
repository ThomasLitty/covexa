
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Integrations = () => {
  const [api, setApi] = useState<any>();

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  const integrations = [
    { 
      name: "Slack", 
      icon: (
        <img 
          src="/lovable-uploads/1baa1fa2-cfe6-4ec4-bcf5-18661df0c49d.png" 
          alt="Slack" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "HubSpot", 
      icon: (
        <img 
          src="/lovable-uploads/d2e9ca25-54b6-4ec7-a52b-57d5c0192395.png" 
          alt="HubSpot" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "Gmail", 
      icon: (
        <img 
          src="/lovable-uploads/cbee93df-3279-4077-852d-3527912d35c8.png" 
          alt="Gmail" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "ZoomInfo", 
      icon: (
        <img 
          src="/lovable-uploads/4e39d334-f02f-4ff2-8fe7-5faab452d263.png" 
          alt="ZoomInfo" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "Clearbit", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm0 3.273a6.545 6.545 0 1 0 0 13.09 6.545 6.545 0 0 0 0-13.09z"/>
        </svg>
      ),
      color: "text-indigo-600"
    },
    { 
      name: "Salesforce", 
      icon: (
        <img 
          src="/lovable-uploads/c7471250-284f-4fa5-80d0-a6dfb60a933d.png" 
          alt="Salesforce" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "6sense", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "text-green-600"
    },
    { 
      name: "Bombora", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Works With the Tools
            <span className="text-blue-600"> You Already Use</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Covexa integrates with the tools your GTM team already uses — from Slack and Gmail to CRMs like HubSpot and Salesforce, and enrichment data from ZoomInfo and Clearbit. More integrations are on the way — including intent data platforms like 6sense, Bombora, and G2 to help prioritize and personalize outreach with real buying signals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {integrations.map((integration, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-40 transform hover:scale-105">
                    <div className={`mb-4 transition-transform duration-300 ${integration.color}`}>
                      {integration.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{integration.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

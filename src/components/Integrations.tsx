
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
          src="/lovable-uploads/edb4a77e-7c00-4ed1-a948-bb75153f3c9f.png" 
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
        <img 
          src="/lovable-uploads/0575a304-6d6d-4d75-a303-b43850b14f46.png" 
          alt="Clearbit" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
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
        <img 
          src="/lovable-uploads/ace93169-8927-4bc5-b35d-3d32181ccf7e.png" 
          alt="6sense" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
    },
    { 
      name: "Bombora", 
      icon: (
        <img 
          src="/lovable-uploads/a8a82d48-5586-40b8-a03f-3e37baf58c33.png" 
          alt="Bombora" 
          className="w-16 h-16 object-contain"
        />
      ),
      color: ""
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

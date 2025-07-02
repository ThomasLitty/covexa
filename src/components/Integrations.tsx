
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Integrations = () => {
  const integrations = [
    { 
      name: "Slack", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
      color: "text-purple-600"
    },
    { 
      name: "HubSpot", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M12.01 0C5.373 0 0 5.373 0 12.01s5.373 12.01 12.01 12.01 12.01-5.373 12.01-12.01S18.647 0 12.01 0zm5.64 17.614c-.94 0-1.73-.625-1.976-1.48a4.851 4.851 0 0 1-3.854 1.954c-2.676 0-4.847-2.17-4.847-4.847 0-2.676 2.17-4.847 4.847-4.847 1.461 0 2.77.65 3.668 1.677V7.403c0-.942.764-1.706 1.706-1.706s1.706.764 1.706 1.706v8.505c0 .942-.764 1.706-1.706 1.706h-.544z"/>
        </svg>
      ),
      color: "text-orange-600"
    },
    { 
      name: "Gmail", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
        </svg>
      ),
      color: "text-red-600"
    },
    { 
      name: "ZoomInfo", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h11c1.38 0 2.5-1.12 2.5-2.5v-15C20 3.12 18.88 2 17.5 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
        </svg>
      ),
      color: "text-blue-600"
    },
    { 
      name: "Clearbit", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818S17.423 21.818 12 21.818 2.182 17.423 2.182 12 6.577 2.182 12 2.182zm0 3.273a6.545 6.545 0 1 0 0 13.09 6.545 6.545 0 0 0 0-13.09z"/>
        </svg>
      ),
      color: "text-indigo-600"
    },
    { 
      name: "Salesforce", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M12.8 9.6c-.3-.6-.9-1.1-1.6-1.1-.9 0-1.6.7-1.6 1.6 0 .5.2.9.5 1.2-.8.2-1.4.9-1.4 1.7 0 1 .8 1.8 1.8 1.8.5 0 .9-.2 1.2-.5.3.3.7.5 1.2.5 1 0 1.8-.8 1.8-1.8 0-.8-.6-1.5-1.4-1.7.3-.3.5-.7.5-1.2 0-.7-.5-1.3-1.2-1.5zm-4.7-2.1c1.1 0 2 .9 2 2 0 .2 0 .4-.1.6.8-.4 1.7-.5 2.6-.2.4-.7 1.2-1.2 2.1-1.2 1.3 0 2.4 1.1 2.4 2.4 0 .6-.2 1.1-.6 1.5.9.3 1.5 1.1 1.5 2.1 0 1.2-1 2.2-2.2 2.2-.6 0-1.1-.2-1.5-.6-.3.4-.8.6-1.3.6-1 0-1.8-.8-1.8-1.8 0-.2 0-.4.1-.5-.8.4-1.7.5-2.6.2-.4.7-1.2 1.2-2.1 1.2-1.3 0-2.4-1.1-2.4-2.4 0-.6.2-1.1.6-1.5-.9-.3-1.5-1.1-1.5-2.1C3.9 8.7 4.9 7.7 6.1 7.5z"/>
        </svg>
      ),
      color: "text-blue-500"
    },
    { 
      name: "6sense", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "text-green-600"
    },
    { 
      name: "Bombora", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
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
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {integrations.map((integration, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 h-32">
                    <div className={`mb-3 ${integration.color}`}>
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

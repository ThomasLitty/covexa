
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaitlistModal from "./WaitlistModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.2);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const useCaseScenarios = [
    {
      src: "/lovable-uploads/0575a304-6d6d-4d75-a303-b43850b14f46.png",
      alt: "SDR creating targeted campaign with Covexa agent guidance",
      title: "Campaign Creation Made Simple",
      description: "Watch Sarah launch a targeted campaign in 3 minutes with AI agent assistance"
    },
    {
      src: "/lovable-uploads/1baa1fa2-cfe6-4ec4-bcf5-18661df0c49d.png",
      alt: "Covexa analyzing Google Sheets lead data for campaign recommendations",
      title: "Smart Lead Analysis",
      description: "Covexa analyzes your lead data and suggests 'Build campaign from this sheet'"
    },
    {
      src: "/lovable-uploads/4e39d334-f02f-4ff2-8fe7-5faab452d263.png",
      alt: "Real-time sales insights during Google Meet calls",
      title: "Meeting Intelligence",
      description: "Get real-time insights and recommendations during sales calls"
    },
    {
      src: "/lovable-uploads/a505b481-291c-4bc3-963d-6f98b5748177.png",
      alt: "Automated meeting prep and calendar integration workflow",
      title: "Meeting Prep Automation",
      description: "Automated meeting preparation with context and recommendations"
    },
    {
      src: "/lovable-uploads/a8a82d48-5586-40b8-a03f-3e37baf58c33.png",
      alt: "Content briefs and campaign recaps in Google Docs",
      title: "Content & Campaign Recaps",
      description: "Automated content briefs and campaign performance summaries"
    },
    {
      src: "/lovable-uploads/ace93169-8927-4bc5-b35d-3d32181ccf7e.png",
      alt: "Product feedback automation and follow-up workflows",
      title: "Feedback Automation",
      description: "Automated responses and intelligent follow-up recommendations"
    },
    {
      src: "/lovable-uploads/bb6ecefa-1818-41f8-a4f0-083f999e9e4d.png",
      alt: "Complete Covexa workflow orchestration across platforms",
      title: "Orchestrated Workflows",
      description: "See how Covexa orchestrates your entire GTM workflow seamlessly"
    }
  ];

  return (
    <>
      <section className="min-h-screen bg-white pt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div 
            ref={heroRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The AI Agent System
              <span className="text-blue-600"> for Modern GTM</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Covexa is your GTM execution layer — unify messy data, accelerate campaign creation, and orchestrate AI-powered outreach that leverages real-time intent signals and works across the tools your team already uses.
            </p>

            <div className="flex justify-center mb-16">
              <button 
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join the Waitlist
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Use Case Scenarios Carousel */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  See Covexa in Action Across Real Workflows
                </h3>
                <p className="text-gray-600 mb-6">
                  Watch how teams use Covexa to transform their GTM operations
                </p>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {useCaseScenarios.map((scenario, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="p-2">
                          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <img
                              src={scenario.src}
                              alt={scenario.alt}
                              className="w-full h-auto object-contain max-h-96"
                              loading="lazy"
                            />
                            <div className="p-4">
                              <h4 className="font-semibold text-gray-800 mb-2">
                                {scenario.title}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {scenario.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                <p className="text-sm text-gray-500 mt-4">
                  Navigate through real use case scenarios using the arrows
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
      </section>
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)}
        source="hero"
      />
    </>
  );
};

export default Hero;

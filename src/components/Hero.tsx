
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
      src: "/lovable-uploads/9634f1c7-0fbd-456b-8771-e05c1503f7c2.png",
      alt: "Slack campaign creation with Covexa AI agent assistance",
      title: "Campaign Creation in Slack",
      description: "Watch Lauren request a campaign and see Covexa AI instantly build a targeted outreach sequence with personalized messaging"
    },
    {
      src: "/lovable-uploads/9b4fd9c5-ab1b-4163-8863-97e55a183690.png",
      alt: "Slack campaign performance reporting and analytics",
      title: "Campaign Performance Reporting",
      description: "Real-time campaign results delivered directly in Slack with detailed metrics and actionable insights"
    },
    {
      src: "/lovable-uploads/8a3776ac-601a-43c9-9d59-ee6feb9ff683.png",
      alt: "Google Sheets smart campaign building from lead data",
      title: "Smart Campaign from Sheets",
      description: "Covexa analyzes your Google Sheets data and suggests 'Build campaign from this Sheet' with intelligent lead segmentation"
    },
    {
      src: "/lovable-uploads/e7613ec2-303a-4ce1-9297-72d0d62cc230.png",
      alt: "Google Meet real-time sales intelligence and insights",
      title: "Real-time Meeting Intelligence",
      description: "Get live insights, talking points, and next steps during Google Meet calls to close more deals"
    },
    {
      src: "/lovable-uploads/50b003ba-a4d0-4c57-9194-197bba77c57b.png",
      alt: "Google Docs automated content briefs and campaign recaps",
      title: "Automated Content Generation",
      description: "Covexa creates detailed content briefs and campaign performance summaries directly in Google Docs"
    },
    {
      src: "/lovable-uploads/71bdaaff-de2a-416f-b8dd-8ea50c224e50.png",
      alt: "Google Calendar meeting preparation with contextual insights",
      title: "Intelligent Meeting Prep",
      description: "Automated meeting preparation with prospect insights and personalized talking points synced to your calendar"
    },
    {
      src: "/lovable-uploads/ef7b7ce8-bbdc-49da-9498-790c6e2f717b.png",
      alt: "Automated product feedback handling and response workflows",
      title: "Product Feedback Automation",
      description: "Intelligent customer feedback analysis with automated responses and smart follow-up recommendations"
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
                  See Covexa in Action Across Your Workflow
                </h3>
                <p className="text-gray-600 mb-6">
                  Real screenshots showing how Covexa works seamlessly within your existing tools
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
                              className="w-full h-auto object-contain max-h-[600px]"
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
                  Navigate through real workflow examples using the arrows
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

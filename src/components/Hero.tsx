
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WaitlistModal from "./WaitlistModal";

const Hero = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useScrollAnimation(0.2);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return <>
      <section className="min-h-screen bg-white pt-20 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div ref={heroRef} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              The AI Agent System
              <span className="text-blue-600"> for Modern GTM</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Covexa is your GTM execution layer — unify messy data, accelerate campaign creation, and orchestrate AI-powered outreach that leverages real-time intent signals and works across the tools your team already uses— an intelligent GTM execution layer that coordinates apps, agents, and actions across your entire revenue stack.
            </p>

            <div className="flex justify-center mb-16">
              <button 
                onClick={() => setIsWaitlistOpen(true)} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Join the waitlist for early access to Covexa"
              >
                Join the Waitlist
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay for smooth transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
      </section>
      
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} source="hero" />
    </>;
};

export default Hero;

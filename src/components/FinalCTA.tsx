
import { ArrowRight, Slack } from "lucide-react";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

const FinalCTA = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Slack size={32} />
              <span className="text-2xl font-bold">Turn Your Workspace into a GTM Command Center</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Transform Your Outbound?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Covexa turns your messy CRM and campaign ideas into clean, compliant, and conversion-ready GTM execution — powered by intelligent agents and built on a compliance-first foundation you can trust.
            </p>

            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mx-auto"
            >
              Join the Waitlist
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
      
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)}
        source="final-cta"
      />
    </>
  );
};

export default FinalCTA;

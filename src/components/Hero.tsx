
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-white pt-20 relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The AI Agent System
            <span className="text-blue-600"> for Modern GTM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Covexa is your GTM execution layer — unify messy data, accelerate campaign creation, and orchestrate AI-powered outreach that leverages real-time intent signals and works across the tools your team already uses.
          </p>

          <div className="flex justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Waitlist
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Slack Mockup Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">#</span>
                  </div>
                  <span className="font-semibold text-gray-800">gtm-campaigns</span>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div>
                      <div className="font-medium text-gray-800">You</div>
                      <div className="text-gray-600">/covexa launch fintech CTOs Singapore</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">C</span>
                    </div>
                    <div>
                      <div className="font-medium text-blue-600">Covexa</div>
                      <div className="text-gray-600">✅ Enriched 247 leads • ✅ Generated 3 copy variants • ✅ Compliance passed • 🚀 Campaign launched</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

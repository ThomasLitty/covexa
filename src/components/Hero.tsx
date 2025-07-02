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
              Covexa is your GTM execution layer — unify messy data, accelerate campaign creation, and orchestrate AI-powered outreach that leverages real-time intent signals and works across the tools your team already uses.
            </p>

            <div className="flex justify-center mb-16">
              <button onClick={() => setIsWaitlistOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Join the Waitlist
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Interactive Conversation Demo */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg transform hover:shadow-xl transition-all duration-500">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">#</span>
                    </div>
                    <span className="font-semibold text-gray-800">gtm-campaigns</span>
                    <span className="text-xs text-gray-500 ml-auto">Live Demo</span>
                  </div>
                  
                  <div className="space-y-4 text-left">
                    {/* SDR Initial Request */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">J</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 mb-1">Jake (SDR)</div>
                        <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                          /covexa launch campaign for fintech CTOs in Singapore
                        </div>
                      </div>
                    </div>

                    {/* Agent Questions */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">C</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-600 mb-1">Covexa</div>
                        <div className="bg-blue-50 rounded-lg p-3 text-gray-700">
                          Great! I'll help you launch that campaign. A few quick questions:
                          <br />• What's your primary goal? (Demo bookings, trial signups, etc.)
                          <br />• Company size range you're targeting?
                          <br />• Any specific pain points to focus on?
                        </div>
                      </div>
                    </div>

                    {/* SDR Response */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">J</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 mb-1">Jake (SDR)</div>
                        <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                          Demo bookings for our new API security platform. Target 100-1000 employees. Focus on compliance and data protection challenges.
                        </div>
                      </div>
                    </div>

                    {/* Agent Analysis & Recommendations */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">Covexa works seamlessly within your existing tools</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-600 mb-1">Covexa</div>
                        <div className="bg-blue-50 rounded-lg p-3 text-gray-700">
                          <div className="font-medium mb-2">✅ Analysis Complete</div>
                          <div className="text-sm space-y-1">
                            <div>• Found <span className="font-semibold text-blue-600">247 qualified CTOs</span> in Singapore fintech (100-1000 employees)</div>
                            <div>• High intent signals detected for 31 prospects</div>
                            <div>• Recommended: Multi-touch email + LinkedIn sequence</div>
                            <div>• Compliance check: ✅ Passed</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Message Options */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">C</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-600 mb-1">Covexa</div>
                        <div className="bg-blue-50 rounded-lg p-3 text-gray-700">
                          <div className="font-medium mb-2">Generated 3 message variants:</div>
                          <div className="text-sm space-y-2">
                            <div className="bg-white p-2 rounded border-l-2 border-green-400">
                              <span className="font-medium">A:</span> Compliance-focused (mentions recent MAS regulations)
                            </div>
                            <div className="bg-white p-2 rounded border-l-2 border-yellow-400">
                              <span className="font-medium">B:</span> ROI-focused (emphasizes cost savings)
                            </div>
                            <div className="bg-white p-2 rounded border-l-2 border-purple-400">
                              <span className="font-medium">C:</span> Innovation-focused (API-first approach)
                            </div>
                          </div>
                          <div className="mt-2 text-sm text-gray-600">
                            React with 🚀 to launch with variant A, or choose another option.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Launch Confirmation */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 text-sm font-medium">J</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-800 mb-1">Jake (SDR)</div>
                        <div className="bg-gray-100 rounded-lg p-3 text-gray-700">
                          🚀 (Variant A looks perfect!)
                        </div>
                      </div>
                    </div>

                    {/* Campaign Launch */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">C</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-600 mb-1">Covexa</div>
                        <div className="bg-green-50 rounded-lg p-3 text-gray-700 border border-green-200">
                          <div className="font-medium text-green-800 mb-2">🚀 Campaign "Singapore Fintech CTOs" Launched!</div>
                          <div className="text-sm space-y-1 text-gray-700">
                            <div>• 247 prospects enrolled in 5-touch sequence</div>
                            <div>• First emails sending in 10 minutes</div>
                            <div>• LinkedIn outreach starting tomorrow 9 AM SGT</div>
                            <div>• Real-time stats available in dashboard</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
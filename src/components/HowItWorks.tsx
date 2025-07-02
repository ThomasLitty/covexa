
import { Bot, Users, Shield, Zap, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const steps = [
    {
      number: "1",
      title: "Segment and enrich your leads",
      agent: "VARA",
      description: "AI agent analyzes and enriches lead data with missing information",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      number: "2", 
      title: "Generate tone-perfect copy",
      agent: "LEXA",
      description: "Creates personalized messaging that resonates with each segment",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      number: "3",
      title: "Apply compliance rules", 
      agent: "LIA",
      description: "Ensures all outreach meets legal and company compliance standards",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      number: "4",
      title: "Sequence and fallback logic",
      agent: "MIRA + ORRA", 
      description: "Sets up smart sequences with automated follow-up workflows",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      number: "5",
      title: "Launch and track results",
      agent: "NIRA",
      description: "Deploys campaigns and provides real-time performance analytics", 
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={ref}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five AI agents work together to transform your GTM operations from messy data to closed deals
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
            {/* Steps Section */}
            <div className="space-y-6 pr-4">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 delay-${index * 100} ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className={`${step.color} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-base flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <div className="text-sm font-medium text-blue-600 mb-2">
                      {step.agent}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Demo Section */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg h-fit">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">#</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-sm">gtm-campaigns</span>
                  <span className="text-xs text-gray-500 ml-auto">Live Demo</span>
                </div>
                
                <div className="space-y-3 text-left">
                  {/* SDR Initial Request */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs font-medium">J</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 mb-1 text-sm">Jake (SDR)</div>
                      <div className="bg-gray-100 rounded-lg p-2 text-gray-700 text-sm">
                        /covexa launch campaign for fintech CTOs in Singapore
                      </div>
                    </div>
                  </div>

                  {/* Agent Questions */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-blue-600 mb-1 text-sm">Covexa</div>
                      <div className="bg-blue-50 rounded-lg p-2 text-gray-700 text-sm">
                        Great! I'll help you launch that campaign. A few quick questions:
                        <br />• What's your primary goal? (Demo bookings, trial signups, etc.)
                        <br />• Company size range you're targeting?
                        <br />• Any specific pain points to focus on?
                      </div>
                    </div>
                  </div>

                  {/* SDR Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs font-medium">J</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 mb-1 text-sm">Jake (SDR)</div>
                      <div className="bg-gray-100 rounded-lg p-2 text-gray-700 text-sm">
                        Demo bookings for our new API security platform. Target 100-1000 employees. Focus on compliance and data protection challenges.
                      </div>
                    </div>
                  </div>

                  {/* Agent Analysis & Recommendations */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-blue-600 mb-1 text-sm">Covexa</div>
                      <div className="bg-blue-50 rounded-lg p-2 text-gray-700 text-sm">
                        <div className="font-medium mb-1">✅ Analysis Complete</div>
                        <div className="text-xs space-y-1">
                          <div>• Found <span className="font-semibold text-blue-600">247 qualified CTOs</span> in Singapore fintech (100-1000 employees)</div>
                          <div>• High intent signals detected for 31 prospects</div>
                          <div>• Recommended: Multi-touch email + LinkedIn sequence</div>
                          <div>• Compliance check: ✅ Passed</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Options */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-blue-600 mb-1 text-sm">Covexa</div>
                      <div className="bg-blue-50 rounded-lg p-2 text-gray-700 text-sm">
                        <div className="font-medium mb-2">Generated 3 message variants:</div>
                        <div className="text-xs space-y-1">
                          <div className="bg-white p-1.5 rounded border-l-2 border-green-400">
                            <span className="font-medium">A:</span> Compliance-focused (mentions recent MAS regulations)
                          </div>
                          <div className="bg-white p-1.5 rounded border-l-2 border-yellow-400">
                            <span className="font-medium">B:</span> ROI-focused (emphasizes cost savings)
                          </div>
                          <div className="bg-white p-1.5 rounded border-l-2 border-purple-400">
                            <span className="font-medium">C:</span> Innovation-focused (API-first approach)
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-gray-600">
                          React with 🚀 to launch with variant A, or choose another option.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Launch Confirmation */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 text-xs font-medium">J</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 mb-1 text-sm">Jake (SDR)</div>
                      <div className="bg-gray-100 rounded-lg p-2 text-gray-700 text-sm">
                        🚀 (Variant A looks perfect!)
                      </div>
                    </div>
                  </div>

                  {/* Campaign Launch */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-blue-600 mb-1 text-sm">Covexa</div>
                      <div className="bg-green-50 rounded-lg p-2 text-gray-700 border border-green-200">
                        <div className="font-medium text-green-800 mb-1 text-sm">🚀 Campaign "Singapore Fintech CTOs" Launched!</div>
                        <div className="text-xs space-y-0.5 text-gray-700">
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
    </section>
  );
};

export default HowItWorks;


import { Bot, Users, Shield, Zap, BarChart3, Network, Radar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const steps = [
    {
      number: "1",
      title: "Orchestrate and analyze",
      agent: "ORRA",
      description: "Central AI orchestrator receives your request and coordinates all specialist agents to execute your campaign",
      icon: <Network className="w-6 h-6" />,
      color: "bg-gray-600"
    },
    {
      number: "2",
      title: "Detect intent and score leads",
      agent: "TORA",
      description: "Analyzes prospect behavior and engagement signals to identify high-intent leads and priority targets",
      icon: <Radar className="w-6 h-6" />,
      color: "bg-orange-600"
    },
    {
      number: "3",
      title: "Segment and enrich your leads",
      agent: "VARA",
      description: "Validates and enriches lead data with missing information, ensuring complete prospect profiles",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-600"
    },
    {
      number: "4", 
      title: "Generate tone-perfect copy",
      agent: "LEXA",
      description: "Creates personalized messaging that resonates with each segment using your brand voice",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-indigo-600"
    },
    {
      number: "5",
      title: "Apply compliance rules", 
      agent: "LIA",
      description: "Ensures all outreach meets legal and company compliance standards before any contact",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-red-600"
    },
    {
      number: "6",
      title: "Execute campaign sequences",
      agent: "MIRA", 
      description: "Deploys multi-channel sequences with smart timing and automated follow-up workflows",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-cyan-600"
    },
    {
      number: "7",
      title: "Track and optimize results",
      agent: "NIRA",
      description: "Provides real-time performance analytics and optimization recommendations", 
      icon: <BarChart3 className="w-6 h-6" />,
      color: "bg-violet-600"
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
              Seven AI agents work invisibly within your existing tools to transform GTM operations — no new apps to learn
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Steps Section */}
            <div className="space-y-6">
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

            {/* Workflow Visualization */}
            <div className="space-y-6">
              {/* CRM Integration Demo */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm font-medium text-gray-600">Salesforce • CRM</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Lead: TechCorp Singapore</h4>
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      🤖 Covexa Enhanced
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Contact:</span>
                      <div className="font-medium">Sarah Chen, CTO</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Company Size:</span>
                      <div className="font-medium">450 employees</div>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <div className="font-medium text-green-800 text-sm">High Intent Signal Detected</div>
                        <div className="text-green-700 text-xs mt-1">
                          Recently viewed API security solutions, downloaded compliance whitepaper
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                      🤖 Auto-craft Sequence
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Platform Integration */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm font-medium text-gray-600">Outreach • Email Sequence</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">Compose Email</h4>
                    <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      🤖 AI-Generated
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="text-gray-500">To:</span> sarah.chen@techcorp.sg
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-500">Subject:</span> 
                      <span className="ml-2 font-medium">API Security Compliance Made Simple for Singapore Fintech</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 leading-relaxed">
                      Hi Sarah,<br/><br/>
                      I noticed TechCorp recently explored API security solutions. With Singapore's upcoming data protection regulations, I thought you'd find our compliance-first approach interesting...<br/><br/>
                      <span className="text-blue-600">🤖 Personalized based on recent activity & compliance focus</span>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm font-medium">
                      ✓ Send Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm">
                      🤖 Generate Variant
                    </button>
                  </div>
                </div>
              </div>

              {/* Slack Integration */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm font-medium text-gray-600">Slack • #revenue-ops</span>
                </div>
                <div className="p-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-blue-600 text-sm">Covexa Bot</div>
                        <div className="text-gray-700 text-sm mt-1">
                          📈 <strong>Campaign Update:</strong> Singapore CTOs sequence launched successfully
                          <br/>• 247 prospects enrolled
                          <br/>• 31 high-intent leads prioritized  
                          <br/>• First responses expected within 24h
                          <br/><br/>
                          <span className="text-green-600">🎯 Ready to launch LinkedIn sequence?</span>
                        </div>
                        <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs">
                          Launch LinkedIn Sequence
                        </button>
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

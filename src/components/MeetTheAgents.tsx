
import { Database, MessageSquare, Shield, Send, Settings, BarChart3, Radar } from "lucide-react";

const MeetTheAgents = () => {
  // ORRA as the central orchestrator
  const centralAgent = {
    name: "ORRA",
    role: "Orchestrates workflows and fallback logic",
    icon: <Settings size={40} />,
    color: "bg-gray-100 text-gray-700",
    accentColor: "border-gray-200"
  };

  // Other agents in the specified order: MIRA, VARA, LIA, TORA, LEXA, NIRA
  const circularAgents = [
    {
      name: "MIRA",
      role: "Executes and sequences multi-channel sends",
      icon: <Send size={32} />,
      color: "bg-cyan-100 text-cyan-700",
      accentColor: "border-cyan-200"
    },
    {
      name: "VARA",
      role: "Validates and enriches lead data",
      icon: <Database size={32} />,
      color: "bg-green-100 text-green-700",
      accentColor: "border-green-200"
    },
    {
      name: "LIA",
      role: "Enforces compliance and suppression logic",
      icon: <Shield size={32} />,
      color: "bg-red-100 text-red-700",
      accentColor: "border-red-200"
    },
    {
      name: "TORA",
      role: "Detects intent signals and scores accounts",
      icon: <Radar size={32} />,
      color: "bg-orange-100 text-orange-700",
      accentColor: "border-orange-200"
    },
    {
      name: "LEXA",
      role: "Writes, rewrites, and tunes GTM messaging",
      icon: <MessageSquare size={32} />,
      color: "bg-indigo-100 text-indigo-700",
      accentColor: "border-indigo-200"
    },
    {
      name: "NIRA",
      role: "Analyzes performance and surfaces insights",
      icon: <BarChart3 size={32} />,
      color: "bg-violet-100 text-violet-700",
      accentColor: "border-violet-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent Agents,
            <span className="text-blue-600"> Purpose-Built for GTM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Covexa is powered by a network of modular AI agents — each one specializing in a distinct GTM function. Together, they form an orchestrated system that turns your intent into execution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          {/* Circular Layout Container */}
          <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Central Agent - ORRA */}
            <div className="absolute z-10">
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                {/* Hexagon shape for central agent - larger */}
                <div 
                  className="w-48 h-48 bg-white shadow-xl border-4 border-gray-200 relative"
                  style={{
                    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className={`p-4 rounded-lg ${centralAgent.color} mb-3`}>
                      {centralAgent.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{centralAgent.name}</h3>
                    <p className="text-gray-600 text-sm text-center max-w-[120px] leading-tight">{centralAgent.role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Agents */}
            {circularAgents.map((agent, index) => {
              const angle = (index * 60) - 90; // Start from top, 60 degrees apart
              const radius = 280; // Distance from center
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`
                  }}
                >
                  <div className="relative transform hover:scale-105 transition-all duration-300">
                    {/* Hexagon shape */}
                    <div 
                      className={`w-36 h-36 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${agent.accentColor} relative`}
                      style={{
                        clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className={`p-3 rounded-lg ${agent.color} mb-2`}>
                          {agent.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{agent.name}</h3>
                        <p className="text-gray-600 text-xs text-center max-w-[100px] leading-tight">{agent.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection line to center */}
                  <div 
                    className="absolute w-0.5 bg-gray-300 opacity-30"
                    style={{
                      height: `${radius - 120}px`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'top',
                      transform: `rotate(${angle + 180}deg) translateX(-50%)`
                    }}
                  />
                </div>
              );
            })}
          </div>
          
          <div className="bg-blue-600 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Every agent is schema-based, explainable, and works together</h3>
            <p className="text-blue-100 text-lg">Not just smarter, but safer.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgents;

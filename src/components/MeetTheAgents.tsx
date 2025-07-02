
import { Database, MessageSquare, Shield, Send, Settings, BarChart3, Radar, User } from "lucide-react";

const MeetTheAgents = () => {
  // ORRA as the primary user interface
  const centralAgent = {
    name: "ORRA",
    role: "Your AI Assistant - Start Here",
    description: "The only agent you need to talk to",
    icon: <Settings size={48} />,
    color: "bg-blue-100 text-blue-700",
    accentColor: "border-blue-300",
    bgColor: "bg-blue-50"
  };

  // Background worker agents
  const backgroundAgents = [
    {
      name: "MIRA",
      role: "Multi-channel execution",
      icon: <Send size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    },
    {
      name: "VARA", 
      role: "Data validation",
      icon: <Database size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    },
    {
      name: "LIA",
      role: "Compliance monitoring",
      icon: <Shield size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    },
    {
      name: "TORA",
      role: "Intent detection",
      icon: <Radar size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    },
    {
      name: "LEXA",
      role: "Message optimization",
      icon: <MessageSquare size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    },
    {
      name: "NIRA",
      role: "Performance analysis",
      icon: <BarChart3 size={24} />,
      color: "bg-gray-100 text-gray-600",
      accentColor: "border-gray-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            One Interface,
            <span className="text-blue-600"> Complete Automation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You only need to talk to ORRA. Behind the scenes, ORRA orchestrates a network of specialized AI agents to handle every aspect of your GTM execution automatically.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          {/* User Flow Indicator */}
          <div className="flex items-center justify-center mb-8 space-x-4">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
              <User size={20} className="text-blue-600" />
              <span className="font-medium text-gray-700">You</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-300"></div>
            <div className="flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2 border-2 border-blue-300">
              <Settings size={20} className="text-blue-600" />
              <span className="font-semibold text-blue-700">ORRA</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm text-gray-600">6 Specialist Agents</span>
            </div>
          </div>

          {/* Agent Network Visualization */}
          <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
            {/* Central Agent - ORRA (Primary Interface) */}
            <div className="absolute z-10">
              <div className="relative transform hover:scale-105 transition-all duration-300 group">
                {/* Pulse animation ring */}
                <div className="absolute inset-0 rounded-full bg-blue-200 opacity-20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-blue-100 opacity-40 animate-pulse"></div>
                
                {/* Main ORRA circle */}
                <div className={`w-56 h-56 ${centralAgent.bgColor} rounded-full shadow-2xl border-4 ${centralAgent.accentColor} relative flex flex-col items-center justify-center p-8`}>
                  <div className={`p-4 rounded-full ${centralAgent.color} mb-4`}>
                    {centralAgent.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{centralAgent.name}</h3>
                  <p className="text-blue-600 font-semibold text-center mb-1">{centralAgent.role}</p>
                  <p className="text-gray-600 text-sm text-center">{centralAgent.description}</p>
                </div>
              </div>
            </div>

            {/* Background Worker Agents */}
            {backgroundAgents.map((agent, index) => {
              const angle = (index * 60) - 90; // Start from top, 60 degrees apart
              const radius = 300; // Distance from center
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
                  <div className="relative transform hover:scale-105 transition-all duration-300 opacity-60 hover:opacity-80">
                    {/* Background worker circle */}
                    <div className={`w-28 h-28 bg-white rounded-full shadow-md border-2 ${agent.accentColor} relative flex flex-col items-center justify-center p-4`}>
                      <div className={`p-2 rounded-full ${agent.color} mb-1`}>
                        {agent.icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-700 mb-1">{agent.name}</h4>
                      <p className="text-xs text-gray-500 text-center leading-tight">{agent.role}</p>
                    </div>
                  </div>
                  
                  {/* Connection line to ORRA */}
                  <div 
                    className="absolute w-0.5 bg-gradient-to-r from-blue-300 to-gray-300 opacity-40"
                    style={{
                      height: `${radius - 140}px`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'top',
                      transform: `rotate(${angle + 180}deg) translateX(-50%)`
                    }}
                  />
                  
                  {/* Animated flow indicator */}
                  <div 
                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
                    style={{
                      left: '50%',
                      top: `${radius - 180}px`,
                      transform: `rotate(${angle + 180}deg) translateX(-50%)`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  />
                </div>
              );
            })}
          </div>
          
          <div className="bg-blue-600 text-white rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Simple for you, sophisticated behind the scenes</h3>
            <p className="text-blue-100 text-lg">Just tell ORRA what you want. The specialist agents handle the rest automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgents;

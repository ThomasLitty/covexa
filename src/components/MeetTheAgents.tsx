
import { Database, MessageSquare, Shield, Send, Settings, BarChart3, Radar, User } from "lucide-react";

const MeetTheAgents = () => {
  // ORRA as the primary user interface
  const centralAgent = {
    name: "ORRA",
    role: "Your AI Assistant",
    description: "The only agent you need to talk to",
    icon: <Settings size={40} />,
    color: "bg-blue-600",
    textColor: "text-white"
  };

  // Background worker agents
  const backgroundAgents = [
    {
      name: "MIRA",
      role: "Multi-channel execution",
      icon: <Send size={20} />,
    },
    {
      name: "VARA", 
      role: "Data validation",
      icon: <Database size={20} />,
    },
    {
      name: "LIA",
      role: "Compliance monitoring",
      icon: <Shield size={20} />,
    },
    {
      name: "TORA",
      role: "Intent detection",
      icon: <Radar size={20} />,
    },
    {
      name: "LEXA",
      role: "Message optimization",
      icon: <MessageSquare size={20} />,
    },
    {
      name: "NIRA",
      role: "Performance analysis",
      icon: <BarChart3 size={20} />,
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

        <div className="max-w-4xl mx-auto">
          {/* User flow indicator */}
          <div className="flex items-center justify-center mb-12 space-x-6">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <User size={20} className="text-gray-600" />
              <span className="font-medium text-gray-700">You</span>
            </div>
            <div className="w-8 h-0.5 bg-blue-300"></div>
            <div className="flex items-center space-x-2 bg-blue-600 rounded-full px-6 py-3 shadow-lg">
              <Settings size={20} className="text-white" />
              <span className="font-semibold text-white">ORRA</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border">
              <span className="text-sm text-gray-600">6 Specialist Agents</span>
            </div>
          </div>

          {/* ORRA - Primary Interface */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="w-48 h-48 bg-blue-600 rounded-full shadow-xl flex flex-col items-center justify-center text-white relative animate-pulse">
                <div className="p-4 bg-blue-500 rounded-full mb-3">
                  {centralAgent.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{centralAgent.name}</h3>
                <p className="text-blue-100 font-medium mb-2">{centralAgent.role}</p>
                <p className="text-blue-200 text-sm">{centralAgent.description}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-lg">Start here - ORRA handles everything else</p>
          </div>

          {/* Background Agents Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-center text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">
              Working Behind the Scenes
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {backgroundAgents.map((agent, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors opacity-70"
                >
                  <div className="p-3 bg-gray-200 rounded-full mb-3">
                    {agent.icon}
                  </div>
                  <h5 className="font-semibold text-gray-700 text-sm mb-1">{agent.name}</h5>
                  <p className="text-xs text-gray-500 text-center">{agent.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Simple for you, sophisticated behind the scenes</h3>
            <p className="text-blue-100 text-lg">Just tell ORRA what you want. The specialist agents handle the rest automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgents;

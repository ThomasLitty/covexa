
import React from 'react';
import { Database, MessageSquare, Shield, Send, Settings, BarChart3, Radar, User, Pen, Activity, Eye, Network } from "lucide-react";

const MeetTheAgents = () => {
  // ORRA as the primary user interface
  const centralAgent = {
    name: "ORRA",
    role: "Orchestration & retry logic",
    description: "The only agent you need to talk to",
    icon: <Network size={40} />,
    color: "bg-gray-600",
    textColor: "text-white",
    accentColor: "gray"
  };

  // Background worker agents with style guide colors and icons
  const backgroundAgents = [
    {
      name: "VARA",
      role: "Data validation + enrichment",
      icon: <Database size={20} />,
      color: "bg-green-600",
      accentColor: "green"
    },
    {
      name: "LEXA", 
      role: "Messaging + tone shaping",
      icon: <Pen size={20} />,
      color: "bg-indigo-600",
      accentColor: "indigo"
    },
    {
      name: "LIA",
      role: "Compliance, suppression, consent",
      icon: <Shield size={20} />,
      color: "bg-red-600",
      accentColor: "red"
    },
    {
      name: "MIRA",
      role: "Campaign execution + sequences",
      icon: <Send size={20} />,
      color: "bg-cyan-600",
      accentColor: "cyan"
    },
    {
      name: "NIRA",
      role: "Analytics + reporting",
      icon: <Eye size={20} />,
      color: "bg-violet-600",
      accentColor: "violet"
    },
    {
      name: "TORA",
      role: "Intent detection + scoring",
      icon: <Radar size={20} />,
      color: "bg-orange-600",
      accentColor: "orange"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            One Interface,
            <span className="text-blue-600"> Complete Automation</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            You only need to talk to ORRA. Behind the scenes, ORRA manages a network of Intelligent Modular Agents (IMA) that think, learn, and adapt using advanced RAG to handle your entire GTM execution with true AI intelligence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* User flow indicator - responsive */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
              <User size={20} className="text-gray-600" />
              <span className="font-medium text-gray-700">You</span>
            </div>
            <div className="w-0.5 h-8 md:w-8 md:h-0.5 bg-blue-300 md:rotate-0 rotate-90"></div>
            <div className="flex items-center space-x-2 bg-gray-600 rounded-full px-6 py-3 shadow-lg">
              <Activity size={20} className="text-white" />
              <span className="font-semibold text-white">ORRA</span>
            </div>
            <div className="w-0.5 h-8 md:w-8 md:h-0.5 bg-gray-300 md:rotate-0 rotate-90"></div>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 shadow-sm border">
              <span className="text-sm text-gray-600">6 Specialist Agents</span>
            </div>
          </div>

          {/* Desktop: Central Agent with Surrounding Agents in Circle */}
          <div className="hidden md:block">
            <div className="relative flex items-center justify-center min-h-[600px]">
              {/* ORRA - Central Agent */}
              <div className="relative z-10">
                <div className="w-48 h-48 bg-gray-600 rounded-full shadow-xl flex flex-col items-center justify-center text-white">
                  <div className="p-4 bg-gray-500 rounded-full mb-3">
                    {centralAgent.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{centralAgent.name}</h3>
                  <p className="text-gray-100 font-medium text-center px-4">AI Orchestrator</p>
                </div>
              </div>

              {/* Surrounding Agents in Circle */}
              {backgroundAgents.map((agent, index) => {
                const angle = (index * 60) - 90; // 60 degrees apart, starting from top
                const radius = 200;
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
                    {/* Agent Circle */}
                    <div className="group flex flex-col items-center">
                      <div className={`w-24 h-24 ${agent.color} rounded-full shadow-lg flex flex-col items-center justify-center text-white group-hover:scale-110 transition-all duration-300`}>
                        <div className="mb-1">
                          {agent.icon}
                        </div>
                        <h5 className="font-semibold text-xs text-center">{agent.name}</h5>
                      </div>
                      <p className="text-xs text-gray-600 text-center leading-relaxed mt-2 max-w-[100px]">{agent.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Stack Layout */}
          <div className="md:hidden">
            {/* ORRA - Central Agent (Mobile) */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-gray-600 rounded-full shadow-xl flex flex-col items-center justify-center text-white">
                <div className="p-3 bg-gray-500 rounded-full mb-2">
                  <Network size={24} />
                </div>
                <h3 className="text-lg font-bold mb-1">{centralAgent.name}</h3>
                <p className="text-gray-100 font-medium text-center px-2 text-xs">AI Orchestrator</p>
              </div>
            </div>

            {/* Background Agents Grid (Mobile) */}
            <div className="grid grid-cols-2 gap-4 px-4">
              {backgroundAgents.map((agent, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className={`w-16 h-16 ${agent.color} rounded-full shadow-lg flex flex-col items-center justify-center text-white group-hover:scale-110 transition-all duration-300 mb-2`}>
                    <div className="mb-1">
                      {React.cloneElement(agent.icon, { size: 16 })}
                    </div>
                    <h5 className="font-semibold text-xs text-center">{agent.name}</h5>
                  </div>
                  <p className="text-xs text-gray-600 text-center leading-relaxed max-w-[120px]">{agent.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom message */}
          <div className="bg-blue-600 text-white rounded-2xl p-6 md:p-8 text-center mt-12">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Simple for you, sophisticated behind the scenes</h3>
            <p className="text-blue-100 text-base md:text-lg">Just tell ORRA what you want. The intelligent agents handle the rest automatically.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgents;

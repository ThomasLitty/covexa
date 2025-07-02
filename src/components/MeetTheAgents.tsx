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
            <div className="flex items-center space-x-2 bg-gray-600 rounded-full px-6 py-3 shadow-lg">
              <Activity size={20} className="text-white" />
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
              <div className="w-48 h-48 bg-gray-600 rounded-full shadow-xl flex flex-col items-center justify-center text-white relative">
                <div className="p-4 bg-gray-500 rounded-full mb-3">
                  {centralAgent.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{centralAgent.name}</h3>
                <p className="text-gray-100 font-medium mb-2">AI Orchestrator</p>
                <p className="text-gray-200 text-sm"></p>
              </div>
            </div>
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
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200"
                >
                  <div className={`p-3 ${agent.color} rounded-full mb-3 group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-white">
                      {agent.icon}
                    </div>
                  </div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1 text-center">{agent.name}</h5>
                  <p className="text-xs text-gray-600 text-center leading-relaxed">{agent.role}</p>
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

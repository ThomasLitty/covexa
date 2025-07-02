
import { Database, MessageSquare, Shield, Send, Settings, BarChart3, Radar } from "lucide-react";

const MeetTheAgents = () => {
  const agents = [
    {
      name: "VARA",
      role: "Validates and enriches lead data",
      icon: <Database size={32} />,
      color: "bg-green-100 text-green-700",
      accentColor: "border-green-200"
    },
    {
      name: "LEXA",
      role: "Writes, rewrites, and tunes GTM messaging",
      icon: <MessageSquare size={32} />,
      color: "bg-indigo-100 text-indigo-700",
      accentColor: "border-indigo-200"
    },
    {
      name: "LIA",
      role: "Enforces compliance and suppression logic",
      icon: <Shield size={32} />,
      color: "bg-red-100 text-red-700",
      accentColor: "border-red-200"
    },
    {
      name: "MIRA",
      role: "Executes and sequences multi-channel sends",
      icon: <Send size={32} />,
      color: "bg-cyan-100 text-cyan-700",
      accentColor: "border-cyan-200"
    },
    {
      name: "ORRA",
      role: "Orchestrates workflows and fallback logic",
      icon: <Settings size={32} />,
      color: "bg-gray-100 text-gray-700",
      accentColor: "border-gray-200"
    },
    {
      name: "NIRA",
      role: "Analyzes performance and surfaces insights",
      icon: <BarChart3 size={32} />,
      color: "bg-violet-100 text-violet-700",
      accentColor: "border-violet-200"
    },
    {
      name: "TORA",
      role: "Detects intent signals and scores accounts",
      icon: <Radar size={32} />,
      color: "bg-orange-100 text-orange-700",
      accentColor: "border-orange-200"
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {agents.map((agent, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 ${agent.accentColor}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${agent.color}`}>
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{agent.role}</p>
              </div>
            ))}
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

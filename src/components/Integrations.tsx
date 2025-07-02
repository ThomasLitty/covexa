
import { Slack, Mail, Database, Zap } from "lucide-react";

const Integrations = () => {
  const integrations = [
    { name: "Slack", icon: <Slack size={40} /> },
    { name: "HubSpot", icon: <Database size={40} /> },
    { name: "Gmail", icon: <Mail size={40} /> },
    { name: "ZoomInfo", icon: <Zap size={40} /> },
    { name: "Clearbit", icon: <Database size={40} /> },
    { name: "Salesforce", icon: <Database size={40} /> }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Works With the Tools
            <span className="text-blue-600"> You Already Use</span>
          </h2>
          <p className="text-xl text-gray-600">
            Start with just Slack. Add CRM, data, and enrichment tools as you scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-gray-600 mb-3">
                  {integration.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;

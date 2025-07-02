
import { Users, MessageSquare, Shield, Zap, BarChart3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Segment and enrich your leads",
      agent: "VARA",
      icon: <Users size={32} />,
      description: "AI agent analyzes and enriches lead data with missing information"
    },
    {
      step: 2,
      title: "Generate tone-perfect copy",
      agent: "LEXA",
      icon: <MessageSquare size={32} />,
      description: "Creates personalized messaging that resonates with each segment"
    },
    {
      step: 3,
      title: "Apply compliance rules",
      agent: "LIA",
      icon: <Shield size={32} />,
      description: "Ensures all outreach meets legal and company compliance standards"
    },
    {
      step: 4,
      title: "Sequence and fallback logic",
      agent: "MIRA + ORRA",
      icon: <Zap size={32} />,
      description: "Sets up smart sequences with automated follow-up workflows"
    },
    {
      step: 5,
      title: "Launch and track results",
      agent: "NIRA",
      icon: <BarChart3 size={32} />,
      description: "Deploys campaigns and provides real-time performance analytics"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Slack-Powered Campaigns.
            <span className="text-blue-600"> Agent-Driven Results.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Covexa is built on intelligent modular agents — each specialized in a GTM task — working together to handle segmentation, copy, enrichment, compliance, and launch.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center gap-8 mb-12 last:mb-0">
              <div className="hidden md:flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full font-bold text-xl flex-shrink-0">
                {item.step}
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
                <div className="flex items-start gap-6">
                  <div className="text-blue-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.agent}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

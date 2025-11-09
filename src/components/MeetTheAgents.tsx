
import React from 'react';
import { Heart, TrendingUp, BarChart3, Shield, Database, Users, Activity, Brain } from "lucide-react";

const MeetTheAgents = () => {
  const modules = [
    {
      name: "Flourish",
      subtitle: "Well-being Intelligence",
      description: "Quantifies organizational well-being and resilience through sentiment, engagement, and psychological safety metrics. Produces a dynamic Flourish Index linked to retention and ESG outcomes.",
      icon: <Heart size={40} />,
      color: "bg-emerald-600",
      features: [
        "Emotional health tracking",
        "Inclusion & belonging metrics",
        "Psychological safety scores",
        "ESG reporting integration"
      ]
    },
    {
      name: "Focus",
      subtitle: "Productivity Intelligence",
      description: "Correlates performance and collaboration data with well-being indicators. Measures cognitive load, meeting intensity, and sustainable productivity patterns to prevent burnout.",
      icon: <Brain size={40} />,
      color: "bg-blue-600",
      features: [
        "Focus time analysis",
        "Workload recovery tracking",
        "Collaboration patterns",
        "Burnout risk detection"
      ]
    }
  ];

  const infrastructureFeatures = [
    {
      title: "EchoPulse Engine",
      description: "Data fusion layer that correlates well-being, engagement, and productivity signals with measurable outcomes",
      icon: <Activity size={24} />
    },
    {
      title: "Governed Analytics",
      description: "Role-based dashboards for executives, HR, and department heads with ISO 45003 compliance",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Privacy-First Design",
      description: "Anonymized aggregation with ESG and AI Ethics standards built in",
      icon: <Shield size={24} />
    },
    {
      title: "Enterprise Integration",
      description: "Connects with existing HRIS, engagement platforms, and collaboration tools",
      icon: <Database size={24} />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your Complete
            <span className="text-blue-600"> People Performance Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Two synergistic modules that connect emotional well-being to organizational performance
          </p>
        </div>

        {/* Modules Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${module.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6`}>
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{module.subtitle}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{module.description}</p>
              <ul className="space-y-2">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Infrastructure Features */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Built on Enterprise-Grade Infrastructure
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8 md:p-12 text-center mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            From Wellness Initiative to Business System
          </h3>
          <p className="text-blue-50 text-lg md:text-xl leading-relaxed">
            Covexa gives you what safety metrics give manufacturing and fraud detection gives finance: 
            <span className="font-semibold text-white"> real-time visibility into people risk before it impacts the bottom line.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheAgents;

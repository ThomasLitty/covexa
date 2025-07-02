import { Shield, Lock, Eye, FileCheck, Server, CheckCircle } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: <Lock size={24} />,
      title: "Your data is never used to train public LLMs",
      description: "Complete isolation ensures your proprietary information stays private"
    },
    {
      icon: <Shield size={24} />,
      title: "All prompts, completions, and agent actions are encrypted in transit",
      description: "End-to-end encryption protects every interaction with our AI agents"
    },
    {
      icon: <FileCheck size={24} />,
      title: "GDPR, CCPA, and consent rules enforced by LIA agent",
      description: "Automated compliance monitoring ensures you meet regulatory requirements"
    },
    {
      icon: <Server size={24} />,
      title: "Optional on-premise PromptDB and agent logging",
      description: "Keep sensitive data within your infrastructure for maximum control"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "SOC 2 & ISO 27001 alignment in progress",
      description: "Working towards industry-standard security certifications"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Security-First</span> by Design
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Covexa is built with enterprise-grade data protection and governance in mind — so you can safely leverage AI without compromising privacy, compliance, or control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">
              Enterprise-grade security. Covexa will protect it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
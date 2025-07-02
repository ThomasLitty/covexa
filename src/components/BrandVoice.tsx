
import { Upload, Settings, CheckCircle, MessageSquare } from "lucide-react";

const BrandVoice = () => {
  const features = [
    {
      icon: <Upload size={24} />,
      title: "Upload your brand guidelines",
      description: "Let LEXA learn from past approvals and existing content"
    },
    {
      icon: <Settings size={24} />,
      title: "Customize tone by persona",
      description: "Adjust messaging style for different segments and audiences"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Ensure compliance and consistency",
      description: "All outbound copy aligns with your voice — clear, compliant, and consistent"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Brand,
              <span className="text-blue-600"> Not Ours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a polished enterprise or a fast-moving startup, Covexa adapts to your unique brand tone and style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
              
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
                <p className="text-lg text-gray-700 font-medium">
                  Covexa's messaging agent doesn't just write — it represents you.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg">
                <div className="text-center">
                  <MessageSquare className="mx-auto text-blue-600 mb-6" size={64} />
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-left">
                      <div className="text-sm text-gray-500 mb-2">Sample Brand Voice</div>
                      <div className="text-gray-800">"Professional yet approachable, data-driven but human"</div>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm text-blue-600 font-medium mb-1">LEXA Output</div>
                        <div className="text-sm text-gray-700">"Hi John, saw your team's recent growth milestone..."</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoice;

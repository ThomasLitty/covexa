

import { Upload, Settings, CheckCircle, MessageSquare, ArrowRight, BarChart3, Globe, Zap, Star } from "lucide-react";

const BrandVoice = () => {
  const features = [
    {
      icon: <Upload size={24} />,
      title: "Upload your brand guidelines",
      description: "Import existing content, style guides, and approved messaging to train LEXA"
    },
    {
      icon: <Settings size={24} />,
      title: "Customize tone by persona",
      description: "Fine-tune messaging style for executives, technical buyers, and end users"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Ensure compliance and consistency",
      description: "Every message aligns with your voice guidelines and legal requirements"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Real-time brand monitoring",
      description: "Track how well your team maintains brand consistency across all touchpoints"
    },
    {
      icon: <Globe size={24} />,
      title: "Multi-language support",
      description: "Maintain your brand voice across different languages and regional markets"
    },
    {
      icon: <Zap size={24} />,
      title: "A/B test different voices",
      description: "Experiment with variations while staying within your brand parameters"
    }
  ];

  const brandExamples = [
    {
      type: "Professional & Data-Driven",
      input: "Follow up with enterprise prospect",
      output: "Hi Sarah, I noticed your team's recent expansion into EMEA markets. Based on similar companies we've helped scale internationally, I believe our platform could reduce your operational overhead by 35-40%. Would you be open to a brief conversation about your current challenges?"
    },
    {
      type: "Casual & Direct",
      input: "Follow up with enterprise prospect", 
      output: "Hey Sarah! Saw the news about your EMEA expansion - congrats! We've helped a bunch of companies tackle the same scaling challenges. Mind if I share how we cut ops costs by 35% for similar teams? Quick 15-min chat?"
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
              Whether you're a polished enterprise or a fast-moving startup, Covexa adapts to your unique brand voice, tone, and messaging style — ensuring every outreach feels authentically you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 shadow-lg">
                <div className="text-center mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Brand Voice Examples</h4>
                  <p className="text-sm text-gray-600">Same input, different brand personalities</p>
                </div>
                
                <div className="space-y-6">
                  {brandExamples.map((example, index) => (
                    <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-blue-600">{example.type}</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-1">Input:</div>
                          <div className="text-sm text-gray-700 italic">"{example.input}"</div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs text-blue-600 font-medium mb-1">LEXA Output:</div>
                          <div className="text-sm text-gray-800">"{example.output}"</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-800">Pro tip:</span> The more context you provide, the better LEXA represents your brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVoice;


import { TrendingUp, Zap, Brain, Target, Users, Radar, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PredictiveIntelligence = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const capabilities = [
    {
      agent: "TORA",
      title: "Intent Signal Detection",
      description: "Monitor buying signals across channels to prioritize high-intent prospects",
      icon: <Radar size={32} />
    },
    {
      agent: "NIRA",
      title: "Revenue Attribution Modeling",
      description: "Track revenue impact across touchpoints to optimize GTM spend",
      icon: <DollarSign size={32} />
    },
    {
      agent: "TORA + VARA",
      title: "Lead Scoring",
      description: "Score leads based on conversion likelihood",
      icon: <Target size={32} />
    },
    {
      agent: "NIRA",
      title: "Campaign Forecasting",
      description: "Forecast campaign outcomes before launch",
      icon: <TrendingUp size={32} />
    },
    {
      agent: "ORRA",
      title: "Dynamic Sequencing",
      description: "Dynamically adapt sequencing based on predicted engagement",
      icon: <Zap size={32} />
    },
    {
      agent: "LEXA",
      title: "Behavioral Personalization",
      description: "Personalize tone and offers by behavior signals",
      icon: <Brain size={32} />
    },
    {
      agent: "Quality Filter",
      title: "Segment Suppression",
      description: "Suppress low-quality or fatigued segments",
      icon: <Users size={32} />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Predictive GTM
            <span className="text-blue-600"> Intelligence</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
            Forecast Outcomes. Prioritize Actions. Predict Success.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Covexa doesn't just execute outbound — it learns. With predictive modeling and AI inference built into its agents, 
            Covexa helps you focus on what's most likely to convert, engage, or churn.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className={`text-2xl font-semibold text-gray-900 mb-12 text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            What It Can Do:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600 transform transition-transform duration-300 hover:scale-110">
                    {capability.icon}
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium mb-1">{capability.agent}</div>
                    <h4 className="text-xl font-semibold text-gray-900">{capability.title}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
            <p className="text-xl text-gray-800 font-medium leading-relaxed">
              Covexa makes GTM teams <span className="text-blue-600 font-semibold">proactive — not reactive</span>. 
              Every action, sequence, and message is backed by predictive intelligence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
    </section>
  );
};

export default PredictiveIntelligence;

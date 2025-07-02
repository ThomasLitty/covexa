
import { Target, Settings, TrendingUp, Users, Crown, RefreshCw, Database } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UseCases = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const roles = [
    {
      role: "CRO",
      value: "Faster GTM execution, clear visibility, and confidence in compliance",
      icon: <Crown size={32} />
    },
    {
      role: "SDR Manager",
      value: "Launch compliant sequences in minutes",
      icon: <Target size={32} />
    },
    {
      role: "RevOps",
      value: "Clean CRM data and enforce outreach rules",
      icon: <Settings size={32} />
    },
    {
      role: "AE (Account Exec)",
      value: "Follow up post-call with AI-generated sequences",
      icon: <Users size={32} />
    },
    {
      role: "Customer Success",
      value: "Trigger renewals or upsell sequences from internal feedback",
      icon: <RefreshCw size={32} />
    },
    {
      role: "Head of Growth",
      value: "Test ICPs with real-time outbound feedback",
      icon: <TrendingUp size={32} />
    },
    {
      role: "Data Intelligence",
      value: "Feed clean, enriched, and scored data into your GTM reporting stack",
      icon: <Database size={32} />
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for GTM Teams
            <span className="text-blue-600"> That Ship Fast</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((item, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:bg-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600 transform transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.role}</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Smooth transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
    </section>
  );
};

export default UseCases;

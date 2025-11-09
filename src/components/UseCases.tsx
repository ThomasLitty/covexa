
import { Target, Settings, TrendingUp, Users, Crown, RefreshCw, Database, BarChart, GitBranch } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const UseCases = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);

  const roles = [
    {
      role: "Board Members",
      value: "ESG-ready people metrics tied to retention, share price, and organizational resilience",
      icon: <Crown size={32} />
    },
    {
      role: "Chief Human Resources Officer",
      value: "Unified well-being and performance intelligence with real-time risk detection",
      icon: <Users size={32} />
    },
    {
      role: "Chief Financial Officer",
      value: "ROI tracking on wellness investments with clear correlation to business outcomes",
      icon: <TrendingUp size={32} />
    },
    {
      role: "People Analytics Leaders",
      value: "Governed data infrastructure that connects sentiment, engagement, and productivity",
      icon: <BarChart size={32} />
    },
    {
      role: "Wellness & Benefits Teams",
      value: "Measure program effectiveness with anonymized behavioral and outcome data",
      icon: <Target size={32} />
    },
    {
      role: "Department Heads",
      value: "Team-level insights on workload, collaboration patterns, and burnout risk",
      icon: <Settings size={32} />
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
            Built for Enterprise Leaders
            <span className="text-blue-600"> Who Value People</span>
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

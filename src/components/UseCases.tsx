
import { Target, Settings, TrendingUp, Users } from "lucide-react";

const UseCases = () => {
  const roles = [
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
      role: "AE",
      value: "Follow up post-call with AI-generated sequences",
      icon: <Users size={32} />
    },
    {
      role: "Head of Growth",
      value: "Test ICPs with real-time outbound feedback",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for GTM Teams
            <span className="text-blue-600"> That Ship Fast</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.role}</h3>
              </div>
              <p className="text-gray-600 text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

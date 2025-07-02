
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      features: ["1 campaign/month", "Slack-based orchestration"],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Pro",
      price: "$49",
      period: "/mo/user",
      features: ["Unlimited campaigns", "CRM sync", "Fallback logic"],
      cta: "Start Pro Trial",
      highlight: true
    },
    {
      name: "Team",
      price: "Custom",
      period: "",
      features: ["Audit trail", "PromptDB feedback", "Admin override"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Free.
            <span className="text-blue-600"> Scale as You Grow.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${plan.highlight ? 'bg-blue-600 text-white ring-4 ring-blue-200' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-lg ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className={plan.highlight ? 'text-blue-200' : 'text-green-500'} />
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                plan.highlight 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

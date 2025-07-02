
import { AlertTriangle, CheckCircle } from "lucide-react";

const AIReadiness = () => {
  const problems = [
    {
      problem: "Incomplete lead profiles",
      solution: "VARA enriches from ZoomInfo/Clearbit",
      agent: "VARA"
    },
    {
      problem: "Segment confusion or overlap",
      solution: "VARA applies ICP clustering",
      agent: "VARA"
    },
    {
      problem: "Unknown consent status",
      solution: "LIA enforces suppression rules",
      agent: "LIA"
    },
    {
      problem: "Copy not tuned for personas",
      solution: "LEXA adjusts tone per segment",
      agent: "LEXA"
    },
    {
      problem: "No feedback loop on what works",
      solution: "NIRA scores performance and feeds PromptDB",
      agent: "NIRA"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make Your GTM
            <span className="text-blue-600"> AI-Ready</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Before you can trust AI to write emails or launch campaigns, your systems need to be structured, compliant, and complete. Covexa gets you there.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-red-50 p-8">
                <h3 className="text-xl font-semibold text-red-800 mb-6 flex items-center gap-2">
                  <AlertTriangle size={24} />
                  Problem
                </h3>
                <div className="space-y-4">
                  {problems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <span className="text-red-500">🚫</span>
                      <span className="text-gray-700">{item.problem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-8">
                <h3 className="text-xl font-semibold text-green-800 mb-6 flex items-center gap-2">
                  <CheckCircle size={24} />
                  Covexa Agent Fix
                </h3>
                <div className="space-y-4">
                  {problems.map((item, index) => (
                    <div key={index} className="p-3 bg-white rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-700">{item.solution}</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {item.agent}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">📊 Result</h4>
              <p className="text-blue-100">
                Structured, AI-actionable GTM data — ready for automation and scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIReadiness;

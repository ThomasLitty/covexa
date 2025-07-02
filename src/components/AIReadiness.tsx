
import { CheckCircle, X, BarChart3 } from "lucide-react";

const AIReadiness = () => {
  const problems = [
    {
      problem: "Incomplete or inconsistent data",
      solution: "VARA enriches with 3rd-party and inferred signals"
    },
    {
      problem: "Segment overlap or confusion", 
      solution: "VARA applies clustering to match your ICP"
    },
    {
      problem: "Unknown consent or compliance risk",
      solution: "LIA suppresses and blocks risky outreach"
    },
    {
      problem: "Messaging not persona-aligned",
      solution: "LEXA rewrites tone and CTAs for each segment"
    },
    {
      problem: "No feedback on what actually works",
      solution: "NIRA tracks results and updates PromptDB"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Make Your GTM AI-Ready
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Before AI can execute your GTM strategy, your systems need to be enriched, segmented, compliant — and clear. Covexa fixes the foundational problems that stall automation and weaken performance.
            </p>
          </div>

          {/* Problems vs Solutions Grid */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center gap-3 p-6 border-r border-gray-200">
                <X className="text-red-500 flex-shrink-0" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Problem</h3>
              </div>
              <div className="flex items-center gap-3 p-6">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">Agent-Powered Fix</h3>
              </div>
            </div>

            {/* Table Rows */}
            {problems.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                <div className="p-6 border-r border-gray-200 flex items-center">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg mt-1">🚫</span>
                    <p className="text-gray-700 leading-relaxed">{item.problem}</p>
                  </div>
                </div>
                <div className="p-6 flex items-center">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✅</span>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mr-2">
                        {item.solution.split(' ')[0]}
                      </span>
                      {item.solution.substring(item.solution.indexOf(' ') + 1)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-8 py-6">
              <BarChart3 className="text-green-600 flex-shrink-0" size={24} />
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">📊</span>
                  <span className="font-semibold text-green-800">Result:</span>
                </div>
                <p className="text-green-800 leading-relaxed">
                  Your GTM data becomes structured, enriched, and ready to power campaigns with precision — across any tool, channel, or region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIReadiness;

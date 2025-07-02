import { CheckCircle, Database, FileText, Download } from "lucide-react";

const DataReadiness = () => {
  const requirements = [
    {
      icon: <Database size={20} />,
      text: "Basic lead and account data in CRM (name, email, title, company)"
    },
    {
      icon: <FileText size={20} />,
      text: "Standard fields like region, industry, consent status (if available)"
    },
    {
      icon: <Download size={20} />,
      text: "Exportable format (via API, CSV, or native CRM connection)"
    }
  ];

  const capabilities = [
    {
      capability: "Enrich missing fields using 3rd-party and inferred data",
      agent: "VARA"
    },
    {
      capability: "Clean, cluster, and segment your contacts into ICPs",
      agent: null
    },
    {
      capability: "Deduplicate and normalize inconsistent field values",
      agent: null
    },
    {
      capability: "Suppress leads with missing or risky consent",
      agent: "LIA"
    },
    {
      capability: "Align tone and CTA based on persona-level data",
      agent: "LEXA"
    },
    {
      capability: "Score and prioritize leads by conversion probability",
      agent: "TORA"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your CRM Doesn't Need to Be Perfect —
            <span className="text-blue-600"> Just AI-Ready</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Covexa meets your data where it is — and makes it usable. Even if your CRM is incomplete, inconsistent, or non-standardized, Covexa's agents prepare your GTM stack for automation, personalization, and AI-powered execution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Minimum Requirements */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                Minimum Requirements
              </h3>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <div className="text-blue-600 flex-shrink-0 mt-0.5">
                      {req.icon}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{req.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What Covexa Can Do */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                What Covexa Can Do:
              </h3>
              <div className="space-y-4">
                {capabilities.map((cap, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="text-gray-700 leading-relaxed">{cap.capability}</span>
                      {cap.agent && (
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium ml-2">
                          {cap.agent}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
            <h4 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">
              ✅ Result
            </h4>
            <p className="text-blue-100 text-lg leading-relaxed">
              Structured, enriched, suppression-ready GTM data — made actionable by agents that do the heavy lifting, not your ops team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataReadiness;
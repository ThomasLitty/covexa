
import { CheckCircle, Database } from "lucide-react";

const DataManagement = () => {
  const features = [
    "Enriches missing titles, industries, and emails",
    "Suppresses risky or non-consented leads (e.g., GDPR)",
    "Deduplicates records across sources",
    "Segments leads based on ICP match",
    "Standardizes messy CRM fields automatically"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Clean Data.
              <span className="text-blue-600"> Confident Outreach.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most GTM tools assume your data is perfect. Covexa knows better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-6 shadow-lg">
                <div className="text-center">
                  <Database className="mx-auto text-blue-600 mb-4" size={48} />
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-xs text-gray-500 mb-1">Data Quality Score</div>
                      <div className="text-xl font-bold text-green-600">94%</div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Enriched</div>
                        <div className="text-lg font-bold text-blue-600">2.4K</div>
                      </div>
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        <div className="text-xs text-gray-500 mb-1">Compliant</div>
                        <div className="text-lg font-bold text-green-600">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Covexa works inside your team's tools — like Slack, HubSpot, and Gmail to clean, cluster, and activate your data with zero extra overhead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataManagement;


import { CheckCircle, Database, ArrowRight, Shield, Users, Target } from "lucide-react";

const DataManagement = () => {
  const features = [
    "Enriches missing titles, industries, and emails",
    "Suppresses risky or non-consented leads (e.g., GDPR)",
    "Deduplicates records across sources",
    "Segments leads based on ICP match",
    "Standardizes messy CRM fields automatically"
  ];

  const dataTransformation = {
    before: {
      name: "john doe",
      title: "Unknown",
      company: "???",
      email: "jdoe@gmai...",
      status: "Incomplete"
    },
    after: {
      name: "John Doe",
      title: "VP Sales",
      company: "TechCorp Inc.",
      email: "john.doe@techcorp.com",
      status: "Verified"
    }
  };

  const pipelineSteps = [
    { icon: <Database size={20} />, label: "Raw Data", color: "text-gray-500" },
    { icon: <Users size={20} />, label: "Enrichment", color: "text-blue-500" },
    { icon: <Shield size={20} />, label: "Validation", color: "text-green-500" },
    { icon: <Target size={20} />, label: "Segmentation", color: "text-purple-500" }
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
                <div className="text-center mb-6">
                  <Database className="mx-auto text-blue-600 mb-4" size={32} />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Data Transformation</h4>
                  <p className="text-sm text-gray-600">See how messy data becomes sales-ready</p>
                </div>

                {/* Before/After Data Cards */}
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <div className="text-xs font-medium text-red-600 mb-2">BEFORE</div>
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-700">Name: <span className="text-red-600">{dataTransformation.before.name}</span></div>
                      <div className="text-gray-700">Title: <span className="text-red-600">{dataTransformation.before.title}</span></div>
                      <div className="text-gray-700">Company: <span className="text-red-600">{dataTransformation.before.company}</span></div>
                      <div className="text-gray-700">Email: <span className="text-red-600">{dataTransformation.before.email}</span></div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs text-red-600 font-medium">{dataTransformation.before.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="text-blue-500" size={20} />
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="text-xs font-medium text-green-600 mb-2">AFTER</div>
                    <div className="space-y-1 text-sm">
                      <div className="text-gray-700">Name: <span className="text-green-600 font-medium">{dataTransformation.after.name}</span></div>
                      <div className="text-gray-700">Title: <span className="text-green-600 font-medium">{dataTransformation.after.title}</span></div>
                      <div className="text-gray-700">Company: <span className="text-green-600 font-medium">{dataTransformation.after.company}</span></div>
                      <div className="text-gray-700">Email: <span className="text-green-600 font-medium">{dataTransformation.after.email}</span></div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">{dataTransformation.after.status}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pipeline Steps */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-xs font-medium text-gray-600 mb-3">PROCESSING PIPELINE</div>
                  <div className="flex justify-between items-center">
                    {pipelineSteps.map((step, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`${step.color} mb-1`}>
                          {step.icon}
                        </div>
                        <span className="text-xs text-gray-600 text-center">{step.label}</span>
                        {index < pipelineSteps.length - 1 && (
                          <ArrowRight className="text-gray-300 absolute ml-8" size={12} />
                        )}
                      </div>
                    ))}
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

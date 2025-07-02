
import { CheckCircle, Database, ArrowRight, Shield, Users, Target, FileSpreadsheet } from "lucide-react";
import { useState, useEffect } from "react";

const DataManagement = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [enrichedRows, setEnrichedRows] = useState<Set<number>>(new Set());

  const features = [
    "Enriches missing titles, industries, and emails",
    "Suppresses risky or non-consented leads (e.g., GDPR)",
    "Deduplicates records across sources",
    "Segments leads based on ICP match",
    "Standardizes messy CRM fields automatically"
  ];

  // Sample data representing messy CRM data
  const sampleData = [
    { id: 1, name: "john doe", title: "", company: "techcorp", email: "jdoe@gmai...", status: "incomplete" },
    { id: 2, name: "SARAH SMITH", title: "unknown", company: "???", email: "", status: "missing" },
    { id: 3, name: "mike johnson", title: "VP", company: "StartupXYZ", email: "mike@startup", status: "invalid" },
    { id: 4, name: "Lisa Chen", title: "", company: "Google Inc", email: "lchen@google.com", status: "partial" },
    { id: 5, name: "bob wilson", title: "Director", company: "Apple", email: "bwilson@apple.com", status: "duplicate" },
    { id: 6, name: "emma davis", title: "", company: "microsoft", email: "edavis@msft", status: "incomplete" },
    { id: 7, name: "ALEX BROWN", title: "unknown", company: "Facebook", email: "", status: "missing" },
    { id: 8, name: "jenny white", title: "Manager", company: "???", email: "jwhite@comp", status: "invalid" },
  ];

  const enrichedData = [
    { id: 1, name: "John Doe", title: "Senior Developer", company: "TechCorp Inc.", email: "john.doe@techcorp.com", status: "verified" },
    { id: 2, name: "Sarah Smith", title: "Marketing Director", company: "InnovateNow", email: "sarah.smith@innovatenow.com", status: "verified" },
    { id: 3, name: "Mike Johnson", title: "VP of Sales", company: "StartupXYZ", email: "mike.johnson@startupxyz.com", status: "verified" },
    { id: 4, name: "Lisa Chen", title: "Product Manager", company: "Google Inc", email: "lchen@google.com", status: "verified" },
    { id: 5, name: "Bob Wilson", title: "Engineering Director", company: "Apple", email: "bwilson@apple.com", status: "verified" },
    { id: 6, name: "Emma Davis", title: "Data Scientist", company: "Microsoft", email: "emma.davis@microsoft.com", status: "verified" },
    { id: 7, name: "Alex Brown", title: "UX Designer", company: "Meta", email: "alex.brown@meta.com", status: "verified" },
    { id: 8, name: "Jenny White", title: "Operations Manager", company: "CloudTech Solutions", email: "jenny.white@cloudtech.com", status: "verified" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev < sampleData.length) {
          setEnrichedRows(current => new Set([...current, prev]));
          return prev + 1;
        } else {
          // Reset animation after a pause
          setTimeout(() => {
            setEnrichedRows(new Set());
            return 0;
          }, 2000);
          return prev;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const getRowData = (index: number) => {
    return enrichedRows.has(index) ? enrichedData[index] : sampleData[index];
  };

  const getRowStatus = (index: number) => {
    return enrichedRows.has(index) ? 'enriched' : 'original';
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <FileSpreadsheet className="mx-auto text-blue-600 mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Data Enrichment</h4>
                <p className="text-sm text-gray-600">Watch messy data become sales-ready in real-time</p>
              </div>

              {/* Google Sheets-like Interface */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
                  <div className="grid grid-cols-5 gap-2 text-xs font-medium text-gray-600">
                    <div>Name</div>
                    <div>Title</div>
                    <div>Company</div>
                    <div>Email</div>
                    <div>Status</div>
                  </div>
                </div>

                {/* Data Rows */}
                <div className="max-h-64 overflow-hidden">
                  {sampleData.map((_, index) => {
                    const rowData = getRowData(index);
                    const rowStatus = getRowStatus(index);
                    const isEnriching = animationStep === index;
                    
                    return (
                      <div 
                        key={index}
                        className={`grid grid-cols-5 gap-2 px-4 py-2 text-xs border-b border-gray-100 transition-all duration-500 ${
                          rowStatus === 'enriched' 
                            ? 'bg-green-50 border-green-200' 
                            : rowStatus === 'original' && (rowData.status === 'incomplete' || rowData.status === 'missing' || rowData.status === 'invalid')
                            ? 'bg-red-50 border-red-200'
                            : 'bg-white'
                        } ${isEnriching ? 'animate-pulse bg-blue-50' : ''}`}
                      >
                        <div className={`truncate ${rowStatus === 'enriched' ? 'text-green-700 font-medium' : rowData.status === 'incomplete' ? 'text-red-600' : 'text-gray-700'}`}>
                          {rowData.name}
                        </div>
                        <div className={`truncate ${rowStatus === 'enriched' ? 'text-green-700 font-medium' : !rowData.title || rowData.title === 'unknown' ? 'text-red-600' : 'text-gray-700'}`}>
                          {rowData.title || '—'}
                        </div>
                        <div className={`truncate ${rowStatus === 'enriched' ? 'text-green-700 font-medium' : rowData.company === '???' ? 'text-red-600' : 'text-gray-700'}`}>
                          {rowData.company}
                        </div>
                        <div className={`truncate ${rowStatus === 'enriched' ? 'text-green-700 font-medium' : !rowData.email || rowData.email.includes('...') || !rowData.email.includes('@') ? 'text-red-600' : 'text-gray-700'}`}>
                          {rowData.email || '—'}
                        </div>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${
                            rowStatus === 'enriched' ? 'bg-green-500' : 
                            rowData.status === 'incomplete' || rowData.status === 'missing' || rowData.status === 'invalid' ? 'bg-red-500' : 'bg-yellow-500'
                          }`}></div>
                          <span className={`text-xs ${
                            rowStatus === 'enriched' ? 'text-green-600' : 
                            rowData.status === 'incomplete' || rowData.status === 'missing' || rowData.status === 'invalid' ? 'text-red-600' : 'text-yellow-600'
                          }`}>
                            {rowStatus === 'enriched' ? 'verified' : rowData.status}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Additional rows to show scale */}
                  {Array.from({ length: 12 }, (_, i) => (
                    <div key={`extra-${i}`} className="grid grid-cols-5 gap-2 px-4 py-2 text-xs border-b border-gray-100 bg-gray-50">
                      <div className="truncate text-gray-400">Loading...</div>
                      <div className="truncate text-gray-400">—</div>
                      <div className="truncate text-gray-400">—</div>
                      <div className="truncate text-gray-400">—</div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <span className="text-xs text-gray-400">pending</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer showing total rows */}
                <div className="bg-gray-50 border-t border-gray-200 px-4 py-2">
                  <div className="text-xs text-gray-500">
                    Showing 20 of 1,247 rows • {enrichedRows.size} enriched
                  </div>
                </div>
              </div>

              {/* Processing Pipeline */}
              <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xs font-medium text-gray-600 mb-3">PROCESSING PIPELINE</div>
                <div className="flex justify-between items-center">
                  {pipelineSteps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center relative">
                      <div className={`${step.color} mb-1 ${animationStep > 0 && index <= 1 ? 'animate-pulse' : ''}`}>
                        {step.icon}
                      </div>
                      <span className="text-xs text-gray-600 text-center">{step.label}</span>
                      {index < pipelineSteps.length - 1 && (
                        <ArrowRight className="text-gray-300 absolute left-8 top-2" size={12} />
                      )}
                    </div>
                  ))}
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

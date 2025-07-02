
import { CheckCircle, FileSpreadsheet } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const DataManagement = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const [enrichedRows, setEnrichedRows] = useState<Set<number>>(new Set());
  const [processingRow, setProcessingRow] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const features = [
    "Enriches missing titles, industries, and emails",
    "Standardizes company sizes and job roles automatically",
    "Derives location data from IP addresses", 
    "Suppresses risky or non-consented leads (e.g., GDPR)",
    "Deduplicates records across sources"
  ];

  // Sample data with realistic minimum data requirements
  const sampleData = [
    { id: 1, name: "John Doe", title: "Sr SW Eng", company: "TechCorp", email: "j.doe@techcorp.com", companySize: "~500", location: "", ip: "", status: "enrichable" },
    { id: 2, name: "S. Smith", title: "unknown", company: "", email: "", companySize: "", location: "", ip: "192.168.1.1", status: "insufficient" },
    { id: 3, name: "Mike Johnson", title: "VP Sales", company: "StartupXYZ", email: "mike@startupxyz.com", companySize: "Small", location: "", ip: "", status: "enrichable" },
    { id: 4, name: "Lisa Chen", title: "PM", company: "Google", email: "lchen@google.com", companySize: "Big", location: "", ip: "", status: "enrichable" },
    { id: 5, name: "", title: "Dir", company: "Apple", email: "director@apple.com", companySize: "", location: "", ip: "203.0.113.5", status: "insufficient" },
    { id: 6, name: "Emma Davis", title: "Marketing Mgr", company: "Microsoft Corp", email: "emma@microsoft.com", companySize: "Enterprise", location: "", ip: "198.51.100.42", status: "enrichable" },
    { id: 7, name: "Alex Brown", title: "UX Designer", company: "Meta", email: "alex.brown@meta.com", companySize: "", location: "", ip: "", status: "enrichable" },
    { id: 8, name: "Jenny W", title: "Mgr", company: "", email: "jenny@", companySize: "", location: "", ip: "192.0.2.15", status: "insufficient" },
  ];

  const enrichedData = [
    { id: 1, name: "John Doe", title: "Senior Software Engineer", company: "TechCorp Inc.", email: "j.doe@techcorp.com", companySize: "Mid-Market (201-1000)", location: "San Francisco, CA", ip: "", status: "verified" },
    { id: 2, name: "S. Smith", title: "unknown", company: "", email: "", companySize: "", location: "Private Network", ip: "192.168.1.1", status: "insufficient" },
    { id: 3, name: "Mike Johnson", title: "VP of Sales", company: "StartupXYZ", email: "mike@startupxyz.com", companySize: "Small Business (1-50)", location: "Austin, TX", ip: "", status: "verified" },
    { id: 4, name: "Lisa Chen", title: "Product Manager", company: "Google Inc", email: "lchen@google.com", companySize: "Enterprise (10,000+)", location: "Mountain View, CA", ip: "", status: "verified" },
    { id: 5, name: "", title: "Dir", company: "Apple", email: "director@apple.com", companySize: "", location: "Sydney, Australia", ip: "203.0.113.5", status: "insufficient" },
    { id: 6, name: "Emma Davis", title: "Marketing Manager", company: "Microsoft Corp", email: "emma@microsoft.com", companySize: "Enterprise (10,000+)", location: "London, UK", ip: "198.51.100.42", status: "verified" },
    { id: 7, name: "Alex Brown", title: "UX/UI Designer", company: "Meta Platforms", email: "alex.brown@meta.com", companySize: "Enterprise (10,000+)", location: "Menlo Park, CA", ip: "", status: "verified" },
    { id: 8, name: "Jenny W", title: "Mgr", company: "", email: "jenny@", companySize: "", location: "Boston, MA", ip: "192.0.2.15", status: "insufficient" },
  ];

  const startAnimation = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationStep(0);
    setEnrichedRows(new Set());
    setProcessingRow(null);

    intervalRef.current = setInterval(() => {
      setAnimationStep((prev) => {
        if (prev < sampleData.length) {
          // Set processing state
          setProcessingRow(prev);
          
          // Complete enrichment after delay - only if record is enrichable
          setTimeout(() => {
            if (sampleData[prev].status === 'enrichable') {
              setEnrichedRows(current => new Set([...current, prev]));
            }
            setProcessingRow(null);
          }, 800);
          
          return prev + 1;
        } else {
          // Animation completed
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsAnimating(false);
          return prev;
        }
      });
    }, 1000);
  };

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsAnimating(false);
    setAnimationStep(0);
    setEnrichedRows(new Set());
    setProcessingRow(null);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getRowData = (index: number) => {
    return enrichedRows.has(index) ? enrichedData[index] : sampleData[index];
  };

  const getRowStatus = (index: number) => {
    if (processingRow === index) return 'processing';
    if (sampleData[index].status === 'insufficient') return 'insufficient';
    return enrichedRows.has(index) ? 'enriched' : 'original';
  };

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

            <div 
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-6 shadow-lg"
              onMouseEnter={startAnimation}
              onMouseLeave={stopAnimation}
            >
              <div className="text-center mb-6">
                <FileSpreadsheet className="mx-auto text-blue-600 mb-4" size={32} />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Live Data Enrichment & Standardization</h4>
                <p className="text-sm text-gray-600">
                  {!isAnimating ? "Hover to see data enrichment in action" : "Enriching & standardizing records..."}
                </p>
              </div>

              {/* Google Sheets-like Interface */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                {/* Header */}
                <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
                  <div className="grid grid-cols-6 gap-2 text-xs font-medium text-gray-600 uppercase tracking-wide">
                    <div>Name</div>
                    <div>Title</div>
                    <div>Company</div>
                    <div>Company Size</div>
                    <div>Location</div>
                    <div>Status</div>
                  </div>
                </div>

                {/* Data Rows */}
                <div className="max-h-80 overflow-y-auto">
                  {sampleData.map((_, index) => {
                    const rowData = getRowData(index);
                    const rowStatus = getRowStatus(index);
                    const isProcessing = processingRow === index;
                    
                    return (
                      <div 
                        key={index}
                        className={`grid grid-cols-6 gap-2 px-4 py-3 text-xs border-b border-gray-100 transition-all duration-500 ${
                          rowStatus === 'enriched' 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' 
                            : rowStatus === 'processing'
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-300 shadow-md transform scale-[1.02]'
                            : rowStatus === 'insufficient'
                            ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200'
                            : 'bg-white hover:bg-gray-50'
                        } ${isProcessing ? 'animate-pulse ring-2 ring-blue-300' : ''}`}
                      >
                        <div className={`truncate font-medium ${
                          rowStatus === 'enriched' ? 'text-green-700' : 
                          rowStatus === 'processing' ? 'text-blue-700' :
                          rowStatus === 'insufficient' ? 'text-red-600' : 'text-gray-700'
                        }`}>
                          {rowData.name || '—'}
                        </div>
                        <div className={`truncate ${
                          rowStatus === 'enriched' ? 'text-green-700 font-medium' : 
                          rowStatus === 'processing' ? 'text-blue-700' :
                          !rowData.title || rowData.title === 'unknown' ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                          {rowData.title || '—'}
                        </div>
                        <div className={`truncate ${
                          rowStatus === 'enriched' ? 'text-green-700 font-medium' : 
                          rowStatus === 'processing' ? 'text-blue-700' :
                          !rowData.company ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                          {rowData.company || '—'}
                        </div>
                        <div className={`truncate ${
                          rowStatus === 'enriched' ? 'text-green-700 font-medium' : 
                          rowStatus === 'processing' ? 'text-blue-700' :
                          !rowData.companySize ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                          {rowData.companySize || '—'}
                        </div>
                        <div className={`truncate ${
                          rowStatus === 'enriched' ? 'text-green-700 font-medium' : 
                          rowStatus === 'processing' ? 'text-blue-700' :
                          !rowData.location ? 'text-gray-500' : 'text-gray-700'
                        }`}>
                          {rowData.location || (rowData.ip ? `IP: ${rowData.ip}` : '—')}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            rowStatus === 'enriched' ? 'bg-green-500 shadow-md' : 
                            rowStatus === 'processing' ? 'bg-blue-500 animate-ping' :
                            rowStatus === 'insufficient' ? 'bg-red-500' : 'bg-yellow-500'
                          }`}></div>
                          <span className={`text-xs font-medium ${
                            rowStatus === 'enriched' ? 'text-green-600' : 
                            rowStatus === 'processing' ? 'text-blue-600' :
                            rowStatus === 'insufficient' ? 'text-red-600' : 'text-yellow-600'
                          }`}>
                            {rowStatus === 'enriched' ? 'verified' : 
                             rowStatus === 'processing' ? 'enriching...' : 
                             rowStatus === 'insufficient' ? 'insufficient data' : 'pending'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer showing enrichment stats */}
                <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      8 total records • <span className="text-green-600 font-medium">{enrichedRows.size} enriched</span> • <span className="text-red-600 font-medium">{sampleData.filter(row => row.status === 'insufficient').length} insufficient data</span>
                    </div>
                    {processingRow !== null && (
                      <div className="text-xs text-blue-600 font-medium animate-pulse">
                        {sampleData[processingRow].status === 'insufficient' 
                          ? `Skipping row ${processingRow + 1} - insufficient data`
                          : `Processing row ${processingRow + 1}...`
                        }
                      </div>
                    )}
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

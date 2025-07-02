const SecurityPrivacy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Security-First
            <span className="text-blue-600"> by Design</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Covexa is built with enterprise-grade data protection and governance in mind — so you can safely leverage AI without compromising privacy, compliance, or control.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Your data is never used to train public LLMs
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  All prompts, completions, and agent actions are encrypted in transit
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  GDPR, CCPA, and consent rules enforced by LIA agent
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Optional on-premise PromptDB and agent logging for sensitive orgs
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  SOC 2 & ISO 27001 alignment in progress
                </p>
              </div>
            </div>
            
            <p className="text-2xl font-semibold text-blue-600 mt-12">
              AI you can trust — with controls you can prove.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityPrivacy;
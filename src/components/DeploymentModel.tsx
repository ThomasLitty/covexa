const DeploymentModel = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cloud-Orchestrated.
            <span className="text-blue-600"> Locally Embedded.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
            Covexa doesn't need to live inside every app to work across them. Lightweight apps on Slack, Chrome, Outlook, and mobile devices connect securely to Covexa's cloud — where agents orchestrate actions, sync context, and manage state.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              What This Enables:
            </h3>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Use Covexa where you already work — without friction or duplicative integrations
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Trigger actions from Slack, get copy in Outlook, and enrich leads from Chrome
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">
                  Agent memory and logic are unified in the cloud — no collisions, no chaos
                </p>
              </div>
            </div>
            
            <p className="text-2xl font-semibold text-blue-600 mt-12">
              Work anywhere. Covexa will orchestrate it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentModel;
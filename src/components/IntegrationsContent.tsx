const IntegrationsContent = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Works With the Tools
        <span className="text-blue-600"> You Already Use</span>
      </h2>
      <div className="text-xl text-gray-600 max-w-4xl mx-auto space-y-4">
        <p>
          Covexa connects to your GTM ecosystem — integrating with CRMs like HubSpot and Salesforce, enrichment providers like ZoomInfo and Clearbit, and intent data platforms like 6sense, Bombora, and G2.
        </p>
        <p>
          It works through lightweight apps in Slack, Gmail, Chrome, Outlook, and mobile — all powered by Covexa's cloud agents that orchestrate campaigns, ensure compliance, and track performance.
        </p>
        <p className="font-medium">
          Wherever you work, Covexa activates. No tab overload. No platform lock-in.
        </p>
      </div>
    </div>
  );
};

export default IntegrationsContent;
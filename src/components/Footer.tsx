
import { Slack } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white mb-4">
            <Slack className="text-blue-400" size={28} />
            Covexa
          </div>
          <p className="text-gray-300 mb-4">
            Your AI GTM copilot for Slack-powered campaigns
          </p>
          <div className="text-sm text-gray-500">
            © 2024 Covexa. All rights reserved. | Outbound, Orchestrated.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

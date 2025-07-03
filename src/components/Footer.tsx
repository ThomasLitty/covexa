
import CovexaLogo from "./CovexaLogo";
import { SocialShare } from "./SocialShare";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <CovexaLogo size="medium" variant="white" />
            </div>
            <p className="text-gray-300 mb-6">
              AI Orchestration Platform for Intelligent GTM Execution
            </p>
            
            {/* Social Sharing Section */}
            <div className="mb-8">
              <div className="bg-gray-800/50 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4 text-white">Share Covexa</h3>
                <div className="[&_.text-muted-foreground]:text-gray-400 [&_.border-green-200]:border-green-600 [&_.bg-green-50]:bg-green-900/20 [&_.text-green-700]:text-green-400 [&_.hover\\:bg-green-100]:hover:bg-green-800/30 [&_.border-blue-200]:border-blue-600 [&_.bg-blue-50]:bg-blue-900/20 [&_.text-blue-700]:text-blue-400 [&_.hover\\:bg-blue-100]:hover:bg-blue-800/30 [&_.border-sky-200]:border-sky-600 [&_.bg-sky-50]:bg-sky-900/20 [&_.text-sky-700]:text-sky-400 [&_.hover\\:bg-sky-100]:hover:bg-sky-800/30 [&_.border-indigo-200]:border-indigo-600 [&_.bg-indigo-50]:bg-indigo-900/20 [&_.text-indigo-700]:text-indigo-400 [&_.hover\\:bg-indigo-100]:hover:bg-indigo-800/30">
                  <SocialShare />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-500">
              © 2024 Covexa. All rights reserved. | Powered by AI Agents
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

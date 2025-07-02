
import CovexaLogo from "./CovexaLogo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CovexaLogo size="medium" variant="white" />
          </div>
          <p className="text-gray-300 mb-4">
            AI Orchestration Platform for Intelligent GTM Execution
          </p>
          <div className="text-sm text-gray-500">
            © 2024 Covexa. All rights reserved. | Powered by AI Agents
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

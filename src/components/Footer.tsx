
import { Brain, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-8 border-t border-purple-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            <Brain className="text-purple-400" size={28} />
            AI Genesis
          </div>
          <p className="text-gray-300 mb-4">
            Pioneering the future with artificial intelligence
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Powered by</span>
            <Sparkles size={16} className="text-purple-400 animate-pulse" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Advanced AI</span>
            <Sparkles size={16} className="text-blue-400 animate-pulse" />
          </div>
          <div className="mt-4 text-sm text-gray-500">
            © 2024 AI Genesis. All rights reserved. | Transforming Tomorrow with AI Today
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

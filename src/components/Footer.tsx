
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">
            WebCraft
          </div>
          <p className="text-gray-300 mb-4">
            Creating digital experiences that matter
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>by WebCraft Team</span>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            © 2024 WebCraft. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

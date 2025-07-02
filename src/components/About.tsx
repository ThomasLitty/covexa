
import { CheckCircle, Users, Award, Rocket } from "lucide-react";

const About = () => {
  const features = [
    "Cutting-edge AI research and development",
    "Industry-leading machine learning expertise",
    "Scalable AI solutions for enterprises",
    "Continuous innovation and model improvement"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Genesis</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are pioneers in artificial intelligence, dedicated to pushing the boundaries of what's possible 
                with machine learning and deep neural networks. Our mission is to democratize AI technology and 
                make intelligent solutions accessible to everyone.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From neural language models to computer vision systems, we develop AI that doesn't just process 
                data—it understands, learns, and evolves to deliver unprecedented insights and capabilities.
              </p>
              
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 group-hover:text-purple-700 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Our AI Journey
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <Users className="text-purple-600" size={32} />
                      <Award className="text-blue-600" size={32} />
                      <Rocket className="text-pink-600" size={32} />
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">10M+</div>
                    <div className="text-lg text-gray-600 mb-4">AI Interactions</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">500+</div>
                    <div className="text-lg text-gray-600">Models Deployed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

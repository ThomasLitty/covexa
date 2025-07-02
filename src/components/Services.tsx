
import { Brain, Eye, MessageSquare, BarChart3, Image, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "Machine Learning",
      description: "Advanced ML algorithms that learn from your data to make intelligent predictions and automate complex decisions."
    },
    {
      icon: <MessageSquare size={32} />,
      title: "Natural Language Processing",
      description: "Understand, interpret, and generate human language with sophisticated NLP models and conversational AI."
    },
    {
      icon: <Eye size={32} />,
      title: "Computer Vision",
      description: "Analyze and interpret visual content with state-of-the-art image recognition and object detection capabilities."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced statistical models and deep learning techniques."
    },
    {
      icon: <Image size={32} />,
      title: "AI Content Generation",
      description: "Create stunning visuals, text, and multimedia content using generative AI and creative algorithms."
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Processing",
      description: "Lightning-fast AI inference and processing for real-time applications and instant decision making."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of artificial intelligence solutions designed to revolutionize your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-purple-200 group"
            >
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

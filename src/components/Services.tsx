
import { Code, Palette, Smartphone, Zap, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies for optimal performance."
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences across all devices."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile First",
      description: "Responsive designs that look and work perfectly on smartphones, tablets, and desktops."
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "Lightning-fast websites optimized for speed, SEO, and user engagement."
    },
    {
      icon: <Shield size={32} />,
      title: "Security",
      description: "Enterprise-grade security measures to protect your data and users' information."
    },
    {
      icon: <Headphones size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your website runs smoothly at all times."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-gray-200"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

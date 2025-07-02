
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "10+ years of industry experience",
    "Award-winning design team",
    "Agile development methodology",
    "100% satisfaction guarantee"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About WebCraft
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a passionate team of designers, developers, and digital strategists 
                dedicated to creating exceptional web experiences. Our mission is to help 
                businesses succeed online through innovative design and cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Since our founding, we have worked with companies of all sizes, from startups 
                to Fortune 500 companies, delivering solutions that drive results and exceed expectations.
              </p>
              
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-xl text-gray-600">Happy Clients</div>
                    <div className="text-4xl font-bold text-purple-600 mt-6 mb-2">99%</div>
                    <div className="text-lg text-gray-600">Success Rate</div>
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

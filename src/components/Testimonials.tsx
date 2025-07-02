
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Covexa let me launch a fully compliant campaign in 10 minutes, directly from Slack. No tabs, no tickets — just results.",
      author: "Head of GTM, Series A SaaS"
    },
    {
      quote: "Finally something that respects my CRM chaos and still works.",
      author: "RevOps Manager, 75-person SaaS"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-8 relative">
                <Quote className="absolute top-4 left-4 text-blue-300" size={32} />
                <blockquote className="text-lg text-gray-700 mb-6 mt-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-blue-600 font-medium">— {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

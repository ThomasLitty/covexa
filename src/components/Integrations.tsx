
import IntegrationsContent from "./IntegrationsContent";
import IntegrationsCarousel from "./IntegrationsCarousel";
import { integrations } from "../data/integrations";

const Integrations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <IntegrationsContent />
        <IntegrationsCarousel integrations={integrations} />
      </div>
    </section>
  );
};

export default Integrations;

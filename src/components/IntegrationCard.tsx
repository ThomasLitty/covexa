import LazyImage from "./LazyImage";
import { Integration } from "../data/integrations";

interface IntegrationCardProps {
  integration: Integration;
  index: number;
}

const IntegrationCard = ({ integration, index }: IntegrationCardProps) => {
  return (
    <div 
      key={index} 
      className="flex-shrink-0 flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-32 h-32 hover:scale-105"
    >
      <div className="transition-transform duration-300">
        <LazyImage 
          src={integration.icon}
          alt={integration.alt}
          className="w-16 h-16"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
};

export default IntegrationCard;
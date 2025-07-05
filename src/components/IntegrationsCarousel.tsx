import IntegrationCard from "./IntegrationCard";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Integration } from "../data/integrations";

interface IntegrationsCarouselProps {
  integrations: Integration[];
}

const IntegrationsCarousel = ({ integrations }: IntegrationsCarouselProps) => {
  const {
    containerRef,
    scrollRef,
    isVisible,
    isPaused,
    handleMouseEnter,
    handleMouseLeave
  } = useInfiniteScroll();

  // Triple the array for smoother infinite loop
  const tripleIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex space-x-8 animate-scroll"
        style={{
          animationPlayState: isVisible && !isPaused ? 'running' : 'paused',
          willChange: 'transform'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {tripleIntegrations.map((integration, index) => (
          <IntegrationCard 
            key={index}
            integration={integration}
            index={index}
          />
        ))}
      </div>

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll {
            animation: seamless-scroll 45s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
        
        @keyframes seamless-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default IntegrationsCarousel;
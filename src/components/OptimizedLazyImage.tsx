import { useEffect, useRef, useState } from "react";

interface OptimizedLazyImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

const OptimizedLazyImage = ({ 
  src, 
  webpSrc,
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  priority = false
}: OptimizedLazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ width, height }}
    >
      {isInView && !hasError && (
        <picture>
          {webpSrc && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          <img
            src={src}
            alt={alt}
            loading={loading}
            className="w-full h-full object-contain"
            onLoad={handleLoad}
            onError={handleError}
            width={width}
            height={height}
            decoding="async"
          />
        </picture>
      )}
      {hasError && (
        <div 
          className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm"
          style={{ width, height }}
        >
          Image not available
        </div>
      )}
    </div>
  );
};

export default OptimizedLazyImage;
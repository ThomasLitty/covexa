import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy" 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ width, height }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="w-full h-full object-contain"
          onLoad={() => setIsLoaded(true)}
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default LazyImage;
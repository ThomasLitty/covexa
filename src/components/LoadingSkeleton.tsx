interface LoadingSkeletonProps {
  className?: string;
  rows?: number;
  avatar?: boolean;
  button?: boolean;
}

const LoadingSkeleton = ({ 
  className = "", 
  rows = 3, 
  avatar = false, 
  button = false 
}: LoadingSkeletonProps) => {
  return (
    <div className={`animate-skeleton ${className}`} role="status" aria-label="Loading content">
      <div className="space-y-4">
        {avatar && (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-muted rounded w-1/3"></div>
              <div className="h-3 bg-muted rounded w-1/4"></div>
            </div>
          </div>
        )}
        
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        ))}
        
        {button && (
          <div className="h-10 bg-muted rounded w-32"></div>
        )}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSkeleton;
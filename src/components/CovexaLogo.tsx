
import React from 'react';

interface CovexaLogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'white' | 'monochrome';
  showText?: boolean;
  className?: string;
}

const CovexaLogo: React.FC<CovexaLogoProps> = ({ 
  size = 'medium', 
  variant = 'primary', 
  showText = true,
  className = '' 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8', 
    large: 'w-10 h-10'
  };

  const textSizes = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          primary: '#ffffff',
          secondary: '#f8fafc',
          accent: '#e2e8f0'
        };
      case 'monochrome':
        return {
          primary: '#374151',
          secondary: '#6b7280',
          accent: '#9ca3af'
        };
      default:
        return {
          primary: '#2563eb',
          secondary: '#06b6d4',
          accent: '#8b5cf6'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg 
          className={sizeClasses[size]} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`primaryGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.accent} />
            </linearGradient>
            <linearGradient id={`energyGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.secondary} stopOpacity="0.8" />
              <stop offset="50%" stopColor={colors.accent} stopOpacity="0.9" />
              <stop offset="100%" stopColor={colors.primary} stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id={`glowGradient-${variant}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={colors.accent} stopOpacity="0.6" />
              <stop offset="100%" stopColor={colors.primary} stopOpacity="0.1" />
            </radialGradient>
          </defs>
          
          {/* Glow effect background */}
          <circle 
            cx="16" 
            cy="16" 
            r="14" 
            fill={`url(#glowGradient-${variant})`}
            className="animate-pulse"
          />
          
          {/* Main dynamic shape - like a forward-moving "C" with energy */}
          <path 
            d="M 6 16 Q 6 8 16 8 Q 20 8 22 10 L 20 12 Q 18 10 16 10 Q 8 10 8 16 Q 8 22 16 22 Q 18 22 20 20 L 22 22 Q 20 24 16 24 Q 6 24 6 16 Z"
            fill={`url(#primaryGradient-${variant})`}
            className="drop-shadow-sm"
          />
          
          {/* Energy streaks suggesting motion and AI power */}
          <path 
            d="M 18 12 L 26 8 L 24 10 L 26 12 L 18 16"
            stroke={`url(#energyGradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="opacity-80"
          />
          
          <path 
            d="M 18 20 L 26 24 L 24 22 L 26 20 L 18 16"
            stroke={`url(#energyGradient-${variant})`}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            className="opacity-80"
          />
          
          {/* Small accent dots suggesting intelligence/data points */}
          <circle cx="12" cy="13" r="1.5" fill={colors.accent} className="opacity-70" />
          <circle cx="14" cy="19" r="1" fill={colors.secondary} className="opacity-60" />
          <circle cx="10" cy="16" r="0.8" fill={colors.primary} className="opacity-50" />
        </svg>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]} ${
          variant === 'white' ? 'text-white' : 
          variant === 'monochrome' ? 'text-gray-800' : 
          'text-gray-900'
        } tracking-tight`}>
          Covexa
        </span>
      )}
    </div>
  );
};

export default CovexaLogo;

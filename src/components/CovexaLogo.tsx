
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
          gradient: 'url(#whiteGradient)'
        };
      case 'monochrome':
        return {
          primary: '#6b7280',
          secondary: '#9ca3af',
          gradient: 'url(#monoGradient)'
        };
      default:
        return {
          primary: '#2563eb',
          secondary: '#06b6d4',
          gradient: 'url(#primaryGradient)'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        className={sizeClasses[size]} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#1d4ed8" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
          <linearGradient id="monoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
        
        {/* Central hexagon representing the core AI orchestration hub */}
        <polygon 
          points="16,6 22,10 22,18 16,22 10,18 10,10" 
          fill={colors.gradient} 
          stroke={colors.primary} 
          strokeWidth="1"
        />
        
        {/* Outer nodes representing different AI agents */}
        <circle cx="8" cy="8" r="2" fill={colors.secondary} />
        <circle cx="24" cy="8" r="2" fill={colors.secondary} />
        <circle cx="8" cy="24" r="2" fill={colors.secondary} />
        <circle cx="24" cy="24" r="2" fill={colors.secondary} />
        
        {/* Connection lines representing data flow and orchestration */}
        <line x1="10" y1="10" x2="8" y2="8" stroke={colors.primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="22" y1="10" x2="24" y2="8" stroke={colors.primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="18" x2="8" y2="24" stroke={colors.primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="22" y1="18" x2="24" y2="24" stroke={colors.primary} strokeWidth="1.5" opacity="0.6" />
        
        {/* Inner neural network pattern */}
        <circle cx="13" cy="13" r="1" fill={colors.primary} opacity="0.8" />
        <circle cx="19" cy="13" r="1" fill={colors.primary} opacity="0.8" />
        <circle cx="16" cy="16" r="1" fill={colors.secondary} />
        <line x1="13" y1="13" x2="19" y2="13" stroke={colors.primary} strokeWidth="1" opacity="0.4" />
        <line x1="16" y1="13" x2="16" y2="16" stroke={colors.primary} strokeWidth="1" opacity="0.4" />
      </svg>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]} ${
          variant === 'white' ? 'text-white' : 
          variant === 'monochrome' ? 'text-gray-600' : 
          'text-gray-900'
        }`}>
          Covexa
        </span>
      )}
    </div>
  );
};

export default CovexaLogo;

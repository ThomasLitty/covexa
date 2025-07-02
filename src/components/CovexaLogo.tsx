
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
    medium: 'text-xl',
    large: 'text-2xl'
  };

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          primary: '#ffffff',
          secondary: '#f1f5f9',
          accent: '#e2e8f0',
          nodes: ['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b']
        };
      case 'monochrome':
        return {
          primary: '#374151',
          secondary: '#6b7280',
          accent: '#9ca3af',
          nodes: ['#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db', '#e5e7eb', '#f3f4f6']
        };
      default:
        return {
          primary: '#1e293b', // Deep charcoal
          secondary: '#475569', // Slate
          accent: '#3b82f6', // Indigo
          nodes: ['#1e293b', '#334155', '#475569', '#64748b', '#06b6d4', '#8b5cf6', '#6366f1'] // Charcoal to soft accents
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
          {/* The Modular Glyph - 7 geometric nodes representing the 7 Covexa agents */}
          {/* Arranged in hexagonal formation for orchestration */}
          
          {/* Center node - Core orchestration */}
          <rect 
            x="13" 
            y="13" 
            width="6" 
            height="6" 
            rx="1.5" 
            fill={colors.nodes[0]}
          />
          
          {/* Top node */}
          <rect 
            x="13.5" 
            y="6" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[1]}
          />
          
          {/* Top right node */}
          <rect 
            x="21" 
            y="9.5" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[2]}
          />
          
          {/* Bottom right node */}
          <rect 
            x="21" 
            y="17.5" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[3]}
          />
          
          {/* Bottom node */}
          <rect 
            x="13.5" 
            y="21" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[4]}
          />
          
          {/* Bottom left node */}
          <rect 
            x="6" 
            y="17.5" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[5]}
          />
          
          {/* Top left node */}
          <rect 
            x="6" 
            y="9.5" 
            width="5" 
            height="5" 
            rx="1.25" 
            fill={colors.nodes[6]}
          />
          
          {/* Subtle connection lines for orchestration (very light) */}
          <g opacity="0.15" stroke={colors.primary} strokeWidth="0.5">
            {/* Center to all outer nodes */}
            <line x1="16" y1="13" x2="16" y2="11" />
            <line x1="19" y1="15" x2="21" y2="13" />
            <line x1="19" y1="17" x2="21" y2="19" />
            <line x1="16" y1="19" x2="16" y2="21" />
            <line x1="13" y1="17" x2="11" y2="19" />
            <line x1="13" y1="15" x2="11" y2="13" />
          </g>
        </svg>
      </div>
      
      {showText && (
        <span className={`font-semibold ${textSizes[size]} ${
          variant === 'white' ? 'text-white' : 
          variant === 'monochrome' ? 'text-gray-800' : 
          'text-slate-900'
        } tracking-tight`} 
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          Covexa
        </span>
      )}
    </div>
  );
};

export default CovexaLogo;

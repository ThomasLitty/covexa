
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
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
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
      <img 
        src="/lovable-uploads/f0ba1cd4-eaac-4d19-bbc9-a715e90bb2a0.png" 
        alt="Covexa"
        className={sizeClasses[size]}
      />
    </div>
  );
};

export default CovexaLogo;

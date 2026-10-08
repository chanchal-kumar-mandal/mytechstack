import React from 'react';
import { Layers } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 30,
  };

  return (
    <div className={`flex items-center gap-3 font-bold tracking-tight ${sizeClasses[size]} ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20">
        <Layers size={iconSizes[size]} />
      </div>
      <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
        MyTechStack
      </span>
    </div>
  );
};
import { ShieldCheck } from 'lucide-react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'white' | 'color';
  showCircle?: boolean;
}

export function Logo({ size = 'medium', variant = 'color', showCircle = true }: LogoProps) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
  };

  const iconSizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  const innerSizeClasses = {
    small: 'w-10 h-10',
    medium: 'w-16 h-16',
    large: 'w-24 h-24',
  };

  if (!showCircle) {
    return (
      <div className={sizeClasses[size]}>
        <ShieldCheck 
          className={`${iconSizeClasses[size]} ${variant === 'white' ? 'text-white' : 'text-blue-600'}`} 
          strokeWidth={2.5} 
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full flex items-center justify-center shadow-lg ${variant === 'white' ? 'bg-white' : 'bg-blue-600'}`}>
      <div className={`${innerSizeClasses[size]} rounded-full flex items-center justify-center ${variant === 'white' ? 'bg-blue-600' : 'bg-white'}`}>
        <ShieldCheck 
          className={`${iconSizeClasses[size]} ${variant === 'white' ? 'text-white' : 'text-blue-600'}`} 
          strokeWidth={2.5} 
        />
      </div>
    </div>
  );
}
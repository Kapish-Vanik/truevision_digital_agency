import { siteConfig } from '@/config/site';

interface BrandLogoProps {
  variant?: 'mark' | 'lockup' | 'lockup-dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const sizeClasses = {
  mark: {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  },
  lockup: {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }
};

export default function BrandLogo({ 
  variant = 'mark', 
  size = 'md', 
  className = '',
  showText = false
}: BrandLogoProps) {
  const logoSrc = variant === 'mark' 
    ? siteConfig.branding.logo.mark 
    : variant === 'lockup-dark'
    ? siteConfig.branding.logo.lockupDark
    : siteConfig.branding.logo.lockup;

  const sizeClass = variant === 'mark' 
    ? sizeClasses.mark[size] 
    : sizeClasses.lockup[size];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img 
        src={logoSrc} 
        alt={siteConfig.branding.logo.alt}
        className={sizeClass}
      />
      {showText && variant === 'mark' && (
        <span className="font-display text-xl font-bold">
          TrueVision
        </span>
      )}
    </div>
  );
}

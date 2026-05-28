import React from 'react';
import Button from './Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttons?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttons,
  overlay = true,
  height = 'lg',
  className = '',
}) => {
  const heightClass = {
    sm: 'min-h-[40vh]',
    md: 'min-h-[60vh]',
    lg: 'min-h-[80vh]',
    xl: 'min-h-screen',
  };

  return (
    <div
      className={`relative flex items-center justify-center ${heightClass[height]} ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900/90"
          aria-hidden="true"
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-silver-100 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {buttons && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.primary && (
              <Button 
                variant="highlight" 
                size="lg" 
                href={buttons.primary.href}
              >
                {buttons.primary.text}
              </Button>
            )}
            {buttons.secondary && (
              <Button 
                variant="outline" 
                size="lg" 
                href={buttons.secondary.href}
                className="border-white bg-white text-primary-900 hover:bg-silver-100 active:bg-silver-200"
              >
                {buttons.secondary.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

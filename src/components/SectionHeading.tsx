import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-primary-600 max-w-3xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-accent-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
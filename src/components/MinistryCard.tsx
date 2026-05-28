import React from 'react';
import Button from './Button';
import { Ministry } from '../types/types';

interface MinistryCardProps {
  ministry: Ministry;
  className?: string;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ ministry, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-all hover:shadow-lg ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={ministry.image}
          alt={ministry.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end justify-start p-6">
          <h3 className="font-heading font-semibold text-xl text-white">{ministry.title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mr-3">
            {/* We'll use an icon name from ministry data */}
            <span dangerouslySetInnerHTML={{ __html: ministry.icon }} />
          </div>
          <p className="text-sm font-medium text-primary-700">Led by {ministry.leader}</p>
        </div>
        
        <p className="text-sm text-primary-600 mb-6">{ministry.description}</p>
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <Button
          variant="outline"
          size="sm"
          href="/contact"
          className="w-full"
        >
          Ask About This Ministry
        </Button>
      </div>
    </div>
  );
};

export default MinistryCard;

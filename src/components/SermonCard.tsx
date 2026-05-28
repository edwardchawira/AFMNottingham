import React from 'react';
import { Play, User, Calendar } from 'lucide-react';
import { Sermon } from '../types/types';

interface SermonCardProps {
  sermon: Sermon;
  className?: string;
}

const SermonCard: React.FC<SermonCardProps> = ({ sermon, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col ${className}`}>
      <div className="relative">
        <img
          src={sermon.thumbnail}
          alt={sermon.title}
          className="w-full h-48 object-cover"
        />
        {sermon.videoUrl && (
          <a
            href={sermon.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-primary-900/40 hover:bg-primary-900/60 transition-colors group"
          >
            <div className="h-16 w-16 bg-primary-500 rounded-full flex items-center justify-center text-white group-hover:bg-highlight-500 transition-colors">
              <Play size={28} fill="currentColor" />
            </div>
          </a>
        )}
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="font-heading font-semibold text-xl text-primary-900 mb-3">{sermon.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-primary-700">
            <User size={16} className="mr-2 flex-shrink-0" />
            <span>{sermon.speaker}</span>
          </div>
          
          <div className="flex items-center text-sm text-primary-700">
            <Calendar size={16} className="mr-2 flex-shrink-0" />
            <span>{sermon.date}</span>
          </div>
        </div>
        
        <p className="text-sm text-primary-600">{sermon.description}</p>
      </div>
    </div>
  );
};

export default SermonCard;

import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import Button from './Button';
import { Event } from '../types/types';

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
  const shouldTintImage = event.title === 'Youth Night';

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col ${className}`}>
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover"
          />
          {shouldTintImage && (
            <div
              className="absolute inset-0 bg-gradient-to-br from-red-900/35 via-primary-900/25 to-primary-900/45"
              aria-hidden="true"
            />
          )}
        </div>
      )}
      <div className="p-6 flex-grow">
        <h3 className="font-heading font-semibold text-xl text-primary-900 mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-primary-700">
            <Calendar size={16} className="mr-2 flex-shrink-0" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-primary-700">
            <Clock size={16} className="mr-2 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-primary-700">
            <MapPin size={16} className="mr-2 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-sm text-primary-600 mb-6">{event.description}</p>
      </div>
      
      {event.registrationLink && (
        <div className="px-6 pb-6 mt-auto">
          <Button
            variant="primary"
            size="sm"
            href={event.registrationLink}
            className="w-full flex justify-center items-center"
          >
            <span>Register</span>
            <ExternalLink size={16} className="ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default EventCard;

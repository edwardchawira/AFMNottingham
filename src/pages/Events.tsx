import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import Button from '../components/Button';
import eventsData from '../data/eventsData';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Simple filtering logic - in a real app, you'd have more sophisticated filtering
  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.slice(0, 3); // Just for demo purposes
  
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Events & Calendar"
        subtitle="Join us for worship, learning, fellowship, and more"
        backgroundImage="https://images.pexels.com/photos/8100966/pexels-photo-8100966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Mark your calendar and join us for these upcoming events"
          />
          
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                All Events
              </button>
              <button
                onClick={() => setFilter('this-week')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'this-week'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                This Week
              </button>
              <button
                onClick={() => setFilter('this-month')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'this-month'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                This Month
              </button>
              <button
                onClick={() => setFilter('special')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'special'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                Special Events
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Info Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-6">Event Registration</h2>
            <p className="text-primary-700 mb-8">
              Some of our events require registration to help us plan effectively. When registration is required, you'll see a "Register" button on the event card. If you have any questions about an event or need assistance with registration, please contact our church office.
            </p>
            <Button variant="primary" href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Recurring Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Weekly Schedule" />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary-500 text-white py-3 px-6">
                <h3 className="font-heading font-semibold text-xl">Sunday</h3>
              </div>
              <div className="p-6 border-b border-silver-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Sunday School</h4>
                    <p className="text-sm text-primary-600">For all ages</p>
                  </div>
                  <p className="text-primary-700">9:15 AM - 10:15 AM</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Sunday Worship Service</h4>
                    <p className="text-sm text-primary-600">Beechdale Community Centre</p>
                  </div>
                  <p className="text-primary-700">11:30 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg shadow-md overflow-hidden mt-8">
              <div className="bg-primary-500 text-white py-3 px-6">
                <h3 className="font-heading font-semibold text-xl">Wednesday</h3>
              </div>
              <div className="p-6 border-b border-silver-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Children's Club</h4>
                    <p className="text-sm text-primary-600">Ages 5-12</p>
                  </div>
                  <p className="text-primary-700">6:00 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Midweek Bible Study</h4>
                    <p className="text-sm text-primary-600">Fellowship Hall</p>
                  </div>
                  <p className="text-primary-700">7:00 PM - 8:30 PM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg shadow-md overflow-hidden mt-8">
              <div className="bg-primary-500 text-white py-3 px-6">
                <h3 className="font-heading font-semibold text-xl">Friday</h3>
              </div>
              <div className="p-6 border-b border-silver-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Youth Night</h4>
                    <p className="text-sm text-primary-600">Ages 13-18</p>
                  </div>
                  <p className="text-primary-700">7:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-primary-900">Prayer Meeting</h4>
                    <p className="text-sm text-primary-600">Prayer Room</p>
                  </div>
                  <p className="text-primary-700">6:30 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;

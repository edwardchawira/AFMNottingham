import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import SermonCard from '../components/SermonCard';
import Button from '../components/Button';
import sermonsData from '../data/sermonsData';

const Media: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Simple filtering logic - in a real app, you'd have more sophisticated filtering
  const filteredSermons = filter === 'all' 
    ? sermonsData 
    : sermonsData.slice(0, 3); // Just for demo purposes
  
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Media & Resources"
        subtitle="Sermons, teachings, and livestreams to help you grow in your faith"
        backgroundImage="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Livestream Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Livestream" 
            subtitle="Join us online for our Sunday service"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative pb-9/16 overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-primary-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4">Our next livestream:</h3>
                  <p className="text-silver-200 mb-6">Sunday at 11:30 AM</p>
                  <Button 
                    variant="highlight" 
                    size="lg" 
                    href="/contact"
                  >
                    Ask About Livestream
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-primary-700 mb-4">
                Can't join us in person? Watch our services live every Sunday at 11:30 AM.
              </p>
              <p className="text-primary-600">
                Past livestreams are available on our YouTube channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Recent Sermons" 
            subtitle="Watch or listen to our latest messages"
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
                All Sermons
              </button>
              <button
                onClick={() => setFilter('series')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'series'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                By Series
              </button>
              <button
                onClick={() => setFilter('speaker')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'speaker'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                By Speaker
              </button>
              <button
                onClick={() => setFilter('topic')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === 'topic'
                    ? 'bg-primary-500 text-white'
                    : 'bg-silver-200 text-primary-700 hover:bg-silver-300'
                }`}
              >
                By Topic
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="primary" 
              href="/contact" 
              size="lg"
            >
              Ask About Sermons
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Additional Resources" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-primary-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Bible Study Guides</h3>
              <p className="text-primary-700 mb-6">
                Download materials from our recent Bible studies to continue your personal study at home.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Request Resources
              </Button>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Podcast</h3>
              <p className="text-primary-700 mb-6">
                Listen to our weekly podcast featuring sermon audio and special episodes on various topics.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Ask About Podcast
              </Button>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Devotionals</h3>
              <p className="text-primary-700 mb-6">
                Sign up for our daily devotional emails to receive spiritual encouragement throughout your week.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;

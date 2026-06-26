import React from 'react';
import { Option as Motion } from 'lucide-react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import eventsData from '../data/eventsData';
import sermonsData from '../data/sermonsData';

const Home: React.FC = () => {
  // Get upcoming events (first 3)
  const upcomingEvents = eventsData.slice(0, 3);
  
  // Get latest sermon
  const latestSermon = sermonsData[0];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Nottingham Revival Centre"
        subtitle="A multi-racial, Holy Spirit-driven church family serving Nottingham with the love and message of Jesus Christ."
        backgroundImage="/hero-empowered-impact.jpg"
        buttons={{
          primary: {
            text: 'Plan Your Visit',
            href: '/contact',
          },
          secondary: {
            text: 'Watch Live',
            href: '/media',
          },
        }}
        height="lg"
      />

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <img
                src="/welcome-church-family.jpg"
                alt="Welcome to Nottingham Revival Centre"
                className="h-80 w-full rounded-lg object-cover object-center shadow-lg md:h-[420px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-6">Welcome to Our Church Family</h2>
              <div className="h-1 w-20 bg-accent-500 mb-6"></div>
              <p className="text-primary-700 mb-8">
                Nottingham Revival Centre is a loving and caring body of ambassadors for Christ. We are committed to racial understanding, Spirit-led worship, biblical teaching, prayer, counselling, and practical service that responds to the needs of our community.
              </p>
              <p className="text-primary-700 mb-8">
                We exist to participate in community transformation through preaching, teaching, counselling, and ministries that help people encounter God's love, grow in faith, and serve Nottingham with compassion and dignity.
              </p>
              <Button variant="primary" href="/about" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Highlights */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Vision in Action"
            subtitle="The values that shape our life together and our service to Nottingham"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: 'Multi-racial',
                text: 'We encourage understanding, respect, love, and equality among people of every race and background.',
              },
              {
                title: 'Holy Spirit Driven',
                text: 'We rely on the Holy Spirit to empower believers and equip the church with gifts for ministry.',
              },
              {
                title: 'Loving and Caring',
                text: 'We seek to love and care for children, youth, adults, families, and our wider community as Christ loves us.',
              },
              {
                title: 'Ambassadors',
                text: 'We represent God\'s kingdom in everyday life, bringing kingdom values into our community.',
              },
              {
                title: 'Community Sensitive',
                text: 'We identify local needs and offer support through ministries, community projects, and practical care.',
              },
            ].map((value) => (
              <div key={value.title} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="font-heading text-lg font-semibold text-primary-900">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Join Us This Week" 
            subtitle="We'd love to welcome you to one of our services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Sunday Service</h3>
              <p className="text-primary-700 mb-2">11:30 AM - 2:00 PM</p>
              <p className="text-sm text-primary-600">Beechdale Community Centre</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Wednesday Bible Study</h3>
              <p className="text-primary-700 mb-2">7:00 PM - 8:30 PM</p>
              <p className="text-sm text-primary-600">Fellowship Hall</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Friday Prayer Meeting</h3>
              <p className="text-primary-700 mb-2">6:30 PM - 8:00 PM</p>
              <p className="text-sm text-primary-600">Prayer Room</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" href="/contact" size="lg">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Sermon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Latest Message" 
            subtitle="Watch our most recent sermon"
          />
          
          <div className="flex flex-col md:flex-row items-center bg-primary-50 rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/2 relative aspect-video">
              <img
                src={latestSermon.thumbnail}
                alt={latestSermon.title}
                className="w-full h-full object-cover"
              />
              {latestSermon.videoUrl && (
                <a
                  href={latestSermon.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-primary-900/40 hover:bg-primary-900/60 transition-colors group"
                >
                  <div className="h-16 w-16 bg-primary-500 rounded-full flex items-center justify-center text-white group-hover:bg-highlight-500 transition-colors">
                    <Motion size={28} fill="currentColor" />
                  </div>
                </a>
              )}
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-4">{latestSermon.title}</h3>
              <p className="text-sm text-primary-600 mb-4">
                <span className="font-medium">{latestSermon.speaker}</span> • {latestSermon.date}
              </p>
              <p className="text-primary-700 mb-8">{latestSermon.description}</p>
              <div className="flex space-x-4">
                {latestSermon.videoUrl && (
                  <Button variant="primary" href={latestSermon.videoUrl} external>
                    Watch Now
                  </Button>
                )}
                <Button variant="outline" href="/media">
                  All Sermons
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Upcoming Events" 
            subtitle="Join us for these upcoming activities and gatherings"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" href="/events" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Get Connected?</h2>
          <p className="text-silver-200 mb-10 text-lg">
            Whether you're new to faith, returning to church, or looking for a community, we'd love to welcome you this Sunday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="highlight" size="lg" href="/contact">
              Plan Your Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/about"
              className="border-white bg-white text-primary-900 hover:bg-silver-100 active:bg-silver-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

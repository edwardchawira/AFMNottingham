import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import MinistryCard from '../components/MinistryCard';
import Button from '../components/Button';
import ministriesData from '../data/ministriesData';

const strategyPathways = [
  {
    title: 'Preaching and Teaching',
    text: 'We proclaim the gospel, teach Scripture, and help believers grow in holiness, character, calling, and spiritual gifts.',
  },
  {
    title: 'Counselling and Restoration',
    text: 'We support people through prayer, pastoral care, healing, restoration, forgiveness, and discipleship.',
  },
  {
    title: 'Community Transformation',
    text: 'We identify local needs, support community projects, raise funds where needed, and serve Nottingham with compassion.',
  },
  {
    title: 'Mentorship and Service',
    text: 'We encourage relationships that strengthen people as fathers, friends, and followers, helping each person serve with their gifts.',
  },
];

const Ministries: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Ministries"
        subtitle="Serving God, people, Nottingham, and the nations through Spirit-led ministry"
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Ministries Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Growing Together in Faith" 
            subtitle="Explore the ministries where you can connect, serve, grow, and help meet the needs of our community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministriesData.map((ministry) => (
              <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-900 mb-6">Get Involved</h2>
            <p className="text-primary-700 mb-8">
              We believe every believer has gifts to serve the body of Christ and bless the community. Whether you are called to children, youth, worship, prayer, counselling, outreach, missions, or practical support, there is a place for you to serve at Nottingham Revival Centre.
            </p>
            <Button variant="primary" href="/contact" size="lg">
              Contact Us to Serve
            </Button>
          </div>
        </div>
      </section>

      {/* Ministry Strategy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Serve"
            subtitle="Our ministries express the mission through preaching, teaching, counselling, and practical support"
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {strategyPathways.map((pathway) => (
              <div key={pathway.title} className="rounded-lg bg-primary-50 p-7 shadow-md">
                <h3 className="font-heading text-xl font-semibold text-primary-900">{pathway.title}</h3>
                <p className="mt-4 leading-7 text-primary-700">{pathway.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Info */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Volunteer Opportunities" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Sunday Service Team</h3>
              <p className="text-primary-700 mb-6">
                Help create a welcoming and reverent environment for worship, teaching, prayer, and fellowship.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Children & Youth</h3>
              <p className="text-primary-700 mb-6">
                Invest in the next generation as a teacher, helper, mentor, or caring role model.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Prayer & Worship</h3>
              <p className="text-primary-700 mb-6">
                Serve through music, intercession, prayer gatherings, and Spirit-led encouragement.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Community Outreach</h3>
              <p className="text-primary-700 mb-6">
                Help us identify community needs, support projects, raise resources, and serve the poor and needy.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;

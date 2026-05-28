import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import MinistryCard from '../components/MinistryCard';
import Button from '../components/Button';
import ministriesData from '../data/ministriesData';

const Ministries: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Our Ministries"
        subtitle="Areas of service and community building at AFM Church"
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Ministries Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Growing Together In Faith" 
            subtitle="Explore our various ministries and find where you can connect, serve, and grow"
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
              We believe that everyone has a place to serve and make a difference. Whether you're interested in working with children, leading worship, serving in our community outreach, or using your technical skills behind the scenes, there's a place for you at AFM Church.
            </p>
            <Button variant="primary" href="/contact" size="lg">
              Contact Us to Serve
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteering Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Volunteer Opportunities" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Sunday Service Team</h3>
              <p className="text-primary-700 mb-6">
                Help create a welcoming environment for our Sunday services by serving as a greeter, usher, in the cafe, or on our tech team.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Children & Youth</h3>
              <p className="text-primary-700 mb-6">
                Invest in the next generation by serving in our children's or youth ministries as a teacher, helper, or mentor.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Worship Team</h3>
              <p className="text-primary-700 mb-6">
                If you're musically gifted, consider joining our worship team as a vocalist, musician, or tech crew member.
              </p>
              <Button variant="outline" href="/contact" size="sm">
                Learn More
              </Button>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-4">Community Outreach</h3>
              <p className="text-primary-700 mb-6">
                Help us serve our local community through food drives, homeless ministry, or other outreach initiatives.
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
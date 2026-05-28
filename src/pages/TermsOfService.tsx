import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';

const TermsOfService: React.FC = () => {
  return (
    <div>
      <Hero
        title="Terms of Service"
        subtitle="Guidelines for using the AFM Church Nottingham website"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading title="Website Use" />
          <div className="space-y-6 text-primary-700">
            <p>
              This website provides information about AFM Church Nottingham, including
              ministries, events, media, and ways to contact the church.
            </p>
            <p>
              Please do not misuse the website, attempt to disrupt it, or submit content
              that is unlawful, abusive, or unrelated to church communication.
            </p>
            <p>
              Event details, service times, and contact information may change. Please
              contact the church office if you need confirmation before visiting or attending
              an event.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;

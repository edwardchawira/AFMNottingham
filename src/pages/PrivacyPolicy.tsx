import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="How AFM Church Nottingham handles information shared through this website"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading title="Your Information" />
          <div className="space-y-6 text-primary-700">
            <p>
              We only ask for information needed to respond to enquiries, prayer requests,
              event questions, or requests to connect with the church.
            </p>
            <p>
              Information submitted through email or contact links is used to reply to your
              message and support normal church administration. We do not sell personal
              information.
            </p>
            <p>
              If you would like us to update or delete information you have shared with us,
              please contact the church office.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

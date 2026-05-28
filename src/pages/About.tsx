import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import TeamMember from '../components/TeamMember';
import teamData from '../data/teamData';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About AFM Church"
        subtitle="Our mission, vision, and the people who make it happen"
        backgroundImage="https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Mission & Vision" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-4">Our Mission</h3>
              <div className="h-1 w-12 bg-accent-500 mb-6"></div>
              <p className="text-primary-700">
                To empower people to impact Nottingham with the love and message of Jesus Christ, creating a community of believers who are growing in their faith, serving others, and sharing God's love with the world.
              </p>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-4">Our Vision</h3>
              <div className="h-1 w-12 bg-accent-500 mb-6"></div>
              <p className="text-primary-700">
                To see lives transformed by the power of God, families restored, communities renewed, and Nottingham impacted with the Gospel. We envision a church that is diverse, welcoming, and actively engaged in making disciples who make disciples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="What We Believe" 
            subtitle="Core values and beliefs that guide our church"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">The Bible</h3>
              <p className="text-primary-700">We believe the Bible is God's Word, completely true and the ultimate guide for our lives and faith.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">God</h3>
              <p className="text-primary-700">We believe in one God who exists in three persons: Father, Son, and Holy Spirit.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">Jesus Christ</h3>
              <p className="text-primary-700">We believe Jesus is the Son of God who came to earth, lived a perfect life, died for our sins, and rose again to give us eternal life.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">Salvation</h3>
              <p className="text-primary-700">We believe salvation is a gift from God received through faith in Jesus Christ alone.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">Holy Spirit</h3>
              <p className="text-primary-700">We believe the Holy Spirit empowers believers to live godly lives and equips them with spiritual gifts for ministry.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-xl text-primary-900 mb-2">The Church</h3>
              <p className="text-primary-700">We believe the church is the body of Christ, called to worship God, make disciples, and serve the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Church History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our History" />
          
          <div className="max-w-3xl mx-auto prose text-primary-700">
            <p>
              AFM Church Nottingham began with a group of believers who shared a vision to build a Christ-centred community and impact Nottingham with the Gospel.
            </p>
            
            <p>
              Over time, the church has grown into a welcoming congregation where people gather for worship, prayer, teaching, fellowship, and service.
            </p>
            
            <p>
              Our ministries continue to support children, young people, families, and the wider community through practical service and spiritual encouragement.
            </p>
            
            <p>
              As we look to the future, we remain committed to seeing lives transformed and sharing God's love and grace across Nottingham and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the people who guide and serve our church"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

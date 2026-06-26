import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import TeamMember from '../components/TeamMember';
import teamData from '../data/teamData';

const visionElements = [
  {
    title: 'Multi-racial',
    description:
      'We encourage racial tolerance through interaction, understanding, respect, and love among people of different races. All people are equal before the Lord and should be treated with dignity.',
  },
  {
    title: 'Holy Spirit Driven',
    description:
      'The Holy Spirit empowers us to fulfil our vision by giving gifts to believers as God sees fit, strengthening ministry within the body of Christ.',
  },
  {
    title: 'Loving and Caring',
    description:
      'We love and care for others as Christ loved us, serving children, youth, adults, all races, and both genders through the love we receive from the Lord.',
  },
  {
    title: 'Ambassadors for Christ',
    description:
      'The church represents God\'s kingdom on earth in a dynamic way, implementing kingdom values in every aspect of life and community.',
  },
  {
    title: 'Sensitive to Community Needs',
    description:
      'We seek to identify the needs of our community holistically and offer support through ministries, community projects, and fundraising wherever we are able.',
  },
];

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Nottingham Revival Centre"
        subtitle="Our vision, mission, strategy, and the people who make it happen"
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
              <p className="text-primary-700 leading-7">
                In line with our vision, we are here to be a Holy Spirit-driven body of ambassadors for Christ that is multi-racial, loving, caring, and sensitive to the needs of the community. We exist to participate in community transformation through preaching, teaching, and counselling.
              </p>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-lg shadow-md">
              <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-4">Our Vision</h3>
              <div className="h-1 w-12 bg-accent-500 mb-6"></div>
              <p className="text-primary-700 leading-7">
                The Revival Centre is to be a multi-racial, Holy Spirit-driven, loving, caring body of ambassadors for Christ, sensitive to the needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Elements Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Shapes Our Vision"
            subtitle="The core elements that guide our life, worship, and service"
          />

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visionElements.map((element) => (
              <div key={element.title} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="font-heading text-xl font-semibold text-primary-900">{element.title}</h3>
                <p className="mt-4 leading-7 text-primary-700">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Beliefs Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Strategy" subtitle="A threefold passion for God, people, and Nottingham" />
          
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="font-heading text-xl font-semibold text-primary-900">A Passion for God and Integrity</h3>
              <ul className="mt-5 space-y-3 text-primary-700">
                <li>Acknowledge the lordship of Christ and remain obedient to His commands.</li>
                <li>Gather regularly for worship, prayer, teaching, and small group life.</li>
                <li>Cultivate a lifestyle of dedication, holiness, spiritual growth, and transparency.</li>
                <li>Be continually filled with the Holy Spirit and grow in personal calling and gifts.</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="font-heading text-xl font-semibold text-primary-900">A Passion for People and Service</h3>
              <ul className="mt-5 space-y-3 text-primary-700">
                <li>Serve with generosity, giving time, talents, resources, and possessions.</li>
                <li>Promote unity, reconciliation, cross-cultural involvement, and practical care.</li>
                <li>Help people discover the power of the gospel, healing, restoration, and discipleship.</li>
                <li>Treat every person with dignity, compassion, respect, and freedom from prejudice.</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md">
              <h3 className="font-heading text-xl font-semibold text-primary-900">A Passion for the City and Nations</h3>
              <ul className="mt-5 space-y-3 text-primary-700">
                <li>Commit to the transformation of Nottingham through prayer and kingdom influence.</li>
                <li>Work with churches and life-giving institutions for the good of the city.</li>
                <li>Support community projects, help those in need, and pursue meaningful social impact.</li>
                <li>Pioneer ministry, encourage church growth, and support gospel mission in obedience to Matthew 28:19.</li>
              </ul>
            </div>
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

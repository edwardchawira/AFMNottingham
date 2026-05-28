import React from 'react';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const churchAddress = '1 Ambergate Rd, Nottingham NG8 3GD';
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(churchAddress)}&output=embed`;

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you and answer any questions you may have"
        backgroundImage="https://images.pexels.com/photos/8101537/pexels-photo-8101537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="md"
      />

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Reach out to us with any questions, prayer requests, or to learn more about our church"
          />
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <div className="lg:w-2/5">
              <div className="bg-primary-50 p-8 rounded-lg shadow-md h-full">
                <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-6">Church Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Address</h4>
                      <p className="text-primary-700">1 Ambergate Rd<br />Nottingham NG8 3GD<br />United Kingdom</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Phone</h4>
                      <p className="text-primary-700">+44 (0) 115 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Email</h4>
                      <p className="text-primary-700">info@afmchurchnottingham.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Service Times</h4>
                      <p className="text-primary-700">Sunday: 11:30 AM - 2:00 PM<br />Wednesday: 7:00 PM - 8:30 PM<br />Friday: 6:30 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-primary-900 mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-heading font-semibold text-2xl text-primary-900 mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Find Us" />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="h-96 bg-silver-200 rounded overflow-hidden">
                <iframe
                  title="Map to Nottingham Revival Centre"
                  src={mapUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

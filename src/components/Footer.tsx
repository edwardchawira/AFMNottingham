import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">Stay Connected</h3>
            <p className="mb-6 text-silver-300">Subscribe to our newsletter for updates on events, sermons, and church announcements.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-highlight-500 text-primary-900"
                required
              />
              <Button type="submit" variant="highlight" size="md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center">
                <img src="/afm-logo.png" alt="AFM Church Nottingham Logo" className="h-12 mr-3" />
                <div>
                  <div className="font-heading font-bold text-lg">AFM Church</div>
                  <div className="text-xs -mt-1">Nottingham Revival Centre</div>
                </div>
              </div>
            </Link>
            <p className="text-silver-300 mt-4">Empowered to Impact Nottingham through the message of God's love and grace.</p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-silver-400 hover:text-highlight-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-silver-400 hover:text-highlight-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-silver-400 hover:text-highlight-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-silver-400 hover:text-highlight-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-silver-300 hover:text-highlight-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-silver-300 hover:text-highlight-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/events" className="text-silver-300 hover:text-highlight-500 transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/ministries" className="text-silver-300 hover:text-highlight-500 transition-colors">Ministries</Link>
              </li>
              <li>
                <Link to="/media" className="text-silver-300 hover:text-highlight-500 transition-colors">Media</Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver-300 hover:text-highlight-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Service Times</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-silver-300">11:30 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Wednesday Bible Study</p>
                  <p className="text-silver-300">7:00 PM - 8:30 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Friday Prayer Meeting</p>
                  <p className="text-silver-300">6:30 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300">1 Ambergate Rd, Nottingham NG8 3GD</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300">+44 (0) 115 123 4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="text-highlight-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-silver-300">info@afmchurchnottingham.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-silver-400 text-sm">© {new Date().getFullYear()} AFM Church Nottingham. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-silver-400 hover:text-highlight-500 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-silver-400 hover:text-highlight-500 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

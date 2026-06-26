import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Ministries', path: '/ministries' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" aria-label="Nottingham Revival Centre">
            <img 
              src="/afm-logo.png" 
              alt="Nottingham Revival Centre Logo" 
              className="h-12 mr-3 transition-all duration-300" 
            />
            <div className="text-primary-900 transition-all duration-300">
              <div className="font-heading font-bold text-lg sm:text-xl">AFM Church</div>
              <div className="text-xs sm:text-sm -mt-1">Nottingham Revival Centre</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 mx-1 font-medium text-sm transition-colors duration-200 rounded hover:text-primary-500 ${
                    isActive
                      ? 'text-primary-500'
                      : 'text-primary-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              href="/contact"
              className="ml-2"
            >
              Connect with Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-500"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-primary-900 hover:bg-primary-50 hover:text-primary-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <Button 
              variant="primary" 
              size="md" 
              href="/contact"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Connect with Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

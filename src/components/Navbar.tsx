import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span 
            className={`text-2xl font-bold font-serif cursor-pointer ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}
            onClick={() => handleScrollTo('hero')}
          >
            Secure Yield
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            isScrolled={isScrolled} 
            onClick={() => handleScrollTo('about')}
          >
            About
          </NavLink>
          <NavLink 
            isScrolled={isScrolled} 
            onClick={() => handleScrollTo('services')}
          >
            Services
          </NavLink>
          <NavLink 
            isScrolled={isScrolled} 
            onClick={() => handleScrollTo('why-us')}
          >
            Why Us
          </NavLink>
          <NavLink 
            isScrolled={isScrolled} 
            onClick={() => handleScrollTo('contact')}
          >
            Contact
          </NavLink>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="px-6 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-sm transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Call
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`${isScrolled ? 'text-primary-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <MobileNavLink onClick={() => handleScrollTo('about')}>
              About
            </MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('services')}>
              Services
            </MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('why-us')}>
              Why Us
            </MobileNavLink>
            <MobileNavLink onClick={() => handleScrollTo('contact')}>
              Contact
            </MobileNavLink>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="w-full py-3 mt-2 bg-accent-500 hover:bg-accent-600 text-white rounded-sm transition-colors duration-300"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

type NavLinkProps = {
  children: React.ReactNode;
  isScrolled: boolean;
  onClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ children, isScrolled, onClick }) => (
  <span 
    className={`cursor-pointer hover:text-accent-500 transition-colors duration-300 ${
      isScrolled ? 'text-gray-800' : 'text-white'
    }`}
    onClick={onClick}
  >
    {children}
  </span>
);

type MobileNavLinkProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ children, onClick }) => (
  <span 
    className="block py-2 text-gray-800 hover:text-accent-500 transition-colors duration-300 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </span>
);

export default Navbar;
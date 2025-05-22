import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white py-12 text-center">
      <div className="container mx-auto px-6 space-y-8">
        {/* Logo */}
        <div
          className="text-2xl font-bold font-serif cursor-pointer"
          onClick={scrollToTop}
        >
          Secure Yield
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/company/secure-yield-financial-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto border-t border-gray-700 pt-8 text-left sm:text-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-gray-400">
              Email:
              <a
                href="mailto:Investors@secureyield.in"
                className="block hover:text-accent-400 transition-colors"
              >
                Investors@secureyield.in
              </a>
              <a
                href="mailto:Originators@secureyield.in"
                className="block hover:text-accent-400 transition-colors"
              >
                Originators@secureyield.in
              </a>
            </p>
            <p className="text-gray-400 mt-2">Phone: +91 92205 37637</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="#about" className="hover:text-accent-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm pt-4">
          &copy; {currentYear} Secure Yield. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold font-serif mb-4 md:mb-0 cursor-pointer" onClick={scrollToTop}>
            Secure Yield
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Email: info@secureyield.in</p>
              <p className="text-gray-400">Phone: +91 xx</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-accent-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-accent-400 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-accent-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; {currentYear} Secure Yield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
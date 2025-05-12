import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-16 text-center relative transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]`}>
          Contact Us
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
              Schedule a conversation!
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-3">Originators</h4>
                <p className="text-gray-700 mb-4">
                  Prepared to explore how sophisticated private credit solutions can transform your financial trajectory? Initiate a dialogue with our team of structured finance virtuosos.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-primary-900 mb-3">Investors</h4>
                <p className="text-gray-700 mb-4">
                  Discover compelling private credit opportunities with Secure Yield. Our team is available to discuss your investment objectives, risk preferences, and target returns to identify suitable securitization structures aligned with your portfolio strategy.
                </p>
              </div>
            </div>
            
            <div className="space-y-4 bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold text-primary-800 mb-4">Connect with us</h4>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent-500" />
                <a href="mailto:Investors@secureyield.in" className="text-gray-700 hover:text-accent-500 transition-colors">
                  Investors@secureyield.in
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent-500" />
                <p className="text-gray-700">+919220537637</p>
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                <a href="https://www.linkedin.com/company/secure-yield-financial-services/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

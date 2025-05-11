import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

const reasons = [
  'Experience of structuring and managing complex securitization transactions',
  'Strong team with over two decades of experience in global markets',
  'Comprehensive transaction management from origination to post-closing',
  'Strong relationships with counterparties across the financial ecosystem',
  'Commitment to innovation and tailored solutions',
  'Robust risk management framework and governance',
  'Value creation through financial engineering expertise',
  'Global best practices applied to local market dynamics'
];

const WhyUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute -left-32 bottom-0 w-64 h-64 bg-accent-100 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-8 transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Why Secure Yield
            </h2>
            
            <div className={`space-y-4 transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {reasons.map((reason, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1000 delay-500 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Financial team discussing strategy" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-500 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-900 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
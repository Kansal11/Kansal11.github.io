import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      titleRef.current?.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        contentRef.current?.classList.add('opacity-100', 'translate-y-0');
      }, 300);
    }
  }, [isInView]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-16 text-center relative opacity-0 transform translate-y-10 transition-all duration-700 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]"
        >
          About Us
        </h2>
        
        <div 
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 md:gap-16 opacity-0 transform translate-y-10 transition-all duration-700 delay-300"
        >
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Secure Yield, we orchestrate sophisticated financial frameworks that meticulously harmonize the interests of asset originators and discerning investors.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by seasoned financial professionals with a singular vision, we're reshaping India's credit landscape through bespoke private credit solutions with specialized expertise in securitization. Our founding team combines extensive experience from premier global institutions with intimate knowledge of India's unique market dynamics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive approach covers the entire transaction lifecycle. We excel in complex deal structuring and underwriting and act as a strategic arranger while providing seamless post-transaction management and ensuring ongoing compliance.
            </p>
          </div>
          
          <div className="relative h-[400px] md:h-auto">
            <div className="w-full h-full bg-primary-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Financial professionals in meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-accent-500 opacity-10 rounded-lg"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 bg-primary-700 opacity-10 rounded-lg"></div>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-primary-50 rounded-lg shadow-sm opacity-0 transform translate-y-10 transition-all duration-700 delay-500" ref={contentRef}>
          <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            As India's private credit markets evolve, we position ourselves as trusted advisors who bring global best practices to local market realities, creating sustainable value for all stakeholders involved in our transactions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
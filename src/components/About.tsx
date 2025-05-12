import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Shield, TrendingUp, Users } from 'lucide-react';

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
      className="py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4 text-center relative opacity-0 transform translate-y-10 transition-all duration-700 after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]"
        >
          About Us
        </h2>

        <div
          ref={contentRef}
          className="opacity-0 transform translate-y-10 transition-all duration-700 delay-300"
        >
          <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-accent-500 mb-8">
            <p className="text-gray-700 leading-relaxed">
              At Secure Yield, we orchestrate sophisticated financial frameworks that meticulously harmonize the interests of asset originators and discerning investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Shield className="text-accent-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Expertise & Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded by seasoned financial professionals with a singular vision, we're reshaping India's credit landscape through bespoke private credit solutions with specialized expertise in securitization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <TrendingUp className="text-accent-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Comprehensive Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive approach covers the entire transaction lifecycle. We excel in complex deal structuring and underwriting and act as a strategic arranger while providing seamless post-transaction management.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="text-accent-500 w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Global Expertise, Local Insight</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our founding team combines extensive experience from premier global institutions with intimate knowledge of India's unique market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-8 bg-primary-50 rounded-lg shadow-sm border-l-4 border-primary-900">
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

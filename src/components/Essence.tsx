import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const Essence: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="essence" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-primary-900 text-white relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-accent-500 opacity-5 transform -skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-12 text-center relative transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]`}>
            Essence of Secure Yield
          </h2>
          
          <div className={`transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <span className="inline-block h-20 w-20 rounded-full bg-accent-500 bg-opacity-20 flex items-center justify-center mb-6">
                <span className="h-16 w-16 rounded-full bg-accent-500 flex items-center justify-center">
                  <span className="text-xl font-serif font-bold">"SY"</span>
                </span>
              </span>
              <p className="text-lg md:text-xl italic font-serif text-accent-200">
                "The strategic balance between risk and return"
              </p>
            </div>
            
            <div className="space-y-6 text-gray-200">
              <p className="leading-relaxed">
                "Secure Yield" embodies our core philosophy—the strategic balance between risk and return. Our name reflects our commitment to designing financial solutions that deliver optimal value for all stakeholders.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-primary-800 bg-opacity-50 rounded-lg border border-primary-700">
                  <h3 className="text-xl font-bold text-accent-400 mb-4">Secure</h3>
                  <p className="text-gray-300">
                    The "Secure" element represents our dedication to robust risk management and capital preservation through carefully engineered transaction structures.
                  </p>
                </div>
                
                <div className="p-6 bg-primary-800 bg-opacity-50 rounded-lg border border-primary-700">
                  <h3 className="text-xl font-bold text-accent-400 mb-4">Yield</h3>
                  <p className="text-gray-300">
                    "Yield" signifies our focus on creating value by identifying opportunities that generate attractive returns proportionate to the underlying risk profile.
                  </p>
                </div>
              </div>
              
              <p className="leading-relaxed mt-6">
                We believe securitization exemplifies this balance—providing both reliable protection for investors and enhanced yields that accurately reflect the quality of underlying assets. Each solution we design is built on this foundational principle, executed through thoughtful structuring and precise implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essence;
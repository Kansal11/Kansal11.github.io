import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Simple animation when component mounts
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;

    if (title) title.classList.add('opacity-100', 'translate-y-0');
    
    // Delayed animations for subtitle and button
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('opacity-100', 'translate-y-0');
    }, 300);
    
    setTimeout(() => {
      if (button) button.classList.add('opacity-100', 'translate-y-0');
    }, 600);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-primary-900 text-white overflow-hidden"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800 opacity-95"></div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-accent-500 opacity-10 transform -skew-x-12"></div>
      <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-secondary-500 opacity-10 transform skew-y-12"></div>
      
      <div className="container mx-auto px-6 z-10 text-center md:text-left md:w-3/4">
        <h1 
          ref={titleRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-700"
        >
          Financial Excellence Through
          <span className="text-accent-400 block mt-2">Private Credit Solutions</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl mb-8 max-w-2xl opacity-0 transform translate-y-10 transition-all duration-700 md:mx-0 mx-auto"
        >
          At Secure Yield, we orchestrate sophisticated financial frameworks that meticulously harmonize 
          the interests of asset originators and discerning investors.
        </p>
        
        <button
          ref={buttonRef}
          onClick={handleScrollToContact}
          className="px-8 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-sm font-medium shadow-lg transition-all duration-300 transform hover:scale-105 opacity-0 translate-y-10"
        >
          Schedule a Consultation
        </button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
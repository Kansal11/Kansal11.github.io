import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'originator', // Default value
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically connect to a backend service
    alert('Thank you for your message. We will be in touch with you shortly.');
    setFormData({
      name: '',
      email: '',
      type: 'originator',
      message: ''
    });
  };

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
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
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
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary-800 mb-2">Connect with us</h4>
              
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-accent-500" />
                <a href="mailto:info@secureyield.in" className="text-gray-700 hover:text-accent-500 transition-colors">
                  info@secureyield.in
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-accent-500" />
                <p className="text-gray-700">+91 xx</p>
              </div>
              
              <div className="flex items-center gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-white hover:bg-accent-500 transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-bold text-primary-800 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-gray-700 mb-2">I am a</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="originator">Originator</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-sm transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'originator' // or 'investor'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '', type: 'originator' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-16 text-center relative transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]`}>
          Schedule a Conversation
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
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
                    <div className="space-y-2">
                      <a href="mailto:Investors@secureyield.in" className="block text-gray-700 hover:text-accent-500 transition-colors">
                        Investors@secureyield.in
                      </a>
                      <a href="mailto:Originators@secureyield.in" className="block text-gray-700 hover:text-accent-500 transition-colors">
                        Originators@secureyield.in
                      </a>
                    </div>
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

              <div>
                <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
                  <h4 className="text-xl font-bold text-primary-800 mb-6">Send us a message</h4>
                  
                  {submitStatus.type && (
                    <div className={`mb-6 p-4 rounded-md ${
                      submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                        I am an
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        required
                      >
                        <option value="originator">Originator</option>
                        <option value="investor">Investor</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

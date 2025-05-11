import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import ServiceCard from './ServiceCard';
import { 
  BarChart3, 
  Building2, 
  FileText, 
  Users, 
  BarChart4, 
  PieChart, 
  TrendingUp 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Arranging and Placement',
    description: 'Connecting originators with appropriate investors and facilitating efficient execution of transactions in the structured credit market',
    icon: <Building2 size={24} className="text-accent-500" />
  },
  {
    id: 2,
    title: 'Structuring and Execution',
    description: 'Designing tailored securitization and private credit solutions and managing the complete transaction process from inception to closing',
    icon: <FileText size={24} className="text-accent-500" />
  },
  {
    id: 3,
    title: 'Underwriting',
    description: 'Comprehensive risk assessment, due diligence, and pricing analysis to ensure transaction viability and investor protection',
    icon: <BarChart3 size={24} className="text-accent-500" />
  },
  {
    id: 4,
    title: 'Fund Raising',
    description: 'Strategic capital raising for originators through securitization and other private credit instruments with optimal terms and conditions',
    icon: <TrendingUp size={24} className="text-accent-500" />
  },
  {
    id: 5,
    title: 'Asset Management',
    description: 'Ongoing monitoring, reporting, and management of securitized assets with focus on performance optimization and compliance',
    icon: <PieChart size={24} className="text-accent-500" />
  },
  {
    id: 6,
    title: 'Alternative Investment Solutions',
    description: 'Curated access to exclusive securitized asset opportunities with optimized risk-return profiles for institutional and high-net-worth investors',
    icon: <BarChart4 size={24} className="text-accent-500" />
  },
  {
    id: 7,
    title: 'Investment Advisory',
    description: 'Strategic guidance for investors on portfolio diversification through structured credit and private debt instruments',
    icon: <Users size={24} className="text-accent-500" />
  }
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-16 text-center relative transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} after:content-[''] after:absolute after:w-24 after:h-1 after:bg-accent-500 after:left-1/2 after:-translate-x-1/2 after:bottom-[-16px]`}>
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isActive={activeService === service.id}
              onClick={() => setActiveService(service.id)}
              delay={index * 100}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
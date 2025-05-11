import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  delay: number;
  isInView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  isActive, 
  onClick, 
  delay,
  isInView
}) => {
  return (
    <div 
      className={`p-6 rounded-lg cursor-pointer transition-all duration-500 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${
        isActive 
          ? 'bg-primary-900 text-white shadow-xl scale-105 z-10' 
          : 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:scale-105'
      }`}
      onClick={onClick}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`mb-4 ${isActive ? 'text-accent-400' : 'text-accent-500'}`}>
        {icon}
      </div>
      
      <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-white' : 'text-primary-900'}`}>
        {title}
      </h3>
      
      <p className={isActive ? 'text-gray-200' : 'text-gray-600'}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
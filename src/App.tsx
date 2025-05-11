import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Essence from './components/Essence';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Secure Yield - Financial Excellence';
    
    // You could add more initialization here if needed
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Essence />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import SkipLink from './components/SkipLink';
import SEOHead from './components/SEOHead';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import { useLocation } from './hooks/useLocation';

function App() {
  const { hash } = useLocation();
  const showTerms = hash === '#terms';

  React.useEffect(() => {
    // Preload critical images
    const criticalImages = [
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      'https://static.wixstatic.com/media/29238c_b217e43e631d4d80b47cc495b21343b0~mv2.jpg/v1/fill/w_421,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled_edited.jpg'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      <SkipLink />
      <SEOHead />
      <Header />
      <main id="main-content" role="main">
        {showTerms ? (
          <Terms />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Pricing />
            <Testimonials />
            <Contact />
            <FAQ />
          </>
        )}
      </main>
      <footer className="bg-gray-50 py-8" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
        <div className="container mx-auto px-4 text-center">
          <a href="#terms" className="text-blue-600 hover:text-blue-700">
            Conditions d'utilisation
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
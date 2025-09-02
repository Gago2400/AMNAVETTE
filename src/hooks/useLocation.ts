import { useState, useEffect } from 'react';

export function useLocation() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      
      // If there's a hash, scroll to the element with offset
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          // Get header height (80px = 20 * 4 from the h-20 class)
          const headerHeight = 80;
          // Increased offset for better mobile visibility
          const additionalOffset = window.innerWidth < 768 ? 200 : 150;
          
          // Wait for any dynamic content to load
          setTimeout(() => {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - additionalOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Handle initial load with hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return { hash };
}
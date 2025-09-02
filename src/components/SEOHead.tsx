import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEOHead({
  title = "AM. Navette Aéroport | Transport VTC Rouen - Paris",
  description = "Service de navette VTC premium à Rouen. Transport vers aéroports Paris CDG, Orly. Véhicules luxueux 1-7 personnes. Réservation 24h/24. Chauffeurs professionnels. Devis gratuit.",
  keywords = "navette aéroport rouen, vtc rouen, transport paris cdg orly, navette cdg rouen, navette orly rouen, transport normandie, chauffeur privé rouen, taxi aéroport rouen, transfert aéroport normandie",
  image = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  url = "https://www.amnavette-aeroport.com"
}: SEOHeadProps) {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
  }, [title, description, keywords, image, url]);

  return null;
}
import React from 'react';
import { Phone, FileText, Euro } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-luxury-dark/60"></div>
      </div>

      {/* Content with animations */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-slide-in text-white luxury-text-shadow" itemProp="headline">
            L'Excellence du Transport
            <span className="block text-luxury-gold">Personnalisé</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-in text-white/90 text-justify" style={{ animationDelay: '0.2s' }} itemProp="description">
            Service premium de navette aéroportuaire depuis Rouen. Votre confort est notre priorité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:+33762770904"
              aria-label="Appeler AM. Navette Aéroport pour réserver"
              className="flex items-center justify-center bg-luxury-gold text-white px-8 py-4 rounded-full hover:bg-luxury-accent transition-colors hover-lift group shadow-luxury"
            >
              <Phone size={24} className="mr-2 group-hover:animate-float" />
              Réserver maintenant
            </a>
            <a
              href="#contact"
              aria-label="Demander un devis personnalisé"
              className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-colors hover-lift group"
            >
              <FileText size={24} className="mr-2 group-hover:animate-float" />
              Devis personnalisé
            </a>
            <a
              href="#tarifs"
              aria-label="Consulter les tarifs de transport"
              className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-colors hover-lift group"
            >
              <Euro size={24} className="mr-2 group-hover:animate-float" />
              Voir les tarifs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
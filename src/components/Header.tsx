import React from 'react';
import { Menu, Phone, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-luxury z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-luxury-dark" itemScope itemType="https://schema.org/Organization" itemProp="name">
              <span className="text-luxury-gold">AM.</span> Navette Aéroport
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Navigation principale">
            <a href="#" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="Retour à l'accueil">Accueil</a>
            <a href="#about" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="En savoir plus sur nous">À Propos</a>
            <a href="#services" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="Découvrir nos services">Services</a>
            <a href="#tarifs" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="Consulter nos tarifs">Tarifs</a>
            <a href="#contact" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="Nous contacter">Contact</a>
            <a href="#faq" className="text-luxury-dark hover:text-luxury-gold transition-colors" aria-label="Questions fréquentes">FAQ</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-luxury-dark hover:text-luxury-gold transition-colors"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+33762770904"
              aria-label="Appeler AM. Navette Aéroport au 07 62 77 09 04"
              className="flex items-center bg-luxury-gold text-white px-6 py-2 rounded-full hover:bg-luxury-accent transition-colors shadow-luxury hover:shadow-luxury-hover"
            >
              <Phone size={20} className="mr-2" />
              Appelez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" role="navigation" aria-label="Menu mobile">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm">
            <a href="#" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="Retour à l'accueil">Accueil</a>
            <a href="#about" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="En savoir plus sur nous">À Propos</a>
            <a href="#services" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="Découvrir nos services">Services</a>
            <a href="#tarifs" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="Consulter nos tarifs">Tarifs</a>
            <a href="#contact" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="Nous contacter">Contact</a>
            <a href="#faq" className="block px-3 py-2 text-luxury-dark hover:text-luxury-gold" aria-label="Questions fréquentes">FAQ</a>
            <a
              href="tel:+33762770904"
              aria-label="Appeler AM. Navette Aéroport au 07 62 77 09 04"
              className="flex items-center justify-center bg-luxury-gold text-white px-6 py-2 rounded-full hover:bg-luxury-accent transition-colors mt-4 shadow-luxury"
            >
              <Phone size={20} className="mr-2" />
              Appelez-nous
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
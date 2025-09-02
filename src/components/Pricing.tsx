import React from 'react';
import { destinations } from '../data/destinations';
import { Car, Users } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 bg-luxury-light" itemScope itemType="https://schema.org/PriceSpecification">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Nos <span className="text-luxury-gold">Tarifs</span>
          </h2>
          <p className="text-xl text-luxury-muted">Des prix transparents et compétitifs</p>
        </div>

        <div className="grid gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="luxury-card p-8" itemScope itemType="https://schema.org/Offer">
              <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-6" itemProp="name">{destination.name}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="luxury-card p-6 hover-lift" itemScope itemType="https://schema.org/PriceSpecification">
                  <div className="flex items-center">
                    <Car className="w-10 h-10 text-luxury-gold mr-4" />
                    <div>
                      <p className="text-luxury-muted font-medium">Berline</p>
                      <p className="text-3xl font-serif font-bold text-luxury-gold">
                        <span itemProp="price">{destination.berlinePrice}</span> 
                        <span itemProp="priceCurrency" content="EUR">€</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="luxury-card p-6 hover-lift" itemScope itemType="https://schema.org/PriceSpecification">
                  <div className="flex items-center">
                    <Users className="w-10 h-10 text-luxury-gold mr-4" />
                    <div>
                      <p className="text-luxury-muted font-medium">Mini-Van</p>
                      <p className="text-3xl font-serif font-bold text-luxury-gold">
                        <span itemProp="price">{destination.minivanPrice}</span> 
                        <span itemProp="priceCurrency" content="EUR">€</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-luxury-muted text-center">
                Durée moyenne : <span itemProp="duration">{destination.duration}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 luxury-card p-8">
          <h3 className="text-xl font-serif font-bold text-luxury-dark mb-6">Informations complémentaires</h3>
          <ul className="space-y-4 text-luxury-muted">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
              Première heure d'attente gratuite pour les aéroports
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
              Heure supplémentaire : 50 €/heure
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
              TVA non applicable (Article 293 B du CGI)
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
              Paiement possible directement à bord du véhicule
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            aria-label="Demander un devis personnalisé pour votre transport"
            className="inline-flex items-center bg-luxury-gold text-white px-8 py-4 rounded-full hover:bg-luxury-accent transition-colors shadow-luxury hover:shadow-luxury-hover"
          >
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
}
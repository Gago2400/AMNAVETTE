import React from 'react';
import { services } from '../data/services';
import { PlaneLanding, MapPin, Users, Clock, Car } from 'lucide-react';

const iconMap = {
  'plane-landing': PlaneLanding,
  'map-pin': MapPin,
  'users': Users,
  'clock': Clock,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Services <span className="text-luxury-gold">Premium</span>
          </h2>
          <p className="text-xl text-luxury-muted">L'excellence à chaque trajet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="luxury-card p-8 hover-lift animate-slide-in"
              itemScope
              itemType="https://schema.org/Service"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-luxury-light rounded-full flex items-center justify-center mb-6 group">
                  <Icon className="w-8 h-8 text-luxury-gold group-hover:animate-float" />
                </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-luxury-dark" itemProp="name">{service.title}</h3>
              <p className="text-luxury-muted" itemProp="description">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Notre Flotte */}
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Notre <span className="text-luxury-gold">Flotte</span>
          </h2>
          <p className="text-xl text-luxury-muted">Des véhicules d'exception pour votre confort</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ford Tourneo Custom */}
          <div className="luxury-card overflow-hidden hover-lift animate-slide-in">
            <div className="relative h-80 overflow-hidden group">
              <img
                src="https://3.bp.blogspot.com/-HigT1QtgvoQ/Wr4MB6UeVGI/AAAAAAAAWyg/E8vnW8gIg_Ujw1qjHF-l93pOtD8IkOQhACLcBGAs/s1600/ford-tourneo-custom-noir-shadow-black.png"
                alt="Ford Tourneo Custom 2021"
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-full font-medium">
                2021
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-luxury-dark">Ford Tourneo Custom</h3>
                <Car className="w-6 h-6 text-luxury-gold animate-float" />
              </div>
              <ul className="space-y-3 text-luxury-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Véhicule spacieux et confortable
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Idéal pour les groupes jusqu'à 7 personnes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Climatisation tri-zone
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Grands espaces de rangement
                </li>
              </ul>
            </div>
          </div>

          {/* Ford Kuga */}
          <div className="luxury-card overflow-hidden hover-lift animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative h-80 overflow-hidden group">
              <img
                src="https://carplus.se/wp-content/uploads/2022/01/Ford-Kuga-Titanium-Agate-Black.png"
                alt="Ford Kuga Titanium 2022"
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-luxury-gold text-white px-4 py-2 rounded-full font-medium">
                2022
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif font-bold text-luxury-dark">Ford Kuga Titanium</h3>
                <Car className="w-6 h-6 text-luxury-gold animate-float" />
              </div>
              <ul className="space-y-3 text-luxury-muted">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  SUV élégant et confortable
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Parfait pour 4 passagers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Finition haut de gamme Titanium
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                  Système audio premium
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
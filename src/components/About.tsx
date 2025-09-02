import React from 'react';
import { Clock, MapPin, ThumbsUp, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Présentation principale */}
          <div className="text-center mb-16" itemScope itemType="https://schema.org/AboutPage">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
              À Propos de <span className="text-luxury-gold">Nous</span>
            </h2>
            <p className="text-xl text-luxury-muted mb-12 text-justify" itemProp="description">
              AM. Navette Aéroport, société de VTC moderne et formée, propose des solutions de transport 
              à la demande pour tous vos besoins en matière de déplacement.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="luxury-card p-8">
                <Clock className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
                <p className="text-luxury-muted text-justify">
                  Service disponible 24h/24 et 7j/7. Un standard répond toujours à votre appel pour 
                  vous proposer la solution la plus adaptée à vos besoins.
                </p>
              </div>
              <div className="luxury-card p-8">
                <ThumbsUp className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
                <p className="text-luxury-muted text-justify">
                  Un rare moment de détente s'offre à vous grâce à l'intérieur confortable de nos 
                  véhicules et au professionnalisme de nos chauffeurs.
                </p>
              </div>
            </div>
          </div>

          {/* Zone de couverture */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-luxury-gold mr-3" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-luxury-dark">Notre Zone de Couverture</h3>
            </div>
            <p className="text-luxury-muted text-justify mb-6 text-lg">
              Nous conduisons dans toute la Normandie et notamment dans Rouen et son agglomération, 
              mais aussi aux départs des Aéroports et Gares de Paris. Nous assurons des transferts 
              depuis n'importe quel endroit en Normandie vers Paris, mais aussi de Paris vers la 
              Normandie depuis septembre 2017.
            </p>
          </div>

          {/* Fondateurs */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="luxury-card p-8 text-center hover-lift" itemScope itemType="https://schema.org/Person">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://static.wixstatic.com/media/29238c_b217e43e631d4d80b47cc495b21343b0~mv2.jpg/v1/fill/w_421,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled_edited.jpg"
                  alt="Arthur Martirossyan"
                  itemProp="image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-luxury-dark mb-2" itemProp="name">Arthur Martirossyan</h3>
              <p className="text-luxury-gold font-medium mb-4" itemProp="jobTitle">Fondateur</p>
              <p className="text-luxury-muted text-justify" itemProp="description">
                "Notre objectif est de fournir d'excellents services de transport pour tous. 
                D'une heure à une semaine, nous modifions nos horaires pour répondre à vos besoins."
              </p>
            </div>
            <div className="luxury-card p-8 text-center hover-lift" itemScope itemType="https://schema.org/Person">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4E03AQEal0IPMyeBNw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718331026950?e=1759968000&v=beta&t=PJdz3wxBfrb8M8tl2CTWXHKEe2IO9VFigIzlNSpXPDk"
                  alt="Gagik Martirossyan"
                  itemProp="image"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-luxury-dark mb-2" itemProp="name">Gagik Martirossyan</h3>
              <p className="text-luxury-gold font-medium mb-4" itemProp="jobTitle">Co-Fondateur</p>
              <p className="text-luxury-muted text-justify" itemProp="description">
                Engagé à fournir un service de transport de qualité supérieure avec une attention 
                particulière aux besoins de chaque client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
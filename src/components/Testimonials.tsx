import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Ce que disent nos <span className="text-luxury-gold">clients</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-luxury-gold fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-luxury-dark">5.0</span>
            <a 
              href="https://maps.app.goo.gl/MKR3QeDY3CYw96A68"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold hover:text-luxury-accent"
            >
              sur Google
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="luxury-card p-8 hover-lift" itemScope itemType="https://schema.org/Review">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
                <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
              </div>
              <p className="text-luxury-muted mb-6" itemProp="reviewBody">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-luxury-light rounded-full flex items-center justify-center mr-3">
                  <span className="text-luxury-gold font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-luxury-dark" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span itemProp="name">{testimonial.name}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/MKR3QeDY3CYw96A68"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consulter tous les avis clients sur Google Maps"
            className="inline-flex items-center text-luxury-gold hover:text-luxury-accent"
          >
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// Constantes pour EmailJS
const EMAILJS_SERVICE_ID = 'service_o7j8win';
const EMAILJS_TEMPLATE_ID = 'template_6hf8s5j';
const EMAILJS_PUBLIC_KEY = '5KXjx5ZLhYSc3G6YO';

function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        EMAILJS_PUBLIC_KEY
      );
      toast.success('Votre demande a été envoyée avec succès !');
      formRef.current?.reset();
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-luxury-light" itemScope itemType="https://schema.org/ContactPage">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Contactez-<span className="text-luxury-gold">nous</span>
          </h2>
          <p className="text-xl text-luxury-muted">Pour toute demande de devis ou d'information</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-8">Nos Coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="w-8 h-8 text-luxury-gold mr-6" />
                  <div>
                    <p className="font-semibold text-luxury-dark">Téléphone</p>
                    <a href="tel:+33762770904" className="text-luxury-gold hover:text-luxury-accent">
                      +33 7 62 77 09 04
                    </a>
                    <meta itemProp="telephone" content="+33762770904" />
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-8 h-8 text-luxury-gold mr-6" />
                  <div>
                    <p className="font-semibold text-luxury-dark">Email</p>
                    <a href="mailto:amnavette.aeroport@gmail.com" className="text-luxury-gold hover:text-luxury-accent">
                      amnavette.aeroport@gmail.com
                    </a>
                    <meta itemProp="email" content="amnavette.aeroport@gmail.com" />
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-luxury-gold mr-6" />
                  <div>
                    <p className="font-semibold text-luxury-dark">Adresse</p>
                    <a 
                      href="https://maps.app.goo.gl/MKR3QeDY3CYw96A68" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-luxury-gold hover:text-luxury-accent"
                    >
                      Rouen, France
                      <meta itemProp="address" content="Rouen, France" />
                      <span className="text-sm block text-luxury-muted">Voir sur Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="luxury-card p-8" aria-label="Formulaire de demande de devis">
              <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-8">Demande de Devis</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-luxury-dark mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      placeholder="Saisissez votre prénom"
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-luxury-dark mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      placeholder="Saisissez votre nom"
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="adresse_depart" className="block text-sm font-medium text-luxury-dark mb-2">
                    Adresse de départ
                  </label>
                  <input
                    type="text"
                    id="adresse_depart"
                    name="adresse_depart"
                    placeholder="Sélectionnez une adresse"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="adresse_destination" className="block text-sm font-medium text-luxury-dark mb-2">
                    Adresse de destination
                  </label>
                  <input
                    type="text"
                    id="adresse_destination"
                    name="adresse_destination"
                    placeholder="Sélectionnez une adresse"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Saisissez votre e-mail"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-luxury-dark mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Saisissez votre numéro de téléphone"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date_depart" className="block text-sm font-medium text-luxury-dark mb-2">
                      Date de départ
                    </label>
                    <input
                      type="date"
                      id="date_depart"
                      name="date_depart"
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="heure_depart" className="block text-sm font-medium text-luxury-dark mb-2">
                      Heure de départ
                    </label>
                    <input
                      type="time"
                      id="heure_depart"
                      name="heure_depart"
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nombre_passagers" className="block text-sm font-medium text-luxury-dark mb-2">
                    Nombre de passagers
                  </label>
                  <input
                    type="number"
                    id="nombre_passagers"
                    name="nombre_passagers"
                    min="1"
                    max="8"
                    placeholder="Saisissez un nombre"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="commentaire" className="block text-sm font-medium text-luxury-dark mb-2">
                    Commentaire (optionnel)
                  </label>
                  <textarea
                    id="commentaire"
                    name="commentaire"
                    rows={4}
                    placeholder="Votre message"
                    aria-label="Commentaire optionnel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Envoi en cours" : "Envoyer la demande de devis"}
                  className="w-full bg-luxury-gold text-white px-8 py-4 rounded-full hover:bg-luxury-accent transition-colors shadow-luxury hover:shadow-luxury-hover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
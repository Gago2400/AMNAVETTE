interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'Comment demander un devis ?',
    answer: 'Vous pouvez demander un devis en remplissant notre formulaire en ligne dans la section Contact, ou en nous appelant directement. Nous vous répondrons dans les plus brefs délais avec une offre personnalisée.'
  },
  {
    question: 'Quels sont vos tarifs pour un transfert en groupe ?',
    answer: 'Nos tarifs varient selon la taille du groupe et la destination. Nous disposons de mini-vans pouvant accueillir jusqu\'à 8 personnes. Contactez-nous pour obtenir un devis personnalisé.'
  },
  {
    question: 'Quels sont les véhicules disponibles ?',
    answer: 'Nous proposons deux types de véhicules : des berlines confortables pour 1 à 4 personnes, et des mini-vans spacieux pour les groupes jusqu\'à 8 personnes.'
  },
  {
    question: 'Quels sont les frais pour une attente prolongée ?',
    answer: 'La première heure d\'attente est gratuite pour les transferts aéroportuaires. Au-delà, nous facturons 50€ par heure supplémentaire.'
  },
  {
    question: 'Comment puis-je payer ?',
    answer: 'Nous acceptons plusieurs modes de paiement : virement bancaire, chèque ou espèces. La TVA n\'est pas applicable (Article 293 B du CGI).'
  }
];
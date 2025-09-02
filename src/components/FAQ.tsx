import React from 'react';
import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white" itemScope itemType="https://schema.org/FAQPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-4">
            Questions <span className="text-luxury-gold">Fréquentes</span>
          </h2>
          <p className="text-xl text-luxury-muted">Trouvez rapidement les réponses à vos questions</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 animate-slide-in"
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 luxury-card hover:border-luxury-gold transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-serif font-semibold text-left text-luxury-dark" itemProp="name">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-luxury-gold transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-luxury-gold transition-transform duration-300" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                id={`faq-answer-${index}`}
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <div className="p-6 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-luxury-muted" itemProp="text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
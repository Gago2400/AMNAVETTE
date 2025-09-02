import React from 'react';

export default function Terms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions d'utilisation</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Les présentes conditions d'utilisation régissent votre utilisation des services de la société AM. Navette Aéroport. 
              Veuillez lire attentivement ces conditions avant d'utiliser nos services. En utilisant nos services, vous acceptez 
              d'être lié par ces conditions.
            </p>

            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Réservation et paiement</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Réservation</h3>
                    <p className="text-gray-600">
                      Pour réserver nos services de navette aéroport, vous devez fournir des informations précises, notamment 
                      vos coordonnées, les détails du trajet, le nombre de passagers, les besoins en sièges bébés ou rehausseurs, 
                      ainsi que les informations relatives aux bagages. Nous nous réservons le droit de refuser ou d'annuler une 
                      réservation si les informations fournies sont incorrectes ou incomplètes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Paiement</h3>
                    <p className="text-gray-600">
                      Le paiement doit être effectué conformément aux modalités convenues lors de la réservation. Nous acceptons 
                      les modes de paiement indiqués sur notre site web ou convenus préalablement avec vous. Tous les paiements 
                      doivent être effectués en totalité avant le début du trajet. Aucune majoration n'est appliquée pour les 
                      bagages, dans la limite d'1 bagage à soute et 1 bagage à main par passager.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Modifications et annulations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Modifications</h3>
                    <p className="text-gray-600">
                      Si vous souhaitez modifier votre réservation, veuillez nous contacter dès que possible. Nous ferons de notre 
                      mieux pour accommoder vos demandes de modification, sous réserve de disponibilité. Les modifications de 
                      réservation sont possibles sans frais, sous réserve d'être informés au moins 24 heures avant le transfert 
                      initialement prévu.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Annulations</h3>
                    <p className="text-gray-600">
                      En cas d'annulation de votre réservation, veuillez nous en informer le plus tôt possible. Des frais 
                      d'annulation peuvent s'appliquer en fonction du délai d'annulation. Si l'annulation est effectuée entre 3 
                      et 5 jours avant la date du transfert, aucun frais ne sera facturé. Cependant, toute réservation non 
                      annulée 48 heures avant le transfert sera facturée intégralement. En cas de non-présentation du client le 
                      jour prévu, le montant total du transfert sera facturé.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilité et sécurité</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Responsabilité</h3>
                    <p className="text-gray-600">
                      Nous nous engageons à fournir des services de navette aéroport de qualité. Cependant, nous déclinons toute 
                      responsabilité en cas de retard, d'annulation, de perte ou de dommage causés par des circonstances 
                      indépendantes de notre volonté, telles que des conditions météorologiques défavorables, des embouteillages 
                      ou des événements imprévus. En cas de retard de l'avion, aucun frais d'attente ne sera facturé à l'aéroport.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Sécurité</h3>
                    <p className="text-gray-600">
                      Nous accordons une grande importance à votre sécurité. Chaque voyageur, y compris les enfants, doit attacher 
                      correctement sa ceinture de sécurité pendant le trajet. Nos chauffeurs sont des professionnels expérimentés, 
                      titulaires des licences appropriées et formés pour assurer un trajet sécurisé. Veuillez suivre toutes les 
                      instructions du chauffeur et respecter les règles de sécurité.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Confidentialité des données</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Collecte et utilisation des données</h3>
                    <p className="text-gray-600">
                      Nous collectons certaines informations personnelles lors de la réservation, conformément à notre politique 
                      de confidentialité. Ces informations sont nécessaires pour assurer la bonne exécution du service de navette 
                      aéroport. Nous nous engageons à traiter vos données de manière confidentielle et à les utiliser uniquement 
                      dans le cadre de la prestation de nos services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Sécurité des données</h3>
                    <p className="text-gray-600">
                      Nous mettons en place des mesures de sécurité appropriées pour protéger vos données personnelles contre tout 
                      accès non autorisé, toute divulgation ou toute perte. Cependant, veuillez noter que la transmission de 
                      données sur Internet n'est pas totalement sécurisée et que nous ne pouvons garantir la sécurité des 
                      informations transmises via Internet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Dispositions générales</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">5.1. Communication</h3>
                    <p className="text-gray-600">
                      Vous pouvez nous contacter par e-mail, téléphone ou en utilisant les informations de contact fournies sur 
                      notre site web.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">5.2. Limitation de responsabilité</h3>
                    <p className="text-gray-600">
                      La responsabilité de la société AM. Navette Aéroport est limitée au prix du transport indiqué dans le devis. 
                      Nous déclinons toute responsabilité pour les préjudices causés par des retards indépendants de notre volonté 
                      ou par des conditions de circulation exceptionnelles.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">5.3. Animaux de compagnie</h3>
                    <p className="text-gray-600">
                      Les animaux de compagnie sont acceptés à bord, dans la limite de 2 par véhicule et en bagages à main pour 
                      les plus petits. Une majoration de 5 € par animal sera appliquée, sauf pour les chiens guides d'aveugles 
                      qui sont autorisés gratuitement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">5.4. Navettes partagées</h3>
                    <p className="text-gray-600">
                      AM. Navette Aéroport est un service de transport privé et n'organise pas de navettes partagées, excepté 
                      dans des cas exceptionnels où une remise de 10 euros peut être appliquée en cas de planning surchargé ou 
                      de retard d'avion ou de train.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">5.5. Objets oubliés</h3>
                    <p className="text-gray-600">
                      Nous ne sommes pas responsables des objets et/ou bagages oubliés dans nos véhicules. Veuillez vérifier 
                      attentivement avant de quitter nos véhicules pour vous assurer que vous avez bien tous vos bagages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-gray-600">
              <p>
                En utilisant nos services de navette aéroport, vous reconnaissez avoir lu, compris et accepté ces conditions 
                d'utilisation. Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter. Nous nous 
                ferons un plaisir de vous aider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
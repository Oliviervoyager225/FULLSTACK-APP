// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function NosCollaborateurs() {
//   const partners = [
//     {
//       name: "Polyclinique Internationale de l’Indénié",
//       description: "Établissement de référence pour les bilans et suivis somatiques, offrant un plateau technique complet et des spécialistes reconnus en neurologie, cardiologie et autres disciplines.",
//     },
//     {
//       name: "Polyclinique des II Plateaux",
//       description: "Partenaire de confiance pour l'hospitalisation et les prises en charge médicales spécialisées, assurant une continuité de soin optimale pour les jeunes orientés par notre service.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center bg-gradient-to-br from-teal-700 to-emerald-800 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/assets/feerima/images/partners-pattern.png')] opacity-10 bg-repeat" />
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-md">
//             Nos Collaborateurs
//           </h1>
//           <p className="text-xl font-light text-gray-100 drop-shadow-sm">
//             Des partenaires de confiance pour un parcours de soin complet
//           </p>
//         </div>
//       </section>

//       <main className="flex-grow py-16 px-4 md:px-8 max-w-6xl mx-auto w-full">
//         {/* Introduction */}
//         <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
//           <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold tracking-wide mb-2">
//             RÉSEAU DE SOIN
//           </div>
//           <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
//             Nos collaborateurs pour l’orientation des bénéficiaires nécessitant des consultations ou des prises en charge somatiques spécialisées (neurologie, cardiologie, etc.), ainsi que pour d’éventuelles hospitalisations :
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-8">
//           {partners.map((partner, index) => (
//             <article
//               key={index}
//               className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center space-y-5"
//             >
//               {/* Logo/Icon Placeholder */}
//               <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
//                 {partner.name}
//               </h3>
              
//               <p className="text-gray-600 leading-relaxed">
//                 {partner.description}
//               </p>

//               {/* Action Button */}
//               <button className="mt-2 px-6 py-2.5 bg-white border border-teal-600 text-teal-700 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-all duration-200">
//                 Voir la fiche partenaire
//               </button>
//             </article>
//           ))}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// Collaborateurs.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/NosCollaborateurs.css';

const collaboratorsData = {
  introduction: {
    title: "Nos collaborateurs médicaux",
    description: "Nos collaborateurs pour l'orientation des bénéficiaires nécessitant des consultations ou des prises en charge somatiques spécialisées (neurologie, cardiologie, etc.), ainsi que pour d'éventuelles hospitalisations.",
    icon: "🏥"
  },
  categories: [
    {
      id: "hopitaux",
      title: "Établissements hospitaliers partenaires",
      subtitle: "Des structures médicales d'excellence pour vos soins spécialisés",
      icon: "🏨",
      collaborators: [
        {
          id: 1,
          name: "Polyclinique Internationale de l'Indénié",
          shortName: "PII",
          logo: "/assets/feerima/images/Policlinique%20Internationale%20de%20L'Ind%C3%A9ni%C3%A9.png",
          description: "Établissement de référence offrant des prestations médicales de haute qualité avec une approche humanisée.",
          specialties: ["Médecine générale", "Chirurgie", "Urgences", "Imagerie médicale"],
          services: ["Consultations spécialisées", "Hospitalisation", "Urgences 24/7", "Bloc opératoire"],
          address: "Indénié, Abidjan",
          phone: "+225 XX XX XX XX",
          email: "contact@polyclinique-indenie.ci",
          website: "https://polyclinique-indenie.ci",
          emergency: "24/7",
          mapUrl: "https://maps.google.com",
          url: "https://polyclinique-indenie.ci"
        },
        {
          id: 2,
          name: "Polyclinique des II Plateaux",
          shortName: "P2P",
          logo: "/assets/feerima/images/Polyclinique%20des%20II%20Plateaux.png",
          description: "Centre médical moderne situé au cœur des II Plateaux, spécialisé dans les soins de haute technologie.",
          specialties: ["Cardiologie", "Neurologie", "Pédiatrie", "Gynécologie"],
          services: ["Consultations spécialisées", "Hospitalisation", "Explorations fonctionnelles", "Rééducation"],
          address: "II Plateaux, Abidjan",
          phone: "+225 XX XX XX XX",
          email: "contact@polyclinique-iiplateaux.ci",
          website: "https://polyclinique-iiplateaux.ci",
          emergency: "24/7",
          mapUrl: "https://maps.google.com",
          url: "https://polyclinique-iiplateaux.ci"
        }
      ]
    }
  ]
};

const Collaborateurs = () => {
  const handleEmergency = () => {
    window.location.href = "tel:+225XXYYZZAA";
  };

  return (
    <div className="nos-collaborateurs-page">
      <Navbar />

      {/* Hero Section */}
      <div className="collaborateurs-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="hero-icon-wrapper">
                <span className="hero-icon">{collaboratorsData.introduction.icon}</span>
              </div>
              <h1 className="hero-title">{collaboratorsData.introduction.title}</h1>
              <p className="hero-description">{collaboratorsData.introduction.description}</p>
              <div className="hero-cta">
                {/* <button className="cta-button emergency" onClick={handleEmergency}>
                  <span className="cta-icon">🚨</span>
                  Urgence médicale
                </button> */}

                <button className="cta-button emergency">
                  <span className="cta-icon">🚨</span>
                  Urgence médicale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="collaborateurs-main">
        {/* Cartes des établissements */}
        {collaboratorsData.categories.map((category, index) => (
          <section key={category.id} className={`collaborateurs-section ${index % 2 === 1 ? 'alternate' : ''}`}>
            <div className="container">
              <div className="section-header">
                <div className="section-icon">{category.icon}</div>
                <div className="section-header-content">
                  <h2 className="section-title">{category.title}</h2>
                  <p className="section-subtitle">{category.subtitle}</p>
                </div>
              </div>

              <div className="collaborateurs-grid">
                {category.collaborators.map((collaborator) => (
                  <div key={collaborator.id} className="collaborateur-card">
                    <div className="card-badge">
                      <span className="badge-text">Partenaire officiel</span>
                    </div>
                    
                    <div className="card-header">
                      <div className="logo-container">
                        <img 
                          src={collaborator.logo} 
                          alt={collaborator.name} 
                          className="collaborateur-logo"
                          onError={(e) => {
                            e.target.src = '/assets/feerima/images/fallback-hospital.png';
                          }}
                        />
                      </div>
                      <h3 className="collaborateur-name">{collaborator.name}</h3>
                      {collaborator.shortName && (
                        <p className="collaborateur-shortname">{collaborator.shortName}</p>
                      )}
                    </div>

                    <div className="card-body">
                      <p className="collaborateur-description">{collaborator.description}</p>
                      
                      {collaborator.specialties && (
                        <div className="specialties-section">
                          <h4 className="section-label">
                            <span className="label-icon">⚕️</span>
                            Spécialités
                          </h4>
                          <div className="specialties-list">
                            {collaborator.specialties.map((specialty, idx) => (
                              <span key={idx} className="specialty-tag">{specialty}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {collaborator.services && (
                        <div className="services-section">
                          <h4 className="section-label">
                            <span className="label-icon">🏥</span>
                            Services proposés
                          </h4>
                          <div className="services-list">
                            {collaborator.services.map((service, idx) => (
                              <div key={idx} className="service-item">
                                <span className="service-dot">•</span>
                                <span>{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="contact-section">
                        {collaborator.address && (
                          <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <span>{collaborator.address}</span>
                          </div>
                        )}
                        
                        {collaborator.phone && (
                          <div className="contact-item">
                            <span className="contact-icon">📞</span>
                            <a href={`tel:${collaborator.phone.replace(/\s/g, '')}`} className="contact-link">
                              {collaborator.phone}
                            </a>
                          </div>
                        )}
                        
                        {collaborator.email && (
                          <div className="contact-item">
                            <span className="contact-icon">✉️</span>
                            <a href={`mailto:${collaborator.email}`} className="contact-link">
                              {collaborator.email}
                            </a>
                          </div>
                        )}
                        
                        {collaborator.schedule && (
                          <div className="contact-item">
                            <span className="contact-icon">🕐</span>
                            <span>{collaborator.schedule}</span>
                          </div>
                        )}
                        
                        {collaborator.emergency && (
                          <div className="contact-item emergency">
                            <span className="contact-icon">🚨</span>
                            <span className="emergency-text">Urgences {collaborator.emergency}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="card-footer">
                      {collaborator.url && (
                        <a 
                          href={collaborator.url} 
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>🌐</span>
                          Visiter le site web
                        </a>
                      )}
                      {collaborator.phone && (
                        <a 
                          href={`tel:${collaborator.phone.replace(/\s/g, '')}`} 
                          className="btn btn-secondary"
                        >
                          <span>📞</span>
                          Contacter
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Section d'information complémentaire */}
        <section className="info-section">
          <div className="container">
            <div className="info-card">
              <div className="info-content">
                <h3 className="info-title">
                  <span className="info-icon">🤝</span>
                  Pourquoi ces partenariats ?
                </h3>
                <p className="info-text">
                  Nos collaborateurs médicaux partagent notre engagement pour une prise en charge de qualité 
                  et humanisée des bénéficiaires. Grâce à ces partenariats solides, nous pouvons garantir 
                  l'accès à des soins spécialisés dans les meilleures conditions.
                </p>
                <div className="info-features">
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Prise en charge rapide</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Accès à des spécialistes renommés</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Suivi personnalisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborateurs;
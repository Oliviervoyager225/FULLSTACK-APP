import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const benevoleActions = [
  "Accompagner nos bénéficiaires dans leurs activités",
  "Participer à l'organisation d'événements",
  "Apporter un soutien médical, éducatif ou administratif",
];

const temoignages = [
  { 
    nom: 'Aminata K.', 
    texte: "Bénévole depuis 2 ans, cette expérience a changé ma vision du monde. Voir ces jeunes reprendre confiance en eux est une récompense inestimable.", 
    role: 'Bénévole accompagnatrice' 
  },
  { 
    nom: 'Kofi M.', 
    texte: "J'ai rejoint La Fée Rima pour donner du sens à mes compétences médicales. L'équipe est formidable et l'impact sur les familles est réel.", 
    role: 'Bénévole médical' 
  },
];

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

export default function DevenirBenevole() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero" style={{ backgroundImage: `url(/assets/feerima/hero.jpg)` }}>
          <div className="page-hero-content">
            <h1>Devenir bénévole</h1>
            <p>Donnez de votre temps, changez des vies</p>
          </div>
        </section>

        <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ color: NAVY, marginBottom: '30px' }}>Nos besoins</h2>
            <div style={{ display: 'grid', gap: '20px' }}>
              {benevoleActions.map((action, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '10px',
                    borderLeft: `5px solid ${ACCENT}`,
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: ACCENT,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p style={{ margin: 0, color: NAVY, fontSize: '16px' }}>{action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ color: NAVY, marginBottom: '30px' }}>Témoignages de nos bénévoles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {temoignages.map((t, index) => (
                <div
                  key={index}
                  style={{
                    border: `2px solid ${ACCENT}`,
                    borderRadius: '12px',
                    padding: '25px',
                    backgroundColor: '#fafafa',
                  }}
                >
                  <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '20px', margin: 0 }}>
                    "{t.texte}"
                  </p>
                  <div style={{ marginTop: '20px', borderTop: `2px solid ${ACCENT}`, paddingTop: '15px' }}>
                    <p style={{ fontWeight: 'bold', color: NAVY, margin: '5px 0' }}>{t.nom}</p>
                    <p style={{ color: '#999', fontSize: '13px', margin: '0' }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: ACCENT, borderRadius: '12px', color: 'white' }}>
            <h3 style={{ margin: '0 0 15px 0' }}>Prêt à nous aider ?</h3>
            <p style={{ margin: '0 0 20px 0' }}>Remplissez un formulaire simple pour devenir bénévole</p>
            <button
              style={{
                padding: '12px 40px',
                backgroundColor: 'white',
                color: ACCENT,
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              S'inscrire
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

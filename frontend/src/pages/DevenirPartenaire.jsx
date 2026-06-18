import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const partenariats = [
  { 
    type: 'Technique', 
    icon: '⚙️', 
    desc: 'Apportez votre expertise métier et vos outils au service du soin.',
    exemples: ['Fourniture de matériel médical', 'Services informatiques', 'Conseil en gestion']
  },
  { 
    type: 'Financier', 
    icon: '💼', 
    desc: 'Soutenez nos programmes par un appui financier dédié.',
    exemples: ['Sponsorisation de programmes', 'Dons ponctuels ou réguliers', 'Financement de projets']
  },
  { 
    type: 'Éducatif', 
    icon: '🎓', 
    desc: 'Collaborez sur des actions de formation et de sensibilisation.',
    exemples: ['Ateliers de sensibilisation', 'Formations professionnelles', 'Recherche collaborative']
  },
  { 
    type: 'Institutionnel', 
    icon: '🏛️', 
    desc: 'Renforcez notre crédibilité et notre rayonnement local et national.',
    exemples: ['Partenariat stratégique', 'Appui institutionnel', 'Reconnaissance mutuelle']
  },
];

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

export default function DevenirPartenaire() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero" style={{ backgroundImage: `url(/assets/feerima/hero.jpg)` }}>
          <div className="page-hero-content">
            <h1>Devenir partenaire</h1>
            <p>Collaborez avec nous pour transformer des vies</p>
          </div>
        </section>

        <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ color: NAVY, marginBottom: '20px' }}>Types de partenariats</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Plusieurs façons de collaborer avec La Fée Rima
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {partenariats.map((p, index) => (
              <div
                key={index}
                style={{
                  border: '2px solid #eee',
                  borderRadius: '12px',
                  padding: '30px',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ACCENT;
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 181, 24, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#eee';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '50px', marginBottom: '15px' }}>{p.icon}</div>
                <h3 style={{ color: NAVY, marginBottom: '15px' }}>{p.type}</h3>
                <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>{p.desc}</p>
                <ul style={{ textAlign: 'left', color: '#666', fontSize: '13px', margin: 0, paddingLeft: '20px' }}>
                  {p.exemples.map((exemple, idx) => (
                    <li key={idx} style={{ marginBottom: '8px' }}>{exemple}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <button
              style={{
                padding: '15px 40px',
                backgroundColor: ACCENT,
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Nous contacter
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

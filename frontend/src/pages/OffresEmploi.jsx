import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const offres = [
  { poste: 'Pédopsychiatre', type: 'CDI', lieu: 'Abidjan', salaire: 'À négocier' },
  { poste: 'Psychologue clinicien(ne)', type: 'CDI', lieu: 'Abidjan', salaire: 'À négocier' },
  { poste: 'Éducateur spécialisé', type: 'CDD', lieu: 'Abidjan', salaire: 'À négocier' },
  { poste: 'Assistant(e) social(e)', type: 'CDI', lieu: 'Abidjan', salaire: 'À négocier' },
];

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

export default function OffresEmploi() {
  const [filtreType, setFiltreType] = useState('');

  const offresFiltrees = filtreType 
    ? offres.filter(o => o.type === filtreType)
    : offres;

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero" style={{ backgroundImage: `url(/assets/feerima/hero.jpg)` }}>
          <div className="page-hero-content">
            <h1>Offres d'emploi</h1>
            <p>Rejoignez notre équipe dynamique</p>
          </div>
        </section>

        <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ color: NAVY, marginBottom: '20px' }}>Filtrer par type</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setFiltreType('')}
                style={{
                  padding: '10px 20px',
                  backgroundColor: filtreType === '' ? ACCENT : '#eee',
                  color: filtreType === '' ? 'white' : NAVY,
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Tous
              </button>
              {['CDI', 'CDD'].map(type => (
                <button
                  key={type}
                  onClick={() => setFiltreType(type)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: filtreType === type ? ACCENT : '#eee',
                    color: filtreType === type ? 'white' : NAVY,
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {offresFiltrees.map((offre, index) => (
              <div
                key={index}
                style={{
                  border: '2px solid #eee',
                  borderRadius: '12px',
                  padding: '20px',
                  backgroundColor: '#fafafa',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ACCENT;
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(124, 181, 24, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#eee';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h3 style={{ color: NAVY, margin: '0 0 10px 0' }}>{offre.poste}</h3>
                    <p style={{ color: '#666', margin: '5px 0' }}>
                      <strong>Type :</strong> {offre.type}
                    </p>
                    <p style={{ color: '#666', margin: '5px 0' }}>
                      <strong>Lieu :</strong> {offre.lieu}
                    </p>
                  </div>
                  <button
                    style={{
                      padding: '10px 25px',
                      backgroundColor: ACCENT,
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Candidater
                  </button>
                </div>
              </div>
            ))}
          </div>

          {offresFiltrees.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
              Aucune offre disponible pour ce filtre.
            </p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

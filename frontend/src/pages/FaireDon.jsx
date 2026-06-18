import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const montantsPredefinis = [
  { label: '5 000 CFA', valeur: 5000 },
  { label: '10 000 CFA', valeur: 10000 },
  { label: '25 000 CFA', valeur: 25000 },
  { label: '50 000 CFA', valeur: 50000 },
];

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

export default function FaireDon() {
  const [montant, setMontant] = useState('');
  const [typesDon, setTypesDon] = useState('ponctuel'); // 'ponctuel' ou 'regulier'
  const [methodePayment, setMethodePayment] = useState('');

  const handleMontantClick = (valeur) => {
    setMontant(valeur.toString());
  };

  const handleMontantCustom = (e) => {
    setMontant(e.target.value);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero" style={{ backgroundImage: `url(/assets/feerima/hero.jpg)` }}>
          <div className="page-hero-content">
            <h1>Faire un don</h1>
            <p>Participez à notre mission pour transformer des vies</p>
          </div>
        </section>

        <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ color: NAVY, marginBottom: '15px' }}>Votre générosité compte</h2>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Chaque contribution nous aide à continuer notre mission d'accompagnement des adolescents et jeunes en détresse.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', borderRadius: '15px', padding: '40px' }}>
            {/* Type de don */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: NAVY, marginBottom: '20px' }}>Type de don</h3>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="type-don"
                    value="ponctuel"
                    checked={typesDon === 'ponctuel'}
                    onChange={(e) => setTypesDon(e.target.value)}
                  />
                  <span style={{ color: NAVY, fontWeight: 'bold' }}>Don ponctuel</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="type-don"
                    value="regulier"
                    checked={typesDon === 'regulier'}
                    onChange={(e) => setTypesDon(e.target.value)}
                  />
                  <span style={{ color: NAVY, fontWeight: 'bold' }}>Don régulier</span>
                </label>
              </div>
            </div>

            {/* Montant */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: NAVY, marginBottom: '20px' }}>Choisir un montant</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                {montantsPredefinis.map((item) => (
                  <button
                    key={item.valeur}
                    onClick={() => handleMontantClick(item.valeur)}
                    style={{
                      padding: '15px 20px',
                      backgroundColor: montant === item.valeur.toString() ? ACCENT : '#ffffff',
                      color: montant === item.valeur.toString() ? 'white' : NAVY,
                      border: `2px solid ${montant === item.valeur.toString() ? ACCENT : '#ddd'}`,
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Autre montant"
                  value={montant}
                  onChange={handleMontantCustom}
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    border: `2px solid #ddd`,
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                />
              </div>
            </div>

            {/* Méthode de paiement */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ color: NAVY, marginBottom: '20px' }}>Méthode de paiement</h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {['Carte bancaire', 'Virement bancaire', 'Orange Money', 'Wave'].map((methode) => (
                  <label key={methode} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '12px', backgroundColor: methodePayment === methode ? ACCENT + '15' : 'transparent', borderRadius: '8px' }}>
                    <input
                      type="radio"
                      name="methode-paiement"
                      value={methode}
                      checked={methodePayment === methode}
                      onChange={(e) => setMethodePayment(e.target.value)}
                    />
                    <span style={{ color: NAVY }}>{methode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Bouton action */}
            <button
              disabled={!montant || !methodePayment}
              style={{
                width: '100%',
                padding: '15px 30px',
                backgroundColor: montant && methodePayment ? ACCENT : '#ccc',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: montant && methodePayment ? 'pointer' : 'not-allowed',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                if (montant && methodePayment) {
                  e.target.style.backgroundColor = '#6a9b14';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (montant && methodePayment) {
                  e.target.style.backgroundColor = ACCENT;
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              Procéder au paiement
            </button>
          </div>

          {/* Info supplémentaire */}
          <div style={{ marginTop: '50px', padding: '25px', backgroundColor: '#f0f8ff', borderRadius: '12px', borderLeft: `5px solid ${ACCENT}` }}>
            <h4 style={{ color: NAVY, margin: '0 0 10px 0' }}>💡 Information importante</h4>
            <p style={{ color: '#555', margin: '0', fontSize: '14px' }}>
              Votre contribution est sécurisée et vos données personnelles sont protégées conformément à nos politiques de confidentialité. Vous recevrez un reçu pour votre don.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

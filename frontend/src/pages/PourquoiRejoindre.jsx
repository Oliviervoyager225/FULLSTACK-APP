import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PageHero.css';

const raisons = [
  "Participer à un projet innovant en santé mentale pour les adolescents et les jeunes.",
  "Contribuer au développement d'approches modernes, adaptées aux réalités locales et centrées sur les besoins spécifiques de chaque bénéficiaire.",
  "Intégrer une structure humaine, engagée et collaborer avec une équipe pluridisciplinaire et dynamique.",
  "Accompagner des adolescents et des jeunes et participer à transformer des vies.",
];

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

export default function PourquoiRejoindre() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero" style={{ backgroundImage: `url(/assets/feerima/hero.jpg)` }}>
          <div className="page-hero-content">
            <h1>Pourquoi nous rejoindre ?</h1>
            <p>Rejoignez une mission qui a du sens</p>
          </div>
        </section>

        <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="raisons-list">
            {raisons.map((raison, index) => (
              <div key={index} className="raison-item" style={{ 
                display: 'flex', 
                gap: '20px', 
                marginBottom: '30px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: ACCENT,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {index + 1}
                </div>
                <div>
                  <p style={{ fontSize: '18px', color: NAVY, margin: 0 }}>{raison}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

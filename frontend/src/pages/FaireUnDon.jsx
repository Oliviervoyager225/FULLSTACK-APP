import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Historique.css';
import '../styles/PageHero.css';
import '../styles/FaireUnDon.css';

const paymentMethods = [
  {
    icon: '💳',
    label: 'Carte bancaire',
    desc: 'Paiement sécurisé via interface bancaire ou virement',
  },
  {
    icon: '📱',
    label: 'Mobile money',
    desc: 'Orange Money, Wave, MTN Money…',
  },
  {
    icon: '🏦',
    label: 'Chèque',
    desc: 'À libeller à l\'ordre de La Fée Rima',
  },
];

export default function FaireUnDon() {
  const [activeTab, setActiveTab] = useState('don');

  return (
    <div className="historique-page">
      <Navbar />

      {/* Hero */}
      <section
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 50%, #e8735a 100%)' }}
      >
        <div className="page-hero-content">
          <div className="don-hero-icon">❤</div>
          <h1>Faire un don</h1>
          <p>Agissez aux côtés de la Fondation La Fée Rima dès maintenant</p>
        </div>
      </section>

      <main className="historique-main">

        {/* ── Intro ── */}
        <section className="hist-section section-1" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <div className="don-intro">
            <p>
              Chaque don, qu'il soit matériel ou financier, participe à bâtir un avenir meilleur
              pour les adolescents et jeunes que nous accompagnons.
            </p>
            <p>
              Parrainer un adolescent ou un jeune, c'est lui redonner de l'espoir et le sourire
              en lui offrant une prise en charge globale.
            </p>
            <p className="don-intro-accent">
              Votre générosité peut faire toute la différence. <strong>Merci !</strong>
            </p>
          </div>
        </section>

        {/* ── Onglets ── */}
        <section className="don-section-outer">
          <div className="don-section-inner">

            <div className="don-tabs">
              <button
                className={`don-tab${activeTab === 'don' ? ' active' : ''}`}
                onClick={() => setActiveTab('don')}
              >
                ❤ Je souhaite faire un don
              </button>
              <button
                className={`don-tab${activeTab === 'parrainage' ? ' active' : ''}`}
                onClick={() => setActiveTab('parrainage')}
              >
                🤝 Je souhaite parrainer un ado / un jeune
              </button>
            </div>

            {/* ── Carte Don ── */}
            {activeTab === 'don' && (
              <div className="don-card">
                <div className="don-card-header don-card-header--red">
                  <span className="don-card-icon">❤</span>
                  <h2>Je souhaite faire un don</h2>
                </div>

                <div className="don-card-body">
                  <p className="don-card-desc">
                    Votre don, quel que soit son montant, contribue directement à améliorer la
                    prise en charge des jeunes souffrant de troubles mentaux au sein de nos centres.
                  </p>

                  <h3 className="don-payment-title">Moyens de paiement</h3>
                  <div className="don-payment-grid">
                    {paymentMethods.map((m, i) => (
                      <div key={i} className="don-payment-item">
                        <span className="don-payment-icon">{m.icon}</span>
                        <div>
                          <strong>{m.label}</strong>
                          <p>{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="mailto:contact@lafeerima.ci" className="don-cta-btn don-cta-btn--red">
                    Faire un don maintenant
                  </a>
                </div>
              </div>
            )}

            {/* ── Carte Parrainage ── */}
            {activeTab === 'parrainage' && (
              <div className="don-card">
                <div className="don-card-header don-card-header--teal">
                  <span className="don-card-icon">🤝</span>
                  <h2>Je souhaite parrainer un ado / un jeune</h2>
                </div>

                <div className="don-card-body">
                  <p className="don-card-desc">
                    Parrainer un jeune, c'est lui redonner de l'espoir en lui offrant une prise
                    en charge globale et continue. Un geste fort, un impact durable.
                  </p>

                  <div className="don-montant-badge">
                    <span className="don-montant-label">Montant</span>
                    <span className="don-montant-value">À DÉFINIR</span>
                    <p className="don-montant-note">
                      Le montant du parrainage sera déterminé selon les besoins du jeune
                      accompagné. Contactez-nous pour en savoir plus.
                    </p>
                  </div>

                  <h3 className="don-payment-title">Moyens de paiement</h3>
                  <div className="don-payment-grid">
                    {paymentMethods.map((m, i) => (
                      <div key={i} className="don-payment-item">
                        <span className="don-payment-icon">{m.icon}</span>
                        <div>
                          <strong>{m.label}</strong>
                          <p>{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="mailto:contact@lafeerima.ci" className="don-cta-btn don-cta-btn--teal">
                    Devenir parrain / marraine
                  </a>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ── Impact chiffré ── */}
        <section className="don-impact-section">
          <div className="don-section-inner">
            <h2 className="don-impact-title">Votre don en action</h2>
            <div className="don-impact-grid">
              <div className="don-impact-card">
                <span className="don-impact-num">10–25</span>
                <span className="don-impact-label">ans — tranche d'âge accompagnée</span>
              </div>
              <div className="don-impact-card">
                <span className="don-impact-num">100%</span>
                <span className="don-impact-label">des dons utilisés pour la prise en charge</span>
              </div>
              <div className="don-impact-card">
                <span className="don-impact-num">❤</span>
                <span className="don-impact-label">Chaque don compte, quel que soit le montant</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

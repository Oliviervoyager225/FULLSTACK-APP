import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ACCENT = '#7cb518';
const NAVY = '#1a3a5c';

const moyensPaiement = [
  { /*icon: '💳',*/ label: 'Carte bancaire / virement bancaire' },
  { /*icon: '📱',*/ label: 'Mobile money' },
  { /*icon: '🧾',*/ label: 'Chèque' },
];

const initialForm = { prenom: '', nom: '', email: '', telephone: '', montant: '', methode: '', message: '' };

export default function FaireDon() {
  const [modalType, setModalType] = useState(null); // 'don' | 'parrainage' | null
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const openModal = (type) => {
    setModalType(type);
    setForm(initialForm);
    setSent(false);
  };

  const closeModal = () => setModalType(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulation envoi (à connecter au backend) — un membre de l'équipe recontacte le donateur pour finaliser le paiement
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        .don-page * {
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }

        /* ── Hero ── */
        .don-hero {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          background: url(/assets/feerima/hero.jpg) center/cover no-repeat;
          overflow: hidden;
        }
        .don-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            rgba(26, 58, 92, 0.72) 0%,
            rgba(26, 58, 92, 0.30) 55%,
            rgba(124, 181, 24, 0.55) 100%
          );
        }
        .don-hero-inner {
          position: relative;
          z-index: 1;
          padding: 60px 48px;
          max-width: 700px;
        }
        .don-hero-eyebrow {
          display: inline-block;
          background: ${ACCENT};
          color: #fff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .don-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 18px;
        }
        .don-hero p {
          color: rgba(255,255,255,0.88);
          font-size: 17px;
          line-height: 1.6;
          margin: 0;
          max-width: 480px;
        }

        /* ── Intro strip ── */
        .don-intro {
          background: #f5f9ee;
          padding: 56px 24px;
          text-align: center;
        }
        .don-intro-inner {
          max-width: 680px;
          margin: 0 auto;
        }
        .don-intro p {
          color: #4a5568;
          font-size: 17px;
          line-height: 1.75;
          margin: 0 0 14px;
        }
        .don-intro p:last-child { margin: 0; }
        .don-intro .highlight {
          color: ${NAVY};
          font-weight: 600;
        }
        .don-intro .merci {
          display: inline-block;
          margin-top: 6px;
          color: ${ACCENT};
          font-size: 20px;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
        }

        /* ── Cards grid ── */
        .don-cards-section {
          padding: 72px 24px;
          max-width: 1040px;
          margin: 0 auto;
        }
        .don-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        /* ── Card ── */
        .don-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(26,58,92,0.09);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .don-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(26,58,92,0.16);
        }
        .don-card-banner {
          padding: 28px 32px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .don-card-banner--green { background: ${ACCENT}; }
        .don-card-banner--navy  { background: ${NAVY}; }
        .don-card-icon {
          font-size: 36px;
          line-height: 1;
          flex-shrink: 0;
        }
        .don-card-banner h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
          line-height: 1.3;
        }
        .don-card-body {
          background: #fff;
          padding: 28px 32px 32px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .don-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: ${NAVY};
          background: #f0f8ff;
          border: 1px solid #c8dff0;
          border-radius: 6px;
          padding: 5px 12px;
          margin-bottom: 22px;
          width: fit-content;
        }
        .don-payment-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #9aabb9;
          margin-bottom: 12px;
        }
        .don-payment-list {
          list-style: none;
          padding: 0;
          margin: 0 0 auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .don-payment-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: #4a5568;
          background: #f8fafc;
          border-radius: 8px;
          padding: 10px 14px;
        }
        .don-payment-list li span.pi {
          font-size: 18px;
          flex-shrink: 0;
        }
        .don-cta {
          display: inline-block;
          margin-top: 28px;
          padding: 14px 32px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          text-align: center;
          transition: opacity 0.2s, transform 0.2s;
          align-self: flex-start;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
        }
        .don-cta:hover { opacity: 0.88; transform: translateY(-1px); }
        .don-cta--green { background: ${ACCENT}; color: #fff; }
        .don-cta--navy  { background: ${NAVY};  color: #fff; }

        /* ── Info box ── */
        .don-info {
          margin: 0 auto;
          max-width: 1040px;
          padding: 0 24px 72px;
        }
        .don-info-inner {
          background: #f5f9ee;
          border-left: 4px solid ${ACCENT};
          border-radius: 12px;
          padding: 22px 28px;
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .don-info-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .don-info-text h4 {
          color: ${NAVY};
          font-size: 15px;
          font-weight: 600;
          margin: 0 0 6px;
        }
        .don-info-text p {
          color: #596a7a;
          font-size: 14px;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Modal ── */
        .don-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 30, 40, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 1000;
        }
        .don-modal {
          background: #fff;
          border-radius: 18px;
          max-width: 480px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }
        .don-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 28px;
          color: #fff;
        }
        .don-modal-header--green { background: ${ACCENT}; }
        .don-modal-header--navy  { background: ${NAVY}; }
        .don-modal-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin: 0;
        }
        .don-modal-close {
          background: rgba(255,255,255,0.18);
          border: none;
          color: #fff;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          font-size: 16px;
          cursor: pointer;
          line-height: 1;
        }
        .don-modal-close:hover { background: rgba(255,255,255,0.3); }
        .don-modal-body { padding: 26px 28px 30px; }
        .don-modal-badge {
          font-size: 13px;
          font-weight: 600;
          color: ${NAVY};
          background: #fff8e1;
          border: 1px solid #ffe9a8;
          border-radius: 6px;
          padding: 6px 12px;
          margin-bottom: 18px;
        }
        .don-field { margin-bottom: 16px; }
        .don-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: ${NAVY};
          margin-bottom: 6px;
        }
        .don-field input,
        .don-field textarea {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid #dbe3ea;
          border-radius: 9px;
          font-size: 14.5px;
          font-family: 'Inter', sans-serif;
        }
        .don-field input:focus,
        .don-field textarea:focus {
          outline: none;
          border-color: ${ACCENT};
        }
        .don-field-row { display: flex; gap: 12px; }
        .don-field-row .don-field { flex: 1; }
        .don-payment-options { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .don-payment-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid #dbe3ea;
          border-radius: 9px;
          cursor: pointer;
          font-size: 14px;
          color: #4a5568;
        }
        .don-payment-option input { margin: 0; }
        .don-modal-submit {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .don-modal-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .don-success { text-align: center; padding: 10px 0; }
        .don-success h4 { color: ${NAVY}; margin: 0 0 10px; }
        .don-success p { color: #596a7a; font-size: 14.5px; line-height: 1.6; margin: 0 0 22px; }

        @media (max-width: 600px) {
          .don-hero-inner { padding: 40px 24px; }
          .don-card-banner { padding: 22px 24px; }
          .don-card-body   { padding: 22px 24px 28px; }
          .don-field-row { flex-direction: column; gap: 0; }
        }
      `}</style>

      <div className="don-page">
        <Navbar />
        <main>

          {/* ── Hero ── */}
          <section className="don-hero">
            <div className="don-hero-inner">
              <span className="don-hero-eyebrow">Agir maintenant</span>
              <h1>Faire un don</h1>
              <p>Chaque geste compte. Rejoignez la Fondation La Fée Rima et offrez un avenir meilleur aux adolescents et jeunes que nous accompagnons.</p>
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="don-intro">
            <div className="don-intro-inner">
              <p>
                Chaque don, qu'il soit matériel ou financier, participe à bâtir un avenir meilleur
                pour les adolescents et jeunes que nous accompagnons.
              </p>
              <p>
                Parrainer un adolescent ou un jeune, c'est lui redonner de l'espoir et le sourire
                en lui offrant une prise en charge globale.
              </p>
              <p className="highlight">Votre générosité peut faire toute la différence.</p>
              <span className="merci">Merci !</span>
            </div>
          </section>

          {/* ── Cards ── */}
          <section className="don-cards-section">
            <div className="don-cards-grid">

              {/* Card 1 – Don */}
              <div className="don-card">
                <div className="don-card-banner don-card-banner--green">
                  {/* <span className="don-card-icon">🤲</span> */}
                  <h3>Je souhaite faire un don</h3>
                </div>
                <div className="don-card-body">
                  <p className="don-payment-label">Moyens de paiement</p>
                  <ul className="don-payment-list">
                    {moyensPaiement.map((m) => (
                      <li key={m.label}>
                        {m.label}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="don-cta don-cta--green" onClick={() => openModal('don')}>
                    Faire un don →
                  </button>
                </div>
              </div>

              {/* Card 2 – Parrainage */}
              <div className="don-card">
                <div className="don-card-banner don-card-banner--navy">
                  {/* <span className="don-card-icon">🌟</span> */}
                  <h3>Je souhaite parrainer un ado / un jeune</h3>
                </div>
                <div className="don-card-body">
                  <div className="don-card-badge">
                    Montant : à définir ensemble
                  </div>
                  <p className="don-payment-label">Moyens de paiement</p>
                  <ul className="don-payment-list">
                    {moyensPaiement.map((m) => (
                      <li key={m.label}>
                        {m.label}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="don-cta don-cta--navy" onClick={() => openModal('parrainage')}>
                    Devenir parrain →
                  </button>
                </div>
              </div>

            </div>
          </section>

          {/* ── Info ── */}
          <div className="don-info">
            <div className="don-info-inner">
              <div className="don-info-text">
                <h4>Information importante</h4>
                <p>
                  Votre contribution est sécurisée et vos données personnelles sont protégées
                  conformément à nos politiques de confidentialité. Vous recevrez un reçu pour votre don.
                </p>
              </div>
            </div>
          </div>

        </main>
        <Footer />

        {/* ── Modal Don / Parrainage ── */}
        {modalType && (
          <div className="don-modal-overlay" onClick={closeModal}>
            <div className="don-modal" onClick={(e) => e.stopPropagation()}>
              <div className={`don-modal-header ${modalType === 'don' ? 'don-modal-header--green' : 'don-modal-header--navy'}`}>
                <h3>{modalType === 'don' ? 'Faire un don' : 'Devenir parrain'}</h3>
                <button type="button" className="don-modal-close" onClick={closeModal} aria-label="Fermer">✕</button>
              </div>
              <div className="don-modal-body">
                {sent ? (
                  <div className="don-success">
                    <h4>Merci pour votre générosité !</h4>
                    <p>
                      Votre demande a bien été enregistrée. Un membre de notre équipe vous contactera
                      très prochainement pour finaliser {modalType === 'don' ? 'votre don' : 'votre parrainage'}.
                    </p>
                    <button
                      type="button"
                      className="don-cta don-cta--green"
                      style={{ width: '100%', textAlign: 'center' }}
                      onClick={closeModal}
                    >
                      Fermer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {modalType === 'parrainage' && (
                      <div className="don-modal-badge">Montant à définir ensemble avec notre équipe</div>
                    )}
                    <div className="don-field-row">
                      <div className="don-field">
                        <label htmlFor="prenom">Prénom *</label>
                        <input id="prenom" name="prenom" type="text" required value={form.prenom} onChange={handleChange} />
                      </div>
                      <div className="don-field">
                        <label htmlFor="nom">Nom *</label>
                        <input id="nom" name="nom" type="text" required value={form.nom} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="don-field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
                    </div>
                    <div className="don-field">
                      <label htmlFor="telephone">Téléphone *</label>
                      <input id="telephone" name="telephone" type="tel" required value={form.telephone} onChange={handleChange} />
                    </div>
                    {modalType === 'don' && (
                      <div className="don-field">
                        <label htmlFor="montant">Montant souhaité (FCFA)</label>
                        <input id="montant" name="montant" type="number" min="0" placeholder="Ex : 25000" value={form.montant} onChange={handleChange} />
                      </div>
                    )}
                    <div className="don-field">
                      <label>Moyen de paiement souhaité *</label>
                      <div className="don-payment-options">
                        {moyensPaiement.map((m) => (
                          <label key={m.label} className="don-payment-option">
                            <input
                              type="radio"
                              name="methode"
                              value={m.label}
                              checked={form.methode === m.label}
                              onChange={handleChange}
                              required
                            />
                            {m.label}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="don-field">
                      <label htmlFor="message">Message (facultatif)</label>
                      <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange} />
                    </div>
                    <button
                      type="submit"
                      className="don-modal-submit"
                      style={{ background: modalType === 'don' ? ACCENT : NAVY }}
                      disabled={sending}
                    >
                      {sending ? 'Envoi en cours...' : modalType === 'don' ? 'Faire mon don' : 'Devenir parrain'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

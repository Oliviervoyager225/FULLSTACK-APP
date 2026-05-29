// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const satisfactionItems = [
//     "Qualité de l'accueil",
//     'Clarté des informations reçues',
//     'Disponibilité des équipes soignantes',
//     'Qualité des soins',
//     'Respect de votre intimité',
//     'Propreté et confort des locaux',
// ];

// export default function Satisfaction() {
//     const [ratings, setRatings] = useState({});
//     const [submitted, setSubmitted] = useState(false);

//     const handleRate = (item, value) => {
//         setRatings((prev) => ({ ...prev, [item]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubmitted(true);
//     };

//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9f0bV9fGZD6pQK8S1J7-GMng3MpIBrlwkww&s')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Satisfaction</h1>
//                     <p>Donnez-nous votre avis pour améliorer votre expérience</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>VOTRE AVIS NOUS IMPORTE</h2>
//                         <p>
//                             La mesure de la satisfaction des patients et de leurs familles est un
//                             axe central de notre démarche qualité. Les résultats des enquêtes de
//                             satisfaction sont analysés par notre équipe et transmis à la Commission
//                             des Usagers pour alimenter notre plan d'amélioration continue.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('data:image/jpeg;base64,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')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 {/* Formulaire de satisfaction */}
//                 <section style={{ padding: '3rem 2rem', maxWidth: '750px', margin: '0 auto' }}>
//                     {submitted ? (
//                         <div
//                             style={{
//                                 background: '#f0fdf4',
//                                 border: '1px solid #7cb518',
//                                 borderRadius: '12px',
//                                 padding: '2rem',
//                                 textAlign: 'center',
//                             }}
//                         >
//                             <h2 style={{ color: '#7cb518' }}>Merci pour votre retour !</h2>
//                             <p>Votre avis a bien été pris en compte. Il contribue à l'amélioration de nos services.</p>
//                         </div>
//                     ) : (
//                         <form onSubmit={handleSubmit}>
//                             <h2 style={{ marginBottom: '1.5rem', color: '#1a3a5c' }}>
//                                 ÉVALUEZ VOTRE EXPÉRIENCE
//                             </h2>
//                             {satisfactionItems.map((item) => (
//                                 <div
//                                     key={item}
//                                     style={{
//                                         marginBottom: '1.25rem',
//                                         background: '#f9f9f9',
//                                         borderRadius: '8px',
//                                         padding: '1rem 1.25rem',
//                                         boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
//                                     }}
//                                 >
//                                     <p style={{ marginBottom: '0.5rem', fontWeight: 500 }}>{item}</p>
//                                     <div style={{ display: 'flex', gap: '0.5rem' }}>
//                                         {[1, 2, 3, 4, 5].map((star) => (
//                                             <button
//                                                 key={star}
//                                                 type="button"
//                                                 onClick={() => handleRate(item, star)}
//                                                 style={{
//                                                     background: 'none',
//                                                     border: 'none',
//                                                     cursor: 'pointer',
//                                                     fontSize: '1.75rem',
//                                                     color: ratings[item] >= star ? '#7cb518' : '#d1d5db',
//                                                     transition: 'color 0.2s',
//                                                 }}
//                                                 aria-label={`Note ${star} sur 5`}
//                                             >
//                                                 ★
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                             <button
//                                 type="submit"
//                                 style={{
//                                     marginTop: '1rem',
//                                     background: '#7cb518',
//                                     color: '#fff',
//                                     border: 'none',
//                                     borderRadius: '8px',
//                                     padding: '0.85rem 2rem',
//                                     fontWeight: 600,
//                                     fontSize: '1rem',
//                                     cursor: 'pointer',
//                                     transition: 'background 0.2s',
//                                 }}
//                             >
//                                 Envoyer mon avis
//                             </button>
//                         </form>
//                     )}
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Satisfaction.css';

const satisfactionItems = [
    { label: "Qualité de l'accueil", icon: "🤝" },
    { label: 'Clarté des informations reçues', icon: '📋' },
    { label: 'Disponibilité des équipes soignantes', icon: '👩‍⚕️' },
    { label: 'Qualité des soins', icon: '💊' },
    { label: 'Respect de votre intimité', icon: '🔒' },
    { label: 'Propreté et confort des locaux', icon: '🏥' },
];

const ratingLabels = ['', 'Insuffisant', 'Passable', 'Bien', 'Très bien', 'Excellent'];

export default function Satisfaction() {
    const [ratings, setRatings] = useState({});
    const [hovered, setHovered] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleRate = (item, value) => {
        setRatings((prev) => ({ ...prev, [item]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        setSubmitted(true);
    };

    const allRated = satisfactionItems.every(({ label }) => ratings[label]);
    const avgRating = Object.values(ratings).length
        ? (Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length).toFixed(1)
        : null;

    return (
        <div className="sat-page">
            <Navbar />

            {/* ─── Hero ─── */}
            <section className="sat-hero">
                <div className="sat-hero-content">
                    <div className="sat-hero-eyebrow">Votre expérience</div>
                    <h1>
                        Satisfaction<br />Patient
                    </h1>
                    <p>Donnez-nous votre avis pour améliorer votre expérience de soins.</p>
                </div>
            </section>

            <main className="sat-main">
                {/* ─── Intro ─── */}
                <div className="sat-intro">
                    <div>
                        <h2>Votre avis nous importe</h2>
                        {/* <p>
                            La mesure de la satisfaction des patients et de leurs familles est un axe central
                            de notre démarche qualité. Les résultats sont analysés par notre équipe et transmis
                            à la Commission des Usagers pour alimenter notre plan d'amélioration continue.
                        </p> */}

                        <p>
                            Afin d’améliorer continuellement la qualité de nos services, nous invitons chaque bénéficiaire et accompagnant à partager son expérience anonymement en répondant à notre questionnaire de satisfaction.
                        </p>
                        <br />
                        <p>
                            Toute personne qui rencontre des difficultés et souhaite exprimer un motif de mécontentement, est encouragée à en faire part à un membre de l'équipe soignante, qui est à l’écoute pour apporter des réponses. Il est également possible d’adresser une réclamation à la direction par courrier.
                        </p>
                    </div>
                    <div className="sat-intro-badge">
                        <span>⭐</span>
                        Qualité<br />& Soins
                    </div>
                </div>

                {/* ─── Form / Success ─── */}
                {submitted ? (
                    <div className="sat-success">
                        <div className="sat-success-icon">✓</div>
                        <h2>Merci pour votre retour !</h2>
                        <p>
                            Votre avis a bien été pris en compte. Il contribue à l'amélioration
                            continue de la qualité de nos services et de votre expérience de soins.
                        </p>
                        {avgRating && (
                            <div className="sat-score-pill">
                                <span>Note moyenne donnée :</span>
                                <span className="sat-score-num">{avgRating}</span>
                                <span style={{ color: '#9ca3af' }}>/&nbsp;5</span>
                            </div>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="sat-form">
                        <div className="sat-form-header">
                            <h2>Évaluez votre expérience</h2>
                            <span className="sat-progress-label">
                                {Object.keys(ratings).length}/{satisfactionItems.length} évalués
                            </span>
                        </div>

                        <div className="sat-progress-bar">
                            <div
                                className="sat-progress-fill"
                                style={{
                                    width: `${(Object.keys(ratings).length / satisfactionItems.length) * 100}%`,
                                }}
                            />
                        </div>

                        {satisfactionItems.map(({ label, icon }) => {
                            const current = ratings[label] || 0;
                            const preview = hovered[label] || 0;
                            const display = preview || current;

                            return (
                                <div key={label} className={`sat-item${current ? ' rated' : ''}`}>
                                    <div className="sat-item-icon">{icon}</div>
                                    <div className="sat-item-body">
                                        <div className="sat-item-label">{label}</div>
                                        <div className="sat-stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    className={`sat-star${
                                                        display >= star
                                                            ? preview
                                                                ? ' preview'
                                                                : ' active'
                                                            : ''
                                                    }`}
                                                    onClick={() => handleRate(label, star)}
                                                    onMouseEnter={() =>
                                                        setHovered((h) => ({ ...h, [label]: star }))
                                                    }
                                                    onMouseLeave={() =>
                                                        setHovered((h) => ({ ...h, [label]: 0 }))
                                                    }
                                                    aria-label={`${star} étoile${star > 1 ? 's' : ''}`}
                                                >
                                                    ★
                                                </button>
                                            ))}
                                            <span className="sat-rating-hint">
                                                {ratingLabels[display] || ''}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="sat-check">✓</div>
                                </div>
                            );
                        })}

                        <div className="sat-submit-row">
                            <p className="sat-submit-note">
                                Toutes les évaluations sont anonymes et traitées de façon confidentielle.
                            </p>
                            <button
                                type="submit"
                                className="sat-submit-btn"
                                disabled={!allRated || submitting}
                            >
                                {submitting ? (
                                    <>
                                        <div className="sat-spinner" /> Envoi en cours…
                                    </>
                                ) : (
                                    <>Envoyer mon avis →</>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </main>

            <Footer />
        </div>
    );
}
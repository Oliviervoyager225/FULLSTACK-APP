// ancien code de la page, à revoir pour une meilleure expérience utilisateur et un design plus moderne
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function PlaintesReclamations() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/plainte_reclamation.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Plaintes et réclamations</h1>
//                     <p>Votre satisfaction est notre priorité — votre voix compte</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>EXPRIMER UNE INSATISFACTION</h2>
//                         <p>
//                             Si vous avez vécu une situation qui ne correspond pas à vos attentes
//                             ou à nos engagements, vous avez le droit de l'exprimer. La Fée Rima
//                             encourage toute démarche visant à améliorer la qualité des soins et
//                             de l'accueil. Vos signalements sont traités avec sérieux et
//                             confidentialité.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('https://img.freepik.com/vecteurs-premium/jeune-homme-colere-dans-geste-furieux-hurlant-colere-montrant-poing-exprimant-son-emotion-negative_535862-182.jpg?w=360')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/recours.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>LES VOIES DE RECOURS</h2>
//                         <p>
//                             <strong>1. Le responsable de service</strong> : Première étape, parlez
//                             directement au responsable de l'unité qui vous prend en charge.
//                         </p>
//                         <p>
//                             <strong>2. La Commission des Usagers (CDU)</strong> : Si la situation
//                             n'est pas résolue, vous pouvez saisir la CDU de l'établissement, dont
//                             le rôle est de veiller au respect de vos droits.
//                         </p>
//                         <p>
//                             <strong>3. La voie juridictionnelle</strong> : En dernier recours, vous
//                             pouvez saisir le médiateur de la République ou les juridictions
//                             compétentes.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/feedback.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

// Nouveau code de la page, avec une meilleure expérience utilisateur et un design plus moderne
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PlaintesReclamations.css';

export default function PlaintesReclamations() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="complaints-page">
            <Navbar />

            {/* Hero Section améliorée */}
            <section
                className="hero-section"
                style={{
                    backgroundImage: "linear-gradient(135deg, rgba(128, 114, 114, 0.7) 0%, rgba(0,0,0,0.4) 100%), url('/assets/feerima/plainte_reclamation.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="hero-container">
                    <div className="hero-badge">Nous écoutons</div>
                    <h1 className="hero-title">
                        Plaintes et <span className="highlight">réclamations</span>
                    </h1>
                    <p className="hero-subtitle">
                        Votre satisfaction est notre priorité — votre voix compte
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => handleNavigation('/contact')}>
                            Déposer une réclamation
                        </button>
                        <button className="btn-secondary" onClick={() => handleNavigation('/contact')}>
                            Nous contacter
                        </button>
                    </div>
                </div>
            </section>

            <main className="main-content">
                {/* Section 1 - Insatisfaction */}
                <section className="content-section section-gradient">
                    <div className="container">
                        <div className="grid-2cols reverse">
                            <div className="text-content">
                                <span className="section-tag">01</span>
                                <h2>Exprimer une insatisfaction</h2>
                                <p className="lead">
                                    Votre voix est essentielle pour nous améliorer
                                </p>
                                <p>
                                    Si vous avez vécu une situation qui ne correspond pas à vos attentes
                                    ou à nos engagements, vous avez le droit de l'exprimer. La Fée Rima
                                    encourage toute démarche visant à améliorer la qualité des soins et
                                    de l'accueil. Vos signalements sont traités avec sérieux et
                                    confidentialité.
                                </p>
                                <div className="feature-list">
                                    <div className="feature-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 12V8H6V20H14M12 4L12 8M8 4L8 8M16 4L16 8" stroke="currentColor" />
                                            <path d="M18 22V16M15 19H21" stroke="currentColor" />
                                        </svg>
                                        <span>Traitement confidentiel</span>
                                    </div>
                                    <div className="feature-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" />
                                            <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" />
                                        </svg>
                                        <span>Réponse sous 48h</span>
                                    </div>
                                    <div className="feature-item">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" />
                                        </svg>
                                        <span>Protection de vos droits</span>
                                    </div>
                                </div>
                            </div>
                            <div className="image-content">
                                <div className="image-card">
                                    <img
                                        src="https://img.freepik.com/vecteurs-premium/jeune-homme-colere-dans-geste-furieux-hurlant-colere-montrant-poing-exprimant-son-emotion-negative_535862-182.jpg?w=360"
                                        alt="Expression d'insatisfaction"
                                        className="rounded-image"
                                    />
                                    <div className="image-caption">Votre avis nous importe</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Voies de recours */}
                <section className="content-section bg-light">
                    <div className="container">
                        <div className="section-header text-center">
                            <span className="section-tag">02</span>
                            <h2>Les voies de recours</h2>
                            <p className="section-description">
                                Trois niveaux pour vous accompagner dans votre démarche
                            </p>
                        </div>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker primary">
                                    <span>1</span>
                                </div>
                                <div className="timeline-content">
                                    <h3>Le responsable de service</h3>
                                    <p>Première étape : parlez directement au responsable de l'unité qui vous prend en charge. Une solution rapide et efficace.</p>
                                    <button className="link-button" onClick={() => handleNavigation('/contact')}>
                                        Contacter le responsable →
                                    </button>
                                </div>
                                <div className="timeline-image">
                                    <img src="/assets/feerima/recours.png" alt="Responsable service" />
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker secondary">
                                    <span>2</span>
                                </div>
                                <div className="timeline-content">
                                    <h3>La Commission des Usagers (CDU)</h3>
                                    <p>Si la situation n'est pas résolue, vous pouvez saisir la CDU de l'établissement, dont le rôle est de veiller au respect de vos droits.</p>
                                    <button className="link-button" onClick={() => handleNavigation('/cdu')}>
                                        En savoir plus sur la CDU →
                                    </button>
                                </div>
                                <div className="timeline-image">
                                    <img src="/assets/feerima/feedback.png" alt="Commission des Usagers" />
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker tertiary">
                                    <span>3</span>
                                </div>
                                <div className="timeline-content">
                                    <h3>La voie juridictionnelle</h3>
                                    <p>En dernier recours, vous pouvez saisir le médiateur de la République ou les juridictions compétentes pour une résolution définitive.</p>
                                    <button className="link-button" onClick={() => handleNavigation('/mediateur')}>
                                        Consulter les procédures →
                                    </button>
                                </div>
                                <div className="timeline-image">
                                    <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400" alt="Justice" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 - FAQ rapide */}
                <section className="cta-section">
                    <div className="container text-center">
                        <h2>Une question sur la procédure ?</h2>
                        <p>Notre équipe est à votre disposition pour vous guider dans vos démarches</p>
                        <div className="contact-options">
                            <div className="contact-card" onClick={() => handleNavigation('/contact')}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <h4>Téléphone</h4>
                                <p>01 23 45 67 89</p>
                            </div>
                            <div className="contact-card" onClick={() => handleNavigation('/contact')}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <h4>Email</h4>
                                <p>reclamations@feerima.fr</p>
                            </div>
                            <div className="contact-card" onClick={() => handleNavigation('/faq')}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <h4>FAQ</h4>
                                <p>Consultez notre centre d'aide</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Styles CSS intégrés */}

        </div>
    );
}
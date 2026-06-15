// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function ServiceAccueilUrgence() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/urgent.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Le service d'accueil d'urgence</h1>
//                     <p>Une réponse rapide et bienveillante en situation de crise</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>NOTRE SERVICE D'URGENCE PSYCHIATRIQUE</h2>
//                         <p>
//                             Le service d'accueil d'urgence de La Fée Rima est dédié à la prise en
//                             charge immédiate des jeunes de 10 à 25 ans en situation de crise
//                             psychiatrique. Notre équipe est formée pour intervenir rapidement, avec
//                             calme et bienveillance, afin de sécuriser le patient et d'évaluer sa
//                             situation dans les meilleures conditions.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/psycha.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/Qui_contacter.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>QUAND CONTACTER LE SERVICE D'URGENCE ?</h2>
//                         <p>
//                             Ce service est mobilisable en cas de crise suicidaire, d'agitation
//                             sévère, de décompensation psychiatrique aiguë ou de tout autre état de
//                             détresse nécessitant une évaluation immédiate. L'accueil se fait sans
//                             rendez-vous pour les situations d'urgence, avec une orientation adaptée
//                             dès la première prise en charge.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/contacter.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-3">
//                     <div className="hist-stacked-images">

//                         <div className="hist-stacked-images">
//                             <img
//                                 src="/assets/feerima/apres.png"
//                                 alt="Ma mission"
//                                 className="hist-image"
//                             />
//                         </div>
//                     </div>
//                     <div className="hist-content">
//                         <h2>APRÈS L'URGENCE : QUELLE SUITE ?</h2>
//                         <p>
//                             <strong>Une évaluation complète</strong>
//                             <br />
//                             Chaque passage aux urgences fait l'objet d'une évaluation psychiatrique
//                             approfondie. En fonction de la situation, une orientation vers les
//                             consultations externes, l'hôpital de jour ou une hospitalisation peut
//                             être proposée.
//                         </p>
//                         <p>
//                             <strong>Un accompagnement de la famille</strong>
//                             <br />
//                             La famille est informée et associée à chaque étape de la prise en charge,
//                             dans le respect des règles de confidentialité et du droit du patient.
//                         </p>
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServiceAccueilUrgence() {
    return (
        <div className="historique-page">
            <Navbar />
        
            {/* Hero Section améliorée */}
            <section
                className="page-hero"
                style={{ backgroundImage: "url('/assets/feerima/urgent.png')" }}
            >
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <div className="hero-badge">URGENCE 24/7</div>
                    <h1>Le service d'accueil d'urgence</h1>
                    <p>Une réponse rapide et bienveillante en situation de crise</p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">10-25 ans</span>
                            <span className="stat-label">Tranche d'âge</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Disponible</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">Sans RDV</span>
                            <span className="stat-label">Accueil direct</span>
                        </div>
                    </div>
                </div>
            </section>

            <main className="historique-main">
                {/* Section 1 - Style carte premium */}
                <section className="hist-section section-1">
                    <div className="hist-content glass-card">
                        <div className="content-tag">PRISE EN CHARGE</div>
                        <h2>NOTRE SERVICE D'URGENCE PSYCHIATRIQUE</h2>
                        <div className="accent-line"></div>
                        <p>
                            Le service d'accueil d'urgence de La Fée Rima est dédié à la prise en
                            charge immédiate des jeunes de 10 à 25 ans en situation de crise
                            psychiatrique. Notre équipe est formée pour intervenir rapidement, avec
                            calme et bienveillance, afin de sécuriser le patient et d'évaluer sa
                            situation dans les meilleures conditions.
                        </p>
                        <div className="feature-list">
                            <div className="feature-item">
                                <span className="feature-icon">⚡</span>
                                <span>Intervention immédiate</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🤝</span>
                                <span>Équipe bienveillante</span>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🏥</span>
                                <span>Environnement sécurisé</span>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hist-image-box gray-box-large image-hover"
                        style={{
                            backgroundImage: "url('/assets/feerima/psycha.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="image-overlay">
                            <span className="overlay-text">Équipe spécialisée</span>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Design alterné */}
                <section className="hist-section section-2">
                    <div
                        className="hist-image-box gray-box-medium image-hover"
                        style={{
                            backgroundImage: "url('/assets/feerima/Qui_contacter.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="image-overlay">
                            <span className="overlay-text">Situation d'urgence</span>
                        </div>
                    </div>
                    <div className="hist-content center-content glass-card">
                        <div className="content-tag">QUAND AGIR ?</div>
                        <h2>QUAND CONTACTER LE SERVICE D'URGENCE ?</h2>
                        <div className="accent-line"></div>
                        <p>
                            Ce service est mobilisable en cas de <strong>crise suicidaire</strong>, d'<strong>agitation sévère</strong>, 
                            de <strong>décompensation psychiatrique aiguë</strong> ou de tout autre état de
                            détresse nécessitant une évaluation immédiate.
                        </p>
                        <div className="alert-box">
                            <span className="alert-icon">🚨</span>
                            <span>Accueil sans rendez-vous pour les situations d'urgence</span>
                        </div>
                    </div>
                    <div
                        className="hist-image-box gray-box-medium image-hover"
                        style={{
                            backgroundImage: "url('/assets/feerima/contacter.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="image-overlay">
                            <span className="overlay-text">Nous contacter</span>
                        </div>
                    </div>
                </section>

                {/* Section 3 - Design moderne */}
                <section className="hist-section section-3">
                    <div className="hist-stacked-images">
                        <div className="image-stack">
                            <div className="stack-item stack-1">
                                <img
                                    src="/assets/feerima/apres.png"
                                    alt="Prise en charge post-urgence"
                                    className="hist-image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hist-content glass-card">
                        <div className="content-tag">ACCOMPAGNEMENT</div>
                        <h2>APRÈS L'URGENCE : QUELLE SUITE ?</h2>
                        <div className="accent-line"></div>
                        
                        <div className="info-card">
                            <div className="info-icon">📋</div>
                            <div className="info-content">
                                <h3>Une évaluation complète</h3>
                                <p>
                                    Chaque passage aux urgences fait l'objet d'une évaluation psychiatrique
                                    approfondie. En fonction de la situation, une orientation vers les
                                    consultations externes, l'hôpital de jour ou une hospitalisation peut
                                    être proposée.
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">👨‍👩‍👧</div>
                            <div className="info-content">
                                <h3>Un accompagnement de la famille</h3>
                                <p>
                                    La famille est informée et associée à chaque étape de la prise en charge,
                                    dans le respect des règles de confidentialité et du droit du patient.
                                </p>
                            </div>
                        </div>

                        <div className="emergency-banner">
                            <div className="emergency-icon">📞</div>
                            <div className="emergency-text">
                                <strong>En cas d'urgence immédiate</strong>
                                <span>Appelez le 15 (SAMU) ou le 3114 (numéro national de prévention du suicide)</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Styles CSS intégrés */}
            <style jsx>{`
                .page-hero {
                    position: relative;
                    height: 70vh;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .page-hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
                }

                .page-hero-content {
                    position: relative;
                    text-align: center;
                    color: white;
                    z-index: 2;
                    animation: fadeInUp 1s ease-out;
                }

                .hero-badge {
                    display: inline-block;
                    background: rgba(220, 38, 38, 0.9);
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    backdrop-filter: blur(10px);
                }

                .page-hero-content h1 {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }

                .page-hero-content p {
                    font-size: 1.2rem;
                    opacity: 0.95;
                }

                .hero-stats {
                    display: flex;
                    justify-content: center;
                    gap: 40px;
                    margin-top: 40px;
                }

                .stat-item {
                    text-align: center;
                }

                .stat-number {
                    display: block;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fbbf24;
                }

                .stat-label {
                    font-size: 0.9rem;
                    opacity: 0.9;
                }

                .historique-main {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 60px 40px;
                }

                .hist-section {
                    display: flex;
                    gap: 60px;
                    margin-bottom: 100px;
                    align-items: center;
                }

                .hist-section.section-2 {
                    flex-direction: row;
                }

                .hist-section.section-3 {
                    align-items: flex-start;
                }

                .hist-content {
                    flex: 1;
                }

                .glass-card {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 24px;
                    padding: 40px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .glass-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 30px 50px rgba(0,0,0,0.15);
                }

                .content-tag {
                    display: inline-block;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 6px 16px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: bold;
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                }

                .accent-line {
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    margin: 20px 0;
                    border-radius: 2px;
                }

                .feature-list {
                    display: flex;
                    gap: 20px;
                    margin-top: 30px;
                    flex-wrap: wrap;
                }

                .feature-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: #f3f4f6;
                    padding: 10px 20px;
                    border-radius: 12px;
                }

                .feature-icon {
                    font-size: 1.3rem;
                }

                .alert-box {
                    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
                    padding: 20px;
                    border-radius: 16px;
                    margin-top: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    border-left: 4px solid #dc2626;
                }

                .alert-icon {
                    font-size: 2rem;
                }

                .info-card {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f9fafb;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                }

                .info-card:hover {
                    background: #f3f4f6;
                    transform: translateX(5px);
                }

                .info-icon {
                    font-size: 2rem;
                    flex-shrink: 0;
                }

                .info-content h3 {
                    margin-bottom: 10px;
                    color: #1f2937;
                }

                .info-content p {
                    color: #4b5563;
                    line-height: 1.6;
                }

                .emergency-banner {
                    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
                    color: white;
                    padding: 25px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-top: 30px;
                }

                .emergency-icon {
                    font-size: 2.5rem;
                }

                .emergency-text {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .emergency-text strong {
                    font-size: 1.1rem;
                }

                .hist-image-box {
                    flex: 1;
                    height: 400px;
                    border-radius: 24px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.5s ease;
                }

                .image-hover {
                    cursor: pointer;
                }

                .image-hover:hover {
                    transform: scale(1.02);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }

                .image-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    padding: 20px;
                    transform: translateY(100%);
                    transition: transform 0.3s ease;
                }

                .hist-image-box:hover .image-overlay {
                    transform: translateY(0);
                }

                .overlay-text {
                    color: white;
                    font-weight: bold;
                }

                .hist-stacked-images {
                    flex: 1;
                    position: relative;
                }

                .image-stack {
                    position: relative;
                    height: 400px;
                }

                .stack-item {
                    position: absolute;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .stack-1 {
                    width: 100%;
                    height: 100%;
                    animation: slideInLeft 0.8s ease-out;
                }

                .hist-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @media (max-width: 1024px) {
                    .historique-main {
                        padding: 40px 20px;
                    }
                    
                    .hist-section {
                        flex-direction: column !important;
                        gap: 30px;
                    }
                    
                    .page-hero-content h1 {
                        font-size: 2.5rem;
                    }
                    
                    .hero-stats {
                        flex-direction: column;
                        gap: 20px;
                    }
                    
                    .feature-list {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    );
}

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function ServiceAccueilUrgence() {
//     return (
//         <div className="urgence-page-wrapper">
//             <Navbar />

//             {/* Hero Section */}
//             <section
//                 className="urgence-hero-section"
//                 style={{ backgroundImage: "url('/assets/feerima/urgent.png')" }}
//             >
//                 <div className="urgence-hero-overlay"></div>
//                 <div className="urgence-hero-content">
//                     <h1>Le service d'accueil d'urgence</h1>
//                     <p>Une réponse rapide et bienveillante en situation de crise</p>
//                 </div>
//             </section>

//             <main className="urgence-main-container">

//                 {/* Section 1 - Notre service */}
//                 <section className="urgence-section-block section-1">
//                     <div className="urgence-text-content">
//                         <h2>NOTRE SERVICE D'URGENCE PSYCHIATRIQUE</h2>
//                         <p className="urgence-description">
//                             Le service d'accueil d'urgence de La Fée Rima est dédié à la prise en
//                             charge immédiate des jeunes de 10 à 25 ans en situation de crise
//                             psychiatrique. Notre équipe est formée pour intervenir rapidement, avec
//                             calme et bienveillance, afin de sécuriser le patient et d'évaluer sa
//                             situation dans les meilleures conditions.
//                         </p>

//                         {/* 3 blocs features */}
//                         <div className="urgence-features-grid">
//                             <div className="urgence-feature-card">
//                                 <div className="urgence-feature-icon">⚡</div>
//                                 <h4>Intervention rapide</h4>
//                                 <p>Notre équipe intervient dans les meilleurs délais</p>
//                             </div>
//                             <div className="urgence-feature-card">
//                                 <div className="urgence-feature-icon">🤝</div>
//                                 <h4>Bienveillance</h4>
//                                 <p>Une approche calme et respectueuse de chaque patient</p>
//                             </div>
//                             <div className="urgence-feature-card">
//                                 <div className="urgence-feature-icon">🛡️</div>
//                                 <h4>Sécurisation</h4>
//                                 <p>Évaluation des risques et mise en sécurité immédiate</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="urgence-image-box urgence-image-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/psycha.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}>
//                         <div className="urgence-image-caption">Notre équipe à votre écoute</div>
//                     </div>
//                 </section>

//                 {/* Section 2 - Quand contacter */}
//                 <section className="urgence-section-block section-2">
//                     <div className="urgence-image-box urgence-image-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/Qui_contacter.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}>
//                     </div>

//                     <div className="urgence-text-content urgence-text-centered">
//                         <h2>QUAND CONTACTER LE SERVICE D'URGENCE ?</h2>
//                         <p>
//                             Ce service est mobilisable en cas de crise suicidaire, d'agitation
//                             sévère, de décompensation psychiatrique aiguë ou de tout autre état de
//                             détresse nécessitant une évaluation immédiate. L'accueil se fait sans
//                             rendez-vous pour les situations d'urgence, avec une orientation adaptée
//                             dès la première prise en charge.
//                         </p>

//                         {/* Grille des situations */}
//                         <div className="urgence-situations-grid">
//                             <div className="urgence-situation-card">
//                                 <span className="urgence-situation-emoji">⚠️</span>
//                                 <h4>Crise suicidaire</h4>
//                                 <p>Pensées ou comportements suicidaires nécessitant une intervention immédiate</p>
//                             </div>
//                             <div className="urgence-situation-card">
//                                 <span className="urgence-situation-emoji">🌊</span>
//                                 <h4>Agitation sévère</h4>
//                                 <p>États d'agitation intense ou de confusion mentale aiguë</p>
//                             </div>
//                             <div className="urgence-situation-card">
//                                 <span className="urgence-situation-emoji">🔄</span>
//                                 <h4>Décompensation aiguë</h4>
//                                 <p>Décompensation psychiatrique nécessitant une évaluation rapide</p>
//                             </div>
//                             <div className="urgence-situation-card">
//                                 <span className="urgence-situation-emoji">💔</span>
//                                 <h4>Détresse sévère</h4>
//                                 <p>État de détresse psychologique intense et invalidant</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="urgence-image-box urgence-image-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/contacter.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}>
//                     </div>
//                 </section>

//                 {/* Section 3 - Après l'urgence */}
//                 <section className="urgence-section-block section-3">
//                     <div className="urgence-image-stack">
//                         <img
//                             src="/assets/feerima/apres.png"
//                             alt="Suivi après l'urgence"
//                             className="urgence-stack-image"
//                         />
//                     </div>

//                     <div className="urgence-text-content">
//                         <h2>APRÈS L'URGENCE : QUELLE SUITE ?</h2>

//                         <div className="urgence-suivi-card">
//                             <h3>📋 Une évaluation complète</h3>
//                             <p>
//                                 Chaque passage aux urgences fait l'objet d'une évaluation psychiatrique
//                                 approfondie. En fonction de la situation, une orientation vers les
//                                 consultations externes, l'hôpital de jour ou une hospitalisation peut
//                                 être proposée.
//                             </p>
//                         </div>

//                         <div className="urgence-suivi-card">
//                             <h3>👨‍👩‍👧‍👦 Un accompagnement de la famille</h3>
//                             <p>
//                                 La famille est informée et associée à chaque étape de la prise en charge,
//                                 dans le respect des règles de confidentialité et du droit du patient.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             <Footer />

//             <style>{`
//                 /* ============================================ */
//                 /* PAGE URGENCE - STYLES EXCLUSIFS              */
//                 /* ============================================ */

//                 .urgence-page-wrapper {
//                     font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
//                     background: #ffffff;
//                 }

//                 /* Hero Section */
//                 .urgence-hero-section {
//                     height: 450px;
//                     background-size: cover;
//                     background-position: center;
//                     position: relative;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     text-align: center;
//                 }

//                 .urgence-hero-overlay {
//                     position: absolute;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5));
//                 }

//                 .urgence-hero-content {
//                     position: relative;
//                     z-index: 2;
//                     color: white;
//                     max-width: 800px;
//                     padding: 0 20px;
//                 }

//                 .urgence-hero-content h1 {
//                     font-size: 2.8rem;
//                     margin-bottom: 1rem;
//                     font-weight: 700;
//                 }

//                 .urgence-hero-content p {
//                     font-size: 1.3rem;
//                     opacity: 0.95;
//                 }

//                 /* Container principal */
//                 .urgence-main-container {
//                     max-width: 1280px;
//                     margin: 0 auto;
//                     padding: 3rem 2rem;
//                 }

//                 /* Blocs de section */
//                 .urgence-section-block {
//                     display: flex;
//                     gap: 3rem;
//                     margin-bottom: 5rem;
//                     align-items: center;
//                     flex-wrap: wrap;
//                 }

//                 .section-2 {
//                     flex-wrap: wrap;
//                 }

//                 /* Contenu texte */
//                 .urgence-text-content {
//                     flex: 1;
//                     min-width: 280px;
//                 }

//                 .urgence-text-content h2 {
//                     color: #1e293b;
//                     font-size: 1.9rem;
//                     margin-bottom: 1.5rem;
//                     font-weight: 700;
//                     border-left: 5px solid #dc2626;
//                     padding-left: 1.2rem;
//                 }

//                 .urgence-description {
//                     color: #334155;
//                     line-height: 1.7;
//                     font-size: 1rem;
//                     margin-bottom: 1.5rem;
//                 }

//                 .urgence-text-centered {
//                     text-align: center;
//                 }

//                 .urgence-text-centered h2 {
//                     border-left: none;
//                     padding-left: 0;
//                     text-align: center;
//                 }

//                 /* Grille des features (3 blocs) */
//                 .urgence-features-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//                     gap: 1.5rem;
//                     margin-top: 2rem;
//                 }

//                 .urgence-feature-card {
//                     background: #f8fafc;
//                     padding: 1.5rem;
//                     border-radius: 16px;
//                     text-align: center;
//                     transition: all 0.3s ease;
//                     border: 1px solid #e2e8f0;
//                 }

//                 .urgence-feature-card:hover {
//                     transform: translateY(-5px);
//                     box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//                     border-color: #dc2626;
//                 }

//                 .urgence-feature-icon {
//                     font-size: 2.5rem;
//                     margin-bottom: 0.75rem;
//                 }

//                 .urgence-feature-card h4 {
//                     color: #1e293b;
//                     font-size: 1.1rem;
//                     margin-bottom: 0.5rem;
//                     font-weight: 600;
//                 }

//                 .urgence-feature-card p {
//                     color: #64748b;
//                     font-size: 0.9rem;
//                     line-height: 1.5;
//                     margin: 0;
//                 }

//                 /* Grille des situations d'urgence */
//                 .urgence-situations-grid {
//                     display: grid;
//                     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//                     gap: 1.5rem;
//                     margin-top: 2rem;
//                 }

//                 .urgence-situation-card {
//                     background: #fef2f2;
//                     padding: 1.5rem;
//                     border-radius: 16px;
//                     text-align: center;
//                     border-left: 4px solid #dc2626;
//                     transition: all 0.3s ease;
//                 }

//                 .urgence-situation-card:hover {
//                     background: #fee2e2;
//                     transform: translateX(5px);
//                 }

//                 .urgence-situation-emoji {
//                     font-size: 2.2rem;
//                     display: block;
//                     margin-bottom: 0.75rem;
//                 }

//                 .urgence-situation-card h4 {
//                     color: #b91c1c;
//                     font-size: 1.1rem;
//                     margin-bottom: 0.5rem;
//                     font-weight: 700;
//                 }

//                 .urgence-situation-card p {
//                     color: #475569;
//                     font-size: 0.85rem;
//                     line-height: 1.5;
//                     margin: 0;
//                 }

//                 /* Cartes de suivi */
//                 .urgence-suivi-card {
//                     background: #f1f5f9;
//                     padding: 1.5rem;
//                     border-radius: 16px;
//                     margin-bottom: 1.5rem;
//                     transition: all 0.3s ease;
//                     border-left: 4px solid #3b82f6;
//                 }

//                 .urgence-suivi-card:hover {
//                     background: #e2e8f0;
//                     transform: translateX(8px);
//                 }

//                 .urgence-suivi-card h3 {
//                     color: #0f172a;
//                     font-size: 1.2rem;
//                     margin-bottom: 0.75rem;
//                     font-weight: 700;
//                 }

//                 .urgence-suivi-card p {
//                     color: #334155;
//                     line-height: 1.6;
//                     margin: 0;
//                 }

//                 /* Images */
//                 .urgence-image-box {
//                     flex: 1;
//                     min-width: 280px;
//                     border-radius: 20px;
//                     position: relative;
//                     box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//                     transition: transform 0.3s ease;
//                 }

//                 .urgence-image-box:hover {
//                     transform: scale(1.02);
//                 }

//                 .urgence-image-large {
//                     height: 400px;
//                 }

//                 .urgence-image-medium {
//                     height: 320px;
//                 }

//                 .urgence-image-caption {
//                     position: absolute;
//                     bottom: 0;
//                     left: 0;
//                     right: 0;
//                     background: linear-gradient(transparent, rgba(0,0,0,0.8));
//                     color: white;
//                     padding: 1rem;
//                     text-align: center;
//                     font-size: 0.9rem;
//                     border-radius: 0 0 20px 20px;
//                     font-weight: 500;
//                 }

//                 .urgence-image-stack {
//                     flex: 1;
//                     min-width: 280px;
//                 }

//                 .urgence-stack-image {
//                     width: 100%;
//                     height: 380px;
//                     object-fit: cover;
//                     border-radius: 20px;
//                     box-shadow: 0 10px 25px rgba(0,0,0,0.1);
//                     transition: transform 0.3s ease;
//                 }

//                 .urgence-stack-image:hover {
//                     transform: scale(1.02);
//                 }

//                 /* Responsive */
//                 @media (max-width: 968px) {
//                     .urgence-section-block {
//                         flex-direction: column;
//                         gap: 2rem;
//                     }

//                     .section-2 {
//                         flex-direction: column;
//                     }

//                     .urgence-hero-section {
//                         height: 350px;
//                     }

//                     .urgence-hero-content h1 {
//                         font-size: 2rem;
//                     }

//                     .urgence-hero-content p {
//                         font-size: 1rem;
//                     }

//                     .urgence-main-container {
//                         padding: 2rem 1.5rem;
//                     }

//                     .urgence-text-content h2 {
//                         font-size: 1.6rem;
//                     }

//                     .urgence-features-grid,
//                     .urgence-situations-grid {
//                         grid-template-columns: 1fr;
//                     }

//                     .urgence-image-large,
//                     .urgence-image-medium {
//                         width: 100%;
//                     }
//                 }

//                 @media (max-width: 480px) {
//                     .urgence-hero-section {
//                         height: 280px;
//                     }

//                     .urgence-hero-content h1 {
//                         font-size: 1.5rem;
//                     }

//                     .urgence-main-container {
//                         padding: 1.5rem 1rem;
//                     }

//                     .urgence-text-content h2 {
//                         font-size: 1.3rem;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// }
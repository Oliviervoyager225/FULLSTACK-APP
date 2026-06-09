// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function ChartesUsager() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/chart_usa.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Charte Usager</h1>
//                     <p>Vos droits et notre engagement en tant qu'établissement de santé</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>QU'EST-CE QUE LA CHARTE DE L'USAGER ?</h2>
//                         <p>
//                             La Charte de l'usager en santé mentale est un document qui rappelle les
//                             droits fondamentaux de toute personne prise en charge dans un
//                             établissement psychiatrique. Elle est fondée sur les principes de
//                             dignité, d'égalité de traitement, de consentement éclairé et de
//                             participation active au projet de soins.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/ch_us.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/droit.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>VOS PRINCIPAUX DROITS</h2>
//                         <p>
//                             En tant qu'usager de La Fée Rima, vous bénéficiez du droit à
//                             l'information sur votre état de santé, du droit au consentement libre
//                             et éclairé, du droit à la confidentialité, du droit d'accès à votre
//                             dossier médical, et du droit de désigner une personne de confiance.
//                         </p>
//                         <p>
//                             Tout mineur a également le droit d'être entendu et d'exprimer son avis
//                             sur les décisions qui le concernent, dans le respect de son âge et de
//                             sa maturité.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/prin_droi.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'left',
//                         }}
//                     />
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ChartesUsager.css'

export default function ChartesUsager() {
    return (
        <div className="cu-page">
            <Navbar />

            {/* Hero Section améliorée */}
            <section
                className="cu-hero"
                style={{
                    backgroundImage: "linear-gradient(135deg, rgba(238, 243, 194, 0.35) 0%, rgba(0,0,0,0.4) 100%), url('/assets/feerima/chart_usa.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="cu-hero-content">
                    <div className="cu-hero-badge">Droits & engagements</div>
                    <h1 className="cu-hero-title">Charte Usager</h1>
                    <p className="cu-hero-subtitle">Vos droits et notre engagement en tant qu'établissement de santé</p>
                    <div className="cu-hero-decoration">
                        <span className="cu-hero-line"></span>
                        <span className="cu-hero-dot">✦</span>
                        <span className="cu-hero-line"></span>
                    </div>
                </div>
            </section>

            <main className="cu-main">
                {/* Section 1 - Qu'est-ce que la charte */}
                <section className="cu-section cu-section-definition">
                    <div className="cu-container">
                        <div className="cu-grid cu-grid-reverse">
                            <div className="cu-content">
                                <div className="cu-section-tag">Comprendre</div>
                                <h2 className="cu-section-title">QU'EST-CE QUE LA CHARTE DE L'USAGER ?</h2>
                                <div className="cu-title-underline"></div>
                                <p className="cu-lead">
                                    La Charte de l'usager en santé mentale est un document qui rappelle les
                                    droits fondamentaux de toute personne prise en charge dans un
                                    établissement psychiatrique.
                                </p>
                                <p className="cu-text">
                                    Elle est fondée sur les principes de dignité, d'égalité de traitement,
                                    de consentement éclairé et de participation active au projet de soins.
                                </p>
                                <div className="cu-principles-list">
                                    <div className="cu-principle-item">
                                        <span className="cu-principle-icon">✓</span>
                                        <span>Respect de la dignité</span>
                                    </div>
                                    <div className="cu-principle-item">
                                        <span className="cu-principle-icon">✓</span>
                                        <span>Égalité de traitement</span>
                                    </div>
                                    <div className="cu-principle-item">
                                        <span className="cu-principle-icon">✓</span>
                                        <span>Consentement éclairé</span>
                                    </div>
                                    <div className="cu-principle-item">
                                        <span className="cu-principle-icon">✓</span>
                                        <span>Participation active aux soins</span>
                                    </div>
                                </div>
                            </div>
                            <div className="cu-image-block">
                                <div className="cu-image-card">
                                    <div
                                        className="cu-image-wrapper"
                                        style={{
                                            backgroundImage: "url('/assets/feerima/ch_us.png')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="cu-image-overlay">
                                            <span className="cu-overlay-text">Droits fondamentaux</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Vos principaux droits */}
                <section className="cu-section cu-section-droits">
                    <div className="cu-container">
                        <div className="cu-section-header">
                            <div className="cu-section-tag cu-section-tag-center">Vos droits</div>
                            <h2 className="cu-section-title cu-section-title-center">VOS PRINCIPAUX DROITS</h2>
                            <div className="cu-title-underline cu-title-underline-center"></div>
                            <p className="cu-section-subtitle">
                                Des droits garantis pour une prise en charge respectueuse et de qualité
                            </p>
                        </div>

                        <div className="cu-droits-grid">
                            {/* Droit 1 */}
                            <div className="cu-droit-card">
                                <div className="cu-droit-icon">ℹ️</div>
                                <h3 className="cu-droit-title">Droit à l'information</h3>
                                <p className="cu-droit-text">Information claire et complète sur votre état de santé et les traitements proposés.</p>
                            </div>

                            {/* Droit 2 */}
                            <div className="cu-droit-card">
                                <div className="cu-droit-icon">✋</div>
                                <h3 className="cu-droit-title">Consentement libre et éclairé</h3>
                                <p className="cu-droit-text">Aucun soin ne peut être dispensé sans votre consentement préalable.</p>
                            </div>

                            {/* Droit 3 */}
                            <div className="cu-droit-card">
                                <div className="cu-droit-icon">🔒</div>
                                <h3 className="cu-droit-title">Confidentialité</h3>
                                <p className="cu-droit-text">Respect absolu du secret médical et de la vie privée.</p>
                            </div>

                            {/* Droit 4 */}
                            <div className="cu-droit-card">
                                <div className="cu-droit-icon">📁</div>
                                <h3 className="cu-droit-title">Accès au dossier médical</h3>
                                <p className="cu-droit-text">Droit d'accès direct à l'ensemble de vos informations médicales.</p>
                            </div>

                            {/* Droit 5 */}
                            <div className="cu-droit-card">
                                <div className="cu-droit-icon">🤝</div>
                                <h3 className="cu-droit-title">Personne de confiance</h3>
                                <p className="cu-droit-text">Droit de désigner une personne qui vous accompagnera dans vos décisions.</p>
                            </div>

                            {/* Droit 6 */}
                            <div className="cu-droit-card cu-droit-card-highlight">
                                <div className="cu-droit-icon">👂</div>
                                <h3 className="cu-droit-title">Droit des mineurs</h3>
                                <p className="cu-droit-text">Droit d'être entendu et d'exprimer son avis sur les décisions qui vous concernent, dans le respect de votre âge et de votre maturité.</p>
                                <div className="cu-card-badge">Protection spéciale</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 - Images d'illustration */}
                <section className="cu-section cu-section-visual">
                    <div className="cu-container">
                        <div className="cu-visual-row">
                            <div className="cu-visual-item">
                                <div
                                    className="cu-visual-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/droit.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="cu-visual-overlay">
                                        <div className="cu-visual-content">
                                            <span className="cu-visual-icon">⚖️</span>
                                            <p className="cu-visual-text">Égalité & Justice</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cu-visual-item">
                                <div
                                    className="cu-visual-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/prin_droi.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="cu-visual-overlay">
                                        <div className="cu-visual-content">
                                            <span className="cu-visual-icon">🛡️</span>
                                            <p className="cu-visual-text">Protection & Respect</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 - Engagements */}
                {/* <section className="cu-section cu-section-engagement">
                    <div className="cu-container">
                        <div className="cu-engagement-card">
                            <div className="cu-engagement-icon">⭐</div>
                            <h3 className="cu-engagement-title">Notre engagement</h3>
                            <p className="cu-engagement-text">
                                À La Fée Rima, nous nous engageons à respecter et promouvoir ces droits au quotidien, 
                                à vous écouter et à vous associer pleinement à votre parcours de soins. 
                                Votre dignité et votre bien-être sont au cœur de nos préoccupations.
                            </p>
                            <div className="cu-signature">
                                <span className="cu-signature-line"></span>
                                <span className="cu-signature-text">L'équipe de La Fée Rima</span>
                                <span className="cu-signature-line"></span>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="cu-section cu-section-engagement">
                    <div className="cu-container">
                        <div className="cu-engagement-card">
                            {/* Bulles flottantes */}
                            <div className="cu-bubble cu-bubble-1"></div>
                            <div className="cu-bubble cu-bubble-2"></div>
                            <div className="cu-bubble cu-bubble-3"></div>
                            <div className="cu-bubble cu-bubble-4"></div>
                            <div className="cu-bubble cu-bubble-5"></div>
                            <div className="cu-bubble cu-bubble-6"></div>
                            <div className="cu-bubble cu-bubble-7"></div>
                            <div className="cu-bubble cu-bubble-8"></div>

                            <div className="cu-engagement-icon">⭐</div>
                            <h3 className="cu-engagement-title">Notre engagement</h3>
                            <p className="cu-engagement-text">
                                À La Fée Rima, nous nous engageons à respecter et promouvoir ces droits au quotidien,
                                à vous écouter et à vous associer pleinement à votre parcours de soins.
                                Votre dignité et votre bien-être sont au cœur de nos préoccupations.
                            </p>
                            <div className="cu-signature">
                                <span className="cu-signature-line"></span>
                                <span className="cu-signature-text">L'équipe de La Fée Rima</span>
                                <span className="cu-signature-line"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />


        </div>
    );
}
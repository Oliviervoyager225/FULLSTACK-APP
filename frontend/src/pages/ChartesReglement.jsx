// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function ChartesReglement() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/reglement.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Chartes et règlement intérieur</h1>
//                     <p>Le cadre de vie et les engagements communs au sein de La Fée Rima</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>LE RÈGLEMENT INTÉRIEUR</h2>
//                         {/* <p>
//                             Le règlement intérieur de La Fée Rima définit les règles de vie
//                             collective applicables à tous les bénéficiaires, familles et
//                             professionnels de l'établissement. Il précise les droits et obligations
//                             de chacun afin de garantir un environnement de soins sûr, respectueux
//                             et propice au rétablissement.
//                         </p> */}
//                         <p>
//                             Conformément aux obligations réglementaires applicables aux établissements de santé, nos centres sont dotés d’un règlement intérieur tenant compte des dispositions législatives et réglementaires en vigueur.
//                         </p>
//                         <p>
//                             La charte du bénéficiaire informe tous les bénéficiaires et visiteurs du centre sur les droits et devoirs concernant le fonctionnement du centre, la vie en communauté, la sécurité, l’hygiène et les soins.
//                         </p>
//                         {/* <p>
//                             Ce document est remis à chaque patient et à sa famille lors de
//                             l'admission et est consultable à tout moment auprès du secrétariat.
//                         </p> */}
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/reglement1.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/reglement2.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>LES CHARTES EN VIGUEUR</h2>
//                         <p>
//                             La Fée Rima applique plusieurs chartes fondamentales : la Charte de la
//                             Personne Hospitalisée, la Charte des Droits et Libertés de la Personne
//                             Âgée (adaptée aux mineurs), et notre propre Charte de Bientraitance.
//                             Ces textes rappellent les valeurs humanistes qui guident nos pratiques
//                             au quotidien.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/reglem.png')",
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

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ChartesReglement.css'

export default function ChartesReglement() {
    return (
        <div className="cr-page">
            <Navbar />

            {/* Hero Section améliorée */}
            <section
                className="cr-hero"
                style={{
                    backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url('/assets/feerima/reglement.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="cr-hero-content">
                    <div className="cr-hero-badge">Cadre de vie & engagements</div>
                    <h1 className="cr-hero-title">Chartes et règlement intérieur</h1>
                    <p className="cr-hero-subtitle">Le cadre de vie et les engagements communs au sein de La Fée Rima</p>
                    <div className="cr-hero-decoration">
                        <span className="cr-hero-line"></span>
                        <span className="cr-hero-dot">✦</span>
                        <span className="cr-hero-line"></span>
                    </div>
                </div>
            </section>

            <main className="cr-main">
                {/* Section 1 - Règlement intérieur */}
                <section className="cr-section cr-section-reglement">
                    <div className="cr-container">
                        <div className="cr-grid cr-grid-reverse">
                            <div className="cr-content">
                                <div className="cr-section-tag">Fondation</div>
                                <h2 className="cr-section-title">LE RÈGLEMENT INTÉRIEUR</h2>
                                <div className="cr-title-underline"></div>
                                <p className="cr-lead">
                                    Conformément aux obligations réglementaires applicables aux établissements de santé, nos centres sont dotés d'un règlement intérieur tenant compte des dispositions législatives et réglementaires en vigueur.
                                </p>
                                <p className="cr-text">
                                    La charte du bénéficiaire informe tous les bénéficiaires et visiteurs du centre sur les droits et devoirs concernant le fonctionnement du centre, la vie en communauté, la sécurité, l'hygiène et les soins.
                                </p>
                                <div className="cr-info-badge">
                                    <span className="cr-info-icon">📋</span>
                                    <span className="cr-info-text">Document remis à l'admission et consultable à tout moment</span>
                                </div>
                            </div>
                            <div className="cr-image-block">
                                <div className="cr-image-card">
                                    <div
                                        className="cr-image-wrapper"
                                        style={{
                                            backgroundImage: "url('/assets/feerima/reglement1.png')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="cr-image-overlay">
                                            <span className="cr-overlay-text">Règlement intérieur</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Chartes en vigueur */}
                <section className="cr-section cr-section-chartes">
                    <div className="cr-container">
                        <div className="cr-section-header">
                            <div className="cr-section-tag cr-section-tag-center">Engagements</div>
                            <h2 className="cr-section-title cr-section-title-center">LES CHARTES EN VIGUEUR</h2>
                            <div className="cr-title-underline cr-title-underline-center"></div>
                            <p className="cr-section-subtitle">
                                Des textes fondamentaux qui guident nos pratiques quotidiennes
                            </p>
                        </div>

                        <div className="cr-chartes-grid">
                            {/* Carte 1 */}
                            <div className="cr-charte-card">
                                <div className="cr-charte-icon">🏥</div>
                                <h3 className="cr-charte-title">Charte de la Personne Hospitalisée</h3>
                                <p className="cr-charte-text">Garantit les droits fondamentaux des patients et leurs proches au sein de l'établissement.</p>
                            </div>

                            {/* Carte 2 */}
                            <div className="cr-charte-card">
                                <div className="cr-charte-icon">👥</div>
                                <h3 className="cr-charte-title">Charte des Droits et Libertés</h3>
                                <p className="cr-charte-text">Adaptée aux mineurs, elle rappelle les droits essentiels et les libertés individuelles.</p>
                            </div>

                            {/* Carte 3 */}
                            <div className="cr-charte-card cr-charte-card-highlight">
                                <div className="cr-charte-icon">💚</div>
                                <h3 className="cr-charte-title">Charte de Bientraitance</h3>
                                <p className="cr-charte-text">Notre engagement personnel pour une prise en charge respectueuse et bienveillante.</p>
                                <div className="cr-card-badge">Notre charte</div>
                            </div>
                        </div>

                        {/* Section avec images latérales */}
                        <div className="cr-visual-section">
                            <div className="cr-visual-row">
                                <div className="cr-visual-item cr-visual-left">
                                    <div
                                        className="cr-visual-image"
                                        style={{
                                            backgroundImage: "url('/assets/feerima/reglement2.png')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="cr-visual-caption">
                                            <span>Respect & dignité</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cr-visual-item cr-visual-right">
                                    <div
                                        className="cr-visual-image"
                                        style={{
                                            backgroundImage: "url('/assets/feerima/reglem.png')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="cr-visual-caption">
                                            <span>Bienveillance au quotidien</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Citation / Valeurs */}
                        <div className="cr-values-quote">
                            <div className="cr-quote-icon">“</div>
                            <p className="cr-quote-text">
                                Ces textes rappellent les valeurs humanistes qui guident nos pratiques au quotidien, plaçant l'humain au cœur de notre démarche de soins.
                            </p>
                            <div className="cr-quote-author">— La Fée Rima</div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />


        </div>
    );
}
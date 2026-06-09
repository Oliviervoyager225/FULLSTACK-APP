// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function PersonneDeConfiance() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/pers_conf.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Personne de confiance</h1>
//                     <p>Un droit fondamental pour être accompagné dans votre parcours de soins</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>QU'EST-CE QUE LA PERSONNE DE CONFIANCE ?</h2>
//                         <p>
//                             La personne de confiance est une personne de votre choix (un proche,
//                             un ami, un médecin de ville…) que vous désignez pour vous accompagner
//                             lors de vos démarches et consultations, vous aider à formuler vos
//                             souhaits, et être consultée si vous n'êtes plus en état d'exprimer
//                             votre volonté.
//                         </p>
//                         <p>
//                             Pour les mineurs, ce rôle est généralement assuré par les titulaires
//                             de l'autorité parentale, mais une désignation spécifique peut être
//                             envisagée en accord avec l'équipe médicale.
//                         </p>
                        
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/per_conf.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/choisir.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>COMMENT LA DÉSIGNER ?</h2>
//                         <p>
//                             La désignation s'effectue par écrit lors de votre admission à La
//                             La Fée Rima, à l'aide du formulaire dédié remis par notre secrétariat.
//                             Cette désignation est valable pour la durée de votre prise en charge
//                             et peut être modifiée ou révoquée à tout moment sur simple demande.
//                         </p>

//                         <p>
//                             Toute personne majeure peut désigner une personne de confiance. Celle-ci peut assister aux entretiens médicaux afin d’aider dans les prises de décisions et d’être consulté dans le cas où le bénéficiaire ne serait pas en état d’exprimer sa volonté. Cette désignation se fait pour une durée laissée à l’appréciation du patient et est révocable à tout moment par écrit. La personne de confiance doit avoir accepté cette désignation et être majeure.
//                         </p>
//                     </div>
//                     <div 
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/conf1.png')",
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
import '../styles/PersonneDeConfiance.css'

export default function PersonneDeConfiance() {
    return (
        <div className="pc-page">
            <Navbar />

            {/* Hero Section améliorée */}
            <section
                className="pc-hero"
                style={{ 
                    backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%), url('/assets/feerima/pers_conf.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="pc-hero-content">
                    <div className="pc-hero-badge">Accompagnement & soutien</div>
                    <h1 className="pc-hero-title">Personne de confiance</h1>
                    <p className="pc-hero-subtitle">Un droit fondamental pour être accompagné dans votre parcours de soins</p>
                    <div className="pc-hero-decoration">
                        <span className="pc-hero-line"></span>
                        <span className="pc-hero-dot">🤝</span>
                        <span className="pc-hero-line"></span>
                    </div>
                </div>
            </section>

            <main className="pc-main">
                {/* Section 1 - Qu'est-ce que la personne de confiance */}
                <section className="pc-section pc-section-definition">
                    <div className="pc-container">
                        <div className="pc-grid pc-grid-reverse">
                            <div className="pc-content">
                                <div className="pc-section-tag">Définition</div>
                                <h2 className="pc-section-title">QU'EST-CE QUE LA PERSONNE DE CONFIANCE ?</h2>
                                <div className="pc-title-underline"></div>
                                <p className="pc-lead">
                                    La personne de confiance est une personne de votre choix que vous désignez pour vous accompagner lors de vos démarches et consultations.
                                </p>
                                <p className="pc-text">
                                    Elle vous aide à formuler vos souhaits et peut être consultée si vous n'êtes plus en état d'exprimer votre volonté.
                                </p>
                                <div className="pc-info-cards">
                                    <div className="pc-info-card">
                                        <span className="pc-info-icon">👤</span>
                                        <span className="pc-info-label">Qui choisir ?</span>
                                        <span className="pc-info-desc">Un proche, un ami, un médecin de ville...</span>
                                    </div>
                                    <div className="pc-info-card">
                                        <span className="pc-info-icon">👶</span>
                                        <span className="pc-info-label">Pour les mineurs</span>
                                        <span className="pc-info-desc">Titulaires de l'autorité parentale</span>
                                    </div>
                                    <div className="pc-info-card">
                                        <span className="pc-info-icon">⚖️</span>
                                        <span className="pc-info-label">Condition</span>
                                        <span className="pc-info-desc">Doit être majeure et avoir accepté</span>
                                    </div>
                                </div>
                            </div>
                            <div className="pc-image-block">
                                <div className="pc-image-card">
                                    <div 
                                        className="pc-image-wrapper"
                                        style={{
                                            backgroundImage: "url('/assets/feerima/per_conf.png')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        <div className="pc-image-overlay">
                                            <span className="pc-overlay-text">Un accompagnement personnalisé</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Comment la désigner */}
                <section className="pc-section pc-section-designation">
                    <div className="pc-container">
                        <div className="pc-section-header">
                            <div className="pc-section-tag pc-section-tag-center">Procédure</div>
                            <h2 className="pc-section-title pc-section-title-center">COMMENT LA DÉSIGNER ?</h2>
                            <div className="pc-title-underline pc-title-underline-center"></div>
                            <p className="pc-section-subtitle">
                                Une démarche simple et accessible pour garantir vos droits
                            </p>
                        </div>

                        <div className="pc-steps-container">
                            <div className="pc-step">
                                <div className="pc-step-number">1</div>
                                <div className="pc-step-content">
                                    <h3 className="pc-step-title">À l'admission</h3>
                                    <p className="pc-step-text">La désignation s'effectue par écrit lors de votre admission à La Fée Rima.</p>
                                </div>
                            </div>
                            <div className="pc-step-line"></div>
                            <div className="pc-step">
                                <div className="pc-step-number">2</div>
                                <div className="pc-step-content">
                                    <h3 className="pc-step-title">Formulaire dédié</h3>
                                    <p className="pc-step-text">Utilisez le formulaire remis par notre secrétariat pour officialiser votre choix.</p>
                                </div>
                            </div>
                            <div className="pc-step-line"></div>
                            <div className="pc-step">
                                <div className="pc-step-number">3</div>
                                <div className="pc-step-content">
                                    <h3 className="pc-step-title">Validité</h3>
                                    <p className="pc-step-text">Valable pour la durée de votre prise en charge.</p>
                                </div>
                            </div>
                            <div className="pc-step-line"></div>
                            <div className="pc-step">
                                <div className="pc-step-number">4</div>
                                <div className="pc-step-content">
                                    <h3 className="pc-step-title">Modification possible</h3>
                                    <p className="pc-step-text">Modifiable ou révocable à tout moment sur simple demande écrite.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pc-info-block">
                            <div className="pc-info-icon-large">📝</div>
                            <div className="pc-info-content">
                                <h4 className="pc-info-title">À savoir</h4>
                                <p className="pc-info-text">
                                    Toute personne majeure peut désigner une personne de confiance. Celle-ci peut assister aux entretiens médicaux afin d'aider dans les prises de décisions et d'être consultée dans le cas où le bénéficiaire ne serait pas en état d'exprimer sa volonté. Cette désignation se fait pour une durée laissée à l'appréciation du patient et est révocable à tout moment par écrit. La personne de confiance doit avoir accepté cette désignation et être majeure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 - Images d'illustration */}
                <section className="pc-section pc-section-visual">
                    <div className="pc-container">
                        <div className="pc-visual-row">
                            <div className="pc-visual-item">
                                <div 
                                    className="pc-visual-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/choisir.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="pc-visual-overlay">
                                        <div className="pc-visual-content">
                                            <span className="pc-visual-icon">🎯</span>
                                            <p className="pc-visual-text">Choisir librement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pc-visual-item">
                                <div 
                                    className="pc-visual-image"
                                    style={{
                                        backgroundImage: "url('/assets/feerima/conf1.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="pc-visual-overlay">
                                        <div className="pc-visual-content">
                                            <span className="pc-visual-icon">💚</span>
                                            <p className="pc-visual-text">Être accompagné</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 - Engagement avec bulles flottantes */}
                <section className="pc-section pc-section-engagement">
                    <div className="pc-container">
                        <div className="pc-engagement-card">
                            {/* Bulles flottantes */}
                            <div className="pc-bubble pc-bubble-1"></div>
                            <div className="pc-bubble pc-bubble-2"></div>
                            <div className="pc-bubble pc-bubble-3"></div>
                            <div className="pc-bubble pc-bubble-4"></div>
                            <div className="pc-bubble pc-bubble-5"></div>
                            <div className="pc-bubble pc-bubble-6"></div>
                            <div className="pc-bubble pc-bubble-7"></div>
                            <div className="pc-bubble pc-bubble-8"></div>
                            
                            <div className="pc-engagement-icon">💝</div>
                            <h3 className="pc-engagement-title">Votre droit, notre engagement</h3>
                            <p className="pc-engagement-text">
                                Chez La Fée Rima, nous croyons fermement que chaque patient a le droit d'être accompagné 
                                par la personne de son choix. Nous vous accompagnons dans cette démarche et respectons 
                                votre décision à chaque étape de votre parcours de soins.
                            </p>
                            <div className="pc-signature">
                                <span className="pc-signature-line"></span>
                                <span className="pc-signature-text">L'équipe de La Fée Rima</span>
                                <span className="pc-signature-line"></span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            
        </div>
    );
}
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function HopitalDeJour() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 // style={{ backgroundImage: "url('/assets/feerima/images/hopital.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>L'hôpital de jour</h1>
//                     <p>Un dispositif intensif au cœur des soins psychiatriques pour les jeunes</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>QU'EST-CE QUE L'HÔPITAL DE JOUR ?</h2>
//                         <p>
//                             {/* L'hôpital de jour est une forme de soins psychiatriques à temps partiel.
//                             Le jeune est accueilli plusieurs jours par semaine au sein de La Fée Rima
//                             pour bénéficier d'un programme de soins structuré, sans séjourner la nuit.
//                             Ce dispositif constitue une alternative à l'hospitalisation complète en
//                             maintenant le lien avec l'environnement familial et scolaire. */}
//                             L’hôpital de jour est une structure de soins où les bénéficiaires peuvent être accueillis plusieurs jours, de 8h30 à 17h. C’est une forme de soins à temps partiel permettant de maintenir les liens familiaux, sociaux, scolaires ou professionnels. Il s'adresse aux adolescents et jeunes adultes de 10 à 25 ans présentant des troubles psychiatriques nécessitant une prise en charge intensive mais ne justifiant pas une hospitalisation à temps plein.
//                         </p>
//                         <p>
//                             Pour faciliter l’intégration à l’hôpital de jour, un livret d’accueil est remis à l’arrivée, détaillant le fonctionnement et les activités proposées.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/images/hh.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/images/dest.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>POUR QUI EST-IL DESTINÉ ?</h2>
//                         <p>
//                             L'hôpital de jour s'adresse aux adolescents et jeunes adultes de 10 à
//                             25 ans présentant des troubles psychiatriques nécessitant une prise en
//                             charge intensive mais ne justifiant pas une hospitalisation à temps
//                             plein. Il est particulièrement adapté aux situations de crise stabilisées,
//                             aux troubles du comportement, aux troubles anxieux sévères ou aux
//                             troubles de l'humeur.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/images/destiné.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-3">
//                     <div className="hist-stacked-images">
//                         <div className="hist-stacked-images">
//                             <img
//                                 src="/assets/feerima/images/jeu.png"
//                                 alt="Ma mission"
//                                 className="hist-image"
//                             />
//                         </div>
//                     </div>
//                     <div className="hist-content">
//                         <h2>LE PROGRAMME DE SOINS</h2>
//                         <p>
//                             <strong>Des activités thérapeutiques variées</strong>
//                             <br />
//                             Le programme comprend des ateliers thérapeutiques (art-thérapie,
//                             psychomotricité, groupes de parole), des consultations médicales et
//                             psychologiques individuelles, ainsi que des activités éducatives
//                             adaptées.
//                         </p>
//                         <p>
//                             <strong>Une coordination étroite</strong>
//                             <br />
//                             L'équipe pluridisciplinaire assure un suivi coordonné avec la famille,
//                             l'école et les autres acteurs du parcours de vie du jeune, pour garantir
//                             une continuité optimale des soins.
//                         </p>
//                     </div>
//                 </section>
//             </main>

//             <Footer />
//         </div>
//     );
// }

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/HopitalDeJour.css';

const ateliersData = [
    {
        title: "Groupes de parole",
        desc: "Espaces d’échange permettant aux bénéficiaires d’exprimer leurs difficultés et de partager leur vécu et leurs expériences.",
        benefits: ["Expression des émotions", "Soutien mutuel", "Habiletés psychosociales"]
    },
    {
        title: "Activités à médiation",
        desc: "Art-thérapie, activités sportives et manuelles, relaxation, méditation, ateliers d’expression, cuisine, jardinage, soin de soi, jeux de société, etc.",
        benefits: ["Gestion des émotions", "Respect du cadre", "Confiance en soi", "Concentration", "Coopération"]
    },
    {
        title: "Éducation thérapeutique",
        desc: "Programmes en groupe où les bénéficiaires apprennent à mieux comprendre leurs troubles et leur prise en charge, à repérer les effets au quotidien.",
        benefits: ["Autonomie", "Outils concrets", "Adhésion aux soins", "Confiance en soi"]
    },
    {
        title: "Éducation à la santé",
        desc: "Groupes ou entretiens autour de thématiques traversées par les bénéficiaires : addictions, vie affective, réseaux sociaux, sommeil, hygiène de vie, etc.",
        benefits: ["Connaissances en santé", "Bonnes pratiques quotidiennes"]
    },
    {
        title: "Habiletés psychosociales",
        desc: "Ateliers de groupe pour apprendre à mieux communiquer, coopérer et résoudre des problèmes ensemble, via jeux de rôle et activités collaboratives.",
        benefits: ["Confiance en soi", "Gestion des relations", "Coopération"]
    },
    {
        title: "Activités hors les murs",
        desc: "Sorties encadrées par des professionnels : lieux culturels, démarches du quotidien, achats, etc.",
        benefits: ["Autonomie", "Confiance dans l'environnement", "Mise en pratique"]
    }
];

export default function HopitalDeJour() {
    // Animation au scroll (fade-in)
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="hopital-de-jour-page">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="page-hero hopital-hero">
                    <div className="hero-background">
                        <img
                            src="/assets/feerima/images/hopital-de-jour.png"
                            alt="Hôpital de jour La Fée Rima - Abidjan"
                            className="hero-image"
                            loading="eager"
                        />
                        <div className="hero-overlay"></div>
                    </div>
                    <div className="hero-content fade-up">
                        <h1>L'Hôpital de Jour</h1>
                        <p className="hero-subtitle">Un dispositif intensif au cœur des soins psychiatriques pour les jeunes</p>
                        <Link to="/contact" className="btn btn-hero">Prendre rendez-vous</Link>
                    </div>
                </section>

                {/* Introduction */}
                <section className="section intro-section">
                    <div className="container">
                        <div className="section-header fade-up">
                            <h2>Qu'est-ce que l'Hôpital de Jour ?</h2>
                            <div className="divider"></div>
                        </div>
                        <div className="intro-grid">
                            <div className="intro-text fade-up">
                                <p>
                                    L’hôpital de jour est une structure de soins où les bénéficiaires peuvent être accueillis plusieurs jours,
                                    <strong> de 8h30 à 17h</strong>. C’est une forme de soins à temps partiel permettant de maintenir les liens
                                    familiaux, sociaux, scolaires ou professionnels.
                                </p>
                                <p>
                                    Il s'adresse aux adolescents et jeunes adultes de <strong>10 à 25 ans</strong> présentant des troubles
                                    psychiatriques nécessitant une prise en charge intensive mais ne justifiant pas une hospitalisation à temps plein.
                                </p>
                                <p className="highlight-note">
                                    Pour faciliter l’intégration, un <strong>livret d’accueil</strong> est remis à l’arrivée, détaillant
                                    le fonctionnement et les activités proposées.
                                </p>
                            </div>
                            <div className="intro-features fade-up">
                                <div className="feature-card">
                                    <i className="fas fa-clock"></i>
                                    <h3>Horaires</h3>
                                    <p>8h30 - 17h00</p>
                                </div>
                                <div className="feature-card">
                                    <i className="fas fa-users"></i>
                                    <h3>Public</h3>
                                    <p>10 à 25 ans</p>
                                </div>
                                <div className="feature-card">
                                    <i className="fas fa-hand-holding-heart"></i>
                                    <h3>Type de soins</h3>
                                    <p>Temps partiel intensif</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projet Personnalisé de Soins */}
                <section className="section pps-section">
                    <div className="container">
                        <div className="section-header fade-up">
                            <h2>Projet Personnalisé de Soins (PPS)</h2>
                            <div className="divider"></div>
                        </div>
                        <div className="pps-content">
                            <p className="pps-intro fade-up">
                                Le partenariat avec la famille dans la construction du projet personnalisé de soins est l’une de nos priorités
                                et se base sur le <strong>consentement éclairé</strong> du bénéficiaire.
                            </p>
                            <div className="pps-grid">
                                <div className="pps-step fade-up">
                                    <div className="step-number">01</div>
                                    <h3>Cadre & Objectifs</h3>
                                    <p>Le projet définit le cadre de la prise en charge globale et fixe les objectifs : nature et fréquence des soins, séances individuelles et de groupe.</p>
                                </div>
                                <div className="pps-step fade-up">
                                    <div className="step-number">02</div>
                                    <h3>Co-construction</h3>
                                    <p>Élaboré avec la famille et le bénéficiaire, selon les résultats des bilans et les besoins identifiés.</p>
                                </div>
                                <div className="pps-step fade-up">
                                    <div className="step-number">03</div>
                                    <h3>Suivi & Référent</h3>
                                    <p>Un référent est désigné pour veiller à l’évolution de la prise en charge et assurer la correspondance avec la famille et l’extérieur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ateliers Thérapeutiques */}
                <section className="section ateliers-section">
                    <div className="container">
                        <div className="section-header fade-up">
                            <h2>Nos Ateliers Thérapeutiques</h2>
                            <div className="divider"></div>
                            <p className="section-intro">Des activités variées pour accompagner chaque jeune vers le mieux-être et l'autonomie.</p>
                        </div>
                        <div className="ateliers-grid">
                            {ateliersData.map((atelier, index) => (
                                <article key={index} className="atelier-card fade-up">
                                    <h3>{atelier.title}</h3>
                                    <p>{atelier.desc}</p>
                                    <div className="benefits-box">
                                        <span className="benefits-label">Bénéfices :</span>
                                        <ul className="benefits-list">
                                            {atelier.benefits.map((benefit, i) => (
                                                <li key={i}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Chiffres clés */}
                <section className="section stats-section">
                    <div className="container">
                        <div className="stats-grid">
                            <div className="stat-card fade-up">
                                <i className="fas fa-calendar-week"></i>
                                <h3>5 jours/semaine</h3>
                                <p>Prise en charge intensive</p>
                            </div>
                            <div className="stat-card fade-up">
                                <i className="fas fa-chalkboard-user"></i>
                                <h3>15+ ateliers</h3>
                                <p>Différents chaque semaine</p>
                            </div>
                            <div className="stat-card fade-up">
                                <i className="fas fa-smile"></i>
                                <h3>90%</h3>
                                <p>De bénéficiaires satisfaits</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Continuité des Soins */}
                <section className="section continuite-section">
                    <div className="container">
                        <div className="continuite-card fade-up">
                            <i className="fas fa-sync-alt continuite-icon"></i>
                            <h2>Continuité des Soins</h2>
                            <p>
                                La prise en charge ne s’arrête pas à la sortie de l’hôpital de jour. Une stratégie est mise en place pour
                                poursuivre les soins de manière progressive et adaptée. L’arrêt de la prise en charge est décidé par l’équipe,
                                <strong> de commun accord avec la famille et le bénéficiaire</strong>, assurant ainsi une transition en douceur
                                vers l'autonomie ou d'autres structures d'accompagnement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section cta-section">
                    <div className="container">
                        <div className="cta-content fade-up">
                            <h2>Vous souhaitez plus d'informations ?</h2>
                            <p>Notre équipe est à votre écoute pour discuter des besoins de votre proche et organiser une visite de la structure.</p>
                            <Link to="/contact" className="btn btn-primary">Contactez-nous</Link>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/HopitalDeJour.css';

// const ateliersData = [
//     {
//         title: "Groupes de parole",
//         desc: "Espaces d’échange permettant aux bénéficiaires d’exprimer leurs difficultés et de partager leur vécu et leurs expériences.",
//         benefits: ["Expression des émotions", "Soutien mutuel", "Habiletés psychosociales"]
//     },
//     {
//         title: "Activités à médiation",
//         desc: "Art-thérapie, activités sportives et manuelles, relaxation, méditation, ateliers d’expression, cuisine, jardinage, soin de soi, jeux de société, etc.",
//         benefits: ["Gestion des émotions", "Respect du cadre", "Confiance en soi", "Concentration", "Coopération"]
//     },
//     {
//         title: "Éducation thérapeutique",
//         desc: "Programmes en groupe où les bénéficiaires apprennent à mieux comprendre leurs troubles et leur prise en charge, à repérer les effets au quotidien.",
//         benefits: ["Autonomie", "Outils concrets", "Adhésion aux soins", "Confiance en soi"]
//     },
//     {
//         title: "Éducation à la santé",
//         desc: "Groupes ou entretiens autour de thématiques traversées par les bénéficiaires : addictions, vie affective, réseaux sociaux, sommeil, hygiène de vie, etc.",
//         benefits: ["Connaissances en santé", "Bonnes pratiques quotidiennes"]
//     },
//     {
//         title: "Habiletés psychosociales",
//         desc: "Ateliers de groupe pour apprendre à mieux communiquer, coopérer et résoudre des problèmes ensemble, via jeux de rôle et activités collaboratives.",
//         benefits: ["Confiance en soi", "Gestion des relations", "Coopération"]
//     },
//     {
//         title: "Activités hors les murs",
//         desc: "Sorties encadrées par des professionnels : lieux culturels, démarches du quotidien, achats, etc.",
//         benefits: ["Autonomie", "Confiance dans l'environnement", "Mise en pratique"]
//     }
// ];

// export default function HopitalDeJour() {
//     return (
//         <div className="hopital-de-jour-page">
//             <Navbar />
//             <main>
//                 {/* Hero Section */}
//                 <section className="page-hero hopital-hero">
//                     <div className="hero-background">
//                         <img
//                             src="/assets/feerima/images/hopital-de-jour.png"
//                             alt="Hôpital de jour La Fée Rima - Abidjan"
//                             className="hero-image"
//                             loading="eager"
//                         />
//                         <div className="hero-overlay"></div>
//                     </div>
//                     <div className="hero-content">
//                         <h1>L'Hôpital de Jour</h1>
//                         <p className="hero-subtitle">Un dispositif intensif au cœur des soins psychiatriques pour les jeunes</p>
//                     </div>
//                 </section>

//                 {/* Introduction */}
//                 <section className="section intro-section">
//                     <div className="container">
//                         <div className="section-header">
//                             <h2>Qu'est-ce que l'Hôpital de Jour ?</h2>
//                             <div className="divider"></div>
//                         </div>
//                         <div className="intro-grid">
//                             <div className="intro-text">
//                                 <p>
//                                     L’hôpital de jour est une structure de soins où les bénéficiaires peuvent être accueillis plusieurs jours,
//                                     <strong> de 8h30 à 17h</strong>. C’est une forme de soins à temps partiel permettant de maintenir les liens
//                                     familiaux, sociaux, scolaires ou professionnels.
//                                 </p>
//                                 <p>
//                                     Il s'adresse aux adolescents et jeunes adultes de <strong>10 à 25 ans</strong> présentant des troubles
//                                     psychiatriques nécessitant une prise en charge intensive mais ne justifiant pas une hospitalisation à temps plein.
//                                 </p>
//                                 <p className="highlight-note">
//                                     Pour faciliter l’intégration, un <strong>livret d’accueil</strong> est remis à l’arrivée, détaillant
//                                     le fonctionnement et les activités proposées.
//                                 </p>
//                             </div>
//                             <div className="intro-features">
//                                 <div className="feature-card">
//                                     <span className="feature-icon"></span>
//                                     <h3>Horaires</h3>
//                                     <p>8h30 - 17h00</p>
//                                 </div>
//                                 <div className="feature-card">
//                                     <span className="feature-icon"></span>
//                                     <h3>Public</h3>
//                                     <p>10 à 25 ans</p>
//                                 </div>
//                                 <div className="feature-card">
//                                     <span className="feature-icon">🏥</span>
//                                     <h3>Type de soins</h3>
//                                     <p>Temps partiel intensif</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Projet Personnalisé de Soins */}
//                 <section className="section pps-section">
//                     <div className="container">
//                         <div className="section-header">
//                             <h2>Projet Personnalisé de Soins (PPS)</h2>
//                             <div className="divider"></div>
//                         </div>
//                         <div className="pps-content">
//                             <p className="pps-intro">
//                                 Le partenariat avec la famille dans la construction du projet personnalisé de soins est l’une de nos priorités
//                                 et se base sur le <strong>consentement éclairé</strong> du bénéficiaire.
//                             </p>
//                             <div className="pps-grid">
//                                 <div className="pps-step">
//                                     <div className="step-number">01</div>
//                                     <h3>Cadre & Objectifs</h3>
//                                     <p>Le projet définit le cadre de la prise en charge globale et fixe les objectifs : nature et fréquence des soins, séances individuelles et de groupe.</p>
//                                 </div>
//                                 <div className="pps-step">
//                                     <div className="step-number">02</div>
//                                     <h3>Co-construction</h3>
//                                     <p>Élaboré avec la famille et le bénéficiaire, selon les résultats des bilans et les besoins identifiés.</p>
//                                 </div>
//                                 <div className="pps-step">
//                                     <div className="step-number">03</div>
//                                     <h3>Suivi & Référent</h3>
//                                     <p>Un référent est désigné pour veiller à l’évolution de la prise en charge et assurer la correspondance avec la famille et l’extérieur.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Ateliers Thérapeutiques */}
//                 <section className="section ateliers-section">
//                     <div className="container">
//                         <div className="section-header">
//                             <h2>Nos Ateliers Thérapeutiques</h2>
//                             <div className="divider"></div>
//                             <p className="section-intro">Des activités variées pour accompagner chaque jeune vers le mieux-être et l'autonomie.</p>
//                         </div>
//                         <div className="ateliers-grid">
//                             {ateliersData.map((atelier, index) => (
//                                 <article key={index} className="atelier-card">
//                                     <h3>{atelier.title}</h3>
//                                     <p>{atelier.desc}</p>
//                                     <div className="benefits-box">
//                                         <span className="benefits-label">Bénéfices :</span>
//                                         <ul className="benefits-list">
//                                             {atelier.benefits.map((benefit, i) => (
//                                                 <li key={i}>{benefit}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </article>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Continuité des Soins */}
//                 <section className="section continuite-section">
//                     <div className="container">
//                         <div className="continuite-card">
//                             <div className="continuite-icon">🔄</div>
//                             <h2>Continuité des Soins</h2>
//                             <p>
//                                 La prise en charge ne s’arrête pas à la sortie de l’hôpital de jour. Une stratégie est mise en place pour
//                                 poursuivre les soins de manière progressive et adaptée. L’arrêt de la prise en charge est décidé par l’équipe,
//                                 <strong> de commun accord avec la famille et le bénéficiaire</strong>, assurant ainsi une transition en douceur
//                                 vers l'autonomie ou d'autres structures d'accompagnement.
//                             </p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 {/* <section className="section cta-section">
//                     <div className="container">
//                         <div className="cta-content">
//                             <h2>Vous souhaitez en savoir plus ?</h2>
//                             <p>Notre équipe est à votre écoute pour vous accompagner dans le parcours de soins.</p>
//                             <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
//                         </div>
//                     </div>
//                 </section> */}
//             </main>
//             <Footer />
//         </div>
//     );
// }



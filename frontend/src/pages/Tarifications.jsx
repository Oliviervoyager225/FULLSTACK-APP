// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// const tarifications = [
//     {
//         service: 'Consultation psychiatrique initiale',
//         duree: '60 min',
//         tarif: 'Prise en charge Sécurité Sociale',
//     },
//     {
//         service: 'Consultation psychiatrique de suivi',
//         duree: '30 min',
//         tarif: 'Prise en charge Sécurité Sociale',
//     },
//     {
//         service: 'Consultation psychologique',
//         duree: '45 min',
//         tarif: 'Prise en charge selon convention',
//     },
//     {
//         service: "Hôpital de jour (par journée)",
//         duree: 'Journée',
//         tarif: 'Forfait journalier — voir service',
//     },
//     {
//         service: "Service d'accueil d'urgence",
//         duree: 'Variable',
//         tarif: 'Sans avance de frais sous conditions',
//     },
// ];

// export default function Tarifications() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/tari.png')" }}
//             >
//                 {/* <div className="page-hero-content">
//                     <h1>Tarifications</h1>
//                     <p>Transparence et accessibilité pour tous les jeunes et leurs familles</p>
//                 </div> */}
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>NOS TARIFS ET MODES DE PRISE EN CHARGE</h2>
//                         <p>
//                             La Fée Rima s'engage à rendre ses soins accessibles à tous. La majorité
//                             de nos prestations sont prises en charge par l'Assurance Maladie
//                             obligatoire, sous réserve de disposer d'une prescription médicale et
//                             d'être affilié à un régime de Sécurité Sociale.
//                         </p>
//                         <p>
//                             Pour les familles sans couverture sociale ou en situation précaire, des
//                             dispositifs d'aide existent. N'hésitez pas à contacter notre service
//                             administratif pour en savoir plus.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/PEC.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 {/* Tableau des tarifs */}
//                 <section style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
//                     <h2 style={{ marginBottom: '1.5rem', color: '#1a3a5c' }}>TABLEAU DES PRESTATIONS</h2>
//                     <table
//                         style={{
//                             width: '100%',
//                             borderCollapse: 'collapse',
//                             fontSize: '0.95rem',
//                             boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
//                             borderRadius: '8px',
//                             overflow: 'hidden',
//                         }}
//                     >
//                         <thead>
//                             <tr style={{ background: '#7cb518', color: '#fff' }}>
//                                 <th style={{ padding: '1rem', textAlign: 'left' }}>Prestation</th>
//                                 <th style={{ padding: '1rem', textAlign: 'left' }}>Durée</th>
//                                 <th style={{ padding: '1rem', textAlign: 'left' }}>Tarification</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {tarifications.map((row, i) => (
//                                 <tr
//                                     key={i}
//                                     style={{
//                                         background: i % 2 === 0 ? '#f9f9f9' : '#fff',
//                                         borderBottom: '1px solid #e5e7eb',
//                                     }}
//                                 >
//                                     <td style={{ padding: '0.9rem 1rem' }}>{row.service}</td>
//                                     <td style={{ padding: '0.9rem 1rem' }}>{row.duree}</td>
//                                     <td style={{ padding: '0.9rem 1rem' }}>{row.tarif}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/mutul.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>MUTUELLE ET COMPLÉMENTAIRE</h2>
//                         <p>
//                             Selon votre contrat de complémentaire santé, une partie ou la totalité
//                             de votre ticket modérateur peut être remboursée. Rapprochez-vous de votre
//                             mutuelle pour connaître les modalités de prise en charge applicables à
//                             votre situation.
//                         </p>
//                         <p>
//                             Notre secrétariat médical est disponible pour vous accompagner dans vos
//                             démarches administratives et vous orienter vers les bons interlocuteurs.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/complementaire.png')",
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
import '../styles/Tarifications.css';

const tarifications = [
    {
        service: 'Consultation psychiatrique initiale',
        duree: '60 min',
        tarif: 'Prise en charge Sécurité Sociale',
        icon: '🧠',
    },
    {
        service: 'Consultation psychiatrique de suivi',
        duree: '30 min',
        tarif: 'Prise en charge Sécurité Sociale',
        icon: '🔄',
    },
    {
        service: 'Consultation psychologique',
        duree: '45 min',
        tarif: 'Prise en charge selon convention',
        icon: '💬',
    },
    {
        service: "Hôpital de jour (par journée)",
        duree: 'Journée',
        tarif: 'Forfait journalier — voir service',
        icon: '🏥',
    },
    {
        service: "Service d'accueil d'urgence",
        duree: 'Variable',
        tarif: 'Sans avance de frais sous conditions',
        icon: '🚨',
    },
];

const accentColors = ['#6B4FA0', '#7CB518', '#9B6DC8', '#5A9A10', '#8B5FC8'];

export default function Tarifications() {
    return (
        <div className="tarif-page">
            <Navbar />

            {/* HERO */}
            <section
                className="tarif-hero"
                style={{ backgroundImage: "url('/assets/feerima/tarification.jpg')" }}
            >
                <div className="tarif-hero-overlay" />
                <div className="tarif-hero-content">
                    <span className="tarif-eyebrow">Transparence & Accessibilité</span>
                    <h1 className="tarif-hero-title">Nos Tarifs</h1>
                    <p className="tarif-hero-sub">
                        Des soins accessibles à chaque jeune, quelles que soient les situations
                    </p>
                </div>
            </section>

            <main className="tarif-main">

                {/* INTRO SECTION */}
                <section className="tarif-intro-section">
                    <div className="tarif-intro-text">
                        <div className="tarif-section-label">PRISE EN CHARGE</div>
                        <h2 className="tarif-section-title">Nos Tarifs & Modes de Prise en Charge</h2>
                        <p>
                            La Fée Rima s'engage à rendre ses soins accessibles à tous. La majorité
                            de nos prestations sont prises en charge par l'Assurance Maladie
                            obligatoire, sous réserve de disposer d'une prescription médicale et
                            d'être affilié à un régime de Sécurité Sociale.
                        </p>
                        <p>
                            Pour les familles sans couverture sociale ou en situation précaire, des
                            dispositifs d'aide existent. N'hésitez pas à contacter notre service
                            administratif pour en savoir plus.
                        </p>
                        <a href="/contact" className="tarif-cta-btn">Contacter le service administratif</a>
                    </div>
                    <div
                        className="tarif-intro-image"
                        style={{ backgroundImage: "url('/assets/feerima/PEC.png')" }}
                    />
                </section>

                {/* WAVE DIVIDER */}
                <div className="tarif-wave">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F0EDF8" />
                    </svg>
                </div>

                {/* TABLEAU DES PRESTATIONS */}
                <section className="tarif-table-section">
                    <div className="tarif-section-label centered">PRESTATIONS</div>
                    <h2 className="tarif-section-title centered">Tableau des Prestations</h2>

                    <div className="tarif-cards">
                        {tarifications.map((row, i) => (
                            <div
                                className="tarif-card"
                                key={i}
                                style={{ '--accent': accentColors[i % accentColors.length] }}
                            >
                                <div className="tarif-card-accent-bar" />
                                <div className="tarif-card-icon">{row.icon}</div>
                                <div className="tarif-card-body">
                                    <h3 className="tarif-card-service">{row.service}</h3>
                                    <div className="tarif-card-meta">
                                        <span className="tarif-card-duree">⏱ {row.duree}</span>
                                        <span className="tarif-card-tarif">{row.tarif}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WAVE DIVIDER reversed */}
                <div className="tarif-wave tarif-wave-reverse">
                    <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#F0EDF8" />
                    </svg>
                </div>

                {/* MUTUELLE SECTION */}
                <section className="tarif-mutuelle-section">
                    <div
                        className="tarif-mutuelle-image"
                        style={{ backgroundImage: "url('/assets/feerima/mutul.png')" }}
                    />
                    <div className="tarif-mutuelle-content">
                        <div className="tarif-section-label">REMBOURSEMENT</div>
                        <h2 className="tarif-section-title">Mutuelle & Complémentaire</h2>
                        <p>
                            Selon votre contrat de complémentaire santé, une partie ou la totalité
                            de votre ticket modérateur peut être remboursée. Rapprochez-vous de votre
                            mutuelle pour connaître les modalités de prise en charge applicables à
                            votre situation.
                        </p>
                        <p>
                            Notre secrétariat médical est disponible pour vous accompagner dans vos
                            démarches administratives et vous orienter vers les bons interlocuteurs.
                        </p>
                    </div>
                    <div
                        className="tarif-mutuelle-image"
                        style={{ backgroundImage: "url('/assets/feerima/complementaire.png')" }}
                    />
                </section>

                {/* ENCART CONTACT */}
                {/* <section className="tarif-contact-band">
                    <div className="tarif-contact-inner">
                        <h3>Une question sur la prise en charge ?</h3>
                        <p>Notre équipe administrative est là pour vous guider à chaque étape.</p>
                        <a href="/contact" className="tarif-contact-btn">Nous contacter</a>
                    </div>
                </section> */}

            </main>

            <Footer />
        </div>
    );
}
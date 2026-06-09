// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function SecuriteDonnees() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/securite.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h2>Sécurité des données personnelles</h2>
//                     <p>La protection de vos informations, une priorité absolue</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>NOTRE ENGAGEMENT RGPD</h2>
//                         <p>
//                             La Fée Rima collecte et traite vos données personnelles dans le strict
//                             respect du Règlement Général sur la Protection des Données (RGPD). Vos
//                             informations sont utilisées uniquement dans le cadre de votre prise en
//                             charge médicale et ne sont jamais cédées à des tiers non autorisés.
//                         </p>
//                         <p>
//                             Conformément à la loi, vous disposez d'un droit d'accès, de
//                             rectification, d'effacement et de portabilité de vos données, ainsi que
//                             d'un droit d'opposition à leur traitement.
//                         </p>

//                         <p>
//                             La confidentialité des informations médicales est une priorité à La Fée Rima. Les données ne sont accessibles qu’aux professionnels habilités, et uniquement dans le cadre strict de la prise en charge. 
//                         </p>

//                         <p>
//                             Toutes les informations sont regroupées dans un dossier médical informatisé, grâce à un logiciel spécialisé. Ce dossier peut être consulté tout au long du parcours de soins.
//                         </p>
                        
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/RGPD.png')",
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
//                         <h2>EXERCER VOS DROITS</h2>
//                         <p>
//                             Pour toute demande relative à vos données personnelles, vous pouvez
//                             contacter notre Délégué à la Protection des Données (DPO) par courrier
//                             postal adressé à La Fée Rima ou par email via notre formulaire de
//                             contact. Une réponse vous sera apportée dans un délai d'un mois.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/droit1.png')",
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
import '../styles/SecuriteDonnees.css';

const droits = [
    { icon: '👁️', label: 'Droit daccès', desc: 'Consultez vos données à tout moment.' },
    { icon: '✏️', label: 'Droit de rectification', desc: 'Corrigez une information inexacte.' },
    { icon: '🗑️', label: 'Droit deffacement', desc: 'Demandez la suppression de vos données.' },
    { icon: '📦', label: 'Droit à la portabilité', desc: 'Récupérez vos données dans un format lisible.' },
    { icon: '🚫', label: 'Droit dopposition', desc: 'Refusez certains traitements de vos données.' },
];

export default function SecuriteDonnees() {
    return (
        <div className="sd-page">
            <Navbar />

            {/* HERO */}
            <section
                className="sd-hero"
                style={{ backgroundImage: "url('/assets/feerima/securite.png')" }}
            >
                <div className="sd-hero-overlay" />
                <div className="sd-hero-content">
                    <span className="sd-hero-eyebrow">Confidentialité &amp; Protection</span>
                    <h1>Sécurité des données<br />personnelles</h1>
                    <p>La protection de vos informations, une priorité absolue.</p>
                </div>
            </section>

            <main className="sd-main">

                {/* SECTION 1 — RGPD */}
                <section className="sd-section sd-section--rgpd">
                    <div className="sd-section-text">
                        <span className="sd-label">Notre engagement</span>
                        <h2>Conformité RGPD</h2>
                        <p>
                            La Fée Rima collecte et traite vos données personnelles dans le strict
                            respect du Règlement Général sur la Protection des Données (RGPD). Vos
                            informations sont utilisées uniquement dans le cadre de votre prise en
                            charge médicale et ne sont jamais cédées à des tiers non autorisés.
                        </p>
                        <p>
                            La confidentialité des informations médicales est une priorité. Les
                            données ne sont accessibles qu'aux professionnels habilités, dans le
                            cadre strict de la prise en charge.
                        </p>
                        <p>
                            Toutes les informations sont regroupées dans un dossier médical
                            informatisé grâce à un logiciel spécialisé, consultable tout au long
                            du parcours de soins.
                        </p>
                    </div>
                    <div className="sd-section-image">
                        <div
                            className="sd-img-card"
                            style={{ backgroundImage: "url('/assets/feerima/RGPD.png')" }}
                        />
                        <div className="sd-shield-badge">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 4L6 12v12c0 10.5 7.7 20.3 18 22.6C34.3 44.3 42 34.5 42 24V12L24 4z" fill="#5B3A8E" opacity=".15" stroke="#5B3A8E" strokeWidth="2"/>
                                <path d="M20 24l3 3 6-6" stroke="#5B3A8E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>RGPD</span>
                        </div>
                    </div>
                </section>

                {/* DROITS CARDS STRIP */}
                <section className="sd-droits-strip">
                    <div className="sd-droits-header">
                        <h2>Vos droits sur vos données</h2>
                        <p>Conformément à la loi, vous pouvez exercer les droits suivants à tout moment.</p>
                    </div>
                    <div className="sd-droits-grid">
                        {droits.map((d, i) => (
                            <div className="sd-droit-card" key={i}>
                                <div className="sd-droit-icon">{d.icon}</div>
                                <strong>{d.label}</strong>
                                <p>{d.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 2 — Exercer vos droits */}
                <section className="sd-section sd-section--contact sd-section--reverse">
                    <div className="sd-section-image sd-section-image--duo">
                        <div
                            className="sd-img-card sd-img-card--sm"
                            style={{ backgroundImage: "url('/assets/feerima/droit.png')" }}
                        />
                        <div
                            className="sd-img-card sd-img-card--sm sd-img-card--offset"
                            style={{ backgroundImage: "url('/assets/feerima/droit1.png')" }}
                        />
                    </div>
                    <div className="sd-section-text">
                        <span className="sd-label">Contact DPO</span>
                        <h2>Exercer vos droits</h2>
                        <p>
                            Pour toute demande relative à vos données personnelles, vous pouvez
                            contacter notre Délégué à la Protection des Données (DPO) par courrier
                            postal adressé à La Fée Rima ou par email via notre formulaire de
                            contact.
                        </p>
                        <p>Une réponse vous sera apportée dans un délai d'un mois.</p>
                        <a href="/contact" className="sd-cta">Contacter le DPO →</a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
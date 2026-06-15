// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function Videosurveillance() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/cam.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Système de vidéosurveillance</h1>
//                     <p>Transparence sur le dispositif de sécurité de l'établissement</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>POURQUOI UN SYSTÈME DE VIDÉOSURVEILLANCE ?</h2>
//                         {/* <p>
//                             La Fée Rima a mis en place un système de vidéosurveillance dans certaines
//                             zones communes de l'établissement (entrées, couloirs, parkings) afin
//                             d'assurer la sécurité des patients, des familles et des professionnels.
//                         </p>
//                         <p>
//                             Les enregistrements sont réalisés uniquement à des fins de sécurité et sont strictement réservés aux personnes autorisées. Ils ne sont jamais diffusés et sont conservés pour une durée limitée, conformément aux exigences légales.
//                             Cette démarche vise à renforcer la protection des personnes et des biens, tout en respectant les droits et libertés individuelles.
//                         </p>
//                         <p>
//                             Ce dispositif est déclaré auprès des autorités compétentes conformément
//                             à la réglementation en vigueur.
//                         </p> */}

//                         <p>
//                             Pour assurer la sécurité des bénéficiaires, du personnel et des locaux, La Fée Rima a mis en place un système de vidéosurveillance conforme à la réglementation en vigueur. Les enregistrements sont réalisés uniquement à des fins de sécurité et sont strictement réservés aux personnes autorisées. Ils ne sont jamais diffusés et sont conservés pour une durée limitée, conformément aux exigences légales
//                         </p>
//                         <p>
//                             Cette démarche vise à renforcer la protection des personnes et des biens, tout en respectant les droits et libertés individuelles.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/expl_cam.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/droit_image.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'right',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>VOS DROITS SUR LES IMAGES</h2>
//                         <p>
//                             Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
//                             d'un droit d'accès aux images vous concernant, sous réserve que celles-ci
//                             soient encore disponibles (durée de conservation limitée à 30 jours).
//                             Pour exercer ce droit, adressez votre demande par écrit au secrétariat
//                             de direction de l'établissement en justifiant de votre identité.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/droi_img.png')",
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
import '../styles/Videosurveillance.css';

export default function Videosurveillance() {
    return (
        <div className="vsurv-page">
            <Navbar />

            {/* ── HERO ── */}
            <section
                className="vsurv-hero"
                style={{ backgroundImage: "url('/assets/feerima/cam.png')" }}
            >
                <div className="vsurv-hero-overlay" />
                <div className="vsurv-hero-content">
                    <span className="vsurv-eyebrow">Sécurité &amp; transparence</span>
                    <p className="vsurv-hero-title">
                        Système de<br />
                        <span className="vsurv-hero-title-em">vidéosurveillance</span>
                    </p>
                    <p className="vsurv-hero-subtitle">
                        Transparence sur le dispositif de sécurité de l'établissement
                    </p>
                    <div className="vsurv-hero-divider" />
                </div>

                <svg
                    className="vsurv-cam-deco"
                    viewBox="0 0 120 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <rect x="10" y="20" width="70" height="45" rx="8" fill="white" fillOpacity="0.08" stroke="white" strokeOpacity="0.25" strokeWidth="2" />
                    <circle cx="45" cy="42" r="14" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.3" strokeWidth="2" />
                    <circle cx="45" cy="42" r="7" fill="white" fillOpacity="0.12" />
                    <polygon points="80,30 110,18 110,66 80,54" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                    <circle cx="18" cy="26" r="3" fill="#A8C5A0" fillOpacity="0.7" />
                </svg>
            </section>

            <main className="vsurv-main">

                {/* ── SECTION 1 : Pourquoi ── */}
                <section className="vsurv-section vsurv-section--why">
                    <div className="vsurv-section-inner">
                        <div className="vsurv-text-block">
                            <span className="vsurv-label">Contexte</span>
                            <p className="vsurv-text-heading">
                                Pourquoi un système<br />de vidéosurveillance ?
                            </p>
                            <p className="vsurv-text-para">
                                Pour assurer la sécurité des bénéficiaires, du personnel et des locaux,
                                La Fée Rima a mis en place un système de vidéosurveillance conforme à
                                la réglementation en vigueur.
                            </p>
                            <p className="vsurv-text-para">
                                Les enregistrements sont réalisés uniquement à des fins de sécurité et
                                sont strictement réservés aux personnes autorisées. Ils ne sont jamais
                                diffusés et sont conservés pour une durée limitée, conformément aux
                                exigences légales.
                            </p>
                            <p className="vsurv-text-para">
                                Cette démarche vise à renforcer la protection des personnes et des biens,
                                tout en respectant les droits et libertés individuelles.
                            </p>

                            <div className="vsurv-badge-row">
                                <div className="vsurv-badge">
                                    <svg className="vsurv-badge-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7l-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                    </svg>
                                    <span>Déclaré aux autorités compétentes</span>
                                </div>
                                <div className="vsurv-badge">
                                    <svg className="vsurv-badge-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                    <span>Conservation limitée à 30 jours</span>
                                </div>
                                <div className="vsurv-badge">
                                    <svg className="vsurv-badge-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                    <span>Accès strictement réservé</span>
                                </div>
                            </div>
                        </div>

                        <div className="vsurv-image-block">
                            <div
                                className="vsurv-img"
                                style={{ backgroundImage: "url('/assets/feerima/expl_cam.png')" }}
                            >
                                <div className="vsurv-img-tag">
                                    Zones surveillées : entrées · couloirs · parkings
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── BANDE SÉPARATRICE ── */}
                <div className="vsurv-divider-band" aria-hidden="true">
                    <svg className="vsurv-divider-wave" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 L1440 0 L1440 20 Q720 35 0 20 Z" fill="#2D1B6B" />
                    </svg>
                    <div className="vsurv-divider-text">RGPD · Loi Informatique et Libertés · Transparence</div>
                    <svg className="vsurv-divider-wave" viewBox="0 0 1440 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleY(-1)' }}>
                        <path d="M0 0 L1440 0 L1440 20 Q720 35 0 20 Z" fill="#2D1B6B" />
                    </svg>
                </div>

                {/* ── SECTION 2 : Vos droits ── */}
                <section className="vsurv-section vsurv-section--rights">
                    <div className="vsurv-section-inner vsurv-section-inner--reverse">
                        <div className="vsurv-image-block vsurv-image-block--duo">
                            <div
                                className="vsurv-img vsurv-img--top"
                                style={{ backgroundImage: "url('/assets/feerima/droit_image.png')" }}
                            />
                            <div
                                className="vsurv-img vsurv-img--bottom"
                                style={{ backgroundImage: "url('/assets/feerima/droi_img.png')" }}
                            />
                        </div>

                        <div className="vsurv-text-block">
                            <span className="vsurv-label">Vos droits</span>
                            <p className="vsurv-text-heading">
                                Vos droits<br />sur les images
                            </p>
                            <p className="vsurv-text-para">
                                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez
                                d'un droit d'accès aux images vous concernant, sous réserve que celles-ci
                                soient encore disponibles.
                            </p>

                            <div className="vsurv-steps">
                                <div className="vsurv-step">
                                    <div className="vsurv-step-num">01</div>
                                    <div className="vsurv-step-text">
                                        <span className="vsurv-step-title">Délai de conservation</span>
                                        <span className="vsurv-step-desc">Images conservées 30 jours maximum</span>
                                    </div>
                                </div>
                                <div className="vsurv-step">
                                    <div className="vsurv-step-num">02</div>
                                    <div className="vsurv-step-text">
                                        <span className="vsurv-step-title">Demande écrite</span>
                                        <span className="vsurv-step-desc">Adressez votre demande au secrétariat de direction</span>
                                    </div>
                                </div>
                                <div className="vsurv-step">
                                    <div className="vsurv-step-num">03</div>
                                    <div className="vsurv-step-text">
                                        <span className="vsurv-step-title">Justificatif d'identité</span>
                                        <span className="vsurv-step-desc">Joignez une pièce d'identité à votre courrier</span>
                                    </div>
                                </div>
                            </div>

                            <a href="#contact" className="vsurv-cta">
                                Exercer mon droit d'accès
                                <svg className="vsurv-cta-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
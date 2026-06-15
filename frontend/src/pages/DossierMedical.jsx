// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import '../styles/Historique.css';
// import '../styles/PageHero.css';

// export default function DossierMedical() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/dos_med.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Accès à votre dossier médical</h1>
//                     <p>Un droit garanti par la loi, un engagement de transparence</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>VOTRE DROIT D'ACCÈS AU DOSSIER</h2>
//                         <p>
//                             Conformément à la loi du 4 mars 2002 relative aux droits des malades,
//                             tout patient a le droit d'accéder à l'ensemble des informations
//                             contenues dans son dossier médical. Ce droit peut être exercé
//                             directement ou par l'intermédiaire d'un médecin de votre choix.
//                         </p>
//                         Toute personne a le droit d’accéder à son dossier médical, 
//                         qui regroupe l’ensemble des informations relatives à la prise en charge.  
//                         <p>
//                             Pour les mineurs, les titulaires de l'autorité parentale exercent ce
//                             droit pour leur compte, sauf opposition du mineur lui-même dans certaines
//                             conditions prévues par la loi.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/acces.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/demande.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'left',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>COMMENT FAIRE LA DEMANDE ?</h2>
//                         {/* <p>
//                             La demande doit être adressée par courrier au médecin responsable de
//                             votre prise en charge ou au secrétariat médical de La Fée Rima.
//                             Accompagnez-la d'une copie d'une pièce d'identité. Les documents vous
//                             seront communiqués dans un délai de 8 jours (ou 2 mois si les
//                             informations datent de plus de 5 ans).
//                         </p> */}
//                         <p>
//                             Cette démarche s’effectue par un courrier adressé au directeur de l’établissement. Vous pourrez ensuite consulter votre dossier sur place, avec ou sans la présence d’un professionnel, et obtenir une copie si vous le souhaitez.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/demande_acces.png')",
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

// Version améliorée avec un design plus moderne et épuré, en utilisant des sections à fond blanc et des images intégrées dans la mise en page, pour une meilleure lisibilité et une expérience utilisateur plus agréable.
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DossierMedical() {
    return (
        <div className="dm-page">
            <Navbar />

            {/* Hero */}
            <section
                className="dm-hero"
                style={{
                    backgroundImage:
                        "linear-gradient(135deg, rgba(59,31,110,0.82) 0%, rgba(107,79,160,0.70) 100%), url('/assets/feerima/dos_med.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="dm-hero-inner">
                    <span className="dm-hero-eyebrow">Droits du patient</span>
                    <h1 className="dm-hero-title">Accès à votre dossier médical</h1>
                    <p className="dm-hero-sub">Un droit garanti par la loi, un engagement de transparence</p>
                    <div className="dm-hero-line" />
                </div>
            </section>

            <main className="dm-main">

                {/* Section 1 */}
                <section className="dm-section">
                    <div className="dm-grid">
                        <div className="dm-text-col">
                            <p className="dm-section-label">01 — Vos droits</p>
                            <h2 className="dm-heading">Votre droit d'accès au dossier</h2>
                            <p className="dm-body">
                                Conformément à la loi du 4 mars 2002 relative aux droits des malades,
                                tout patient a le droit d'accéder à l'ensemble des informations
                                contenues dans son dossier médical. Ce droit peut être exercé
                                directement ou par l'intermédiaire d'un médecin de votre choix.
                            </p>
                            <p className="dm-body">
                                Toute personne a le droit d'accéder à son dossier médical,
                                qui regroupe l'ensemble des informations relatives à la prise en charge.
                            </p>
                            <div className="dm-callout">
                                <div className="dm-callout-icon">👨‍👩‍👧</div>
                                <p className="dm-callout-text">
                                    <strong>Pour les mineurs :</strong> Les titulaires de l'autorité parentale
                                    exercent ce droit pour leur compte, sauf opposition du mineur.
                                </p>
                            </div>
                        </div>
                        <div className="dm-img-col">
                            <div
                                className="dm-image"
                                style={{
                                    backgroundImage: "url('/assets/feerima/acces.png')",
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="dm-divider" />

                {/* Section 2 */}
                <section className="dm-section dm-section-alt">
                    <div className="dm-grid dm-grid-reverse">
                        <div className="dm-text-col">
                            <p className="dm-section-label">02 — La démarche</p>
                            <h2 className="dm-heading">Comment faire la demande ?</h2>
                            <p className="dm-body">
                                Cette démarche s'effectue par un courrier adressé au directeur de l'établissement.
                                Vous pourrez ensuite consulter votre dossier sur place, avec ou sans la présence
                                d'un professionnel, et obtenir une copie si vous le souhaitez.
                            </p>
                            <div className="dm-steps">
                                <div className="dm-step">
                                    <div className="dm-step-num">1</div>
                                    <div className="dm-step-body">
                                        <strong>Courrier au directeur</strong>
                                        <span>Adressez votre demande par écrit à la direction de l'établissement.</span>
                                    </div>
                                </div>
                                <div className="dm-step">
                                    <div className="dm-step-num">2</div>
                                    <div className="dm-step-body">
                                        <strong>Justificatif d'identité</strong>
                                        <span>Joignez une copie de votre pièce d'identité à la demande.</span>
                                    </div>
                                </div>
                                <div className="dm-step">
                                    <div className="dm-step-num">3</div>
                                    <div className="dm-step-body">
                                        <strong>Consultation sur place</strong>
                                        <span>Consultez le dossier sur place ou recevez une copie.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dm-img-col dm-images-stack">
                            <div
                                className="dm-image dm-image-sm"
                                style={{
                                    backgroundImage: "url('/assets/feerima/demande.png')",
                                }}
                            />
                            <div
                                className="dm-image dm-image-sm"
                                style={{
                                    backgroundImage: "url('/assets/feerima/demande_acces.png')",
                                }}
                            />
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            <style>{`
                /* ── Google Fonts ──────────────────────────── */
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500&display=swap');

                /* ── Tokens ────────────────────────────────── */
                .dm-page {
                    --dm-violet: #3B1F6E;
                    --dm-violet-mid: #6B4FA0;
                    --dm-sage: #A8C5A0;
                    --dm-sage-dark: #6B9E63;
                    --dm-lavender: #F5F2FF;
                    --dm-white: #FFFFFF;
                    --dm-text: #2D2D2D;
                    --dm-muted: #6B6B7B;
                    --dm-border: #E4DEFF;

                    font-family: 'DM Sans', system-ui, sans-serif;
                    background: #FAFAF9;
                    color: var(--dm-text);
                }

                /* ── Hero ──────────────────────────────────── */
                .dm-hero {
                    min-height: 420px;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 64px;
                }

                .dm-hero-inner {
                    max-width: 760px;
                    padding: 0 48px;
                }

                .dm-hero-eyebrow {
                    display: inline-block;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--dm-sage);
                    margin-bottom: 14px;
                }

                .dm-hero-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(32px, 5vw, 52px);
                    font-weight: 700;
                    color: #FFFFFF;
                    line-height: 1.15;
                    margin: 0 0 16px;
                }

                .dm-hero-sub {
                    font-size: 18px;
                    color: rgba(255,255,255,0.80);
                    margin: 0 0 28px;
                    line-height: 1.5;
                }

                .dm-hero-line {
                    width: 56px;
                    height: 3px;
                    background: var(--dm-sage);
                    border-radius: 2px;
                }

                /* ── Main ──────────────────────────────────── */
                .dm-main {
                    max-width: 1160px;
                    margin: 0 auto;
                    padding: 0 24px 80px;
                }

                /* ── Section ───────────────────────────────── */
                .dm-section {
                    padding: 72px 0;
                }

                .dm-section-alt {
                    background: transparent;
                }

                /* ── Grid ───────────────────────────────────── */
                .dm-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                }

                .dm-grid-reverse {
                    direction: rtl;
                }

                .dm-grid-reverse > * {
                    direction: ltr;
                }

                /* ── Text col ────────────────────────────────── */
                .dm-section-label {
                    font-size: 11px;
                    font-weight: 500;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: var(--dm-violet-mid);
                    margin: 0 0 14px;
                }

                .dm-heading {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(24px, 3vw, 34px);
                    font-weight: 600;
                    color: var(--dm-violet);
                    line-height: 1.2;
                    margin: 0 0 24px;
                    padding-left: 16px;
                    border-left: 3px solid var(--dm-sage);
                }

                .dm-body {
                    font-size: 16px;
                    line-height: 1.75;
                    color: var(--dm-muted);
                    margin: 0 0 16px;
                }

                /* ── Callout ────────────────────────────────── */
                .dm-callout {
                    display: flex;
                    gap: 14px;
                    align-items: flex-start;
                    background: var(--dm-lavender);
                    border-left: 3px solid var(--dm-violet-mid);
                    border-radius: 0 10px 10px 0;
                    padding: 18px 20px;
                    margin-top: 28px;
                }

                .dm-callout-icon {
                    font-size: 22px;
                    line-height: 1;
                    flex-shrink: 0;
                }

                .dm-callout-text {
                    font-size: 14.5px;
                    line-height: 1.65;
                    color: var(--dm-text);
                    margin: 0;
                }

                .dm-callout-text strong {
                    color: var(--dm-violet);
                }

                /* ── Steps ──────────────────────────────────── */
                .dm-steps {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    margin-top: 32px;
                }

                .dm-step {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 18px 0;
                    border-bottom: 1px solid var(--dm-border);
                }

                .dm-step:last-child {
                    border-bottom: none;
                }

                .dm-step-num {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: var(--dm-violet);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    font-weight: 600;
                    flex-shrink: 0;
                }

                .dm-step-body {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    padding-top: 6px;
                }

                .dm-step-body strong {
                    font-size: 15px;
                    font-weight: 500;
                    color: var(--dm-text);
                }

                .dm-step-body span {
                    font-size: 13.5px;
                    color: var(--dm-muted);
                    line-height: 1.5;
                }

                /* ── Images ─────────────────────────────────── */
                .dm-image {
                    border-radius: 16px;
                    background-size: cover;
                    background-position: center;
                    height: 340px;
                }

                .dm-images-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .dm-image-sm {
                    height: 156px;
                }

                /* ── Divider ─────────────────────────────────── */
                .dm-divider {
                    height: 1px;
                    background: var(--dm-border);
                    max-width: 1160px;
                    margin: 0 auto;
                }

                /* ── Responsive ──────────────────────────────── */
                @media (max-width: 900px) {
                    .dm-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .dm-grid-reverse {
                        direction: ltr;
                    }

                    .dm-image {
                        height: 260px;
                    }

                    .dm-image-sm {
                        height: 140px;
                    }

                    .dm-images-stack {
                        flex-direction: row;
                    }
                }

                @media (max-width: 600px) {
                    .dm-hero {
                        min-height: 340px;
                        padding-bottom: 48px;
                    }

                    .dm-hero-inner {
                        padding: 0 24px;
                    }

                    .dm-section {
                        padding: 48px 0;
                    }

                    .dm-images-stack {
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

// export default function DossierMedical() {
//     return (
//         <div className="historique-page">
//             <Navbar />

//             <section
//                 className="page-hero"
//                 style={{ backgroundImage: "url('/assets/feerima/dos_med.png')" }}
//             >
//                 <div className="page-hero-content">
//                     <h1>Accès à votre dossier médical</h1>
//                     <p>Un droit garanti par la loi, un engagement de transparence</p>
//                 </div>
//             </section>

//             <main className="historique-main">
//                 <section className="hist-section section-1">
//                     <div className="hist-content">
//                         <h2>VOTRE DROIT D'ACCÈS AU DOSSIER</h2>
//                         <p>
//                             Conformément à la loi du 4 mars 2002 relative aux droits des malades,
//                             tout patient a le droit d'accéder à l'ensemble des informations
//                             contenues dans son dossier médical. Ce droit peut être exercé
//                             directement ou par l'intermédiaire d'un médecin de votre choix.
//                         </p>
//                         Toute personne a le droit d’accéder à son dossier médical, 
//                         qui regroupe l’ensemble des informations relatives à la prise en charge.  
//                         <p>
//                             Pour les mineurs, les titulaires de l'autorité parentale exercent ce
//                             droit pour leur compte, sauf opposition du mineur lui-même dans certaines
//                             conditions prévues par la loi.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-large"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/acces.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     />
//                 </section>

//                 <section className="hist-section section-2">
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/demande.png')",
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'left',
//                         }}
//                     />
//                     <div className="hist-content center-content">
//                         <h2>COMMENT FAIRE LA DEMANDE ?</h2>
                        
//                         <p>
//                             Cette démarche s’effectue par un courrier adressé au directeur de l’établissement. Vous pourrez ensuite consulter votre dossier sur place, avec ou sans la présence d’un professionnel, et obtenir une copie si vous le souhaitez.
//                         </p>
//                     </div>
//                     <div
//                         className="hist-image-box gray-box-medium"
//                         style={{
//                             backgroundImage: "url('/assets/feerima/demande_acces.png')",
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